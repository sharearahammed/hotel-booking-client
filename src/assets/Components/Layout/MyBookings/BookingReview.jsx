import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Authconfiguration/Authconfiguration";
import toast from "react-hot-toast";
import moment from "moment";

const BookingReview = () => {
    const{id} = useParams();
    console.log('id-------------------------------',id)
    const{user} = useContext(AuthContext);

    const [booking,setBooking] = useState({})

    useEffect(()=>{
        axios(`https://hotel-booking-server-psi.vercel.app/booking/${id}`,{withCredentials:true})
        .then((res) => {
        setBooking(res.data);
    });
    },[id])
    

    console.log(booking);

    const handleReviewSubmit = (e) => {
        e.preventDefault();
    
        const form = e.target;
        const booking_id = booking?._id;
        const room_id = booking?.room_id;
        const username = user?.displayName;
        const rating = form.rating.value;
        const timestamp = form.timestamp.value;
        const comment = form.comment.value;
    
        const review = { booking_id, room_id, username,timestamp,rating, comment };
        console.log(review);
    
        if(rating != 'Select Rating'){
          axios.post("https://hotel-booking-server-psi.vercel.app/reviews", review).then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            toast.success("Review added Successfully");
          } else {
            toast.error("Added Failed");
          }
        });
        form.reset();
        }else{
          toast.error("Please Select Your Rating!");
        }
      };



    return (
        <div className="bg-white">
            <div>
                  <div className="">
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
                            defaultValue={moment().format('lll')}
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
        </div>
    );
};

export default BookingReview;