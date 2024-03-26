import React, { useState } from "react";
import {  BsClipboardData, BsPersonBadge } from "react-icons/bs";
import { BiHomeAlt, BiMapAlt, BiPhone, BiUser } from "react-icons/bi";
import { Link } from "react-scroll";

const Nav = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);
  const [isHovering4, setIsHovering4] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true); 
   };
   const handleMouseOver1 = () => {
    setIsHovering1(true);
  };   const handleMouseOver2 = () => {
    setIsHovering2(true);
  };   const handleMouseOver3 = () => {
    setIsHovering3(true);
  };   const handleMouseOver4 = () => {
    setIsHovering4(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);  };
    const handleMouseOut1 = () => {
    setIsHovering1(false);
  };  const handleMouseOut2 = () => {
    setIsHovering2(false);
  };  const handleMouseOut3 = () => {
    setIsHovering3(false);
  };  const handleMouseOut4 = () => {
    setIsHovering4(false);
  };
  return (
    
    <nav className="left-0 fixed top-[35%]   overflow-hidden z-50">
  <div className="container mx-auto">
    <div className="left-0 bg-black/20 h-[300px] w-15 backdrop-blur-2xl rounded-3xl  mx-auto  flex-col justify-between items-center text-2xl text-white/50">
      <Link
        to="home"
        activeClass="active"
        smooth={true}
        spy={true}
        offset={-200}
        className="hover:mt-[-10px] duration-300 cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <BiHomeAlt />
        <br />
        {isHovering && (
          <div>
            <h2 className="text-xs">home</h2>
          </div>
        )}
      </Link>
      <Link
        to="about"
        activeClass="active"
        smooth={true}
        spy={true}
        className="hover:mt-[-10px] cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
        onMouseOver={handleMouseOver1}
        onMouseOut={handleMouseOut1}
      >
        <BiUser />
        <br />
        {isHovering1 && (
          <div>
            <h2 className="text-xs">About</h2>
          </div>
        )}
      </Link>
      <Link
        to="Events"
        activeClass="active"
        smooth={true}
        spy={true}
        className="hover:mt-[-10px] cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
        onMouseOver={handleMouseOver2}
        onMouseOut={handleMouseOut2}
      >
        <BsClipboardData />
        <br />
        {isHovering2 && (
          <div>
            <h2 className="text-xs">Events</h2>
          </div>
        )}
      </Link>
      <Link
        to="map"
        activeClass="active"
        smooth={true}
        spy={true}
        className="hover:mt-[-10px] cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
        onMouseOver={handleMouseOver4}
        onMouseOut={handleMouseOut4}
      >
        <BiMapAlt />
        <br />
        {isHovering4 && (
          <div>
            <h2 className="text-xs">map</h2>
          </div>
        )}
      </Link>
      <Link
        to="Contacts"
        activeClass="active"
        smooth={true}
        spy={true}
        className="hover:mt-[-10px] cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
        onMouseOver={handleMouseOver3}
        onMouseOut={handleMouseOut3}
      >
        <BsPersonBadge />
        <br />
        {isHovering3 && (
          <div>
            <h2 className="text-xs">Contact</h2>
          </div>
        )}
      </Link>
     
    </div>
  </div>
</nav>
  );
};

export default Nav;
