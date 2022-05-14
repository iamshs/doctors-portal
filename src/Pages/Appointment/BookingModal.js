import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, date,setTreatment }) => {
  // console.log(treatment)
  const { name, slots } = treatment;

  const handleSubmit = e =>{
      e.preventDefault()
      const slot = e.target.slot.value;
      console.log(slot)
      setTreatment(null)
  }

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-2">
            Booking for : <span className="text-secondary">{name}</span>
          </h3>
          <label
            for="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-2 justify-items-center">
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered input-success w-full max-w-xs"
            />

            <select name="slot" className="select select-success w-full max-w-xs">
              {
              slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))
              }
            </select>

            <input
              type="text" name="name"
              placeholder="Your Name"
              className="input input-bordered input-success w-full max-w-xs"
            />
            <input
              type="email" name="email"
              placeholder="Your Email"
              className="input input-bordered input-success w-full max-w-xs"
            />
            <input
              type="text"
              name="number"
              placeholder="Your Number"
              className="input input-bordered input-success w-full max-w-xs"
            />
           <input type="Submit" value={"submit"} className='btn btn-secondary text-white'/>

          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
