/* eslint-disable react/prop-types */

import axios from "axios";
import { useContext, useId, useState } from "react";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { MdRateReview } from "react-icons/md";
import { AuthContext } from "../Authconfiguration/Authconfiguration";
import moment from "moment";



const MyBookingTable = ({ booking }) => {

  const modalId = useId();
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const reloadPage = () => {
    window.location.reload(); // Reload the page
  };

  const {
    _id,
    email,
    room_type,
    room_images,
    maxPrice,
    minPrice,
    date,
    room_id,
  } = booking || {};



let bookingCancelableStatus = false;
// Assuming bookingDate is a Date object representing the booking date
const bookingDate = new Date(date); // Example booking date
// Get the current date
const currentDate = new Date();
// Calculate the difference in milliseconds between the booking date and the current date
const differenceMs = bookingDate.getTime() - currentDate.getTime();
// Calculate the difference in days
const differenceDays = differenceMs / (1000 * 3600 * 24);
console.log('current date-----------',currentDate)
console.log('start date-----------',bookingDate)
console.log('diff date-----------',differenceDays)
// Check if the difference is less than or equal to one day
if (differenceDays >= 1) {
  bookingCancelableStatus = true;
  console.log(bookingCancelableStatus)
}else{
    console.log(bookingCancelableStatus)
}

  const handleCancel = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "If you confirm then your booking will be cancelled",
      icon: "",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: " confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/bookings/${_id}`).then((res) => {
          console.log(res.data);
          reloadPage();
        });

        // update available list
        const availability = "available";
        axios
          .patch(`http://localhost:5000/rooms/${room_id}`, { availability })
          .then((res) => {
            console.log(res.data);
          });
      }
    });
  };

  const handleDate = () => {
    const date = startDate;
    axios
      .patch(`http://localhost:5000/bookings/${_id}`, { date })
      .then((res) => {
        console.log(res.data);
      });
    toast.success("Your booking date Update Successfully!");
    reloadPage();
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const booking_id = booking._id;
    const room_id = booking.room_id;
    const username = user?.displayName;
    const rating = form.rating.value;
    const timestamp = form.timestamp.value;
    const comment = form.comment.value;

    const review = { booking_id, room_id, username,timestamp,rating, comment };
    console.log(review);

    if(rating != 'Select Rating'){
      axios.post("http://localhost:5000/reviews", review).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        toast.success("Review added Successfully");
      } else {
        toast.error("Added Failed");
      }
    });
    }else{
      toast.error("Please Select Your Rating!");
    }
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Room Type</th>
              <th>Email</th>
              <th>Cost</th>
              <th>Date</th>
              <th>Review</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={room_images[0]}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{room_type}</div>
                  </div>
                </div>
              </td>
              <td>{email}</td>
              <td>
                ${minPrice} - ${maxPrice}
              </td>
              <td>{new Date(date).toLocaleDateString()}</td>
              <td className="">
                {/* The button to open modal */}
                <label
                  htmlFor="my_modal_7"
                  className="text-3xl mt-3 flex items-center justify-center"
                >
                  <MdRateReview />
                </label>

                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id="my_modal_7"
                  className="modal-toggle"
                />
                <div className="modal" role="dialog">
                  <div className="modal-box">
                    <div className="flex items-center justify-center p-12">
                      {/* Author: FormBold Team */}
                      {/* Learn More: https://formbold.com */}
                      <div className="mx-auto w-full max-w-[550px] bg-white">
                        <h1 className="mb-10 flex items-center justify-center"><img className="h-[50px]" src="/sunshinecity.svg" alt="" /></h1>
                        <h1 className="mb-4 text-center font-bold text-xl">
                          Give your Valuable Review here
                        </h1>
                        <form onSubmit={handleReviewSubmit} method="post">
                          <div className="mb-5">
                            <label
                              htmlFor="name"
                              className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                              Username
                            </label>
                            <p className="w-full rounded-none border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">{user?.displayName}</p>
                          </div>

                          <div className="mb-5">
                          <label
                              htmlFor="name"
                              className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                              Rating
                            </label>
                          <select
                  className="p-4 rounded-lg w-full bg-red-200"
                  name="rating"
                >
                  <option>Select Rating</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                          </div>
                          <div className="mb-5">
                            <label className="mb-3 block text-base font-medium text-[#07074D]">
                              Timestamp
                            </label>
                            <input className="w-full rounded-none border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                            type="text"
                            name="timestamp"
                            defaultValue={moment().format("MMM Do YY")}
                             />
                            
                          </div>
                          <div className="mb-5">
                            <label
                              htmlFor="comment"
                              className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                              Comment
                            </label>
                            <textarea
                              rows="4"
                              name="comment"
                              id="comment"
                              placeholder="Type your comment"
                              className="w-full resize-none rounded-none border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              required
                            ></textarea>
                          </div>
                          <div>
                            <button className="hover:shadow-form rounded-none bg-[#53624E] py-3 px-8 text-base font-semibold text-white outline-none">
                              Review
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <label className="modal-backdrop" htmlFor="my_modal_7">
                    Close
                  </label>
                </div>
              </td>
              <td>
                {
                  bookingCancelableStatus ? <button
                  onClick={() => handleCancel()}
                  className="btn bg-red-400 rounded-none mr-2"
                >
                  Cancel
                </button> : <p>not applicable</p>
                }
                
              </td>
              <td>
              <button
                  className="btn rounded-none bg-green-400"
                  onClick={() =>
                    document.getElementById(modalId).showModal()
                  }
                >
                  Update date
                </button>
                <dialog
                  id={modalId}
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">
                      Update your booking date!
                    </h3>
                    <DatePicker
                      className="border-2 border-[#DBCDB9] rounded-none text-2xl p-1 block mt-1"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button
                          onClick={()=>{handleDate()}}
                          className="btn mr-3 bg-blue-400"
                        >
                          Update
                        </button>
                        <button className="btn bg-red-400">Cancel</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookingTable;
