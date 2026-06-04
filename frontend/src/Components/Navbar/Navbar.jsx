import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {

  const [menu, setMenu] = useState("menu");
  return (
    <div className="navbar flex justify-between items-center py-5">


      <img src={assets.logo} alt="" className="w-40" />

      <ul className="flex gap-8 list-none text-[18px] text-[#49557e]">
        <li onClick={() => setMenu("home")} className={`cursor-pointer ${menu === "home" ? "active" : " "}`}>Home</li>
        <li onClick={() => setMenu("menu")} className={`cursor-pointer ${menu === "menu" ? "active" : " "}`}>Menu</li>
        <li onClick={() => setMenu("mobile-app")} className={`cursor-pointer ${menu === "mobile-app" ? "active" : " "}`}>mobile-app</li>
        <li onClick={() => setMenu("contact-us")} className={`cursor-pointer ${menu === "contact-us" ? "active" : " "}`}>Contact Us</li>
      </ul>

      <div className="flex items-center gap-8">
        <img src={assets.search_icon} alt="" className="w-5 cursor-pointer" />

        <div className="navbar-search-icon relative">
          <img src={assets.basket_icon} alt="" className="w-5 cursor-pointer" />
          <div className="dot absolute bg-red-500 min-w-2 min-h-2 rounded-md -top-2 -right-2"></div>
        </div>

        <button className="border border-red-500 px-6 py-2 rounded-full bg-transparent text-[16px] text-[#49557e] transition duration-300 hover:bg-[#fff4f2]">
          sign in
        </button>
      </div>

    </div>
  )
}

export default Navbar
