import axios from "axios";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const Review = () => {
    const[reviews,setReviews]=useState([]);
    useEffect(()=>{
        axios('https://hotel-booking-server-psi.vercel.app/reviews')
        .then(res=>{
            console.log(res.data)
            setReviews(res.data)
        })
    },[])
    return (
        <div className="bg-[#E0E1DF] pb-20 pt-20">
            <h1 className="mb-16 text-center text-5xl font-bold">Customer Review </h1>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >

                {
                    reviews.map((review ,idx)=><SwiperSlide key={idx}><ReviewCard key={review._id}
                        review={review}
                    ></ReviewCard></SwiperSlide>)
                }


      </Swiper>
        </div>
    );
};

export default Review;

