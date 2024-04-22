import Portfolio from "../Pages/Portfolio";

export default function ProtfolioProject({ img, name, text }) {
  return (
      <div className="border w-1/4 justify-between">
        <div>
          <img src={img} alt="" />
        </div>
        <p className="my-2 font-semibold text-xl">{name}</p>
        <div className="flex justify-between">
          <p>{text}</p>
          <p className="mr-3" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </p>
        </div>
      </div>
  );
}
