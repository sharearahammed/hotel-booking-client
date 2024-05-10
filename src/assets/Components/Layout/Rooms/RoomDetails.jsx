import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FaRegHandPointRight } from "react-icons/fa";
import { PiCurrencyDollarFill } from "react-icons/pi";
import { SlSizeFullscreen } from "react-icons/sl";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Authconfiguration/Authconfiguration";

const RoomDetails = () => {
    const {user} = useContext(AuthContext)
  const { id } = useParams();
  console.log(id);
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    axios(`http://localhost:5000/room/${id}`).then((res) => {
      setDatas(res.data);
    });
  }, [id]);
  console.log(datas);
  return (
    <div className="mt-7 lg:mt-16 md:p-12">
      <h1 className="mb-12 lg:text-4xl text-2xl text-center font-bold">
        Room Details
      </h1>
      <div className="flex justify-center items-center">
        <img
          className="lg:w-screen lg:h-[650px]"
          src={datas.room_images}
          alt=""
        />
      </div>
      <div className="lg:p-10 md:pr-20 p-5">
        <h1 className="mb-8 font-extrabold text-2xl lg:text-4xl">{datas.room_type}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8">
          <aside className="lg:pr-20 md:pr-10 col-span-2">
            <div className="flex items-center gap-5">
                <div className="text-xl flex items-center gap-2">
                    <p className="text-2xl"><SlSizeFullscreen /></p>
                    <p>{datas.room_size}</p>
                </div>
                <div className="text-xl flex items-center gap-2">
                    <p className="text-4xl"><PiCurrencyDollarFill /></p>
                    <p>{datas.minPrice} - {datas.maxPrice}</p>
                </div>
                <div className="text-xl flex items-center gap-2">
                    <p className="text-3xl"><FaRegHandPointRight /></p>
                    <p className="text-blue-600">{datas.availability}</p>
                </div>
            </div>
            <div className="mt-10 text-[23px]">
                <p className="mb-2">
                <span className="font-bold">Price per Night:</span> ${datas.price_per_night}

                </p>
                <p>
                    <span className="font-bold">Special Offer:</span> {datas.special_offers}
                </p>
            </div>
            <div className="mt-10">
                <h1 className="text-2xl font-bold">Description:</h1>
                <p className="text-[23px]">{datas.room_description}</p>
            </div>
          </aside>
          <form className="">
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

            <div className=" flex items-center justify-between mt-8">
              <button
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
