import React from 'react'
import { useSearchParams } from "react-router-dom"

export default function PaymentSuccess() {
  const searchQuery = useSearchParams()[0]
  const referenceNum = searchQuery.get("reference")

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg">
        <h1 className="uppercase text-3xl font-extrabold text-green-600 mb-4">Order Successful</h1>
        <p className="text-lg text-gray-700">Reference No. <span className="font-mono text-blue-500">{referenceNum}</span></p>
      </div>
    </div>
  )
}
