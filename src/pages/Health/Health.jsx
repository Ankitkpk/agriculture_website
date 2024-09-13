import React from 'react'
import logo2 from '../../assets/logo2.png';
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import farm from '../../assets/farm.png';
import Grid_Content from '../../components/Grid_content.jsx'
import r_project1 from '../../assets/r_project1.png';
import r_project2 from '../../assets/r_project2.png';
import r_project3 from '../../assets/r_project3.png';
import r_project4 from '../../assets/r_project4.png';

import '../../App.css';
const Health = () => {
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
      <div className='flex items-center justify-center mt-20'>
        <div className='flex flex-col'>
           <img src={farm} alt="" /> 
     <div className="bg-white flex justify-center items-start py-10">
      <div className="flex w-[1200px] h-[840px] space-x-6">
       
        <div className="w-[789.73px] flex flex-col">
          <div className="mb-4">
            <h1 className="font-manrope font-extrabold text-[30px] leading-[42px] text-[#1f1e17ff]">Healthy Food</h1>
          </div>
          <p className="text-[#878680ff] mb-10">Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div className="font-manrope text-[#1f1e17ff] font-bold text-[26px] leading-[26px] mb-4">Challenges</div>
          <p className="text-[#1f1e17ff] mb-10">Nemo enim ipsam voluptatem quia voluptas. Accusamus et iusto odio dignissimos ducimus. Nam liberto tempore, cum soluta nobis est elidend. Accusamus et iusto odio dignissimos ducimus.</p>
          <p className="text-[#878680ff] mb-10">When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <p className="text-[#1f1e17ff] font-bold mb-10">Biophilia is the idea that humans possess an innate tendency to seek connections with nature. The term translates</p>
          <p className="text-[#878680ff] mb-10">The term translates When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <p className="text-[#878680ff]">Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className="flex flex-col w-[410.25px]">

<div className="bg-white p-2 shadow-lg mb-10 border-t-4 border-t-yellow-200 rounded-lg">
  <div className="flex flex-col items-start space-y-2 pl-8">
    <div className="text-[#878680ff] font-manrope text-[16px] font-semibold">Healthy Food</div>
    <div className="text-[#878680ff] text-[14px]">Farmer:</div>
    <div className="text-[#1f1e17ff] font-manrope text-[16px] font-semibold">Mike Hardson</div>
    <div className="text-[#878680ff] text-[14px]">Duration:</div>
    <div className="text-[#1f1e17ff] font-manrope text-[16px] font-semibold">4.5 Months</div>
    <div className="text-[#878680ff] text-[14px]">Location:</div>
    <div className="text-[#1f1e17ff] font-manrope text-[16px] font-semibold">Broklyn, New Your</div>
  </div>
  <div className="mt-8 flex pl-8 space-x-4">
    <div className="w-10 h-10 bg-[#f8f7f0ff] flex items-center justify-center rounded-full">
      <FaInstagram size={20} />
    </div>
    <div className="w-10 h-10 bg-[#f8f7f0ff] flex items-center justify-center rounded-full">
      <FaPinterestP size={20} />
    </div>
    <div className="w-10 h-10 bg-[#f8f7f0ff] flex items-center justify-center rounded-full">
      <FaFacebookF size={20} />
    </div>
    <div className="w-10 h-10 bg-[#f8f7f0ff] flex items-center justify-center rounded-full">
      <FaTwitter size={20} />
    </div>
  </div>
</div>
</div>
      </div>
    </div>
        </div>
      
      </div>
    <div className='flex flex-col items-center justify-center p-5'>
         <p className='text-xl text-yellow-200 pb-5'>Recently completed</p>
        <p className='text-4xl pb-8'>Similar Projects</p>
     <div className='flex gap-2'>
     <div><img src={r_project1} alt="" /></div>
      <div><img src={r_project2} alt="" /></div>
      <div><img src={r_project3} alt=""  /></div>
      <div><img src={r_project4} alt="" /></div>
     </div>
    </div>
    <div className='mt-20'>
    </div>
    
    </div>
  )
}

export default Health