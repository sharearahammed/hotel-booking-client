import axios from "axios";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
// import { ImArrowDown } from "react-icons/im";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import SectionTitle from "../../../Hook/SectionTitle";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios("https://hotel-booking-server-psi.vercel.app/reviews").then((res) => {
      // console.log(res.data)
      setReviews(res.data);
    });
  }, []);
  return (
    <div className="bg-[#F4F2F1] pb-10">
      <div className="mb-5">
      <SectionTitle
      heading="Customer Reviews"
      subHeading="All Review"
      ></SectionTitle>
      </div>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <div className="flex items-center justify-center">
        <div className=" ">
          {reviews.map((review,idx) => <SwiperSlide key={idx}>
          <div
              key={review._id}
              className="flex items-center justify-center h-full lg:w-[500px] "
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
