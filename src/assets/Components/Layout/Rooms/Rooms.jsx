import axios from "axios";
import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import { Helmet } from "react-helmet";

const Rooms = () => {
    const[rooms,setRooms]=useState([]);
    useEffect(()=>{
        axios('http://localhost:5000/rooms')
        .then(data=>{
            setRooms(data.data)
        })
    },[])
    return (
        <div>
            <Helmet>
        <title>Sunshine City Rooms</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
            <h1>Rooms: {rooms.length}</h1>
            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
                {
                  rooms.map(room=><RoomCard key={room._id}
                    room={room}
                  ></RoomCard>)  
                }
            </div>
            </div>
        </div>
    );
};

export default Rooms;