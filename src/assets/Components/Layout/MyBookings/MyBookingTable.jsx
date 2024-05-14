/* eslint-disable react/prop-types */

import axios from "axios";
import { useId, useState } from "react";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { MdRateReview } from "react-icons/md";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { FaRegEdit } from "react-icons/fa";



const MyBookingTable = ({ booking }) => {

  const modalId = useId();
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
const bookingDate = new Date(date);
const currentDate = new Date();
const differenceMs = bookingDate.getTime() - currentDate.getTime();
const differenceDays = differenceMs / (1000 * 3600 * 24);
// Check if the difference is less than or equal to one day
if (differenceDays >= 1) {
  bookingCancelableStatus = true;
  // console.log(bookingCancelableStatus)
}else{
  bookingCancelableStatus = false;
    // console.log(bookingCancelableStatus)
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
          toast.success("Booking Cancel Successfully!");
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
        if(res.data.insertedId){
          toast.success("Your booking date Update Successfully!");
        }
        toast.success("Your booking date Update Successfully!");
        reloadPage();
      });
      

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
              <th>Cancel</th>
              <th>Edit Date</th>
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
                <Link to={`/review/${room_id}`}>
                <p className="text-3xl mt-3"><MdRateReview /></p> 
                </Link>       
              </td>
              <td>
                {
                  bookingCancelableStatus ? <button
                  onClick={() => handleCancel()}
                  className="text-3xl text-red-600 rounded-none mr-2"
                >
                  <ImCross />
                </button> : <p>not applicable</p>
                }
                
              </td>
              <td>
              <button
                  className="text-3xl text-green-500"
                  onClick={() =>
                    document.getElementById(modalId).showModal()
                  }
                >
                  <FaRegEdit />
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
