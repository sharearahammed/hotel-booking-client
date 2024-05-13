/* eslint-disable react/prop-types */

const ReviewCard = ({review}) => {
    const {username,rating,timestamp,comment} = review;
    return (
      <div className="flex flex-col max-w-md m-12">
      <div className="flex flex-col sm:flex-row border border-gray-700 py-1 px-1 w-full text-center sm:text-left">
        <div className="flex-shrink-0 m-4 w-16 h-16 rounded-full bg-gray-400 self-center"></div>
        <div className="flex flex-col py-2 pr-2">
          <h4 className="text-lg font-bold">{username}</h4>
          <h4 className="text-sm">{timestamp}</h4>
          <p className="font-hairline">{comment}</p>
          <p>Rating: {rating}</p>
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