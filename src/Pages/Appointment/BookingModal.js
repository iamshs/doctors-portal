import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const BookingModal = ({ treatment, date,setTreatment,refetch }) => {
  // console.log(treatment)
  const { name, slots,_id } = treatment;
  const [user] = useAuthState(auth);
  const formattedDate = format(date,'PP')
  const handleSubmit = e =>{
      e.preventDefault()
      const slot = e.target.slot.value;

    const bookings = {
      treatmentId : _id ,
      treatment : name,
      slot,
      patient:user.email,
      patientName : user.displayName,
      date:formattedDate,
      phone: e.target.phone.value
 }
    fetch('http://localhost:5000/booking',{
         method:"POST",
         headers:{
           "content-type":"application/json"
         },
         body:JSON.stringify(bookings)
    })
    .then(res=>res.json())
    .then (data=>{
      console.log(data)
      if (data.success){
        toast(`Appointment is set , ${formattedDate} at ${slot} `)
      }
      else{
        toast.error( `Already have an Appointment on ${formattedDate} at ${slot}`)
      }
      setTreatment(null)
      refetch()
      
    })
     
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
            htmlFor="booking-modal"
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
              slots.map((slot,i) => (
                <option key={i} value={slot}>{slot}</option>
              ))
              }
            </select>

            <input
              type="text" name="name" disabled
             value={user?.displayName || ''}
              className="input input-bordered input-success w-full max-w-xs"
            />
            <input
              type="email" name="email"
             disabled value={user?.email || ''}
              className="input input-bordered input-success w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
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
