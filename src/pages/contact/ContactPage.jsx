import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="bg-cover title bg-center h-72 w-full relative" >
       
      </div>

      {/* Information Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 py-10 md:px-20 w-[70%] mx-auto">
        <div className="bg-green-300 p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">About</h2>
          <p className="text-gray-700">Lorem ipsum is simply free text used by copy typing refreshing.</p>
        </div>
        <div className="bg-green-500 p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact</h2>
          <p className="text-gray-700">+1 234 567 8907</p>
          <p className="text-gray-700">support@agrios.com</p>
          <p className="text-gray-700">Mon - Fri: 9:00 am - 6:00 pm</p>
        </div>
        <div className="bg-yellow-400 p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Address</h2>
          <p className="text-gray-700">85 Briston Road Golden Street, New York United States of America</p>
        </div>
      </div>

      {/* Map and Contact Form Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 mt-10 rounded-xl bg-gray-100 mb-20 py-5 md:px-5 w-[70%] mx-auto">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.8444!2d-77.0365!3d38.8951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7b7b7b7b7b7b%3A0x7b7b7b7b7b7b7b7!2sThe%20White%20House!5e0!3m2!1sen!2sus!4v1646248195978!5m2!1sen!2sus"
            width="100%"
            height="500"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Write a Message</h2>
          <form>
            <div className="grid grid-cols-1 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <textarea
                placeholder="Write a Message"
                className="p-4 border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>
              <button
                type="submit"
                className="bg-green-500 text-white p-4 rounded-lg font-semibold hover:bg-green-600 transition duration-300 ease-in-out"
              >
                Send a Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
