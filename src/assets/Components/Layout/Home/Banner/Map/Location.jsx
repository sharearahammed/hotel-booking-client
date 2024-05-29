import { Map, Marker } from "pigeon-maps";
import { useState } from "react";
import { GiPositionMarker } from "react-icons/gi";
import "./locationstyle.css";
import { LuPhoneCall } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import SectionTitle from "../../../../Hook/SectionTitle";

const Location = () => {
  const [hue, setHue] = useState(0);
  const color = `hsl(${hue % 360}deg 39% 70%)`;
  return (
    <section className="">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-2xl lg:max-w-6xl mx-auto">
          <p
            data-aos="fade-right"
            data-aos-duration="1000"
            className="kaushan mb-2 text-[25px] text-[#E36414]"
          >
            Destintions
          </p>
          <h2
            data-aos="fade-right"
            data-aos-duration="2000"
            className="text-4xl font-extrabold text-gray-900 Quattrocento"
          >
            WE’RE HERE FOR YOU
          </h2>
        </div>
        <div className="mt-16 lg:mt-20">
          <div className="">
            <div>
              <Map
                height={600}
                defaultCenter={[23.9955, 90.4205]}
                defaultZoom={11}
              >
                <Marker
                  width={50}
                  anchor={[23.9955, 90.4205]}
                  color={color}
                  onClick={() => setHue(hue + 20)}
                />
                <Marker
                  width={50}
                  anchor={[23.9955, 90.4205]}
                  color={color}
                  onClick={() => setHue(hue + 20)}
                >
                  <GiPositionMarker />
                </Marker>
              </Map>
            </div>
            <section className="text-center py-12 px-4">
              <SectionTitle
                heading="Get In Touch"
                subHeading="We are here to help you."
              ></SectionTitle>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 animate-fadeIn">
                <div
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  className="p-4 shadow-lg rounded-none bg-[#8e1660] text-white hover:bg-[#641043] transition-colors"
                >
                  <h2 className="flex justify-center text-3xl mb-3">
                    <LuPhoneCall />
                  </h2>
                  <h3 className="text-xl font-bold">Call Us</h3>
                  <p className="mt-2">+880 01876523323</p>
                </div>
                <div
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  className="p-4 shadow-lg rounded-none bg-[#8e1660] text-white hover:bg-[#641043] transition-colors"
                >
                  <h2 className="flex justify-center text-3xl mb-3 ">
                    <AiOutlineMail />
                  </h2>
                  <h3 className="text-xl font-bold">Email Us</h3>
                  <p className="mt-2">sharearahammed@gmail.com</p>
                </div>
                <div
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  className="p-4 shadow-lg rounded-none bg-[#8e1660] text-white hover:bg-[#641043] transition-colors"
                >
                  <h3 className="flex justify-center text-3xl mb-3">
                    <ImLocation2 />
                  </h3>
                  <h3 className="text-xl font-bold">Visit Us</h3>
                  <p className="mt-2">123 BARI Road, Gazipur, Joydebpur</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
