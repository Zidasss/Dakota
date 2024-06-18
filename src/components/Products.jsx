import React from 'react';

const ImageSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <img
            src="path-to-first-image.jpg" // Atualize este caminho para a imagem correta
            alt="Print Mockups"
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
          <div className="absolute top-0 left-0 m-4 text-white">
            <h2 className="text-xl font-semibold">Print Mockups</h2>
          </div>
          <div className="absolute bottom-0 left-0 m-4 text-white">
            <button className="bg-black text-white py-1 px-3 rounded">Menu</button>
          </div>
        </div>
        <div className="relative">
          <img
            src="path-to-second-image.jpg" // Atualize este caminho para a imagem correta
            alt="Shop"
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
          <div className="absolute top-0 left-0 m-4 text-white">
            <h2 className="text-xl font-semibold">Shop</h2>
          </div>
          <div className="absolute bottom-0 right-0 m-4 text-white">
            <button className="bg-black text-white py-1 px-3 rounded">Connect</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
