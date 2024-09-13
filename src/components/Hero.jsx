import React from "react";
import circleOne from "../assets/circle.png";
import cirleTwo from "../assets/circle2.png";
import Return from "../assets/return.png"
import Ship from "../assets/shipping.png"
import Store from "../assets/store.png"

const Hero = () => {
  return (
    <>
      <div className="bg mb-40">
        <div className="max-w-6xl mx-auto flex justify-between items-center pt-32">
          <div>
            <div className="text-9xl text-white leading-[80px]">
              <p className="agri text-[#EEC044] relative z-10">Agriculture</p>
              <p className="text-8xl font-semibold tracking-tighter">
                & Organic
              </p>
              <p className="text-8xl font-semibold">Market</p>
            </div>
            <button className="text-white bg-[#4BAF47] px-10 py-3 rounded mt-10">
              <a href="#">Show More</a>
            </button>
          </div>

          <div>
            <div>
              <img src={circleOne} alt="" />
              <br />
              <img src={cirleTwo} alt="" />
            </div>
          </div>
        </div>

        <div className="bg-white flex max-w-6xl mx-auto p-5 gap-16 justify-center rounded relative bottom-[-5rem] shadow-xl">
            <div className="flex items-center gap-5">
                <div>
                    <img src={Return} alt="" />
                </div>
                <div>
                    <p className="font-bold">Return Policy</p>
                    <p className="text-[#878680]">MoneyBack Gurantee</p>
                </div>
            </div>

            <div className="line"></div>

            <div className="flex items-center gap-5">
                <div>
                    <img src={Ship} alt="" />
                </div>
                <div>
                    <p className="font-bold">Free Shipping</p>
                    <p className="text-[#878680]">On All Orders Over $45.00</p>
                </div>
            </div>

            <div className="line"></div>


            <div className="flex items-center gap-5">
                <div>
                    <img src={Store} alt="" />
                </div>
                <div>
                    <p className="font-bold">Store Locator</p>
                    <p className="text-[#878680]">Find Your Nearest Store</p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
