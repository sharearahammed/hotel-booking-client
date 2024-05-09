import axios from "axios";
import { useEffect, useState } from "react";
import FeaturedRoomsCard from "./FeaturedRoomsCard";

const FeaturedRooms = () => {
    const [featuredRooms , setFeaturedRooms ] = useState([]);
    useEffect(()=>{
        axios('http://localhost:5000/featuredRoom')
        .then(data=>{
            setFeaturedRooms(data.data)
        })
    },[])
    return (
        <div className="mt-20">
            <div>
                <h1 className="text-5xl font-bold text-center mb-16">Choose Your Apartment Type {featuredRooms.length}</h1>
            </div>
            <div className="flex">
                {
                    featuredRooms.map(featuredRoom=><FeaturedRoomsCard key={featuredRoom._id}></FeaturedRoomsCard>)
                }
            </div>
        </div>
    );
}; 

export default FeaturedRooms;