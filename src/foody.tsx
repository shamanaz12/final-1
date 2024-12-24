import React from 'react';

const Hero = () => {
  return (
    <div className="flex h-screen bg-black">
      
      <div className="w-1/2 flex flex-col items-start justify-center p-8 text-white">
        <h1 className="text-4xl font-bold">
          We Create the Best
          <br />
          Foody Product
        </h1>
        <p className="text-xl mt-4">
          fantastic and delicious meal.
        </p>
        <button className="mt-4 bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-600">
            click me
        </button>
      </div>

      
      <div className="w-1/2 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <img
            src="/images/foody1.png"
            alt="Foody 1"
            className="w-80 h-48 object-cover rounded-lg"
          />
          <img
            src="/images/foody2.png"
            alt="Foody 2"
            className="w-80 h-48 object-cover rounded-lg"
          />
          <img
            src="/images/foody3.png"
            alt="Foody 3"
            className="w-80 h-48 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
