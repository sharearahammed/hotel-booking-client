// import axios from "axios";
// import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../Authconfiguration/Authconfiguration";
import MyBookingTable from "./MyBookingTable";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import SectionTitle from "../../Hook/SectionTitle";

const MyBookings = () => {
    const {user} = useContext(AuthContext);
    // const[bookings,setBookings]=useState([]);

    const { data: bookings} = useQuery({
        queryKey: ['bookings'],
        queryFn: async () =>{
          const res = await fetch(`http://localhost:5000/bookings/${user.email}`,{credentials: 'include'});
          return res.json();
        }
      })

    // useEffect(()=>{
    //     axios(`http://localhost:5000/bookings/${user.email}`,{withCredentials: true})
    //     .then(res=>{
    //         setBookings(res.data)
    //         console.log(res.data)
    //     })
    // },[user.email])


    // console.log(bookings)
    return (
        <div className="">
            <Helmet>
        <title>Sunshine City My Bookings</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <SectionTitle
      heading="My Bookings"
      subHeading="Here is my booking rooms"
      ></SectionTitle>
      
      
      <div className="overflow-x-auto w-full">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th className="text-center">Room Type</th>
              <th className="text-center">Email</th>
              <th className="text-center">Cost</th>
              <th className="text-center">Date</th>
              <th className="text-center">Review</th>
              <th className="text-center">Cancel</th>
              <th className="text-center">Edit Date</th>
            </tr>
          </thead>
          <tbody>

            {
            bookings?.map((booking,idx)=><tr key={booking._id}>
              <MyBookingTable
                booking={booking}
                idx={idx}
            ></MyBookingTable>
            </tr>)
        }
          
          </tbody>
          
        </table>
      </div>
        
      </div>

    );
};

export default MyBookings;