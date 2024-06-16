const multer = require("multer");
const path = require("path");

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./vehicles"); // Directory where vehicle images will be stored
  },
  filename: function (req, file, cb) {
    // Generating a unique filename for the uploaded image
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// upload Vehicle
const uploadVehicle = async (req, res) => {
  try {
    // Check if the user making the request has the role 'rental'
    if (req.user.role !== "rental") {
      return res
        .status(403)
        .send("Forbidden: Only users with role 'rental' can upload vehicles.");
    }

    const presentBrand = await Brand.findById(req.body.brand);

    // Check if an image is included in the request
    if (!req.file) {
      return res.status(400).send("Bad Request: Image file is required.");
    }

    const imageUrl = req.file.path; // Path to the uploaded image

    const manualOrAuto = req.body["manual/auto"];

    const NewVehicle = await Vehicle.create({
      brand: req.body.brand,
      model: req.body.model,
      seats: req.body.seats,
      // Set the property dynamically based on the value of manual/auto
      [manualOrAuto]: true,
      rentperday: req.body.rentperday,
      carlocation: req.body.carlocation,
      plateNumber: req.body.plateNumber,
      image: imageUrl, // Store the image URL or path in the database
    });

    res.json(NewVehicle);
  } catch (error) {
    console.error("Error during uploading vehicle", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// vehicle Not Available
const vehicleNotAvailable = async (req, res) => {
  try {
    const vehicleId = req.params.id;

    const item = await Vehicle.findByIdAndUpdate(
      vehicleId,
      { $set: { status: "Not Available" } },
      { new: true }
    );

    if (item) {
      res.json(item);
    } else {
      res.status(404).send("This vehicle is not present.");
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error.");
  }
};

module.exports = { uploadVehicle, vehicleNotAvailable };
