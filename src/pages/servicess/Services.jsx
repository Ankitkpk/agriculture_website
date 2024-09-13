// HomePage.jsx
import React from "react";
import CardComponent from "../../components/Servicecard";
import service from "../../assets/service.png";
import service1 from "../../assets/servicebrand.png";
import service2 from "../../assets/servicevideo.png";
import service3 from "../../assets/service-10.webp.png";
import service4 from "../../assets/service-09.webp.png";
import service5 from "../../assets/service-08.webp.png";
import Section5 from "../../assets/Section5.png";
import harvest from "../../assets/harvest.png"; 
import harvest1 from "../../assets/harvest1.png"; 
import harvest2 from "../../assets/harvest2.png"; 

const HomePage = () => {
  const cards = [
    {
      title: "Agricultural Products",
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1661962692059-55d5a4319814?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWdyaWN1bHR1cmV8ZW58MHx8MHx8fDA%3D",
      description: "Brief description about Agricultural Products.",
      link: "/agricultural-products",
    },
    {
      title: "Organic Products",
      imageSrc:
        "https://images.unsplash.com/photo-1654674611706-53157118a4a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3JnYW5pYyUyMGZhcm1pbmd8ZW58MHx8MHx8fDA%3D",
      description: "Brief description about Organic Products.",
      link: "/organic-products",
    },
    {
      title: "Fresh Vegetables",
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1664302148512-ddea30cd2a92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJlc2glMjB2ZWdldGFibGVzfGVufDB8fDB8fHww",
      description: "Brief description about Fresh Vegetables.",
      link: "/fresh-vegetables",
    },
    {
      title: "Dairy Products",
      imageSrc:
        "https://images.unsplash.com/photo-1630356090105-808ba2fe97f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGFpcnklMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D",
      description: "Brief description about Dairy Products.",
      link: "/dairy-products",
    },
  ];

  const agricultural = [
    {
      name: "Quality standards",
      imagess: service5,
    },
    {
      name: "Organic Farming",
      imagess: service4,
    },
    {
      name: "Agricultural Products",
      imagess: service3,
    },
  ];

  return (
    <div>
      <img src={service} alt="" />
      <div className="grid grid-cols-1 sm:grid-cols-2 py-10 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <CardComponent
            key={index}
            title={card.title}
            imageSrc={card.imageSrc}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>
      <div className=" relative">
        <img src={service1} alt="" className=" mt-10" />
        <img src={service2} alt="" className="" />
        <div className="grid grid-cols-3 w-[70%] mx-auto gap-5 absolute -bottom-48 left-48">
          {agricultural.map((item, index) => (
            <div key={index} className=" rounded-xl bg-white ">
              <p className="text-center py-3 font-medium text-lg">
                {item.name}
              </p>
              <img src={item.imagess} alt="" className="rounded-b-xl" />
            </div>
          ))}
        </div>
      </div>
      {/* old man part */}
      <div className="grid grid-cols-1 lg:grid-cols-2 px-5 xl:px-0 mt-72 w-full xl:w-[70%] mx-auto">
                <div className="relative ml-20">
                    <img src={Section5} alt=" " className="max-w-[350px]" />
                    
                </div>
                <div className="flex flex-col gap-6">
                    <div>
                        <h1 className="text-yellow-500 font-medium">What We Do</h1>
                        <h1 className="text-3xl font-semibold tracking-wide">
                        Healthy Food for Good <br />
                        Growth
                        </h1>
                    </div>
                    <h1 className="tracking-wide font-medium text-green-500">
                    Lorem ipsum dolor sit amet nsectetur cing elit. Suspe ndisse suscipit
sagittis leo sit met entum estibu dignissim posuere cubilia durae. Leo sit met
entum cubilia crae onec                    </h1>
                    <p className="tracking-wide font-thin">
                    Lorem ipsum dolor sit amet adipiscing elit. Nulla placerat posuere dui.
                    Pellentesque venenatis sem non lacus ac auctor.                    </p>
                    <div className="flex justify-between items-center">
                        <img src={harvest} alt="" className="" />
                        <img src={harvest1} alt="" className="" />
                        <img src={harvest2} alt="" className="" />
                        
                    </div>
                 
                </div>
            </div>
      
    </div>
  );
};

export default HomePage;
