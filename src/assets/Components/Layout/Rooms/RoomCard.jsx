/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const RoomCard = ({room}) => {
    const{_id,room_type,room_images,availability,minPrice,maxPrice} = room;
    return (
        <Link to={`/roomdetails/${_id}`}>
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
                className="flex flex-col justify-between items-center text-md tracking-tight font-medium leading-7 font-regular text-white">
                    <div>{room_type}</div>
                    <div>$ {minPrice} - $ {maxPrice}</div>
            </div>
        </main>
    </div>
        </Link>
    );
};

export default RoomCard;