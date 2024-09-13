import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar flex justify-between max-w-6xl mx-auto items-center m-5">
        <div>
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="flex gap-8">
          <ul className="flex flex-row gap-8 font-semibold text-[#878680]">
            <Link to="/">
              {" "}
              <li>
                <a href="#" className="text-black">
                  Home <i class="fa-solid fa-chevron-down text-xs"></i>
                </a>
              </li>
            </Link>
            <Link to="/about">
              <li>
                <a href="#">About</a>
              </li>
            </Link>
            <Link to="/service">
              <li>
                <a href="#">
                  Services <i class="fa-solid fa-chevron-down text-xs"></i>
                </a>
              </li>
            </Link>
            <li>
              <a href="#">
                Projects <i class="fa-solid fa-chevron-down text-xs"></i>
              </a>
            </li>
            <li>
              <a href="#">
                News <i class="fa-solid fa-chevron-down text-xs"></i>
              </a>
            </li>
            <li>
              <a href="#">
                Shop <i class="fa-solid fa-chevron-down text-xs"></i>
              </a>
            </li>
            <Link to="/contact">
              <li>
                <a href="#">Contact</a>
              </li>
            </Link>
          </ul>
          <div className="bord"></div>
          <a href="#">
            <i class="fa-solid fa-magnifying-glass"></i>
          </a>
          <a href="#">
            <i class="fa-solid fa-cart-shopping"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
