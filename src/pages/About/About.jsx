import React from "react";
import bout from "../../assets/about.png";
import bout1 from "../../assets/about1.png";
import bout2 from "../../assets/about2.png";
import Eco from "../../assets/eco.png";
import Brand from "../../assets/aboutbrand.png";
import image from '../../assets/farmer1.png';
import image2 from '../../assets/farmer3 (1).png';
import image3 from '../../assets/farmer3 (2).png';
import icon from "../../assets/Vector.png";
import { BsFillPersonFill } from "react-icons/bs";
import customer1 from "../../assets/customer1.png";
import customer2 from "../../assets/customer2.png";

const About = () => {
    const testimonials = [
        {
            name: "Bernard Talbot",
            feedback: "This is the best service I have ever used! The products are top-notch and the service is unbeatable.",
            image: customer1,
        },
        {
            name: "Sarah Albert",
            feedback: "Amazing experience! The products are fresh and organic, and the customer service is excellent.",
            image: customer2,
        },
       
    ];

    return (
        <div>
            <div>
                <img src={bout} alt="" />
            </div>
            {/* Get to know part */}
            <div className="grid grid-cols-1 lg:grid-cols-2 px-5 xl:px-0 mt-10 w-full xl:w-[60%] mx-auto">
                <div className="relative">
                    <img src={bout1} alt=" " className="max-w-[350px]" />
                    <img
                        src={bout2}
                        alt=""
                        className="absolute bottom-0 -left-20 rounded-xl max-w-[250px]"
                    />
                </div>
                <div className="flex flex-col gap-6">
                    <div>
                        <h1 className="text-yellow-500 font-medium">Get To Know Us</h1>
                        <h1 className="text-3xl font-semibold tracking-wide">
                            the Best Agriculture <br /> Market
                        </h1>
                    </div>
                    <h1 className="tracking-wide font-medium text-green-500">
                        There are many variations of passa of lorem available, but the majority have suffered alteration.
                    </h1>
                    <p className="tracking-wide font-thin">
                        There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humor or random word which don’t look even.
                    </p>
                    <div>
                        <p>
                            <span className="text-yellow-500 mr-2">✔</span>Suspe ndisse suscipit sagittis leo
                        </p>
                        <p>
                            <span className="text-yellow-500 mr-2">✔</span>Entum estibulum disgnissim posuer
                        </p>
                        <p>
                            <span className="text-yellow-500 mr-2">✔</span>Lorem Ipsum on the tend to repea
                        </p>
                    </div>
                    <button className="bg-green-600 w-[30%] px-3 py-2 text-sm text-white rounded-lg">
                        Discover More
                    </button>
                </div>
            </div>
            {/* Eco-friendly part */}
            <div>
                <img src={Eco} alt="" className="mt-10" />
                <img src={Brand} alt="" />
            </div>

            {/* Testimonial part */}
            <section className="bg-gray-50 py-16 ">
                <div className="container mx-auto text-center w-[50%] ">
                    <h2 className=" text-yellow-400 font-bold mb-3">Our Testimonials</h2>
                    <h2 className="text-3xl font-bold mb-8">What They Say</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex items-center">
                                <div className="flex-shrink-0">
                                    <img src={testimonial.image} alt="" className=" w-24 h-32 rounded-xl" />
                             
                                </div>
                                <div className="ml-6">
                                    <p className="text-gray-600 text-left text-sm">{testimonial.feedback}</p>
                                    <h3 className="mt-2 text-lg  text-right font-semibold">{testimonial.name}</h3>
                                    <h3 className=" text-sm  text-right text-gray-400">customer</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Members */}
            <section className="bg-[#ffffff] py-12 text-center w-full">
                <h3 className="text-[#eec044] text-xl font-script mb-4">Team Members</h3>
                <h2 className="text-[#1f1e17] text-4xl font-extrabold mb-10">Meet Our Farmers</h2>
                <div className="w-[80%] mx-auto flex justify-end gap-x-10">
                    <div className="w-[370px] h-[440px] bg-white rounded-lg shadow mb-20">
                        <div className="rounded-lg overflow-hidden">
                            <img src={image} alt="Avatar" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-[245px] h-[92px] border border-gray-100 shadow p-4 -mt-8 ml-auto bg-white rounded-lg relative">
                            <span className="w-[50px] h-[50px] bg-green-500 rounded-md absolute left-0 transform -translate-x-1/2 flex items-center justify-center">
                                <img src={icon} alt="Icon" className="w-[32px] h-[32px]" />
                            </span>
                            <div className="text-right pr-2">
                                <h3 className="text-lg font-extrabold text-gray-900">Kevin Smith</h3>
                                <p className="text-sm font-medium text-gray-500">Farmer</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[370px] h-[440px] bg-white rounded-lg shadow">
                        <div className="rounded-lg overflow-hidden">
                            <img src={image3} alt="Avatar" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-[245px] h-[92px] border border-gray-100 shadow p-4 -mt-8 ml-auto bg-white rounded-lg relative">
                            <span className="w-[50px] h-[50px] bg-green-500 rounded-md absolute left-0 transform -translate-x-1/2 flex items-center justify-center">
                                <img src={icon} alt="Icon" className="w-[32px] h-[32px]" />
                            </span>
                            <div className="text-right pr-2">
                                <h3 className="text-lg font-extrabold text-gray-900">Jessica Brown</h3>
                                <p className="text-sm font-medium text-gray-500">Farmer</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[370px] h-[440px] bg-white rounded-lg shadow">
                        <div className="rounded-lg overflow-hidden">
                            <img src={image2} alt="Avatar" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-[245px] h-[92px] border border-gray-100 shadow p-4 -mt-8 ml-auto bg-white rounded-lg relative">
                            <span className="w-[50px] h-[50px] bg-green-500 rounded-md absolute left-0 transform -translate-x-1/2 flex items-center justify-center">
                                <img src={icon} alt="Icon" className="w-[32px] h-[32px]" />
                            </span>
                            <div className="text-right pr-2">
                                <h3 className="text-lg font-extrabold text-gray-900">David Martin</h3>
                                <p className="text-sm font-medium text-gray-500">Farmer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
