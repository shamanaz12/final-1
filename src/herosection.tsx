import React from 'react';

const Hero = () => {
  return (
    <div className="flex h-screen bg-black">
      <div className="w-1/2 flex flex-col items-center justify-center p-8">
        <h1 className="text-6xl font-bold text-white">
          The Art of Speed
          <br />
          Food Quality
        </h1>
        <p className="text-2xl font-bold text-white mt-4">
          This is the text section.
        </p>
        <button className="mt-4 bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-600">
          Click Me
        </button>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <img
          src="/images/hero.png"
          alt="Example"
          className="max-w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
