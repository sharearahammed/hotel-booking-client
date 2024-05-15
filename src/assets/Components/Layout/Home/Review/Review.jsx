import axios from "axios";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { ImArrowDown, ImArrowUp } from "react-icons/im";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios("https://hotel-booking-server-psi.vercel.app/reviews").then((res) => {
      // console.log(res.data)
      setReviews(res.data);
    });
  }, []);
  return (
    <div className="bg-[#F4F2F1] pb-10 pt-10">
      <h1
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        className="mb-10 text-center text-5xl font-bold"
      >
        Customer Reviews
      </h1>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-2xl">Mouse over the review box and scroll to see all reviews </h1>
        <h1 className="text-center text-5xl text-blue-500"><ImArrowDown /> </h1>
      </div>

      <div className="flex items-center justify-center">

      <div className=" h-96 carousel carousel-vertical rounded-box">
        
        {reviews.map((review) => (
          <div key={review._id} className="flex items-center justify-center h-full lg:w-[500px] carousel-item">
              <ReviewCard review={review}></ReviewCard>
              </div>
            ))}
        </div>      
      </div>
    
    </div>
  );
};

export default Review;
