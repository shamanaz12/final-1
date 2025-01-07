import React from 'react';
import Image from 'next/image';

const ChooseItem = () => {
  return (
    <div className="w-full min-h-screen bg-black flex flex-wrap justify-center items-center gap-4">
      <div className="bg-gray-100 p-4 rounded-lg">
        <Image 
          src="/images/crockery1.png"
          alt="Crockery 1"
          layout="responsive" 
          width={80} // Aspect ratio width
          height={48} // Aspect ratio height
          className="rounded-lg"
        />
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <Image 
          src="/images/crockery3.png"
          alt="Crockery 3"
          layout="responsive" 
          width={80}
          height={48}
          className="rounded-lg"
        />
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <Image 
          src="/images/crockery4.png"
          alt="Crockery 4"
          layout="responsive" 
          width={80}
          height={48}
          className="rounded-lg"
        />
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <Image 
          src="/images/crockery5.png"
          alt="Crockery 5"
          layout="responsive" 
          width={80}
          height={48}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default ChooseItem;
