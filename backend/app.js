import express from "express"
import { config } from "dotenv"
import router from "./routes/router.js";
import cors from "cors";
config({ path: ".env" });


export const app = express()

app.use(cors({
    origin: ["https://razor-pay-puce.vercel.app", "http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', router)

app.get('/api/getkey', (req, res) => {
    res.status(200).json({
        // key: process.env.RAZORPAY_KEY\
        key : process.env.RAZORPAY_KEY
    })
})