'use client';

import { navLinks } from '@/constant/constants';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { TbAirBalloon } from 'react-icons/tb';

type NavProps = {
  openNav: () => void;
};

const Nav = ({ openNav }: NavProps) => {
  const [navBg, setNavBg] = useState<boolean>(false);

  useEffect(() => {
    const handleSetNavBg = () => {
      if (window.scrollY >= 50) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };

    window.addEventListener('scroll', handleSetNavBg);

    return () => window.removeEventListener('scroll', handleSetNavBg);
  }, []);
  return (
    <div
      className={`${
        navBg ? 'shadow-md bg-orange-900' : ''
      } transition-all duration-200 h-[12vh] z-[1000] w-full fixed`}>
      <div className='h-full flex items-center justify-between w-[90%] xl:w-[80%] mx-auto'>
        {/* LOGO */}
        <Link href={'#'} scroll>
          <div className='flex items-center space-x-2'>
            <div className='flex items-center justify-center h-10 w-10 bg-orange-600 rounded-full'>
              <TbAirBalloon className='h-6 w-6 text-white' />
            </div>
            <h1 className='text:xl md:text-2xl text-white uppercase font-bold'>
              WanderNest
            </h1>
          </div>
        </Link>

        {/* NAVLINKS */}
        <div className='hidden lg:flex items-center space-x-10'>
          {navLinks.map((link) => (
            <Link href={link.url} key={link.id} className='group'>
              <p className='relative text-white text-base font-medium block w-fit after:block after:content-[""] after:absolute after:h-[3px] after:bg-orange-300 after:w-full after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-right'>
                {link.label}
              </p>
            </Link>
          ))}
        </div>

        {/* BUTTON */}
        <div className='flex items-center space-x-4'>
          <Link
            href={'#contact'}
            className='md:px-12 md:py-2.5 px-4 py-2 text-black text-base bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg cursor-pointer'>
            Book Now
          </Link>

          {/* BURGER MENU */}
          <HiBars3BottomRight
            className='h-8 w-8 text-white lg:hidden'
            onClick={openNav}
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
