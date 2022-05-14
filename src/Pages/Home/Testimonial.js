import React from 'react';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import quote from '../../assets/icons/quote.svg'
import Review from '../About/Review';
const Testimonial = () => {

   const reviews = [
       {
           _id:1,
           review:'',
           img:people1,
           name:'William Herry',
           city:'California'
       },
       {
           _id:2,
           review:'',
           img:people2,
           name:'William Herry',
           city:'California'
       },
       {
           _id:3,
           review:'',
           img:people3,
           name:'William Herry',
           city:'California'
       },
   ]

    return (
        <section className='my-28'>
           <div className='flex justify-between'>
           <div className='p-2'>
                <h3 className='text-xl font-bold text-primary'>Testimonial</h3>
                <h1 className='text-4xl '>What Our Customer Says</h1>
            </div>
            <div className=' w-24 lg:w-48'>
                <img src={quote} alt="" />
            </div>
           </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                
               {
                  
                   reviews.map(review=> <Review key={review._id}
                    review={review}
                    ></Review>)
               }
            </div>
        </section>
    );
};

export default Testimonial;