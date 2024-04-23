import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../App.css";
import logo from "../assets/logo.png";
import Button from "./Button";
import Background from "../assets/Background.png";
import Background1 from "../assets/Background (1).png";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        <div className="flex justify-evenly items-center">
          <div className="absolute left-[35%]	">
            <img src={Background} alt="bg-icon image" />
          </div>
          <div>
            <img src={logo} alt="logo image" />
          </div>
          {/* Hamburger Menu */}
          <button onClick={toggleNavbar} className="sm:hidden block z-10">
            <FaBars />
          </button>
          <div className="md:flex justify-between mt-5 hidden">
            <ul className="flex space-x-4 font-bold text-black z-10 cursor-pointer ">
              <li onClick={() => navigate("/")}> Home </li>
              <li onClick={() => navigate("/about")}> About </li>
              <li onClick={() => navigate("/services")}> Services </li>
              <li onClick={() => navigate("/portfolio")}> Portfolio </li>
            </ul>
          </div>
          <div className="mt-3">
            <Button name={"Let's talk"} />
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden h-[100vh] flex justify-center items-center">
            <ul className="flex flex-col gap-5 justify-center items-center font-bold text-black z-50 cursor-pointer ">
              <li onClick={() => navigate("/")}> Home </li>
              <li onClick={() => navigate("/about")}> About </li>
              <li onClick={() => navigate("/services")}> Services </li>
              <li onClick={() => navigate("/portfolio")}> Portfolio </li>
            </ul>
          </div>
        )}
      </div>
      <div className=" absolute md:-z-50 bottom-0 right-20">
        <img src={Background1} alt="bg-icon image" />
      </div>

      
     </>
  );
}

