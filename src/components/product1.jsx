import React, { useEffect } from 'react';
import Product1 from '../assets/cachecol.jpg'; // Update the path if necessary
import Product2 from '../assets/cachecol4.jpg';
import Product3 from '../assets/cachecol2.jpg';
import Product4 from '../assets/cachecol3.jpg';
import Product5 from '../assets/cachecol5.jpg';
import Product6 from '../assets/cachecol6.jpg';

const FullScreenHeading = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-4');
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div>
      <div className="relative flex justify-center items-center m-4 gap-4">
        <div id="item-name" className="absolute fade-in opacity-0 translate-y-4 transition-opacity duration-500">
          <h3>CACHECOL BRABO</h3>
        </div>
        <div id="item-description" className="absolute fade-in opacity-0 translate-y-4 transition-opacity duration-500">
          <p> 85% organic, ring-spun combed cotton; <br /> 
            15% recycled polyester and raglan sleeves; <br />
            350 GSM fabric - brushed, washed, light sueded</p>
        </div>
        <div className="button-container absolute fade-in opacity-0 translate-y-4 transition-opacity duration-500">
          <button className="quantity-button">-</button>
          <span className="quantity">1</span>
          <button className="quantity-button">+</button>
          <span className="price">$140</span>
          <button className="add-to-cart-button">ADICIONAR
          </button>
        </div>
        <div id="item-photo" className="bg-gray-500 overflow-hidden flex justify-center items-center w-100 mt-20 h-[75vh] md:h-[100vh] rounded-md cursor-pointer relative fade-in opacity-0 translate-y-4 transition-opacity duration-500">
          <img src={Product1} alt="Product 1" className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" />
        </div>
      </div>

      <div id="banner1" className="flex justify-center items-center m-4 gap-4 fade-in opacity-0 translate-y-4 transition-opacity duration-500">
        <div className="bg-gray-500 overflow-hidden flex justify-center items-center w-full h-[75vh] md:h-[100vh] rounded-md cursor-pointer relative">
          <img src={Product2} alt="Product 2" className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" />
        </div>
      </div>

      <div id="banner2" className="flex justify-center items-center m-4 gap-4 fade-in opacity-0 translate-y-4 transition-opacity duration-500">
        <div className="bg-gray-500 overflow-hidden flex justify-center items-center w-full h-[75vh] md:h-[100vh] rounded-md cursor-pointer relative">
          <img src={Product3} alt="Product 3" className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" />
        </div>
        <div className="bg-gray-500 overflow-hidden flex justify-center items-center w-full h-[75vh] md:h-[100vh] rounded-md cursor-pointer relative">
          <img src={Product4} alt="Product 4" className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" />
        </div>
        <div className="bg-gray-500 overflow-hidden flex justify-center items-center w-full h-[75vh] md:h-[100vh] rounded-md cursor-pointer relative">
          <img src={Product6} alt="Product 6" className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" />
        </div>
      </div>

      <div id="banner3" className="flex justify-center items-center m-4 gap-4 fade-in opacity-0 translate-y-4 transition-opacity duration-500">
        <div className="bg-gray-500 overflow-hidden flex justify-center items-center w-full h-[75vh] md:h-[100vh] rounded-md cursor-pointer relative">
          <img src={Product5} alt="Product 5" className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" />
        </div>
      </div>
    </div>
  );
};

export default FullScreenHeading;
