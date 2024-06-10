import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    cnic: {
      type: Number,
      required: true,
    },
    from: {
        type: Date,
        required: true,
      },
      to: {
        type: Date,
        required: true,
      },
      vehicleId: {
        type: String,
        required: true,
      },
      customerId: {
        type: String,
        required: true,
      }

  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
