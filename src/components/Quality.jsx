import React from 'react'
import farmer from "../assets/farmer.png"
import pfarmer from "../assets/pfarmer.png"
import sfarmer from "../assets/sfarmer.png"

const Quality = () => {
  return (
    <>
    <div className='max-w-6xl mx-auto flex mt-32 mb-20 gap-10'>
        <div className='w-[100%]'>
            <img src={farmer} alt=""  />
        </div>
        <div>
            <span className='quality text-[#EEC044] text-lg'>Quality Products</span>
            <h3 className='text-4xl font-semibold'>Only Organic food</h3>
            <p className='my-11 text-[#878680]'>There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humor or random word.</p>
            <div className='flex gap-5'>
                <div>
                    <img src={pfarmer} alt="" />
                </div>
                <div>
                    <h4 className='font-semibold'>Professional Farmers</h4>
                    <p className='text-[#878680]'>There are many variation of passenges of lorem ipsum.</p>
                </div>

            </div>
            <div className='flex gap-5 my-10'>
                <div>
                    <img src={pfarmer} alt="" />
                </div>
                <div>
                    <h4 className='font-semibold'>Solution for Farming</h4>
                    <p className='text-[#878680]'>There are many variation of passenges of lorem ipsum.</p>
                </div>
            </div>

            <div> 
                    <button  className='bg-[#4BAF47] text-white py-5 px-10 rounded-xl'>
                        <a href="#">Start Shopping Now</a>
                    </button>
                </div>
        </div>
    </div>

    <div className='bg-[#1F1E17]'>
        <div className='max-w-6xl mx-auto text-[#A5A49A] h-44 flex justify-center items-center gap-40'>
            <a href="#">Agriculture Products</a>
            <a href="#">Projects Completed</a>
            <a href="#">Satisfied Clients</a>
            <a href="#">Experts Farmers</a>
        </div>
    </div>
    </>
  )
}

export default Quality
