import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'

const MakeAppoinement = () => {
    return (
        <section
        style={{
            background:`url(${appointment})`
        }}
        className=' flex justify-center items-center my-28 '>
            <div className='flex-1 hidden lg:block'>
             <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-2 lg:p-0'>
             <h3 className=' text-primary text-xl font-bold'>Appointment</h3>
             <h1 className='text-4xl text-white'>Make an Appointment Today</h1>
             <p className='text-white'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  </p>
            </div>
        </section>
    );
};

export default MakeAppoinement;