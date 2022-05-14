import React from "react";


const Review = ({ review }) => {
  return (
    <div>
      <div className="card lg:max-w-lg  shadow-xl">
        <div className="card-body">
          <p>{review.review}</p>
          <div className='flex items-center'>
            <div className="avatar">
              <div className=" w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img className='' src={review.img} alt='' />
              </div>
            </div>
            <div className='ml-6'>
            <h1>{review.name}</h1>
            <h2>{review.location}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
