import React from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({date, setDate}) => {
    
  return (
    <div className="hero min-h-screen text-black ">
      <div className="hero-content  w-2/4 flex-col lg:flex-row-reverse">
        <img className='' src={chair} alt="" />
        <div>
          <DayPicker 
            mode="single"
            selected={date}
            onSelect={setDate}

          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
