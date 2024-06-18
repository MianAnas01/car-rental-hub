const { Vehicle } = require("../models/vehicle.model");
const path = require("path")

// upload Vehicle
const uploadVehicle = async (req, res) => {
  try {
    // Check if the user making the request has the role 'rental'
    // if (req.user.role !== "rental") {
    //   return res
    //     .status(403)
    //     .send("Forbidden: Only users with role 'rental' can upload vehicles.");
    // }

    // const presentBrand = await Brand.findById(req.body.brand);

    // Check if an image is included in the request
    if (!req.file) {
      return res.status(400).send("Bad Request: Image file is required.");
    }
    req.file.path = path.join('uploads', req.file.filename); // Store the file path

    console.log(req.body, req.file);
    const imageUrl = `${process.env.BACKEND_URL}/${req.file.path}`; // Path to the uploaded image

    const NewVehicle = await Vehicle.create({
      carBrand: req.body.carBrand,
      carModel: req.body.carModel,
      noOfSeats: req.body.noOfSeats,
      // Set the property dynamically based on the value of manual/auto
      rentPerDay: req.body.rentPerDay,
      carlocation: req.body.carLocation,
      plateNumber: req.body.plateNumber,
      avatar: imageUrl,
      address: req.body.address,
      rentalId: req.body.rentalId,
      transmission: req.body.transmission,
    });

    res.json(NewVehicle);
  } catch (error) {
    console.error("Error during uploading vehicle", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
// get Vehicle

const GetVehicles = async (req, res) => {
  try {
    let vehicles;
    if (req.body.rentalId) {
      // If rentalId is provided in the request body, filter vehicles by rentalId
      vehicles = await Vehicle.find({ rentalId: req.body.rentalId }).populate('brand', 'name').exec();
    }
    
    const activeVehicles = vehicles.filter((vehicle) => vehicle.active);
    res.send(activeVehicles);
  } catch (error) {
    console.error(error.message);
    // Log the error directly here
    console.error("Error in GetVehicles:", error.message);
    res.status(500).send("Internal Server Error.");
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

module.exports = { uploadVehicle, GetVehicles , vehicleNotAvailable };
