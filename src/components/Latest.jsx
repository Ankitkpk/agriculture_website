import React from 'react'
import { latest } from './data'
import healthy from "../assets/healthy.png"
import organic from "../assets/organic.png"

const Latest = () => {
  return (
    <>
    <div className='max-w-6xl mx-auto mb-10'>
        <div className='text-center'>
            <h1 className='latest text-[#EEC044] text-4xl'>Latest Added</h1>
            <p className='text-5xl font-semibold'> Latest Products</p>
        </div>
    </div>

    <div className='max-w-6xl mx-auto grid grid-cols-3 gap-5'>
      {latest.map(product =>(
        <div key={product.name}>
          <img src={product.logo} alt="" />
          <div className='flex flex-col justify-center items-center mt-2'>
          <h2 className='text-xl font-semibold'>{product.name}</h2>
          <p className='text-[#4BAF47]'>{product.price}</p>
          <div className='m-2'>
          <img src={product.foot} alt="" />
          </div>
          </div>
        </div>
      ))}
    </div>

    <div className='flex max-w-6xl mx-auto gap-5 mt-20 text-white'>
      <div className='bgOne flex flex-col justify-center pl-10'>
        <span className='text-sm'>100% ORGANIC</span>
        <p className='text-5xl'>Quality Oranic <br /> Food Store</p>
        <div>
        <button className='text-black bg-white px-5 py-3 rounded-xl mt-5'>
          <a href="#">Order Now</a>
        </button>
        </div>
      </div>

      <div className='bgTwo flex flex-col justify-center pl-10'>
        <span className='text-sm'>100% ORGANIC</span>
        <p className='text-5xl'>Healthy Producrs <br /> Everyday</p>
        <div>
        <button className='text-black bg-white px-5 py-3 rounded-xl mt-5'>
          <a href="#">Order Now</a>
        </button>
        </div>
      </div>
    </div>

    <div className='bgThree relative bottom-[4rem] text-white flex flex-col justify-center items-center'>
      <p className='text-6xl font-bold'>Be Healthy & Eat Only Fresh</p>
      <p className='text-6xl font-bold'>Organic Vegetables</p>
      <div>
      <button className='bg-[#4BAF47] px-10 py-3 rounded-xl mt-16'>
        <a href="#">Show Now</a>
      </button>
    </div>
    </div>
    
    </>
  )
}

export default Latest
