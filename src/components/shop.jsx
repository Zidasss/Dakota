import React from 'react';
import Product1 from '../assets/Product1.png';
import Product2 from '../assets/Product2.png';
import Product3 from '../assets/Product3.png';

const FullScreenHeading = () => {
  return (
    <div>
      <div className="relative h-screen bg-white flex flex-col md:flex-row items-center justify-between px-10 mt-4">
        <div className="flex flex-col items-start">
          <h1 className="text-8xl md:text-9xl lg:text-[10rem] font-bold leading-none">
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
        <div className="max-w-md mt-4 md:mt-0 md:ml-10">
          <p className="text-xs md:text-sm lg:text-base">
            We create high quality, sustainable, luxurious products - toiletries, apparel, blankets, candles. Basically, things that feel like home. The best part? With every single purchase, you have the potential to change the course of someone’s life.
          </p>
        </div>
      </div>

      <div className="bg-white py-40">
        <h2 className="text-3xl font-bold text-center mb-8">Shop Our Products</h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-36">
            {products.map((product) => (
              <div key={product.id} className="p-4 flex flex-col items-center">
                <img src={product.image} alt={product.name} className="h-80 w-80 object-cover mb-20 cursor-pointer rounded-md" />
                <h3 className="text-xl font-semibold mb-4">{product.name}</h3>
                <span className="text-1xl  mb-4">${product.price}</span>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const products = [
  {
    id: 1,
    name: 'Luxurious Blanket',
    price: 120,
    image: Product1,
    description: 'Cozy and soft, perfect for chilly evenings.',
  },
  {
    id: 2,
    name: 'Organic Candle',
    price: 25,
    image: Product2,
    description: 'Made from natural ingredients, for a serene ambiance.',
  },
  {
    id: 3,
    name: 'Eco-friendly Apparel',
    price: 70,
    image: Product3,
    description: 'Stylish and sustainable clothing for everyday wear.',
  },
];

export default FullScreenHeading;
