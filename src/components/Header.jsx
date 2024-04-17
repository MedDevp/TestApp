import React from "react";
import Navbar from "./Navbar";
import logo from "./../assets/logo.svg";
import BlueButton from "./BlueButton";



const Header = () => {
  return (
    <>
      <div className="flex justify-around items-center py-6">
        <img src={logo} alt="logo" />
        <Navbar />
        <BlueButton props="Buy Now" />
        {/* <FontAwesomeIcon icon={faCoffee} /> */}
        
      </div>
    </>
  );
};

export default Header;
