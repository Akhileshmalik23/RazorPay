import React from 'react'
import MainPage from './components/MainPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaymentSucess from './components/PaymentSucess';

export default function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path='/paymentsuccess' element={<PaymentSucess /> } />
      </Routes>
    </Router>
  )
}
