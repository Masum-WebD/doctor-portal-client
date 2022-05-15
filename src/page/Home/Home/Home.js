import React from 'react';
import Appointment from '../Appointment';
import Banner from '../Banner/Banner';
import Contact from '../Contact';
import Footer from '../Footer';
import Info from '../Info/Info';
import Services from '../Services';
import Testimonial from '../Testimonial';
import Treatment from '../Treatment';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Treatment></Treatment>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;