import Navbar from "../components/Navbar"
import Background from "../assets/Background.png";

export default function Home() {

    return (
        <>
        <div className="bg-[#FEBC9A] h-lvh	">
            <div className="absolute left-[35%]	">
         <img src={Background} alt="bg-icon image" />
         </div>
            <Navbar />
        </div>
        </>
    )
}