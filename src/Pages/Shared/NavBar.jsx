import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import BrandImg from "../../assets/images/brand-img.jpg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  const [open, setOpen] = useState(true);

  return (
    <nav className="bg-[#1D2A35] px-4 py-4 md:px-14 w-full flex justify-between items-center">
      <div>
        <Link to="/">
          <img className="w-6 md:w-10" src={BrandImg} alt="" />
          <h2 className="text-blue-600 text-xl md:text-2xl font-semibold pl-2">
            Sohoz Bazar
          </h2>
        </Link>
      </div>
      <div
        className={`flex flex-col items-center md:flex-row gap-6 md:mt-0 md:gap-12 md:top-0 md:bg-transparent absolute md:sticky top-0 w-2/4 md:w-auto duration-500 ${
          open ? "left-0 top-20 bg-black" : "left-[-240px] top-20"
        }`}
      >
        <Link className="hover:text-yellow-600" to="/home">
          Home
        </Link>
        <Link className="hover:text-yellow-600">All Products</Link>
        <Link className="hover:text-yellow-600">Profile</Link>
        <Link className="hover:text-yellow-600">Register</Link>
        <Link className="hover:text-yellow-600">Login</Link>
      </div>
      <div className="h-8 w-8 block md:hidden text-blue-800" onClick={() => setOpen(!open)}>
        {open ? <XMarkIcon /> : <Bars3Icon />}
      </div>
    </nav>
  );
};

export default NavBar;
