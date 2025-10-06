import React from 'react';
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className='w-screen h-[calc(100vh-80px)] flex flex-col justify-center items-center'>
      <div className='spinner'></div>
      <p className='text-gray-600 text-lg font-medium mt-4 animate-pulse'>
        Loading amazing products...
      </p>
    </div>
  );
};

export default Spinner;
