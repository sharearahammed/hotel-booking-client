// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="h-[700px] rounded-none">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        navigation={true}
        modules={[ Autoplay, Pagination, Navigation]}
        className="rounded-lg mySwiper"
      >
        <SwiperSlide
          className="hero min-h-screen rounded-none bg-no-repeat bg-cover"
          style={{
            backgroundImage:
              'url("https://i.ibb.co/qRqHtbT/shai-pal-56-WKMCORs-0-unsplash.jpg")',
          }}
        >
          <div className="lg:w-[900px] lg:p-20 absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="space-y-7 pl-8 flex flex-col text-left">
            <h1 className="animate__animated animate__fadeInDown mb-4 text-xl md:text-2xl lg:text-4xl text-white font-bold">
              Welcome to Romazing - Where Romance <br /> Meets Amazing
              Adventures
            </h1>
            <p className="mb-3 text-white text-[12px] lg:text-[18px] lg:p-0">
              Indulge in breathtaking vistas, immerse yourself in vibrant
              cultures, and create timeless memories with Romazing. Explore our
              curated collection of dream destinations and let us ignite your
              passion for travel. Start your journey today!
            </p>
            <div>
              <button className="btn rounded-none border-gray-500 text-white bg-gray-500">
                VIEW ALL SPOTS
              </button>
            </div>
          </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="hero min-h-screen rounded-none bg-no-repeat bg-cover"
          style={{
            backgroundImage:
              'url("https://i.ibb.co/brXb50d/sasha-kaunas-67-s-Oi7m-VIk-unsplash.jpg")',
          }}
        >
          <div className="lg:w-[900px] lg:p-20 absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="space-y-7 pl-8 flex flex-col text-left">
            <h1 className="animate__animated animate__fadeInDown mb-4 text-xl md:text-2xl lg:text-4xl text-white font-bold">
              Welcome to Romazing - Where Romance <br /> Meets Amazing
              Adventures
            </h1>
            <p className="mb-3 text-white text-[12px] lg:text-[18px] lg:p-0">
              Indulge in breathtaking vistas, immerse yourself in vibrant
              cultures, and create timeless memories with Romazing. Explore our
              curated collection of dream destinations and let us ignite your
              passion for travel. Start your journey today!
            </p>
            <div>
              <button className="btn rounded-none border-gray-500 text-white bg-gray-500">
                VIEW ALL SPOTS
              </button>
            </div>
          </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="hero min-h-screen rounded-none bg-no-repeat bg-cover"
          style={{
            backgroundImage:
              'url("https://i.ibb.co/GpDd1Dn/mky-moody-AUF6-Gl4wwz-A-unsplash.jpg")',
          }}
        >
          <div className="lg:w-[900px] lg:p-20 absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="space-y-7 pl-8 flex flex-col text-left">
            <h1 className="animate__animated animate__fadeInDown mb-4 text-xl md:text-2xl lg:text-4xl text-white font-bold">
              Welcome to Romazing - Where Romance <br /> Meets Amazing
              Adventures
            </h1>
            <p className="mb-3 text-white text-[12px] lg:text-[18px] lg:p-0">
              Indulge in breathtaking vistas, immerse yourself in vibrant
              cultures, and create timeless memories with Romazing. Explore our
              curated collection of dream destinations and let us ignite your
              passion for travel. Start your journey today!
            </p>
            <div>
              <button className="btn rounded-none border-gray-500 text-white bg-gray-500">
                VIEW ALL SPOTS
              </button>
            </div>
          </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="hero min-h-screen rounded-none bg-no-repeat bg-cover"
          style={{
            backgroundImage:
              'url("https://i.ibb.co/CHwGD4q/roberto-nickson-emqn-SQw-QQDo-unsplash.jpg")',
          }}
        >
          <div className="lg:w-[900px] lg:p-20 absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="space-y-7 pl-8 flex flex-col text-left">
            <h1 className="animate__animated animate__fadeInDown mb-4 text-xl md:text-2xl lg:text-4xl text-white font-bold">
              Welcome to Romazing - Where Romance <br /> Meets Amazing
              Adventures
            </h1>
            <p className="mb-3 text-white text-[12px] lg:text-[18px] lg:p-0">
              Indulge in breathtaking vistas, immerse yourself in vibrant
              cultures, and create timeless memories with Romazing. Explore our
              curated collection of dream destinations and let us ignite your
              passion for travel. Start your journey today!
            </p>
            <div>
              <button className="btn rounded-none border-gray-500 text-white bg-gray-500">
                VIEW ALL SPOTS
              </button>
            </div>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
