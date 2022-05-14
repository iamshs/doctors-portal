import React from 'react';
import banner from '../../assets/images/chair.png'
import Button from '../Shared/Button';

const Banner = () => {
    return (
        <div className="hero min-h-screen  indicator-center">
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <img src={banner} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
    <div className='max-w-md'>
      <h1 className="text-4xl font-bold">Your New Smile Starts Here</h1>
      <p className="py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <Button>GET STARTED</Button>
    </div>
  </div>
</div>
    );
};

export default Banner;