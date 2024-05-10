import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
import { Helmet } from "react-helmet";

const FeaturRoomCard = () => {
    const{room_type} = useParams();
    console.log(room_type)
    const [cards,setCards] = useState([]);
    useEffect(()=>{
        axios(`http://localhost:5000/rooms/${room_type}`,{withCredentials:true})
        .then(data=>{
            setCards(data.data)
        })
    },[room_type])
    console.log(cards)
    return (
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
            <Helmet> 
        <title>Sunshine City Featured Rooms</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
            <div className=" grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
            {
                cards.map(card=><Card key={card._id} card={card}></Card>)
            }
        </div>
        </div>
    );
};

export default FeaturRoomCard;