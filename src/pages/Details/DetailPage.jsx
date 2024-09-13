// DetailPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import Section from "../../assets/Section2.png";
import Section1 from "../../assets/Section3.png";
import Section2 from "../../assets/Section4.png";
import Section3 from "../../assets/servicehead.png";




const DetailPage = () => {
    const { productType } = useParams();


  return (
    <div>
        <img src={Section3} alt="" />
        <div className="p-6 w-[70%] mx-auto">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="lg:w-1/4">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <ul className="space-y-2">
              <li className="hover:text-green-500 cursor-pointer">
                Agriculture Products
              </li>
              <li className="hover:text-green-500 cursor-pointer">
                Organic Products
              </li>
              <li className="hover:text-green-500 cursor-pointer">
                Fresh Vegetables
              </li>
              <li className="hover:text-green-500 cursor-pointer">
                Dairy Products
              </li>
              <li className="hover:text-green-500 cursor-pointer">Harvest</li>
            </ul>
          </div>
          <div className="mt-6 bg-green-500 text-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-4">Need Help?</h2>
            <p className="mb-4">
              Speak with a human to fill out a form! Call corporate office and
              we will connect you with a team member who can help.
            </p>
            <div className="font-bold text-2xl mb-4">+12 (000) 9-850</div>
            <button className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Start Shopping Now
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:w-3/4">
        <img
            className="w-full rounded-lg mb-4"
            src={Section}
            alt=""
          />
          <h1 className="text-4xl font-bold mb-4">{productType}</h1>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            nostrum itaque, dicta veritatis doloremque vero consequuntur
            asperiores enim nisi molestias beatae possimus est veniam. Est nemo
            dolorem totam iusto tempore! Praesentium minima non laboriosam
            corrupti architecto quia iusto soluta alias. At quidem excepturi
            modi perspiciatis, dolore ducimus, corrupti animi officiis ipsam
            dolorum dignissimos voluptates, dolores eveniet rem optio ex.
            Voluptas? Ab harum, ut obcaecati consectetur eos optio iure minima
            perferendis veritatis qui distinctio natus cum corrupti, tempora hic
            commodi error atque debitis. Dolore suscipit laboriosam minima porro
            pariatur in quasi. <br />
            <br />
            Iste, incidunt natus aliquam accusamus expedita eveniet
            perspiciatis. Harum ipsam laborum fugit provident aliquam quis
            consectetur maiores, alias animi enim nemo eaque, expedita iusto
            velit veritatis dolores at. Veritatis, quae. Quia consequuntur rerum
            harum dolore qui magnam corrupti beatae optio modi voluptatem ea,
            totam amet, aliquam praesentium quos, similique unde? Consequuntur,
            ducimus amet quidem asperiores cum cumque autem est tenetur.
          </p>

          {/* benfits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <img className="rounded-lg" src={Section1} alt="Benefit 1" />
              <h2 className="text-2xl font-bold mb-4">Our Benefits</h2>
              <p className="text-gray-700 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                auctor eu felis non gravida. Mauris eu ex sed velit posuere
                congue.
              </p>
            </div>
            <div>
              <img className="rounded-lg" src={Section2} alt="Benefit 2" />
              <p>
                Nsectetur cing elit.
                <p>Suspe ndisse suscipit sagittis leo.</p>
                <p>Entum estibulum dignissim posuere.</p>
                <p>Lorem Ipsum on the tend to repeat</p>
              </p>
            </div>
          </div>
{/* accordians */}
          <ul className="space-y-2">
            <li className="bg-white p-4 shadow-lg rounded-lg flex justify-between items-center">
              <span>World’s hottest destinations for vegans</span>
              <span className="text-green-500 text-lg">&rarr;</span>
            </li>
            <li className="bg-white p-4 shadow-lg rounded-lg flex justify-between items-center">
              <span>Let’s grow naturally and live naturally</span>
              <span className="text-green-500 text-lg">&rarr;</span>
            </li>
            <li className="bg-white p-4 shadow-lg rounded-lg flex justify-between items-center">
              <span>Best vegetables for your healthy hair</span>
              <span className="text-green-500 text-lg">&rarr;</span>
            </li>
            <li className="bg-white p-4 shadow-lg rounded-lg flex justify-between items-center">
              <span>Best vegetables for your healthy hair</span>
              <span className="text-green-500 text-lg">&rarr;</span>
            </li>
            <li className="bg-white p-4 shadow-lg rounded-lg flex justify-between items-center">
              <span>Best vegetables for your healthy hair</span>
              <span className="text-green-500 text-lg">&rarr;</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DetailPage;
