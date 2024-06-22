import React from 'react';
import Product1 from '../assets/cachecol.jpg'; // Update the path if necessary
import Product2 from '../assets/cachecol4.jpg';
import Product3 from '../assets/cachecol2.jpg';
import Product4 from '../assets/cachecol3.jpg';
import Product5 from '../assets/cachecol5.jpg';


const FullScreenHeading = () => {
  return (
    <div>
      

      <div className="flex justify-center items-center m-4 gap-4">
        
        <div className="bg-gray-500 overflow-hidden flex justify-center items-center w-150 mt-20 h-[75vh] md:h-[100vh] rounded-md cursor-pointer relative">
          <img src={Product1} alt="Product 1" className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" />
        </div>
      </div>

      <div className="flex justify-center items-center m-4 gap-4">
        <div className="bg-gray-500 overflow-hidden flex justify-center items-center w-full h-[75vh] md:h-[100vh] rounded-md cursor-pointer relative">
          <img src={Product2} alt="Product 1" className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" />
          
        </div>
      </div>

      <div className="flex justify-center items-center m-4 gap-4">
        <div className="bg-gray-500 overflow-hidden flex justify-center items-center w-full h-[75vh] md:h-[100vh] rounded-md cursor-pointer relative">
          <img src={Product3} alt="Product 2" className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" />
        </div>
          <div className="bg-gray-500 overflow-hidden flex justify-center items-center w-full h-[75vh] md:h-[100vh] rounded-md cursor-pointer relative">
            <img src={Product4} alt="Product 3" className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" />
          </div>  
      </div>

      <div id="teste" className="flex justify-center items-center h-20 m-4 gap-4 ">
        <div className="bg-gray-500 overflow-hidden flex justify-center items-center w-full h-[75vh] md:h-[100vh] rounded-md cursor-pointer relative">
          <img src={Product5} alt="Product 1" className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" />
          
        </div>
      </div>
    </div>
  );
};

export default FullScreenHeading;