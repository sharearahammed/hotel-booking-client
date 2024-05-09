import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Rooms from "../assets/Components/Layout/Rooms/Rooms";
import Home from "../assets/Components/Layout/Home/Home";
import MyBookings from "../assets/Components/Layout/MyBookings/MyBookings";
import About from "../assets/Components/Layout/About/About";
import Contact from "../assets/Components/Layout/Contact/Contact";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
          element: <MyBookings></MyBookings>
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/contact",
          element: <Contact></Contact>
        },



      ]
    },
  ]);
  
  export default router;