import { Outlet } from "react-router-dom";
import Footer from "../assets/Components/Shared/Footer/Footer";
import NavBar from "../assets/Components/Shared/NavBar/NavBar";


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;