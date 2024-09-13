import React from "react";
import logo from "../assets/logoTwo.png";
import lined from "../assets/lined.png";
import leaf from "../assets/leaf.png";
import send from "../assets/send.png";

const Footer = () => {
  return (
    <>
      <div className="bg-[#24231D]">
        <div className="max-w-6xl mx-auto flex gap-10 py-20 text-[#A5A49A]">
          <div className="max-w-64">
            <img src={logo} alt="" />
            <p className="my-5">
              There are many variations of passages of lorem ipsum available,
              but the majority suffered.
            </p>

            <div className="flex gap-5 text-white">
              <a href="#">
                <i class="fa-brands fa-twitter bg-[#1F1E17] p-2 rounded-full"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-facebook bg-[#1F1E17] p-2 rounded-full"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-pinterest-p bg-[#1F1E17] p-2 rounded-full"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-instagram bg-[#1F1E17] p-2 rounded-full"></i>
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-white text-2xl font-semibold">Explore</h2>
            <div>
              <img src={lined} alt="" />
            </div>
            <ul className="w-40 flex flex-col gap-2">
              <li className="flex items-center gap-3">
                <div>
                  <img src={leaf} alt="" />
                </div>
                <a href="#">About</a>
              </li>
              <li className="flex items-center gap-3">
                <div>
                  <img src={leaf} alt="" />
                </div>
                <a href="#">Services</a>
              </li>
              <li className="flex items-center gap-3">
                <div>
                  <img src={leaf} alt="" />
                </div>
                <a href="#" className="whitespace-nowrap">
                  Our Projects
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div>
                  <img src={leaf} alt="" />
                </div>
                <a href="#">Meet the Farmers</a>
              </li>
              <li className="flex items-center gap-3">
                <div>
                  <img src={leaf} alt="" />
                </div>
                <a href="#">Latest News</a>
              </li>
              <li className="flex items-center gap-3">
                <div>
                  <img src={leaf} alt="" />
                </div>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <div>
              <h2  className="text-white text-2xl font-semibold">News</h2>
              <div>
                <img src={lined} alt="" />
              </div>
            </div>

            <div className="ml-20 flex flex-col gap-5">
              <div>
                <p className="text-white">Bringing Food Production Back To Cities</p>
                <span className="text-[#EEC044]">July 5, 2022</span>
              </div>
              <div>
                <p className="text-white">The Future of Farming, Smart Irrigation Solutions</p>
                <span className="text-[#EEC044]">July 5, 2022</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-white text-2xl font-semibold">Contact</h2>
            <div>
              <img src={lined} alt="" />
            </div>
            <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <i class="fa-solid fa-phone text-[#EEC044]"></i>
              <p>666 888 0000</p>
            </div>
            <div className="flex items-center gap-3">
              <i class="fa-solid fa-envelope text-[#EEC044]"></i>
              <p>needhelp@company.com</p>
            </div>
            <div className="flex items-center gap-3">
              <i class="fa-solid fa-location-dot text-[#EEC044]"></i>
              <p>80 broklyn golden street line New York, USA</p>
            </div>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Your Email Address"
                className="h-11 rounded-l-lg pl-3"
              />
              <div className="bg-[#4BAF47] p-4 rounded-r-lg">
                <a href="#">
                  <img src={send} alt="" />
                </a>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="bg-[#1F1E17]">
            <div className="max-w-6xl mx-auto flex justify-between text-[#A5A49A] py-3">
            <div>
                <p>© All Copyright 2024 by shawonetc Themes</p>
            </div>
            <div>
                <p>Terms of Use | Privacy Policy</p>
            </div>
          </div>
            </div>
      </div>
    </>
  );
};

export default Footer;
