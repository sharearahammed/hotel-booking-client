/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import 'animate.css';

const FeaturedRoomsCard = ({featuredRoom}) => {
    const {_id,room_type,room_images,room_description} = featuredRoom || {};
    return (
        <div className="h-[450px] relative flex flex-col mt-6 text-gray-700 shadow bg-clip-border rounded-none w-full transition-all duration-700 lg:hover:scale-105 lg:hover:border-[#53624E] hover:shadow-2xl">
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="relative lg:h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-none bg-blue-gray-500 shadow-blue-gray-500/40"
      >
        <img className="h-[225px] w-[500px]" src={room_images[0]} alt="" />
      </div>
      <div 
       className="p-6 flex flex-col flex-grow text-bl">
        <h5 data-aos="zoom-in-right"
        data-aos-duration="1000" className="block mb-2 font-sans text-xl antialiased font-bold leading-snug tracking-normal text-black text-center">
          {room_type}
        </h5>
        <p data-aos="zoom-in-right"
        data-aos-duration="1000"
        className="text-justify text-[#212529] font-light"
        >{room_description}</p>
      </div>
      <div className="p-6 pt-0 text-center">
        <Link to={`/roomdetails/${_id}`}>
          <button
            className="animate__animated animate__pulse animate__delay-2s animate__infinite	infinite align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-none bg-[#5F0F40] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 hover:bg-secondary-content hover:text-[#31323C] hover:border hover:border-[#31323C] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button"
          >
            Book Now
          </button>
        </Link>
      </div>
    </div>
    );
};

export default FeaturedRoomsCard;