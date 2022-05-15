import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointment = () => {
const [user]=useAuthState(auth)
 const [appointments,setAppointments]=useState([])

 useEffect(()=>{
    if(user){
        fetch(`http://localhost:5000/booking?patient=${user.email}`)
        .then(res=>res.json())
        .then(data=>{setAppointments(data)
        
        })
    }
 },[user])

    return (
        <div>
         <h2 className='text-bold'> My Appointment:{appointments.length} </h2>
         
          <div className="overflow-x-auto">
  <table className="table w-full">
 
    <thead>
      <tr>
     
        <th>Patient</th>
        <th>Date</th>
        <th>Time</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
    {
        appointments.map((a,i)=> <tr key={i}>
            <th>{a.patientName}</th>
            <td> {a.date} </td>
            <td> {a.slot} </td>
            <td>{a.patient}</td>
          </tr>)
    } 
     
    
    </tbody>
  </table>
</div>

        </div>
    );
};

export default MyAppointment;