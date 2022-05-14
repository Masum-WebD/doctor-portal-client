import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'

const Appointment = () => {
    return (
        <div style={{
            background:`url(${appointment})`
        }} className=' flex justify-center items-center mt-28'>
            <div className='flex-1 hidden lg:block '> 
                <img className=' mt-[-120px] ' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h1 className='text-xl text-[#19D3AE] '>Appointment </h1>
                <h2 className='text-3xl text-white'>Make an appointment Today</h2>
                <p className='text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className="btn  bg-gradient-to-r from-primary to-  secondary font-bold  hover:from-pink-500 hover:to-yellow-500 ">Get Started</button>
            </div>
        </div>
    );
};

export default Appointment;