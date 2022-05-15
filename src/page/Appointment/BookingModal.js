import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, date,setTreatment }) => {
  const {_id, name, slots } = treatment;
  const handleAppointmentConfirm=e=>{
      e.preventDefault();
      const slot=e.target.slot.value
      console.log(slot,name,_id);
      setTreatment(null)
  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle " />
      <div class="modal  modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg text-[#19D3AE]">{name}</h3>
          <p class="py-4">
            <form onSubmit={handleAppointmentConfirm} className="grid grid-cols-1 gap-3 justify-items-center ">
              <input
                type="text"
                value={format(date, "PP")}
                class="input w-full max-w-xs bg-white text-black text-bold"
              />
              <select name='slot' class="select select-bordered bg-white w-full max-w-xs">
              {
                     slots.map(slot=> <option   className="text-black text-bold" value={slot}>{slot}</option>)
                 }
              </select>
              <input
                type="text"
                placeholder="Full Name"
                name='name'
                class="input w-full max-w-xs bg-white text-black"
              />
              <input
                type="email"
                name='email'
                placeholder="Email"
                class="input w-full max-w-xs bg-white"
              />
              <input
                type="number"
                name='phone'
                placeholder="Phone Number"
                class="input w-full max-w-xs bg-white"
              />
              <input
                type="submit"
                value="submit"
                class="btn bg-[#19D3AE] text-white text-bold w-full max-w-xs bg-white"
              />
            </form>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
