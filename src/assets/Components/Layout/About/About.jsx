import { Helmet } from "react-helmet";

const About = () => {
    return (
        <div className="bg-[#F4F2F1]">
            <Helmet>
        <title>Sunshine City About</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h1 className="pt-14 mb-7 text-center font-bold text-4xl">About Us</h1>
      <h2 className="mb-6 text-2xl font-thin text-center">Welcome to Sunshine Hotel Room Booking! Your go-to destination for <br /> hassle-free hotel reservations and unforgettable travel experiences.</h2>
      <section className="w-full mx-auto py-10 ">

      <div className="flex-col lg:flex-row xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
        <div className="lg:w-[50%] xs:w-full">
          <img className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm" src="https://i.ibb.co/MRfBS0c/1700594400302.png" />
        </div>
        <div className="text-xl flex items-center justify-center lg:w-[50%] sm:w-full xs:w-full md:p-4 xs:p-0 rounded-md">
          
          <p className="text-md mt-4">At Sunshine, we understand that finding the perfect accommodation is the cornerstone of any successful trip. That is why we have curated a seamless platform where you can easily discover and book your ideal hotel room in just a few clicks.</p>
        </div>
      </div>

      <div className="flex-col lg:flex-row xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-6">
        <div className="md:hidden sm:block xs:block xs:w-full">
          <img className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm" src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8aG9tZXxlbnwwfDB8fHwxNzEwNDkwMDcwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="billboard image" />
        </div>
        <div className="text-xl flex items-center justify-center lg:w-[50%] xs:w-full   md:p-4 xs:p-0 rounded-md">

          <p className="text-md mt-4">But we are not just another booking website – we are your dedicated travel partner. Our team is passionate about providing exceptional service and personalized support to ensure your journey is as smooth as possible.</p>
        </div>
        <div className="md:block sm:hidden xs:hidden lg:w-[50%] xs:w-full">
          <img className="lg:rounded-t-lg xs:rounded-sm" src="https://i.ibb.co/SyrR7CK/find-hotel-or-search-hotels-concept-vector-25490418.jpg" alt="billboard image" />
        </div>
      </div>

      <div className="flex-col lg:flex-row xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
        <div className="lg:w-[50%] xs:w-full">
          <img className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm" src="https://i.ibb.co/1QWLzxB/Travel-Advisor.jpg" alt="billboard image" />
        </div>
        <div className="text-xl flex items-center justify-center lg:w-[50%] sm:w-full xs:w-full md:p-4 xs:p-0 rounded-md">
          
          <p className="text-md mt-4">Whether you are seeking a cozy boutique hotel or a luxurious beachfront resort, we are here to make your travel dreams a reality.</p>
        </div>
      </div>
      <div className="flex-col lg:flex-row xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-6">
        <div className="text-xl flex items-center justify-center lg:w-[50%] xs:w-full   md:p-4 xs:p-0 rounded-md">

          <p className="text-md mt-4">With Sunshine, you will enjoy access to a vast selection of accommodations, competitive prices, and exclusive deals, all designed to enhance your travel experience.</p>
        </div>
        <div className="md:block sm:hidden xs:hidden lg:w-[50%] xs:w-full">
          <img className="lg:rounded-t-lg xs:rounded-sm" src="https://i.ibb.co/h2zrT8m/DSC07998.jpg" />
        </div>
      </div>
      <div className="flex-col lg:flex-row xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
        <div className="lg:w-[50%] xs:w-full">
          <img className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm" src="https://i.ibb.co/pLFPGfj/36304-940x-habitat-komp4-narrow.jpg" />
        </div>
        <div className="text-xl flex items-center justify-center lg:w-[50%] sm:w-full xs:w-full md:p-4 xs:p-0 rounded-md">
          
          <p className="text-md mt-4">So why wait? Start planning your next adventure with Sunshine Hotel Room Booking today!</p>
        </div>
      </div>
    </section>
        </div>
    );
};

export default About;