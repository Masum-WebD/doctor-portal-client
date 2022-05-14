import React from "react";
import treatment from '../../assets/images/treatment.png'
const Treatment = () => {
  return (
    <div className="card lg:card-side shadow-xl">
      <figure>
        <img
        // style={{width:'458px', height:'576px'}}
        className="w-[458px] h-[450px] p-16 rounded-md"
          src={treatment}
          alt="Album"
        />
      </figure>
      <div className="card-body p-16">
          
        <h2 className="card-title font-bold text-black text-2xl">Exceptional Dental Care, on Your Terms</h2>
        <p className='text-black'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
        <div className="card-actions justify-start">
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
