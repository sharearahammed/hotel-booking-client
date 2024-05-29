/* eslint-disable react/prop-types */

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-4/12 mx-auto text-center py-8">
      <p
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        className="text-[#E36414] text-[25px] mb-2"
      >
        ---{subHeading}---
      </p>
      <h3
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        className="text-4xl uppercase border-y-4 py-4"
      >
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
