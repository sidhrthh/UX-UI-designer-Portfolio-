import Image from "../assets/Image.png";
import Button from "./Button";
import WhiteBtn from "./WhiteBtn"

export default function landingPage() {
  return (
    <>
      <div className="flex justify-between mx-[16%] mt-[7%]">
        <div>
          <p className="text-2xl">UX Designer</p>
          <p className="text-5xl font-semibold mt-4"> Hi There, I’m </p>.
            <br />
            <span className="text-[#FC3314] text-5xl font-semibold"> Sarah Jones</span>
          <p className="my-5  ">
            Welcome to my portfolio of captivating digital experiences. Explore
            my work and let's create something extraordinary together.
          </p>
          <div className="flex items-center">
          <Button name={"Hire me"} />
          <WhiteBtn />
          </div>
        </div>
        <div>
          <img className="w-dvw" src={Image} alt="" />
        </div>
      </div>
    </>
  );
}
