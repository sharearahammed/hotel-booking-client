import axios from "axios";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

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

      <div className="flex items-center justify-center">

      <div className="bg-[#F4F2F1] carousel carousel-center max-w-md p-4 space-x-4 rounded-box">
        <div className="w-[1750px] p-5 gap-5 carousel-item">
        {reviews.map((review) => (
              <ReviewCard key={review._id} review={review}></ReviewCard>
            ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Review;
