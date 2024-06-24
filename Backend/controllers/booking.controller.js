const { Vehicle } = require("../models/vehicle.model");
const Booking = require("../models/booking.model");
const { response } = require("express");

const newBooking = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      address,
      contactNo,
      email,
      cnic,
      customerId,
      vehicleId,
      startDate,
      endDate,
    } = req.body;

    const alreadyBooked = await Vehicle.find({
      _id: vehicleId,
      status: "inactive",
    });
    if (alreadyBooked.length > 0) {
      res.status(400).json({ message: "vehicle already booked" });
    }

    const vehicle = await Vehicle.findById(vehicleId);
    if (!vehicle) {
      res.status(404).json({ message: "vehicle not found" });
    }
    const from = new Date(startDate);
    const to = new Date(endDate);
    const numberOfDays = Math.ceil((to - from) / (1000 * 60 * 60 * 24));
    const totalAmount = numberOfDays * vehicle?.rentPerDay;

    // Create a new Booking
    const newBooking = await Booking.create({
      firstName,
      lastName,
      address,
      contact: contactNo,
      email,
      cnic,
      customerId,
      from: startDate,
      to: endDate,
      vehicleId,
      totalRent: totalAmount,
    });

    // Update the vehicle status to 'Not Available'
    await Vehicle.findByIdAndUpdate(
      vehicleId,
      { $set: { status: "inactive" } },
      { new: true }
    );

    // Return the new Booking details with booking ID

    res.status(200).json({ newBooking });
  } catch (error) {
    console.error("Error adding new booking:", error.message);
    res.status(500).send("Internal Server Error.");
  }
};

//   confirm booking
const confirmBooking = async (req, res) => {
  try {
    const bookingId = req.params.id;
    const updatedData = {};
    updatedData.confirmation = true;

    const presentBooking = await Booking.findById(bookingId);
    if (presentBooking) {
      const item = await Booking.findByIdAndUpdate(
        bookingId,
        { $set: updatedData },
        { new: true }
      );

      res.send(item);
    } else {
      res.send("confirmation not done");
    }
  } catch (error) {
    console.error("Error during confirming bookig", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// confirmed bookings
const confirmedBooking = async (req, res) => {
  try {
    const allBookings = await Booking.find()
      .populate("customer", "name")
      .populate("vehicle", "plateNumber")
      .exec();
    const confirmedBooking = allBookings.filter((booking) => {
      return booking.active == true && booking.confirmation == true;
    });
    res.send(confirmedBooking);
  } catch (error) {
    console.error("Error during confirmed booking", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// get data on contract page
const getContractData = async (req, res) => {
  try {
    const { id } = req.params;
    let contract = await Booking.findById(id).populate("vehicleId");
    if (!contract) {
      res.status(404).json({ message: "contract not found" });
    }
    console.log(contract, " contract data");

    // Create a new object with vehicleId and totalRent
    const contractData = {
      vehicleId: {
        ...contract.vehicleId.toObject(),
        totalRent: contract.totalRent,
      },
    };

    res.status(200).json({ contract: contractData.vehicleId });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.log(error, "error in contract");
  }
};

// {* get booking for rental and customer *}

// take customer id in req.body.customerId 
// const bookings = await Booking.find({customerId: customerId}).populate("vehicleId");

// const rentedVehicles = bookings.filter((item) => item.status!="paid")

// const pendingVehicle = bookings.filter((item) => item.status!="accept" || item.status!="pending" )

// if req.body.customerId 

// response.pendingVehicle acceptVehicle 

// call these apis in frontend and map arrays of pending and accept vehicle

module.exports = {
  newBooking,
  confirmBooking,
  confirmedBooking,
  getContractData,
};
