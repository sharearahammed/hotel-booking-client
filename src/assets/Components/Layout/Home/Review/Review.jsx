import axios from "axios";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './reviewstyles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
    const[reviews,setReviews]=useState([]);
    useEffect(()=>{
        axios('https://hotel-booking-server-psi.vercel.app/reviews')
        .then(res=>{
            // console.log(res.data)
            setReviews(res.data)
        })
    },[])
    return (
        <div className="pb-10 pt-20">
            <h1 data-aos="zoom-in-up"
        data-aos-duration="2000" className="mb-10 text-center text-5xl font-bold">Customer Review </h1>
            <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className=""
      >

                <div className="bg-red-200">
                {
                    reviews.map((review ,idx)=><SwiperSlide className="" key={idx}><ReviewCard key={review._id}
                        review={review}
                    ></ReviewCard></SwiperSlide>)
                }
                </div>


      </Swiper>
        </div>
    );
};

export default Review;

