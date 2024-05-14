// import axios from "axios";
// import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../Authconfiguration/Authconfiguration";
import MyBookingTable from "./MyBookingTable";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

const MyBookings = () => {
    const {user} = useContext(AuthContext);
    // const[bookings,setBookings]=useState([]);

    const { data: bookings} = useQuery({
        queryKey: ['bookings'],
        queryFn: async () =>{
          const res = await fetch(`https://hotel-booking-server-psi.vercel.app/bookings/${user.email}`,{credentials: 'include'});
          return res.json();
        }
      })

    // useEffect(()=>{
    //     axios(`https://hotel-booking-server-psi.vercel.app/bookings/${user.email}`,{withCredentials: true})
    //     .then(res=>{
    //         setBookings(res.data)
    //         console.log(res.data)
    //     })
    // },[user.email])


    // console.log(bookings)
    return (
        <div className="bg-white">
            <Helmet>
        <title>Sunshine City My Bookings</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      
      <div>
        {
            bookings?.map(booking=><MyBookingTable key={booking._id}
                booking={booking}
            ></MyBookingTable>)
        }
      </div>
        </div>
    );
};

export default MyBookings;