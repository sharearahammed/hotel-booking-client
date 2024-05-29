/* eslint-disable react/prop-types */

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { FaUser } from 'react-icons/fa';

const ReviewCard = ({review}) => {
    const {username,rating,timestamp,comment} = review;
    return (
      <div className="bg-white border border-blue-700 rounded-none flex flex-col mt-3 h-[450px]">
      <div className="flex flex-col sm:flex-row py-1 px-1 w-full sm:text-left">
        
        <div className="flex flex-col p-5">
        <div className="text-left text-[50px] lg:mb-7"
        >
          <FaUser className='border rounded-full p-2' />
          </div>
          <div 
         className="">
          <div>
          <h4 className="text-left text-xl font-bold">{username}</h4>
          <h4 className="text-left text-sm font-light text-gray-500">{timestamp}</h4>
          <p 
         className="mt-2"><span className="text-slate-800 font-bold"></span> <Rating
        style={{ maxWidth: 100 }}
        value={rating}
        readOnly
      /></p>
          </div>
          </div>
          <div className="mt-2 ">
          <p 
         className="text-left font-bold">Comment:</p>
          <p 
         className="text-sm p-2 text-justify">{comment}</p>
          </div>
          
        </div>
        
      </div>
      <br />
    </div>
    );
};

export default ReviewCard;
