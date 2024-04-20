import logo from "../assets/logo.png";
import Button from "./Button";


export default function Navbar({props}) {

    return (
        <div className="flex justify-evenly items-center">
            <div>
                <img src={logo} alt="logo image" />
            </div>
            <div className="flex justify-between mt-5">
                <ul className="flex space-x-4 font-bold text-black z-10 ">
                    <li> About </li>
                    <li> Services </li>
                    <li> Portfolio </li>
                    <li> Blog </li>
                </ul>
            </div>
            <div className="mt-3">
                <Button name={"Let's talk"} />
            </div>
        </div>
    )
}