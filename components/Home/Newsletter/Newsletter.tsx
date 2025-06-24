import React from 'react';
import { BsEnvelopePaper } from 'react-icons/bs';

const Newsletter = () => {
  return (
    <section
      id='contact'
      className='py-12 md:py-16 bg-black/95 flex items-center justify-center w-full flex-col'>
      <BsEnvelopePaper className='w-16 h-16 text-white mt-20' />
      {/* TITLE CONTENTS */}
      <h2 className='text-lg sm:text-xl md:text-2xl text-white font-semibold mt-10'>
        Your Travel Journey Starts Here
      </h2>
      <p className='mt-3 text-white text-xs sm:text-sm'>
        Sign Up and we'll send the best deals to you
      </p>

      {/* SUBSCRIPTION INPUT AND BUTTON */}
      <div className='w-full'>
        <input
          type='text'
          placeholder='Email Address'
          className='px-6 py-3.5 bg-white mt-8 w-[95%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none '
        />
        <button className='px-6 py-3.5 bg-orange-800 hover:bg-orange-900 text-white mt-4 md:mt-8 w-[95%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg cursor-pointer transition-all duration-200'>
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Newsletter;
