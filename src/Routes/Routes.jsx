import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Rooms from "../assets/Components/Layout/Rooms/Rooms";
import Home from "../assets/Components/Layout/Home/Home";
import MyBookings from "../assets/Components/Layout/MyBookings/MyBookings";
import About from "../assets/Components/Layout/About/About";
import Contact from "../assets/Components/Layout/Contact/Contact";
import Login from "../assets/Components/Layout/Login/Login";
import Register from "../assets/Components/Layout/Register/Register";
import PrivatePortes from "./PrivatePortes";
import RoomDetails from "../assets/Components/Layout/Rooms/RoomDetails";
import FeaturRoomCard from "../assets/Components/Layout/Home/FeaturedRooms/FeaturRoomCard";
import ErrorPage from "../assets/Components/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/rooms",
          element: <Rooms></Rooms>
        },
        {
          path: "/mybookings",
          element: <PrivatePortes><MyBookings></MyBookings></PrivatePortes>
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/contact",
          element: <Contact></Contact>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element:<Register></Register>
        },
        {
          path: '/roomdetails',
          element: <PrivatePortes><RoomDetails></RoomDetails></PrivatePortes>
        },
        {
          path: '/featuredroom/:room_type',
          element: <PrivatePortes><FeaturRoomCard></FeaturRoomCard></PrivatePortes>
        }



      ]
    },
  ]);
  
  export default router;