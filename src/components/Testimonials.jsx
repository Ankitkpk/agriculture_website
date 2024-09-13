import React from "react";
import avatarOne from "../assets/avatarOne.png";
import avatarTwo from "../assets/avatarTwo.png"; 
import apple from "../assets/appletree.png";
import wheat from "../assets/wheat.png"; // 
import icon from "../assets/iconl.png";

const Testimonials = () => {
  return (
    <div className="testBg">
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center py-12">

        <div className="text-center mb-10 text-[#EEC044]">
          <p className="test text-lg ">Our Testimonials</p>
          <h2 className="text-3xl font-semibold text-[#1F1E17]">What They Say</h2>
        </div>

        <div className="flex  gap-24">
          <div className="relative">
            <img src={apple} alt="" />
            <div className="absolute inset-y-0 left-[-5rem] flex items-center">
              <img src={avatarOne} alt="" />
            </div>
            <div className="absolute inset-x-8 inset-28">
              <img src={icon} alt="" />
            </div>
          </div>

          <div className="relative">
            <img src={wheat} alt="Apple Tree" />
            <div className="absolute inset-y-0 left-[-5rem] flex items-center">
              <img src={avatarTwo} alt="" />
            </div>
            <div className="absolute inset-x-8 inset-28">
              <img src={icon} alt="" />
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
