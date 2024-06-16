const  mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
  {
    carBrand: {
      type: String,
      required: true,
    },
    carModel: {
      type: String,
      required: true,
    },
    noOfSeats: {
      type: String,
      required: true,
    },
    transmission: {
      type: String,
      enum: ['manual', 'auto'], // Ensure the value is either 'manual' or 'auto'
      required: true,
    },
    rentPerDay: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    rentalId: {
      type: String,
      required: true,
    },
    
  },
  { timestamps: true }
);

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

export default Vehicle;
