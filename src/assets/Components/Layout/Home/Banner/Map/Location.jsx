import { Map, Marker } from "pigeon-maps";
import { useState } from "react";
import { GiPositionMarker } from "react-icons/gi";
import './locationstyle.css'

const Location = () => {
  const [hue, setHue] = useState(0);
  const color = `hsl(${hue % 360}deg 39% 70%)`;
  return (
    <section className="bg-gray-200">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-2xl lg:max-w-6xl mx-auto">
          <p  data-aos="fade-right"
        data-aos-duration="1000" className="kaushan mb-2 text-[25px]">Destintions</p>
            <h2 data-aos="fade-right"
        data-aos-duration="2000" className="text-4xl font-extrabold text-gray-900 Quattrocento">WE’RE HERE FOR YOU</h2>
        </div>
        <div className="mt-16 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <Map height={300} defaultCenter={[23.9955, 90.4205]} defaultZoom={11}>
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
                <div>
                    <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                        <div className="px-6 py-4">
                            <h3 data-aos="fade-up-left"
        data-aos-duration="1000" className="text-lg font-medium text-gray-900">Our Address</h3>
                            <p data-aos="fade-up-left"
        data-aos-duration="1000" className="mt-1 text-gray-600">Bangladesh , Dhaka , Gazipur </p>
                        </div>
                        <div className="border-t border-gray-200 px-6 py-4">
                            <h3 data-aos="fade-up-left"
        data-aos-duration="1000" className="text-lg font-medium text-gray-900">Hours</h3>
                            <p data-aos="fade-up-left"
        data-aos-duration="1000" className="mt-1 text-gray-600">Monday - Friday: 24h</p>
                            <p data-aos="fade-up-left"
        data-aos-duration="1000" className="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                            <p data-aos="fade-up-left"
        data-aos-duration="1000" className="mt-1 text-gray-600">Sunday: Closed</p>
                        </div>
                        <div className="border-t border-gray-200 px-6 py-4">
                            <h3 data-aos="fade-up-left"
        data-aos-duration="1000" className="text-lg font-medium text-gray-900">Contact</h3>
                            <p data-aos="fade-up-left"
        data-aos-duration="1000" className="mt-1 text-gray-600">Email: sharearahammed@gmail.com</p>
                            <p data-aos="fade-up-left"
        data-aos-duration="1000" className="mt-1 text-gray-600">Phone: 01876523323</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  );
};

export default Location;
