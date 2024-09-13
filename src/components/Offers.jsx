import React from "react";
import { offers } from "./data";

const Offers = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="offer text-[#EEC044] text-2xl">Special Offers</p>
          <h2 className="text-4xl font-semibold">Today's Hot Deal</h2>
        </div>

        <div className="grid grid-cols-4 mt-5 gap-5">
          {offers.map((product,index) => (
            <div key={index}>
              <div>
                <img src={product.logo} alt="" />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="mt-5 font-semibold">{product.name}</h4>
                  <p className="text-[#4BAF47]">{product.price}</p>
                </div>
                <div>
                  <img src={product.foot} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Offers;
