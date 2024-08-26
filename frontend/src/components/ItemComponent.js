import React from 'react';
import { cardData } from './data';
import axios from 'axios'
export default function ItemComponent() {

    const checkoutHandler = async (amount) => {
        const { data: { key } } = await axios.get("https://razorpay-server.vercel.app/api/getkey")

        const { data: { order } } = await axios.post("https://razorpay-server.vercel.app/api/checkout", {
            amount
        })
        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "Ace E-Store ",
            description: "Tutorial of RazorPay",
            image: "https://avatars.githubusercontent.com/u/128721569?s=400&u=09e224af181df700e0f1af9ab888b6355a39e0ff&v=4",
            order_id: order.id,
            callback_url: "https://razorpay-server.vercel.app/api/paymentverification",

            // handler: function (response) {

            //     console.log("Handler resp = ", response);
            //     console.log(response);
            //     axios.post('https://razorpay-server.vercel.app/api/paymentverification', {
            //         razorpay_payment_id: response.razorpay_payment_id,
            //         razorpay_order_id: response.razorpay_order_id,
            //         razorpay_signature: response.razorpay_signature
                 

            //     })
            // },
            prefill: {
                name: "Akhilesh",
                email: "ar@example.com",
                contact: "9999999999"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }

    return (
        <>
            {cardData.map((data) => (
                <div
                    key={data.id}
                    className="bg-white  w-96 shadow-lg rounded-lg overflow-hidden max-w-lg mx-auto transition-transform transform hover:scale-105 hover:shadow-xl"
                >
                    <img
                        src={data.image}
                        alt={data.title}
                        className="w-full h-64 "
                    />
                    <div className="p-5">
                        <h3 className="text-xl font-semibold text-gray-800">{data.title}</h3>
                        <p className="text-gray-500 mt-2">${data.amount} </p>
                        <button
                            onClick={() => checkoutHandler(data.amount)}
                            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white mt-5 px-4 py-2 rounded-lg hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 w-full"
                        >
                            Buy Now
                        </button>

                    </div>
                </div>
            ))}
        </>
    );
}
