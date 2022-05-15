import React from 'react';

const Service = ({service,setTreatment}) => {
  const {name,slots} = service
    return (
        <div className="card  bg-base-100 shadow-xl">
  <div className="card-body text-center">
    <h2 className="text-xl font-bold text-secondary">{name}</h2>
    <p>{slots.length>0 ? 
    <span>{slots[0]}</span>: <span className='text-red-500'> Try Another Day</span>
    }</p>
    <p>
      {slots.length}  {slots.length>1 ? 'spaces':'space'} Available
    </p>
    <div className="card-actions justify-center">
      <label htmlFor="booking-modal"  disabled={slots.length===0} className="btn btn-secondary bg-gradient-to-r from-secondary to-primary text-white uppercase btn-sm" onClick={()=>setTreatment(service)} >Book Appointment</label>
    </div>
  </div>
</div>
    );
};

export default Service;