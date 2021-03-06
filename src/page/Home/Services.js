import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'

const Services = () => {
    const services =[
        {
            _id:1,
            name:'Fluoride Treatment',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:fluoride
        },
        {
            _id:2,
            name:'Cavity Filling',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:cavity
        },
        {
            _id:3,
            name:'Teeth Whitening',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:whitening
        }
    ]
    return (
        <div className='my-28'>
            <div className='text-center '>
                <h1 className='text-[#19D3AE] text-xl uppercase font-bold '> our services</h1>
                <h2>Services We Provide</h2>
            </div>
           <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14'>
           {
                services.map(service=><Service key={service._id} service={service}></Service>)
            }
            
           </div>
        </div>
    );
};

export default Services;