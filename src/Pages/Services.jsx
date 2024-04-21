import ServicesBox from "../components/ServicesBox";
import Vector from "../assets/Vector.png"
import Vector1 from "../assets/Vector (1).png"
import Search from "../assets/search-status.png"
import Task from "../assets/task.png"

export default function Services({img , heading , text}) {
  return (
    <div className="">
      <h1 className="text-5xl font-semibold text-center pt-10 px-[16%]"> Services</h1>
      <p className="mt-10 text-center px-[16%]">
        Explore my design services, from user interface and experience to
        prototyping and testing. Let's craft exceptional digital experiences
        together.
      </p>

      <div className="flex justify-between px-10 mt-10">
       <ServicesBox img={Vector} heading={"Design"} text={"I specialize in web development and design, creating visually appealing, user-friendly digital experiences."} />
       <ServicesBox img={Vector1} heading={"Branding"} text={"I'm a branding expert, crafting unique visual identities that tell your story and resonate with your audience."} />
       <ServicesBox img={Search} heading={"UX Research"} text={"I specialize in user experience research, collaborating on web development, and ensuring user-friendly digital products."} />
       <ServicesBox img={Task} heading={"Usability Testing"} text={"I perform usability testing and optimize designs websites based on real-user feedback for seamless interactions."} />
      </div>
    </div>
  );
}
