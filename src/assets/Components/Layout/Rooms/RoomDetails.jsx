import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FaRegHandPointRight, FaUser } from "react-icons/fa";
import { PiCurrencyDollarFill } from "react-icons/pi";
import { SlSizeFullscreen } from "react-icons/sl";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Authconfiguration/Authconfiguration";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import BookingModal from "./BookingModal";

const RoomDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const { user } = useContext(AuthContext);
  // console.log("--------------------------------------", user.email);
  const [startDate, setStartDate] = useState(new Date());
  const { id } = useParams();
  // console.log(id);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios(`https://hotel-booking-server-psi.vercel.app/room/${id}`, {
      withCredentials: true,
    }).then((res) => {
      setDatas(res.data);
    });
  }, [id]);
  // console.log(datas);

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios(`https://hotel-booking-server-psi.vercel.app/review/${id}`).then(
      (data) => {
        setReviews(data.data);
      }
    );
  }, [id]);
  // console.log("---------------------------------->>>>", reviews);
  const availability = "not available";
  const addBooking = {
    room_id: datas._id,
    name: user.displayName,
    email: user.email,
    date: startDate,
    room_type: datas.room_type,
    room_description: datas.room_description,
    price_per_night: datas.price_per_night,
    maxPrice: datas.maxPrice,
    minPrice: datas.minPrice,
    availability,
    room_images: datas.room_images,
    special_offers: datas.special_offers,
    room_size: datas.room_size,
  };
  console.log(addBooking);

  return (
    <div className="bg-[#F4F2F1] pt-7 md:mt-0 lg:mt-0 md:p-12">
      <h1 className="mb-12 lg:text-4xl text-2xl text-center font-bold">
        Room Details
      </h1>
      <div className="flex flex-col justify-center items-center">
        <Carousel>
          <div>
            {datas && datas.room_images && datas.room_images[0] && (
              <img src={datas.room_images[0]} className="w-full" />
            )}
          </div>
          <div>
            {datas && datas.room_images && datas.room_images[1] && (
              <img src={datas.room_images[1]} className="w-full" />
            )}
          </div>
        </Carousel>
      </div>
      <div className="lg:p-10 md:pr-20 p-5">
        <h1 className="mb-8 font-extrabold text-2xl lg:text-4xl">
          {datas?.room_type}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8">
          <aside className="lg:pr-20 md:pr-10 col-span-2">
            <div className="flex flex-col lg:flex-row lg:items-center gap-5">
              <div className="text-xl flex items-center gap-2">
                <p className="text-2xl">
                  <SlSizeFullscreen />
                </p>
                <p>{datas.room_size}</p>
              </div>
              <div className="text-xl flex items-center gap-2">
                <p className="text-4xl">
                  <PiCurrencyDollarFill />
                </p>
                <p>
                  {datas.minPrice} - {datas.maxPrice}
                </p>
              </div>
              <div className="text-xl flex items-center gap-2">
                <p className="text-3xl">
                  <FaRegHandPointRight />
                </p>
                <p className="text-blue-600">{datas.availability}</p>
              </div>
            </div>
            <div className="mt-10 text-[23px]">
              <p className="mb-2">
                <span className="font-bold">Price per Night:</span> $
                {datas.price_per_night}
              </p>
              <p>
                <span className="font-bold">Special Offer:</span>{" "}
                {datas.special_offers}
              </p>
            </div>

            <div className="mt-5 bg-[#F4F2F1]">
              <span className="text-[23px] font-bold">Reviews:</span>
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                <div className="bg-[#F4F2F1] lg:grid lg:grid-cols-2 gap-2 ">
                  {reviews.length >= 1 ? (
                    reviews.map((review, idx) => (
                      <SwiperSlide key={idx}>
                        <blockquote className="bg-[#F4F2F1] inline-block w-full p-6 sm:p-10 lg:p-14">
                          <div className=" rounded-lg bg-white p-4 w-full">
                            <div className="flex flex-col sm:flex-row items-center text-red-300 text-5xl">
                              <div className="mb-3">
                                <FaUser />
                              </div>
                            </div>
                            <div className="text-left text-sm text-black">
                              <p className="font-bold text-xl">
                                {user.displayName}
                              </p>
                              <p className="font-light">
                                Date: {review.timestamp}
                              </p>
                            </div>
                            <p className="mt-4 text-sm text-[#212529] text-justify">
                              {review.comment}
                            </p>
                            <div className="flex justify-start text-[#212529] ">
                              <p className="">
                                <span className="font-bold text-xl">
                                  Rating:
                                </span>{" "}
                                {review.rating}
                              </p>
                            </div>
                          </div>
                        </blockquote>
                      </SwiperSlide>
                    ))
                  ) : (
                    <p className="text-[18px]">
                      No reviews available for this room yet.
                    </p>
                  )}
                </div>
              </Swiper>
            </div>

            <div className="mt-10">
              <h1 className="text-2xl font-bold text-justify">Description:</h1>
              <p className="text-[23px]">{datas.room_description}</p>
            </div>
          </aside>
          <div className="">
            <div>
              <label className="block font-semibold" htmlFor="name">
                Name
              </label>
              <input
                className="border-2 border-[#DBCDB9] rounded-none text-2xl p-1 block mt-1"
                id="name"
                type="text"
                name="name"
                defaultValue={user.displayName}
                required="required"
                autoFocus="autofocus"
              />
            </div>

            <div className="mt-4">
              <label className="block font-semibold" htmlFor="email">
                Email
              </label>
              <input
                className="border-2 border-[#DBCDB9] rounded-none text-2xl p-1 block mt-1"
                id="email"
                type="email"
                name="email"
                defaultValue={user.email}
                required="required"
              />
            </div>

            <div className="mt-4">
              <label className="block font-semibold" htmlFor="">
                Your Booking Date
              </label>
              <DatePicker
                className="border-2 border-[#DBCDB9] rounded-none text-2xl p-1 block mt-1"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>

            <div className=" flex items-center justify-between mt-8">
              <button
                disabled={datas.availability === "not available"}
                type="submit"
                onClick={() => setIsOpen(true)}
                className={`${
                  datas.availability === "not available"
                    ? "cursor-not-allowed"
                    : "cursor-pointer"
                } flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-none text-white bg-[#5F0F40] hover:bg-black md:py-4 md:text-lg md:px-10`}
              >
                {datas?.availability === "not available"
                  ? "Booked"
                  : "Book Now"}
              </button>
            </div>
            {/* Modal */}
            <BookingModal
              isOpen={isOpen}
              closeModal={closeModal}
              datas={datas}
              addBooking={addBooking}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
