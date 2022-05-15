import React from "react";

const Service = ({ service,setTreatment}) => {
    const {name ,slots}=service
  return (
    <div className="card lg:max-w-lg text-black mb-5 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-[#19D3AE]">{name}</h2>
        <p>{slots.length
         ? <span> {slots[0]}</span>
        : <span className="text-red-500"> No Available slots</span>
    }</p>
        <p>{slots.length} {slots.length <1 ? 'space':'spaces'} available slots</p>
        <div className="card-actions justify-center">
          <label for="booking-modal" onClick={() =>setTreatment(service)} disabled={slots.length === 0} className="btn btn-primary uppercase text-white">Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default Service;
