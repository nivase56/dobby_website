import React from "react";
import bluePorsche from "@/Images/blueporsche.png"
import Image from "next/image";
import HomeText from "../atoms/Container/HomeText";
import AppointmentContainer from "../atoms/AppointmentContainer";
import BookingContainer from "../atoms/Container/BookingContainer";
import OfferContainer from "../atoms/Container/OfferContainer";
import PopularWashing from "../atoms/Container/PopularWashing";
import Testimonial from "../atoms/Container/Testimonial";
import DownloadApp from "../atoms/Container/DownloadApp";
import Footer from "../atoms/Footer";
import CopyRight from "../atoms/Container/CopyRight";
const HomePage = () => {
  return (
    <div>
      
      <div className="flex justify-end items-center h-[90%] mt-20">
        <HomeText/>
      <Image src={bluePorsche} alt="blue-porsche" width={670} />
      </div>
      <AppointmentContainer/>
      <BookingContainer/>
      <OfferContainer/>
      <PopularWashing/>
      <Testimonial/>
      <DownloadApp/>
      <Footer/>
      <CopyRight/>
    </div>
  );
};

export default HomePage;
