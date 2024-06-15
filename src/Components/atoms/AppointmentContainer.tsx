import React from "react";
import IconComponent from "./Container/IconComponent";

const AppointmentContainer = () => {
  return (
    <div className="p-8">
      <div className="box_Shadow flex justify-evenly items-center bg-white w-[70%] ml-auto mr-auto rounded-lg">
        <div className="flex items-center gap-3">
        <IconComponent
          icon="hugeicons:location-06"
          className="text-primary h-8 w-8 text-gray-500"
        />
        <div>
          <p className="font-semibold">Location</p>
          <p className="font-light text-sm">Search your location</p>
        </div>
        </div>
        
  <div className="h-14 my-2 w-px bg-gray-300"></div>



        <div className="flex items-center gap-3">
        <IconComponent
          icon="solar:calendar-linear"
          className="text-primary h-8 w-8 text-gray-500"
        />
        <div>
          <p className="font-semibold">Start date</p>
          <p className="font-light text-sm">Tue 15 Feb, 09:00</p>
        </div>
        </div>
        <div className="h-14 my-2 w-px bg-gray-300"></div>



        <div className="flex items-center gap-3">
        <IconComponent
          icon="solar:calendar-linear"
          className="text-primary h-8 w-8 text-gray-500"
        />
        <div>
          <p className="font-semibold">End date</p>
          <p className="font-light text-sm">Thu 16 Feb, 11:00</p>
        </div>
        </div>
        <div className="flex items-center gap-3">
        <button className="px-6 rounded-md py-3 bg-blue-500 text-white shadow-md">Book wash</button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentContainer;
