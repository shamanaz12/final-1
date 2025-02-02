import React from 'react';
import Image from 'next/image';

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
          <Image 
            src="/images/foody1.png"
            alt="Foody 1"
            width={320} // Width specify ki gayi hai
            height={192} // Height specify ki gayi hai
            className="rounded-lg"
          />
          <Image 
            src="/images/foody2.png"
            alt="Foody 2"
            width={320}
            height={192}
            className="rounded-lg"
          />
          <Image 
            src="/images/foody3.png"
            alt="Foody 3"
            width={320}
            height={192}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
