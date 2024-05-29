import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import Location from "./Banner/Map/Location";
import FeaturedRooms from "./FeaturedRooms/FeaturedRooms";
import NewsletterSignup from "./NewsletterSignup/NewsletterSignup";
import Review from "./Review/Review";
import { useEffect } from "react";
import SpecialOffersModal from "./SpecialOffersModal/SpecialOffersModal";
import LuxuryOffer from "./LuxuryOffer/LuxuryOffer";

const Home = () => {
  useEffect(() => {
    document.getElementById('special_offers_modal').showModal(); // Open the modal when Home component mounts
  }, []);
  return (
    <div className="">
      <Helmet>
        <title>Sunshine City Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Banner></Banner>
      <FeaturedRooms></FeaturedRooms>
      <LuxuryOffer></LuxuryOffer>
      <Review></Review>
      <Location></Location>
      <NewsletterSignup></NewsletterSignup>
      <SpecialOffersModal></SpecialOffersModal>
    </div>
  );
};

export default Home;
