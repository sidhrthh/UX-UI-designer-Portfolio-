import { useNavigate } from "react-router-dom";
import "../App.css";
import logo from "../assets/logo.png";
import Button from "./Button";
import Background from "../assets/Background.png";
import Background1 from "../assets/Background (1).png";

export default function Navbar() {
  const navigate = useNavigate();

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

        <div className="flex justify-between mt-5">
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
     
    </div>
     <div className=" absolute bottom-0 right-20">
     <img src={Background1} alt="bg-icon image" />
     </div>
     </>
  );
}

