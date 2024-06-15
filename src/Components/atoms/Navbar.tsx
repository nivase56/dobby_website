import React from "react";
import logo from "@/Images/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 flex p-8 items-center justify-center gap-8 bg-transparent w-[60%]  ml-auto mr-auto">
      <Image src={logo} alt="logo" className="w-44 h-9 px-3" />
      <div className="flex items-center gap-6 mr-3 text-sm">
        <h1>Live Offers</h1>
        <h1>Pricing</h1>
        <h1>Blog</h1>
        <h1>Why choose us</h1>
      </div>
      <button className="p-2 w-32 rounded-lg text-white text-sm bg-blue-500">
        Book watch
      </button>
    </div>
  );
};

export default Navbar;
