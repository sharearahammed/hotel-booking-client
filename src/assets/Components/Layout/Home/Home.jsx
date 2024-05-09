import Banner from "./Banner/Banner";
import Location from "./Banner/Map/Location";
import FeaturedRooms from "./FeaturedRooms/FeaturedRooms";
import NewsletterSignup from "./NewsletterSignup/NewsletterSignup";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedRooms></FeaturedRooms>
            <Location></Location>
            <NewsletterSignup></NewsletterSignup>
            
        </div>
    );
};

export default Home;