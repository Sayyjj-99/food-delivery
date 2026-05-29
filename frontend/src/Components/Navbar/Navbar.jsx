import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {

  const [menu, setMenu] = useState("menu");
  return (
    <div className="flex justify-between items-center py-5">


      <img src={assets.logo} alt="" className="w-40" />

      <ul className="flex gap-8 list-none text-[18px] text-[#49557e]">
        <li onClick={() => setmenu("home")} className={`cursor-pointer ${menu === "home"? "active": " "}`}>Home</li>
        <li onClick={() => setmenu("menu")} className={`cursor-pointer ${menu === "menu" ? "active" : " "}`}>Menu</li>
        <li onClick={() => setmenu("mobile-app")} className={`cursor-pointer ${menu === "mobile-app" ? "active" : " "}`}>mobile-app</li>
        <li onClick={() => setmenu("contact-us")} className={`cursor-pointer ${menu === "contact-us" ? "active" : " "}`}>Contact Us</li>
      </ul>

      <div className="flex items-center gap-8">
        <img src={assets.search_icon} alt="" className="w-5 cursor-pointer" />

        <img src={assets.basket_icon} alt="" className="w-5 cursor-pointer" />

        <button className="border border-tomato px-6 py-2.5 rounded-full bg-transparent text-[16px] text-[#49557e] transition duration-300 hover:bg-[#fff4f2]">
          sign in
        </button>
      </div>

    </div>
  )
}

export default Navbar
