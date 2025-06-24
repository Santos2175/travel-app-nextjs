import SearchBox from '@/components/Helper/SearchBox';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section id='hero' className='relative w-full h-[120vh] sm:h-[100vh]'>
      {/* OVERLAY */}
      <div className='absolute top-0 left-0 h-full w-full bg-gray-800 opacity-60' />

      {/* VIDEO */}
      <video
        src='/images/hero-vid.mp4'
        autoPlay
        muted
        loop
        preload='metadata'
        className='w-full h-full object-cover'
      />

      {/* TEXT CONTENT */}
      <div className='absolute z-[100] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full'>
        <div className='flex items-center justify-center flex-col h-full w-full'>
          <div data-aos='fade-up'>
            <h1 className='text-[25px] mb-4 md:mb-0 text-center md:text-[35px] lg:text-[45px] tracking-[0.5rem] md:tracking-[0.7rem] text-white font-bold uppercase'>
              Lets Enjoy the nature
            </h1>
            <p className='text-lg md:text-base text-white text-center font-normal [word-spacing:5px]'>
              Get the best prices on 2,000,000+ properties, worlwide
            </p>
          </div>

          {/* SEARCH BOX */}
          <SearchBox />

          <Link
            href={'#'}
            className='relative rounded px-14 md:px-28 -mt-4 py-2.5 overflow-hidden group bg-orange-600 text-white hover:bg-gradient-to-r hover:from-orange-600 hover:to-orange-500 hover:ring-2 hover:ring-offset-2 hover:ring-orange-600 transition-all duration-300 ease-out group'>
            <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease' />
            <span className='relative font-bold'>Search</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
