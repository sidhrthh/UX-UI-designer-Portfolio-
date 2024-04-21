import Services from "../Pages/Services"

export default function ServicesBox({img , heading , text}){
    return (
        <div className="w-1/5">
            <img src={img} alt="Vector img" />
            <h3 className="mt-4 text-2xl font-semibold">{heading}</h3>
            <p className="mt-4 ">{text}</p>
        </div>
    )
}