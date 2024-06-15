import React from "react";
import triangle from "@/Images/triangle.png";
import mobileJaguar from "@/Images/mobilejaguar.png";
import Image from "next/image";
import googleplay from "@/Images/googleplay.png"
import appstore from "@/Images/appstore.png"
const DownloadApp = () => {
  return (
    <div className="flex">
      <div className="w-1/2">
        <Image
          src={triangle}
          alt="triangle"
          className="absolute"
          width={550}
          height={550}
        />
        <div className="relative py-20 px-36 flex flex-col justify-end">
          <div className="flex">
            <button className="px-8 py-2 bg-blue-100 rounded-lg text-blue-700 text-xs mb-5">
              DOWNLOAD{" "}
            </button>
          </div>
          <h1 className="text-4xl font-bold">Download Glint </h1>
          <h1 className="text-4xl font-bold">Wise App for FREE</h1>
          <p className="py-2 text-sm text-gray-500">For faster, easier booking and exclusive deals.</p>
          <div className="flex gap-5 py-5">
            <Image src={googleplay} alt="googleplay" />
            <Image src={appstore} alt="appstore" />
          </div>
        </div>
      </div>
      <div className="w-1/2 flex items-end justify-center">
        <Image src={mobileJaguar} alt="triangle" className="object-contain" width={600} height={650}/>
      </div>
    </div>
  );
};

export default DownloadApp;
