import React from 'react';
import Product1 from '../assets/cachecol1.jpg'; // Update the path if necessary
import Product2 from '../assets/tshirt1.jpg';
import Product3 from '../assets/tshirt2.jpg';
import Product4 from '../assets/ecobag.jpg';

const FullScreenHeading = () => {
  return (
    <div>
      <div className="relative  bg-gray-100 flex flex-col md:flex-row items-center justify-between px-10 mt-4 mb-20">
        <div className="flex flex-col items-start md:items-start">
          <div className="fade-in">
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold leading-none mb-4 md:mb-20 cursor-pointer">
              GOOD <br />
              <span className="inline-flex items-center">
                THINGS
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 ml-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 15.172l-5.293-5.293a1 1 0 00-1.414 1.414l6 6a1 1 0 001.414 0l6-6a1 1 0 00-1.414-1.414L12 15.172z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </h1>
          </div>
          <div className="block md:hidden mt-4">
            <p className="text-xs md:text-sm lg:text-base">
              We create high quality, sustainable, luxurious products - toiletries, apparel, blankets, candles. Basically, things that feel like home. The best part? With every single purchase, you have the potential to change the course of someone’s life.
            </p>
          </div>
        </div>
        <div className="hidden md:block max-w-md mt-4 md:mt-0 md:ml-10">
          <p className="text-xs md:text-sm lg:text-base">
            We create high quality, sustainable, luxurious products - toiletries, apparel, blankets, candles. Basically, things that feel like home. The best part? With every single purchase, you have the potential to change the course of someone’s life.
          </p>
        </div>
      </div>

      <div id="ImagesFontProduct1" className="flex justify-center items-center m-4 gap-4">
        <div className="bg-gray-500 overflow-hidden flex justify-center items-center w-full h-[75vh] md:h-[100vh] rounded-md cursor-pointer relative">
          <img src={Product1} alt="Imagem 1" className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" />
          <p className="absolute top-0 left-0 m-2 text-sm text-white">TECH CACHECOL</p>
          <p className="absolute bottom-0 right-0 m-2 text-sm text-white">R$ 50</p>
        </div>
      </div>

      <div id="ImagesFont" className="flex justify-center items-center m-4 gap-4">
        <div className="bg-gray-500 overflow-hidden flex justify-center items-center w-full h-[75vh] md:h-[100vh] rounded-md cursor-pointer relative">
          <img src={Product2} alt="Imagem 1" className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" />
          <p className="absolute top-0 left-0 m-2 text-sm text-white">RED SHIRT</p>
          <p className="absolute bottom-0 left-0 m-2 text-sm text-white">R$ 199, 90</p>
        </div>
        <div className="bg-gray-500 overflow-hidden flex justify-center items-center w-full h-[75vh] md:h-[100vh] rounded-md cursor-pointer relative">
          <img src={Product3} alt="Imagem 2" className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" />
          <p className="absolute top-0 left-0 m-2 text-sm text-white">HIGH SCHOOL JACKET</p>
          <p className="absolute bottom-0 right-0 m-2 text-sm text-white">R$ 269, 90</p>
        </div>
      </div>

      <div id="ImagesFontProduct2" className="flex justify-center items-center m-4 gap-4">
        <div className="bg-gray-500 overflow-hidden flex justify-center items-center w-full h-[75vh] md:h-[100vh] rounded-md cursor-pointer relative">
          <img src={Product4} alt="Imagem 2" className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" />
          <p className="absolute top-0 left-0 m-2 text-sm text-white">ECOBAG</p>
          <p className="absolute bottom-0 right-0 m-2 text-sm text-white">R$ 30</p>
        </div>
      </div>
    </div>
  );
};

export default FullScreenHeading;
