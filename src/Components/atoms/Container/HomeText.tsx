import React from 'react'
import Heading from "../../atoms/Heading";
import AppStore from "@/Images/appstore.png"
import PlayStore from "@/Images/googleplay.png"
import Image from "next/image";

const HomeText = () => {
  return (
    <div className="flex flex-col mr-14">
      <Heading content="Book a Wash, " />
      <div className="flex">
        <Heading content="Get a Instant" />
        <span className="ml-2 text-5xl text-blue-500 font-semibold">Shine</span>
      </div>
      <p className="w-96 py-5 text-sm">
        Get a car wash wherever and whenever you need it with your IOS and
        Android device.
      </p>
      <div className="flex gap-4">
      <Image src={AppStore} alt="app-store"/>
      <Image src={PlayStore} alt="play-store"/>
      </div>
      </div>
  )
}

export default HomeText
