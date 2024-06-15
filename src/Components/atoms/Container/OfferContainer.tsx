import React from "react";
import audirs from "@/Images/audirs.png";
import Image from "next/image";
import IconComponent from "./IconComponent";

const OfferContainer = () => {
  return (
    <div className="flex mt-36 gap-4">
      <div className="w-1/2">
        <Image src={audirs} alt="audirs" width={630} quality={100} />
      </div>
      <div className="px-10">
        <button className="px-3 py-2 bg-blue-100 rounded-lg text-blue-700 text-xs mb-5">
          WHY CHOOSE US{" "}
        </button>

        <div>
          <h1 className="text-4xl w-2/3 my-5">
            We offer the best experience with washing service
          </h1>
        </div>
        <div className="flex items-center h-28 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg">
            <IconComponent
              icon="ri:money-dollar-circle-fill"
              className="text-primary h-9 w-9 text-blue-500"
            />
          </div>
          <div>
            <h1 className="font-semibold text-xl">Best price guaranteed</h1>
            <p className="w-3/4 text-sm my-1">
              Find a lower price? We’ll refund you 100% of the difference.
            </p>
          </div>
        </div>
        <div className="flex items-center h-28 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg">
            <IconComponent
              icon="ic:sharp-person"
              className="text-primary h-9 w-9 text-blue-500"
            />
          </div>
          <div>
            <h1 className="font-semibold text-xl">Experience worker</h1>
            <p className="w-3/4 text-sm my-1">
              Don’t have driver? Don’t worry, we have many experienced driver
              for you.
            </p>
          </div>
        </div>
        <div className="flex items-center h-28 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg">
            <IconComponent
              icon="subway:calendar-2"
              className="text-primary h-9 w-9 text-blue-500"
            />
          </div>
          <div>
            <h1 className="font-semibold text-xl">Best price guaranteed</h1>
            <p className="w-3/4 text-sm my-1">
              Find a lower price? We’ll refund you 100% of the difference.
            </p>
          </div>
        </div>
        <div className="flex items-center h-28 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg">
            <IconComponent
              icon="mage:we-chat"
              className="text-primary h-9 w-9 text-blue-500"
            />
          </div>
          <div>
            <h1 className="font-semibold text-xl">24/7 technical support</h1>
            <p className="w-3/4 text-sm my-1">
              Have a question? Contact Washcars support any time when you have
              problem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferContainer;
