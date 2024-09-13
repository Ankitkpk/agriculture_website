import React from 'react'
import logo2 from '../../assets/logo2.png'
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import '../../App.css';
import Grid_Content from '../../components/Grid_content.jsx';
import Project from '../../components/Project.jsx';
const Grid = () => {
  return (
    <div>
    <nav className='flex items-center justify-evenly p-4'>
        <div className='pl-4'>
            <img src={logo2} alt="" />
        </div>
        <div>
        <div className='flex items-center justify-center gap-x-2'>
        <li className="bg-gray-100 text-black w-8 h-8 rounded-full flex items-center justify-center">
        <FaInstagram />
         </li>
         <li className="bg-gray-100 text-black w-8 h-8 rounded-full flex items-center justify-center">
        <FaFacebook/>
         </li>
         <li className="bg-gray-100 text-black w-8 h-8 rounded-full flex items-center justify-center">
        <FaPinterestP/>
         </li>
         <li className="bg-gray-100 text-black w-8 h-8 rounded-full flex items-center justify-center">
        < FaTwitter/>
         </li>
         
          </div>
        </div >
        <div className='text-black'>
        <div className="text-sm text-gray-300">Call Anytime</div>
        <div className="font-semibold text-lg">+ 98 (000) - 9630</div>
        </div>
        <div className='text-black'>
        <div className="text-sm text-gray-300">Send Email</div>
        <div className="font-semibold text-lg">ambed @agrios.com</div>
        </div>
        <div className='text-black'>
        <div className="text-sm text-gray-300">380 St Kilda Road</div>
        <div className="font-semibold text-lg">Melbourne,Australia</div>
        </div>
    </nav>
    <Grid_Content/>
    <Project/>
    <div className='mt-20'>
    </div>
    
    </div>
  )
}

export default Grid