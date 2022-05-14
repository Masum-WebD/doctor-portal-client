import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard/InfoCard";

const Info = () => {
  return (
   <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
     <InfoCard bgContent=' bg-[#0FCFEC]' img={clock}></InfoCard>
     <InfoCard bgContent='bg-[#3A4256]' img={marker}></InfoCard>
     <InfoCard bgContent='bg-[#19D3AE]' img={phone}></InfoCard>
   </div>
  )
};

export default Info;
