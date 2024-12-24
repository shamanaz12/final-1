import React from 'react';

const ChooseItem = () => {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center">
      <h1 className="text-white text-4xl mb-8">Choose Iteeam.</h1>
  
      <div className="flex flex-wrap justify-center gap-4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <img
            src="/images/choose1.png"
            alt="Choose 1"
            className="w-80 h-48 object-cover rounded-lg"
          />
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <img
            src="/images/choose2.png"
            alt="Choose 2"
            className="w-80 h-48 object-cover rounded-lg"
          />
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <img
            src="/images/choose3.png"
            alt="Choose 3"
            className="w-80 h-48 object-cover rounded-lg"
          />
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <img
            src="/images/choose4.png"
            alt="Choose 4"
            className="w-80 h-48 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseItem;
