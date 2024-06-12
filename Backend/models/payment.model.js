import Booking from "./booking.model";

const { Mongoose } = require("mongoose")


const paymentSchema = new mongoose.Schema(
    {
     BookingId: {
        type: String,
        required: true,
     },
     PaymantMethod: {
        type: String,
        required: true,
     },
     PaymentAmount: {
        type: String,
        required: true,
     }

    },
    { timestamps: true }
  );
  

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;