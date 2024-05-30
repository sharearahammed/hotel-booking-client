import axios from "axios";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
// import { ImArrowDown } from "react-icons/im";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { FreeMode,Autoplay } from 'swiper/modules';
import SectionTitle from "../../../Hook/SectionTitle";
import { Pagination } from 'swiper/modules';

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios("https://hotel-booking-server-psi.vercel.app/reviews").then((res) => {
      // console.log(res.data)
      setReviews(res.data);
    });
  }, []);
  return (
    <div className="lg:mt-10 pb-10 lg:px-8 bg-gradient-to-r from-black via-[#5F0F40] to-black">
      <div className="mb-5">
      <div className="md:w-4/12 mx-auto text-center py-8">
      <p
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        className="text-[#FB8B24] text-[25px] mb-2"
      >
        ---All Review---
      </p>
      <h3
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        className="text-4xl text-white uppercase border-y-4 py-4"
      >
        Customer Reviews
      </h3>
    </div>
      </div>

      <Swiper
      spaceBetween={30}
      freeMode={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      modules={[FreeMode, Pagination, Autoplay]}
      className="mySwiper"
    >
      <div className="">
        <div className="">
          {reviews.map((review,idx) => <SwiperSlide key={idx}>
          <div
              key={review._id}
              className="lg:w-[500px] p-9 "
            >
              <ReviewCard review={review}></ReviewCard>
            </div>
          </SwiperSlide>
            
          )}
        </div>
      </div>
      </Swiper>
      
    </div>
  );
};

export default Review;
