import { app } from "./app.js";
import Razorpay from "razorpay"
const PORT = process.env.PORT || 3000;
import { connectDB } from "./config/database.js";

connectDB();

export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY, 
    key_secret: process.env.RAZORPAY_SECRET
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
