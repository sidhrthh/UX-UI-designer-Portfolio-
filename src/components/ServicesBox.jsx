import Services from "../Pages/Services"

export default function ServicesBox({img , heading , text}){
    return (
        <div className="md:w-1/5 flex flex-col items-center">
            <img src={img} alt="Vector img" />
            <h3 className="mt-4 text-2xl font-semibold">{heading}</h3>
            <p className="mt-4 text-center">{text}</p>
        </div>
    )
}