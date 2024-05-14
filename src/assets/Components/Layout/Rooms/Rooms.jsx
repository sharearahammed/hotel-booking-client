import axios from "axios";
import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import { Helmet } from "react-helmet";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    axios(
      `https://hotel-booking-server-psi.vercel.app/rooms?minPrice=${minPrice}&maxPrice=${maxPrice}`
    ).then((data) => {
      setRooms(data.data);
    });
  }, [maxPrice, minPrice]);

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  return (
    <div className="bg-white">
      <Helmet>
        <title>Sunshine City Rooms: </title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Tabs>
        <div className="container px-6 py-10 mx-auto">
          <div className="text-2xl font-bold flex items-center justify-center">
            <TabList>
              <div className="flex text-[12px] lg:text-[25px]">
                <Tab>All Rooms</Tab>
                <Tab>Available Rooms</Tab>
              </div>
            </TabList>
          </div>

          <TabPanel>

            <div className="mt-5 flex flex-col items-center justify-center">
              <h1 className="mb-3 text-xl underline font-bold">Room Filtering System</h1>
              <div className="mb-2 mt-2">
                <label>Minimum Price:</label> 
                <input className="ml-5 border p-1"
                  type="text"
                  value={minPrice}
                  placeholder="Enter min price"
                  onChange={handleMinPriceChange}
                />
              </div>
              <div className="mb-2 mt-2">
                <label>Maximum Price:</label>
                <input 
                className="ml-5 border p-1"
                  type="text"
                  value={maxPrice}
                  placeholder="Enter max price"
                  onChange={handleMaxPriceChange}
                />
              </div>
            </div>

            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
              <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
                {rooms?.map((room) => (
                  <RoomCard key={room._id} room={room}></RoomCard>
                ))}
              </div>
            </div>
          </TabPanel>
          <TabPanel>
          <div className="mt-5 flex flex-col items-center justify-center">
              <h1 className="mb-3 text-xl underline font-bold">Room Filtering System</h1>
              <div className="mb-2 mt-2">
                <label>Minimum Price:</label> 
                <input className="ml-5 border p-1"
                  type="text"
                  value={minPrice}
                  placeholder="Enter min price"
                  onChange={handleMinPriceChange}
                />
              </div>
              <div className="mb-2 mt-2">
                <label>Maximum Price:</label>
                <input 
                className="ml-5 border p-1"
                  type="text"
                  value={maxPrice}
                  placeholder="Enter max price"
                  onChange={handleMaxPriceChange}
                />
              </div>
            </div>
            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
              <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
                {rooms
                  .filter((a) => a.availability === "available")
                  ?.map((room) => (
                    <RoomCard key={room._id} room={room}></RoomCard>
                  ))}
              </div>
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default Rooms;
