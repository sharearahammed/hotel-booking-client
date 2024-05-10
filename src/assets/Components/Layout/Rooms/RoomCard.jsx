/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const RoomCard = ({room}) => {
    const{room_type,room_images,availability,price_per_night} = room;
    return (
        <Link to={'/roomdetails'}>
        <div className="relative w-full flex items-end justify-start text-left bg-cover bg-center"
        style={{ height: '260px',backgroundImage: `url(${room_images})` }}>
        <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900">
        </div>
        <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
            <div
                className="text-xs bg-white px-5 py-2 uppercase transition ease-in-out duration-500">{availability}</div>
        </div>
        <main className="p-5 z-10">
            <div
                className="flex md:gap-0 gap-20 justify-between items-center text-md tracking-tight font-medium leading-7 font-regular text-white">
                    <div>{room_type}</div>
                    <div>$ {price_per_night}</div>
            </div>
        </main>
    </div>
        </Link>
    );
};

export default RoomCard;