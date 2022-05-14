import React from 'react';
import Appointment from '../Appointment';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import Services from '../Services';
import Testimonial from '../Testimonial';
import Treatment from '../Treatment';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Treatment></Treatment>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;