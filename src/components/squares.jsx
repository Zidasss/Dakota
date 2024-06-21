import React from 'react';
import heroImage1 from '../assets/Model1.jpg'; // Update the path if necessary
import heroImage2 from '../assets/model2.jpg'; // Add the path of the second image

function ImageGrid() {
  return (
    <div id="ImagesFont" className="flex justify-center items-center m-4 gap-4">
      <div  className="bg-gray-500 overflow-hidden flex justify-center items-center w-full h-[100vh] rounded-md cursor-pointer relative">
        <img src={heroImage1} alt="Imagem 1" className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" />
        <p className="absolute top-0 left-0 m-2 text-sm text-white">SOBRE NÓS</p> {/* Add this line */}
      </div>
      <div className="bg-gray-500 overflow-hidden flex justify-center items-center w-full h-[100vh] rounded-md cursor-pointer relative"> {/* Add relative here */}
        <img src={heroImage2} alt="Imagem 2" className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" />
        <p className="absolute top-0 left-0 m-2 text-sm text-white">SHOP</p> {/* Add this line */}     
      </div>
    </div>
  );
}

export default ImageGrid;