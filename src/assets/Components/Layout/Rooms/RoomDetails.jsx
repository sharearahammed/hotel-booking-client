import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FaRegHandPointRight } from "react-icons/fa";
import { PiCurrencyDollarFill } from "react-icons/pi";
import { SlSizeFullscreen } from "react-icons/sl";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../Authconfiguration/Authconfiguration";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const RoomDetails = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log("--------------------------------------", user.email);
  const [startDate, setStartDate] = useState(new Date());
  const { id } = useParams();
  console.log(id);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios(`https://hotel-booking-server-psi.vercel.app/room/${id}`,{withCredentials:true}).then((res) => {
      setDatas(res.data);
    });
  }, [id]);
  console.log(datas);

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios(`https://hotel-booking-server-psi.vercel.app/review/${id}`).then(
      (data) => {
        setReviews(data.data);
      }
    );
  }, [id]);
  console.log("---------------------------------->>>>", reviews);

  const handleBookingRoom = (e) => {
    e.preventDefault();
    const form = e.target;
    const room_id = datas._id;
    const name = form.name.value;
    const email = form.email.value;
    const date = startDate;
    const room_type = datas.room_type;
    const room_description = datas.room_description;
    const price_per_night = datas.price_per_night;
    const maxPrice = datas.maxPrice;
    const minPrice = datas.minPrice;
    const availability = "not available";
    const room_images = datas.room_images;
    const special_offers = datas.special_offers;
    const room_size = datas.room_size;

    const addBooking = {
      room_id,
      name,
      email,
      date,
      room_type,
      room_description,
      price_per_night,
      maxPrice,
      minPrice,
      availability,
      room_images,
      special_offers,
      room_size,
    };

    console.log(addBooking);

    Swal.fire({
      title: `Price: $${minPrice}-$${maxPrice} 
      Date: ${new Date(date).toLocaleDateString()}`,
      text: `${room_description}`,
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: " confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/mybookings");
        // reloadPage();
        axios
          .patch(`https://hotel-booking-server-psi.vercel.app/rooms/${datas._id}`, { availability })
          .then((res) => {
            console.log(res.data);
          });
        axios
          .post("https://hotel-booking-server-psi.vercel.app/bookings", addBooking)
          .then((res) => {
            console.log(res.data);
            if (res.data.insertedId) {
              console.log("post success")
            } else {
              toast.error("Added Failed");
            }
          });
      }
    });
  };

  return (
    <div className="mt-7 md:mt-0 lg:mt-0 md:p-12">
      <h1 className="mb-12 lg:text-4xl text-2xl text-center font-bold">
        Room Details
      </h1>
      <div className="flex flex-col justify-center items-center">
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
          {datas && datas.room_images && datas.room_images[0] && (
            <SwiperSlide>
              <img src={datas.room_images[0]} className="w-full" />
            </SwiperSlide>
          )}
          {datas && datas.room_images && datas.room_images[1] && (
            <SwiperSlide>
              <img src={datas.room_images[1]} className="w-full" />
            </SwiperSlide>
          )}
          {/* Add other SwiperSlides here */}
        </Swiper>
        <Swiper
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {datas && datas.room_images && datas.room_images[0] && (
            <SwiperSlide>
              <img src={datas.room_images[0]} className="w-full" />
            </SwiperSlide>
          )}
          {datas && datas.room_images && datas.room_images[1] && (
            <SwiperSlide>
              <img src={datas.room_images[1]} className="w-full" />
            </SwiperSlide>
          )}
          {/* Add other SwiperSlides here */}
        </Swiper>
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

            <div className="mt-5">
              <span className="text-[23px] font-bold">Reviews:</span>
              <p className="grid grid-cols-2 gap-2">
                {
                  reviews.length >= 1 ? reviews.map(review=><blockquote key={review._id} className="relative w-full bg-white p-5 border border-gray-200 break-inside-avoid-column m-10">
                  <h2 className="text-sm">{review.comment}</h2>
                  <div className="mt-5 flex items-start gap-4">
                    <img src="https://www.svgrepo.com/show/491978/gas-costs.svg" className="w-10 h-10 object-cover object-center" alt="" />
                    <div className="text-xs">
                      <cite className="not-italic"><span className="font-bold">User:</span> {review.username}</cite>
                      <p className="text-gray-700">Creator of <p href="#" target="_blank" className="">Date:{review.timestamp}</p>
                      <p href="#" target="_blank" className="text-red-500">Rating:{review.rating}</p></p>
                    </div>
                  </div>
                </blockquote>) : <p className="text-[18px]">
                No reviews available for this room yet.
                </p>
                }
              </p>
            </div>

            <div className="mt-10">
              <h1 className="text-2xl font-bold">Description:</h1>
              <p className="text-[23px]">{datas.room_description}</p>
            </div>
          </aside>
          <form onSubmit={handleBookingRoom} className="">
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
                className=" flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#000000] hover:bg-[#A48B68] md:py-4 md:text-lg md:px-10"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
