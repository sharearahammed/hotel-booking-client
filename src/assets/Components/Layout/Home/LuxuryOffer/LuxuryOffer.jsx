import SectionTitle from "../../../Hook/SectionTitle";

const LuxuryOffer = () => {
  return (
    <>
      <SectionTitle
        heading="Unparalleled Luxury and Comfort"
        subHeading="Our Exquisite Hotels and Residences"
      ></SectionTitle>
      <div className="hero lg:mb-20">
        <div className="hero-content flex-col lg:flex-row">
          <div data-aos="zoom-out"
          data-aos-duration="2000" className="relative lg:w-1/2 mt-3">
            <img src="./room1.jpg" className="w-3/4 rounded-none shadow-2xl" />
            <img
              src="./room2.jpg"
              className="w-1/2 absolute right-5 top-1/2 rounded-none border-8 border-white shadow-2xl"
            />
          </div>

          <div className="lg:w-1/2 space-y-5 p-4">
            <h1 data-aos="fade-up-left"
            data-aos-duration="2000" className="text-5xl font-bold">
            Lavish and Comfortable Stays
            </h1>
            <p data-aos="fade-up-left"
            data-aos-duration="2500" className="py-6 text-justify">
            Offering a series of comfortable and lavish hotels and residences, our properties are designed to provide unparalleled luxury and convenience. Each location boasts elegantly appointed rooms, world-class amenities, and personalized service to ensure an exceptional stay for every guest. Whether for business or leisure, our accommodations promise a refined and relaxing experience that caters to your every need.
            </p>
            <button data-aos="fade-up-left"
            data-aos-duration="2800" className="btn text-white rounded-none bg-[#5F0F40]">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LuxuryOffer;
