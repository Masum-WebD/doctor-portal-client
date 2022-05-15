import React from "react";
import chair from "../../../assets/images/chair.png"

const Banner = () => {
  return (
    <div  className=''>
      <div  className="hero relative  min-h-screen mx-auto primary-content">
          <img className='object-cover absolute opacity-10 w-full h-full' src={chair} alt="" />
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="max-w-sm rounded-lg shadow-2xl" alt=""
          />
          <div>
            <h1 className="text-5xl text-[#3A4256 );
] font-bold">Your New Smile Starts Here</h1>
            <p className="py-6 text-black"  >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
            </p>
            <button className="btn  bg-gradient-to-r from-primary to-  secondary font-bold  hover:from-pink-500 hover:to-yellow-500 ">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
