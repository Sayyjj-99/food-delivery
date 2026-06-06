import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Footer from './Components/Footer/Footer'
import { useState } from 'react'
import LoginPopUp from './Components/LoginPopUp/LoginPopUp'

const App = () => {

   const [showLogin , setShowLogin] = useState( false ) ;
  return (
    <>
    {showLogin ?  <LoginPopUp setShowLogin={setShowLogin} /> : <></> }
      <div className="w-4/5 mx-auto">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/Order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>

  )
}

export default App
