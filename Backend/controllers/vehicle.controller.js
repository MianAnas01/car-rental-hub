const { log } = require("console");
const { Vehicle } = require("../models/vehicle.model");
const path = require("path");

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
    req.file.path = path.join("uploads", req.file.filename); // Store the file path

    console.log(req.body, req.file);
    const imageUrl = `${process.env.BACKEND_URL}/${req.file.path}`; // Path to the uploaded image

    const NewVehicle = await Vehicle.create({
      carBrand: req.body.carBrand,
      carModel: req.body.carModel,
      noOfSeats: req.body.noOfSeats,
      // Set the property dynamically based on the value of manual/auto
      rentPerDay: req.body.rentPerDay,
      carlocation: req.body.carLocation,
      licensePlate: req.body.licensePlate,
      avatar: imageUrl,
      address: req.body.address,
      rentalId: req.body.rentalId,
      transmission: req.body.transmission,
      status: "active",
    });

    res.status(200).json({NewVehicle});
  } catch (error) {
    console.error("Error during uploading vehicle", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
// get Vehicle
const GetVehicles = async (req, res) => {
  try {
    let vehicles;
    const vehicleId = req.body.vehicleId;
    if (vehicleId) {
      // If a vehicle ID is provided in the URL, fetch the specific vehicle
      vehicles = await Vehicle.findById(vehicleId);
      if (!vehicles) {
        return res.status(404).send("Vehicle not found.");
      }
    } else if (req.body.rentalId) {
      // If rentalId is provided in the request body, filter vehicles by rentalId
      vehicles = await Vehicle.find({ rentalId: req.body.rentalId });
      
    } else if (req.body.customerId) {
      vehicles = await Vehicle.find({ customerId: req.body.customerId });
    } else if (req.body.all) {
      vehicles = await Vehicle.find();

    } 

    res.status(200).json({ vehicles });
  } catch (error) {
    console.error("Error in GetVehicles:", error.message);
    res.status(500).send("Internal Server Error.");
  }
};

// check vehicle availability
const checkVehicleAvailability = async (req, res) => {
  try {
    const { vehicleId, startDate, endDate } = req.body;

    // Query to check if the vehicle is already booked between the provided dates
    const isBooked = await Booking.find({
      vehicleId: vehicleId,
      $or: [
        { startDate: { $lte: endDate, $gte: startDate } },
        { endDate: { $lte: endDate, $gte: startDate } },
      ],
    });

    if (isBooked.length > 0) {
      return res
        .status(200)
        .json({
          available: false,
          message: "Vehicle is not available for the selected dates.",
        });
    } else {
      return res
        .status(200)
        .json({
          available: true,
          message: "Vehicle is available for the selected dates.",
        });
    }
  } catch (error) {
    console.error(error.message);
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
      res.status(404).send("This vehicle is not available.");
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error.");
  }
};

// remove vehicle
const removeVehicle = async (req, res) => {
 
  try {
    const remove = await Vehicle.findByIdAndDelete(req.params.id);
    if (!remove) {
      res.status(404).json({message: "vehicle not removed, try with your own id"})
    }
    res.status(200).json({message: "vehicle removed successfully"})
  } catch (error) {
    res.status(500).send("Internal Server Error.");
  }
}


module.exports = {
  uploadVehicle,
  GetVehicles,
  vehicleNotAvailable,
  checkVehicleAvailability,
  removeVehicle,
};
