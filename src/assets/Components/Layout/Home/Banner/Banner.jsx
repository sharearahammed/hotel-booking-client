// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Typewriter from "typewriter-effect";
import "animate.css";

import "./bannerstyles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="rounded-none">
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
        modules={[Autoplay, Pagination, Navigation]}
        className="rounded-none mySwiper"
      >
        <SwiperSlide
          className="hero min-h-screen rounded-none bg-no-repeat bg-cover"
          style={{
            backgroundImage:
              'url("https://i.ibb.co/qRqHtbT/shai-pal-56-WKMCORs-0-unsplash.jpg")',
          }}
        >
          <div className="lg:p-20 absolute flex items-center justify-center h-[400px] bg-black bg-opacity-50">
            <div className="space-y-7 flex flex-col text-center">
              <div className="animate__animated animate__fadeInDown mb-4 text-xl md:text-2xl lg:text-3xl text-white font-bold">
                <div className="flex items-center justify-center gap-2"> 
                <h1>Welcome to Sunshine City </h1>{" "}
                <h1>
                  <Typewriter
                    options={{
                      strings: [
                        '<span class="lg:text-3xl font-extrabold bg-gradient-to-r from-[#FB8B24] to-[#ff4400eb] bg-clip-text text-transparent">Hotel',
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 75,
                      deleteSpeed: 50,
                    }}
                  />
                </h1>{" "}
                </div>
                <h1>
                Where Every Stay Shines Bright!
                </h1>
              </div>
              <p className="mb-3 text-white text-[12px] lg:text-[18px] lg:p-0">
                Experience luxury and comfort at Sunshine City Hotel. Immerse
                yourself in modern elegance and exceptional service during your
                stay
              </p>
              <Link to={"/rooms"}>
                <div>
                  <button className="btn rounded-none border-[#5F0F40] text-white bg-[#5F0F40]">
                    VIEW ALL ROOMS
                  </button>
                </div>
              </Link>
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
          <div className="lg:p-20 absolute flex items-center justify-center h-[400px] bg-black bg-opacity-50">
            <div className="space-y-7 flex flex-col text-center">
            <div className="animate__animated animate__fadeInDown mb-4 text-xl md:text-2xl lg:text-3xl text-white font-bold">
                <div className="flex items-center justify-center gap-2"> 
                <h1>Welcome to Sunshine City </h1>{" "}
                <h1>
                  <Typewriter
                    options={{
                      strings: [
                        '<span class="lg:text-3xl font-extrabold bg-gradient-to-r from-[#FB8B24] to-[#ff4400eb] bg-clip-text text-transparent">Hotel',
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 75,
                      deleteSpeed: 50,
                    }}
                  />
                </h1>{" "}
                </div>
                <h1>
                Where Every Stay Shines Bright!
                </h1>
              </div>
              <p className="mb-3 text-white text-[12px] lg:text-[18px] lg:p-0">
                Experience luxury and comfort at Sunshine City Hotel. Immerse
                yourself in modern elegance and exceptional service during your
                stay
              </p>
              <Link to={"/rooms"}>
                <div>
                  <button className="btn rounded-none border-[#5F0F40] text-white bg-[#5F0F40]">
                    VIEW ALL ROOMS
                  </button>
                </div>
              </Link>
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
          <div className="lg:p-20 absolute flex items-center justify-center h-[400px] bg-black bg-opacity-50">
            <div className="space-y-7 flex flex-col text-center">
            <div className="animate__animated animate__fadeInDown mb-4 text-xl md:text-2xl lg:text-3xl text-white font-bold">
                <div className="flex items-center justify-center gap-2"> 
                <h1>Welcome to Sunshine City </h1>{" "}
                <h1>
                  <Typewriter
                    options={{
                      strings: [
                        '<span class="lg:text-3xl font-extrabold bg-gradient-to-r from-[#FB8B24] to-[#ff4400eb] bg-clip-text text-transparent">Hotel',
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 75,
                      deleteSpeed: 50,
                    }}
                  />
                </h1>{" "}
                </div>
                <h1>
                Where Every Stay Shines Bright!
                </h1>
              </div>
              <p className="mb-3 text-white text-[12px] lg:text-[18px] lg:p-0">
                Experience luxury and comfort at Sunshine City Hotel. Immerse
                yourself in modern elegance and exceptional service during your
                stay
              </p>
              <Link to={"/rooms"}>
                <div>
                  <button className="btn rounded-none border-[#5F0F40] text-white bg-[#5F0F40]">
                    VIEW ALL ROOMS
                  </button>
                </div>
              </Link>
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
          <div className="lg:p-20 absolute flex items-center justify-center h-[400px] bg-black bg-opacity-50">
            <div className="space-y-7 flex flex-col text-center">
            <div className="animate__animated animate__fadeInDown mb-4 text-xl md:text-2xl lg:text-3xl text-white font-bold">
                <div className="flex items-center justify-center gap-2"> 
                <h1>Welcome to Sunshine City </h1>{" "}
                <h1>
                  <Typewriter
                    options={{
                      strings: [
                        '<span class="lg:text-3xl font-extrabold bg-gradient-to-r from-[#FB8B24] to-[#ff4400eb] bg-clip-text text-transparent">Hotel',
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 75,
                      deleteSpeed: 50,
                    }}
                  />
                </h1>{" "}
                </div>
                <h1>
                Where Every Stay Shines Bright!
                </h1>
              </div>
              <p className="mb-3 text-white text-[12px] lg:text-[18px] lg:p-0">
                Experience luxury and comfort at Sunshine City Hotel. Immerse
                yourself in modern elegance and exceptional service during your
                stay
              </p>
              <Link to={"/rooms"}>
                <div>
                  <button className="btn rounded-none border-[#5F0F40] text-white bg-[#5F0F40]">
                    VIEW ALL ROOMS
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
