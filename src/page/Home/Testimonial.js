import React from 'react';
import quote from '../../assets/icons/quote.svg'
import pepole1 from '../../assets/images/people1.png'
import pepole2 from '../../assets/images/people2.png'
import pepole3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {
    const reviews =[
        {
            _id:1,
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:pepole1,
            location:'californiya',
            name:'Winson Herry'
        },
        {
            _id:2,
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:pepole2,
            location:'californiya',
            name:'Winson Herry'
        },
        {
            _id:3,
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:pepole3,
            location:'californiya',
            name:'Winson Herry'
        }
    ];

    return (
        <section className='mt-20'>
            <div className='flex justify-between'>
               <div>
                   <h1 className='text-[#19D3AE]'>Testimonial</h1>
                   <h2 className='text-bold text-2xl text-black'>What Our Patients Says</h2>
                </div> 
                <img className='w-14 lg:w-24' src={quote} alt="" />
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    reviews.map(review =><Review key={review._id} review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;