import React from 'react';
import search from '../assets/search1.png';
import shop from '../assets/shop2.png';
import project from '../assets/project.png';
import { MdKeyboardArrowDown } from "react-icons/md";

import '../App.css';
const Grid_Content = () => {
  return (
    <div className='w-full'>
    <div className='nav bg-yellow-50'>
    <div className='flex items-center justify-center text-black gap-x-12 text-xl'>
          <div className='flex gap-x-0'>
          <a href="">Home</a>  
          <MdKeyboardArrowDown  className='mt-2'/>
          </div>
         <div className='flex gap-x-0'>
         <a href="">About</a>
         <MdKeyboardArrowDown  className='mt-2'/>
         </div>
         <div className='flex gap-x-0'>
         <a href="">Project</a>
         <MdKeyboardArrowDown  className='mt-2'/>
         </div><div className='flex gap-x-0'>
         <a href="">News</a>
         <MdKeyboardArrowDown  className='mt-2'/>
         </div><div className='flex gap-x-0'>
         <a href="">Shop</a>
         <MdKeyboardArrowDown  className='mt-2'/>
         </div><div className='flex gap-x-0'>
         <a href="">Contact</a>
         <MdKeyboardArrowDown  className='mt-2'/>
         </div>
         </div>
    <div className='flex items-center justify-between gap-x-8 text-black'>
        <div className="flex items-center justify-center border-r border-white/30 pr-6">
        <img src={search} alt="Search" className="w-6 h-6 text-black" />
      </div>
      <div className="relative flex items-center">
        <img src={shop} alt="Cart" className="w-6 h-6 text-black" />
        <div className="absolute top-[-0.25rem] right-[-0.25rem] flex items-center justify-center w-4 h-4 bg-green-600 text-white text-[11px] font-bold rounded-full">
          0
        </div>
      </div>
        </div>
    </div>
    <div className='project'>
     <img src={project}  alt=""/>
    </div>
    </div>
  )
}

export default Grid_Content