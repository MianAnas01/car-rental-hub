const mongoose = require( "mongoose");

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
        type: mongoose.Types.schema.objectId,
        ref: "Vehicle",
        required: true,
      },
      customerId: {
        type: mongoose.Types.Schema.objectId,
        ref: "User",
        required: true,
      },
    status:{
      type: String,
      enum: ["decline", "accept", "request"],
      default: "request",

    }

  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
