import ProtfolioProject from "../components/PortfolioPorject";
import Image1 from "../assets/image (1).png";
import Image2 from "../assets/image (2).png";
import Image3 from "../assets/image (3).png";
import Image4 from "../assets/image (4).png";
import Image5 from "../assets/image (5).png";
import Image6 from "../assets/image (6).png";

export default function Portfolio({ img, name, text }) {
  return (
    <div>
      <h1 className="text-5xl font-semibold text-center pt-10 px-[16%]">
        {" "}
        Portfolio
      </h1>
      <p className="mt-7 text-center px-[16%]">
        Explore my design services, from user interface and experience to
        prototyping and testing. Let's craft exceptional digital experiences
        together.
      </p>

      <div className="flex md:flex-row flex-col flex-wrap	gap-10 justify-evenly md:justify-center items-center mt-5	">
        <ProtfolioProject
          img={Image1}
          name={"Educational Platform"}
          text={"Web Design / Usability Testing"}
        />

        <ProtfolioProject
          img={Image2}
          name={"Travel App Design"}
          text={"UX Research / App Design "}
        />

        <ProtfolioProject
          img={Image3}
          name={"Personal Page"}
          text={"Web Design"}
        />

        <ProtfolioProject
          img={Image4}
          name={"Furniture Mobile App"}
          text={"App Design "}
        />

        <ProtfolioProject
          img={Image5}
          name={"Coffee House Landing Page"}
          text={"UX Research / Web Design "}
        />

        <ProtfolioProject
          img={Image5}
          name={"Home Services Page"}
          text={"Web Design / Marketing"}
        />
      </div>
    </div>
  );
}
