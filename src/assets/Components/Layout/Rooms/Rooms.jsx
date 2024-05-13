import axios from "axios";
import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import { Helmet } from "react-helmet";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    axios("http://localhost:5000/rooms")
    .then(
      (data) => {
        setRooms(data.data);
      }
    );
  }, []);
  

  return (
    <div>
      <Helmet>
        <title>Sunshine City Rooms: </title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h1 className="mt-10 text-center text-3xl font-bold text-[18px] lg:text-[30px]">Total Rooms : {rooms.length}</h1>
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
            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
              <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
                {rooms.map((room) => (
                  <RoomCard key={room._id} room={room}></RoomCard>
                ))}
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
              <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
                {rooms
                  .filter((a) => a.availability === "available")
                  .map((room) => (
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
