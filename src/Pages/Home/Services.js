import React from "react";
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import teeth from '../../assets/images/whitening.png'
import Service from '../Home/Service'

const Services = () => {
  const services = [
      {
         _id:1,
         description:'',
         title:'Fluoride Treatment',
         img:fluoride
      },
      {
         _id:2,
         description:'',
         title:'Cavity Filling',
         img:cavity
      },
      {
         _id:3,
         description:'',
         title:'Teeth Whitening',
         img:teeth
      },
    ];

  return <div >
      <div className="text-center my-28">
        <h3 className="text-xl font-bold text-primary">
            Our Services
        </h3>
        <h2 className="text-4xl">Services We Provide</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
         {
             services.map(service=><Service 
             key={service._id}
             service={service}
             ></Service>)
         }
      </div>
  </div>;
};

export default Services;
