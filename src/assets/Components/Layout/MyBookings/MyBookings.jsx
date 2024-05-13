import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../Authconfiguration/Authconfiguration";
import MyBookingTable from "./MyBookingTable";

const MyBookings = () => {
    const {user} = useContext(AuthContext);
    const[bookings,setBookings]=useState([]);
    // useEffect(()=>{
    //     axios(`http://localhost:5000/bookings`,{withCredentials: true})
    //     .then(res=>{
    //         setBookings(res.data)
    //         console.log(res.data)
    //     })
    // },[])

    useEffect(()=>{
        axios(`http://localhost:5000/bookings/${user.email}`,{withCredentials: true})
        .then(res=>{
            setBookings(res.data)
            console.log(res.data)
        })
    },[user.email])


    console.log(bookings)
    return (
        <div>
            <Helmet>
        <title>Sunshine City My Bookings</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      
      <div>
        {
            bookings.map(booking=><MyBookingTable key={booking._id}
                booking={booking}
            ></MyBookingTable>)
        }
      </div>
        </div>
    );
};

export default MyBookings;