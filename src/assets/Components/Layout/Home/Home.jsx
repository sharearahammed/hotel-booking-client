import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import Location from "./Banner/Map/Location";
import FeaturedRooms from "./FeaturedRooms/FeaturedRooms";
import NewsletterSignup from "./NewsletterSignup/NewsletterSignup";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Sunshine City Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Banner></Banner>
      <FeaturedRooms></FeaturedRooms>
      <Location></Location>
      <NewsletterSignup></NewsletterSignup>
    </div>
  );
};

export default Home;
