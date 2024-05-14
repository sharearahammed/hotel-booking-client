/* eslint-disable react/prop-types */

const ReviewCard = ({review}) => {
    const {username,rating,timestamp,comment} = review;
    return (
      <div className="bg-red-200 rounded-lg flex flex-col mt-3">
      <div className="flex flex-col sm:flex-row py-1 px-1 w-full text-center sm:text-left">
        
        <div className="flex flex-col p-5">
          <h4 className="text-xl font-bold">{username}</h4>
          <h4 className="text-sm font-light text-gray-500">Date: {timestamp}</h4>
          <div className="mt-2 ">
          <p className="font-bold">Comment:</p>
          <p className="text-sm p-2">{comment}</p>
          </div>
          <p className="mt-2"><span className="text-slate-800 font-bold">Rating:</span> {rating}</p>
        </div>
        
      </div>
      <br />
    </div>
    );
};

export default ReviewCard;


{/* <div className="card lg:w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">
      {username}
      <div className="badge badge-secondary">{timestamp}</div>
    </h2>
    <p>{comment}</p>
    <div className="card-actions justify-end">
      <div className="">Rating: {rating}</div>
    </div>
  </div>
</div> */}