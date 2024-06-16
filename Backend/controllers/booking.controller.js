const newBooking = async (req, res) => {
    try {
      const { firstName, lastName, address, contact, email, cnic, customerId, startDate, endDate } = req.body;
  
      // Create a new Booking
      const newBooking = await Booking.create({
        firstName,
        lastName,
        address,
        contact,
        email,
        cnic, customerId, startDate, endDate,
      });
  
      // Update the vehicle status to 'Not Available'
      await Vehicle.findByIdAndUpdate(vehicleId, { $set: { status: 'Not Available' } }, { new: true });
  
      // Return the new Booking details
      res.json(newBooking);
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
        res.send("This Booking is not present.");
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
  
  module.exports = { newBooking, confirmBooking, confirmedBooking }