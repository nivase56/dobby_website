import React from "react";
import IconComponent from "./IconComponent";
import carTag from "@/Images/cartag.png"
import Image from "next/image";
const BookingContainer = () => {
  return (
    <>
    <div className="p-4">
      <div className="flex justify-center">
        <button className="px-5 py-2 bg-blue-100 rounded-lg text-blue-700 text-sm">
          HOW IT WORK
        </button>
      </div>
      <div>
        <h1 className="text-4xl py-4 text-center font-medium">
          Book with following 3 working steps
        </h1>
      </div>
      <div className="flex justify-center my-10 gap-20">
        
        <div className="w-[14%] flex items-center flex-col">
          <div className="rounded-lg shadow-lg flex items-center justify-center h-24 bg-blue-100 w-24 mb-3">
            <IconComponent
              icon="fluent:location-24-filled"
              className="text-primary h-10 w-10 text-blue-500"
            />
          </div>
          <p className="font-semibold text-xl py-2">Choose location</p>
          <p className="text-center text-sm">Choose your and find
          your best car</p>
        </div>
        <div className="w-[14%] flex items-center flex-col">
          <div className="rounded-lg shadow-lg flex items-center justify-center h-24 bg-blue-100 w-24 mb-3">
            <IconComponent
              icon="solar:calendar-bold"
              className="text-primary h-10 w-10 text-blue-500"
            />
          </div>
          <p className="font-semibold text-xl py-2">Book Wash</p>
          <p className="text-center text-sm">Book your wash and
          time to book your car</p>
        </div>
        <div className="w-[14%] flex items-center flex-col">
          <div className="rounded-lg shadow-lg flex items-center justify-center h-24 bg-blue-100 w-24 mb-3">
            <IconComponent
              icon="fontisto:car"
              className="text-primary h-10 w-10 text-blue-500"
            />
          </div>
          <p className="font-semibold text-xl py-2">Shine your car</p>
          <p className="text-center text-sm">Book your car and we will deliver
          it directly to you</p>
        </div>
      </div>
    
    </div>
    <div >
    <Image src={carTag} alt="carTag"   className="my-20"/>
    </div>
    </>
  );
};

export default BookingContainer;
