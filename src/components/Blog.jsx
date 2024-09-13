import React from "react";
import kevin from "../assets/kevin.png";
import jessica from "../assets/jessica.png";
import david from "../assets/david.png";
import share from "../assets/share.png";
import agriOne from "../assets/agriOne.png"
import agriTwo from "../assets/agriTwo.png"
import agriThree from "../assets/agriThree.png"
import agriFour from "../assets/agriFour.png"
import agriFive from "../assets/agriFive.png"


const Blog = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto mb-10">
        <div className="text-center">
          <p className="blog text-[#EEC044] text-xl">From the Blog</p>
          <h2 className="text-4xl font-semibold mb-20">News & Articles</h2>
        </div>

        <div className="flex gap-10">
          <div className="relative">
            <div>
              <img src={kevin} alt="" />
            </div>
            <div className=" absolute  -inset-5 -inset-x-5 flex justify-end items-end  ">
              <div className="bg-white px-12 py-4 rounded-lg shadow-2xl flex flex-col items-end"> 
              <p className="whitespace-nowrap font-semibold">Kevin Smith</p>
              <span className="text-[#878680]">Farmer</span>
              </div>
            </div>
            <div className="absolute inset-36 inset-y-[22rem]">
              <img src={share} alt="" />
            </div>
          </div>

          <div className="relative">
            <div>
              <img src={jessica} alt="" />
            </div>
            <div className=" absolute  -inset-5 -inset-x-5 flex justify-end items-end  ">
              <div className="bg-white px-12 py-4 rounded-lg shadow-2xl flex flex-col items-end"> 
              <p className="whitespace-nowrap font-semibold">Jessica Brown</p>
              <span className="text-[#878680]">Farmer</span>
              </div>
            </div>
            <div className="absolute inset-32 inset-y-[22rem]">
              <img src={share} alt="" />
            </div>
          </div>

          <div className="relative">
            <div>
              <img src={david} alt="" />
            </div>
            <div className=" absolute  -inset-5 -inset-x-5 flex justify-end items-end  ">
              <div className="bg-white px-12 py-4 rounded-lg shadow-2xl flex flex-col items-end"> 
              <p className="whitespace-nowrap font-semibold">David Martin</p>
              <span className="text-[#878680]">Farmer</span>
              </div>
            </div>
            <div className="absolute inset-36 inset-y-[22rem]">
              <img src={share} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[90%] mx-auto grid grid-cols-5 gap-5 mb-20">
        <div>
            <img src={agriOne} alt="" />
        </div>
        <div>
            <img src={agriTwo} alt="" />
        </div>
        <div>
            <img src={agriThree} alt="" />
        </div>
        <div>
            <img src={agriFour} alt="" />
        </div>
        <div>
            <img src={agriFive} alt="" />
        </div>
      </div>
    </>
  );
};

export default Blog;
