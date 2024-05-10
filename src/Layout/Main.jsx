import { Outlet } from "react-router-dom";
import Footer from "../assets/Components/Shared/Footer/Footer";
import NavBar from "../assets/Components/Shared/NavBar/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "react-hot-toast";


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div>
            <Outlet></Outlet>
            <ToastContainer />
            <Toaster />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;