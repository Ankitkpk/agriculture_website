// CardComponent.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardComponent = ({ title, imageSrc, link }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(link);
    };

    return (
        <div className="max-w-xs rounded  w-[80%] mx-auto shadow-lg relative cursor-pointer" onClick={handleClick}>
            <img className="w-full h-full rounded-xl" src={imageSrc} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold absolute -bottom-10 bg-white  tracking-tighter px-5 flex items-center  py-8 text-xl rounded-lg mb-2">{title}</div>
                
            </div>
            <div className="px-6 pt-4 pb-2 absolute z-20 bottom-4 right-11 ">
                <span className="inline-block bg-green-200 rounded-md px-3 py-1 text-sm font-semibold text-green-700 mr-2 mb-2">Read More</span>
            </div>
        </div>
    );
};

export default CardComponent;
