/* eslint-disable react/prop-types */

import { ImFire } from "react-icons/im";

const ReviewCard = ({review}) => {
    const {username,rating,timestamp,comment} = review;
    return (
      <div className="bg-white border border-blue-700 rounded-lg flex flex-col mt-3">
      <div className="flex flex-col sm:flex-row py-1 px-1 w-full text-center sm:text-left">
        
        <div className="flex flex-col p-5">
        <div data-aos="fade-right"
        data-aos-duration="1000">
          <svg height="35px" className="mb-2" fill="#5a67d8" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
            // eslint-disable-next-line react/no-unknown-property
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32 32" xmlSpace="preserve">
            <g>
                <g id="right_x5F_quote">
                    <g>
                        <path d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"></path>
                        <path d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"></path>
                    </g>
                </g>
            </g>
        </svg>
          </div>
          <div data-aos="fade-right"
        data-aos-duration="1000" className="flex justify-between items-center">
          <div>
          <h4 className="text-xl font-bold">{username}</h4>
          <h4 className="text-sm font-light text-gray-500">{timestamp}</h4>
          </div>
          <div className="text-5xl text-red-500">
          <ImFire />
          </div>
          </div>
          <div className="mt-2 ">
          <p data-aos="fade-right"
        data-aos-duration="2000" className="font-bold">Comment:</p>
          <p data-aos="fade-right"
        data-aos-duration="2000" className="text-sm p-2">{comment}</p>
          </div>
          <p data-aos="fade-right"
        data-aos-duration="2000" className="mt-2"><span className="text-slate-800 font-bold">Rating:</span> {rating}</p>
        </div>
        
      </div>
      <br />
    </div>
    );
};

export default ReviewCard;
