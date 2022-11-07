import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import BrandImg from "../assets/images/brand-img.jpg";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const NavBar = () => {
  const [open, setOpen] = useState(true);
  const { user, logOut } = useContext(AuthContext);
  console.log(user?.uid);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        return alert('Successfully logged Out')
      })
      .catch(err => {
        console.log(err);
      })
  }


  return (
    <nav className="bg-[#1D2A35] px-4 py-4 md:px-14 w-full flex justify-between items-center z-50 sticky top-0">
      <div>
        <Link to="/">
          <img className="w-6 md:w-10" src={BrandImg} alt="" />
          <h2 className="text-blue-600 text-xl md:text-2xl font-semibold pl-2">
            Sohoz Bazar
          </h2>
        </Link>
      </div>
      <div
        className={`flex flex-col items-center md:flex-row gap-6 mt-1 py-4 md:py-0 md:mt-0 md:gap-12 md:top-0 md:bg-transparent absolute md:static w-2/4 md:w-auto duration-500 ${
          open ? "left-0 top-20 bg-black" : "left-[-240px] top-20"
        }`}
      >
        <Link className="hover:text-yellow-600" to="/home">
          Home
        </Link>
        <Link className="hover:text-yellow-600 relative">
          <ShoppingCartIcon className="h-6 w-6 text-white" />
          <span className="absolute top-[-15px] right-[-12px] text-xl text-yellow-500 font-semibold">
            10
          </span>
        </Link>
        <Link className="hover:text-yellow-600">
          {user?.displayName ? user.displayName : "Anonymous"}
        </Link>
        {user?.uid ? (
          <button onClick={handleLogOut} className="hover:text-yellow-600">Log Out</button>
        ) : (
          <>
            <Link className="hover:text-yellow-600" to="/register">
              Register
            </Link>
            <Link className="hover:text-yellow-600" to="/login">
              Login
            </Link>
          </>
        )}
      </div>
      <div
        className="h-8 w-8 block md:hidden text-blue-800"
        onClick={() => setOpen(!open)}
      >
        {open ? <XMarkIcon /> : <Bars3Icon />}
      </div>
    </nav>
  );
};

export default NavBar;
