import axios from "axios";
import { useEffect, useState } from "react";
import FeaturedRoomsCard from "./FeaturedRoomsCard";

const FeaturedRooms = () => {
    const [featuredRooms , setFeaturedRooms ] = useState([]);
    useEffect(()=>{
        axios('http://localhost:5000/rooms')
        .then(data=>{
            setFeaturedRooms(data.data)
        })
    },[])
    return (
        <div className="bg-[#E0E1DF] pt-20 pb-20">
            <div>
                <h1 className="text-5xl font-bold text-center mb-16">Choose Your Apartment Type</h1>
            </div>
            <div className="justify-center items-center max-w-7xl mx-auto lg:grid md:grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8">
                {
                    featuredRooms.slice(0,4).map(featuredRoom=><FeaturedRoomsCard key={featuredRoom._id}
                        featuredRoom={featuredRoom}
                    ></FeaturedRoomsCard>)
                }
            </div>
        </div>
    );
}; 

export default FeaturedRooms;