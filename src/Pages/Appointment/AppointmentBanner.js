import React from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppointmentBanner = ({date,setDate}) => {
  

    return (
        <div className="hero min-h-screen ms-0 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} alt='' className=" lg:max-w-sm rounded-lg shadow-2xl" />
    <div  >
     <DayPicker className='mr-6 mt-4 lg:mt-0'
     mode="single"
     selected={date}
     onSelect={setDate}
     />;
    </div>
  </div>
</div>
    );
};

export default AppointmentBanner;