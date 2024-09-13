import React from 'react'
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';
import project6 from '../assets/project6.png';
const Project = () => {
  return (
    <div className='flex items-center justify-center mt-20 bg-white'>
    <div className='grid grid-cols-3 gap-4'>
      <div>
        <img src={project1} alt=""   />
      </div>
      <div>
      <img src={project2} alt=""  />
      </div>
      <div><img src={project3} alt="" /></div>
      <div><img src={project4} alt="" /></div>
      <div><img src={project5} alt=""  /></div>
      <div><img src={project6} alt="" /></div>
    </div>
    </div>
  )
}

export default Project