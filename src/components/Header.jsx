import React from "react";

const Header = () => {
  return (
    <>
      <div className="head bg-[#4BAF47] flex justify-around text-white h-10">
        <div className="flex gap-10">
          <div className="flex items-center justify-center gap-2">
            <i class="fa-solid fa-location-dot"></i>
            <a href="#">88 Road Broklyn Golden Street. New York</a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <i class="fa-solid fa-envelope"></i>
            <a href="#">support@agrios.com</a>
          </div>
        </div>

        <div className="flex items-center gap-10">
          <a href="#">
            <i class="fa-brands fa-twitter"></i>
            </a>
          <a href="#">
          <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="#">
          <i class="fa-brands fa-pinterest-p"></i>
          </a>
          <a href="#">
          <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
