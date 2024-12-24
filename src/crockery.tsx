import React from 'react';

const ChooseItem = () => {
  return (
    <div className="w-full min-h-screen bg-black flex flex-wrap justify-center items-center gap-4">
      <div className="bg-gray-100 p-4 rounded-lg">
        <img
          src="/images/crockery1.png"
          alt="Crockery 1"
          className="w-80 h-48 object-cover rounded-lg"
        />
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <img
          src="/images/crockery3.png"
          alt="Crockery 3"
          className="w-80 h-48 object-cover rounded-lg"
        />
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <img
          src="/images/crockery4.png"
          alt="Crockery 4"
          className="w-80 h-48 object-cover rounded-lg"
        />
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <img
          src="/images/crockery5.png"
          alt="Crockery 5"
          className="w-80 h-48 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default ChooseItem;
