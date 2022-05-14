import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    console.log(marker)
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-28 indicator-center'>
         <InfoCard img={clock} bgClass=' bg-gradient-to-r from-secondary to-primary ' bgTitle='Opening Hours'></InfoCard>   
         <InfoCard img={marker} bgClass='bg-slate-700' bgTitle='Visit Our Location'></InfoCard>   
         <InfoCard img={phone} bgClass=' bg-gradient-to-r from-secondary to-primary ' bgTitle='Contact with us'></InfoCard>   
        </div>
    );
};

export default Info;