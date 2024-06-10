import mongoose from "mongoose";

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
    manual,
    auto: {
      type: String,
      required: true,
    },
    renPerDay: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      // ????????????????????????
    },
  },
  { timestamps: true }
);

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

export default Vehicle;
