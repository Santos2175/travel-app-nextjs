import Link from 'next/link';
import React from 'react';
import { FaDribbble, FaFacebook, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='py-16'>
      <div className='w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
        {/* 1ST PART */}
        <div className='space-y-4'>
          <h2 className='text-lg font-bold'>Company</h2>
          <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-orange-900'>
            About Us
          </p>
          <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-orange-900'>
            Careers
          </p>
          <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-orange-900'>
            Blogs
          </p>
          <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-orange-900'>
            Gift Cards
          </p>
          <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-orange-900'>
            Magazines
          </p>
        </div>

        {/* 2ND PART */}
        <div className='space-y-4'>
          <h2 className='text-lg font-bold'>Support</h2>
          <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-orange-900'>
            Contact
          </p>
          <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-orange-900'>
            Legal Notice
          </p>
          <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-orange-900'>
            Privacy Policy
          </p>
          <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-orange-900'>
            Terms & Conditions
          </p>
          <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-orange-900'>
            Sitemap
          </p>
        </div>

        {/* 3RD PART */}
        <div className='space-y-4'>
          <h2 className='text-lg font-bold'>Other Services</h2>
          <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-orange-900'>
            Car Hire
          </p>
          <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-orange-900'>
            Activity Finder
          </p>
          <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-orange-900'>
            Tour List
          </p>
          <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-orange-900'>
            Flight Finder
          </p>
          <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-orange-900'>
            Travel Agents
          </p>
        </div>

        {/* 4TH PART */}
        <div>
          <h2 className='text-lg font-bold'>Contact Us</h2>
          <div className='mt-6'>
            <h3 className='text-sm text-gray-700'>Our Mobile Number</h3>
            <p className='text-base font-bold text-orange-900 mt-1'>
              +012 345 6789
            </p>
          </div>

          <div className='mt-6'>
            <h3 className='text-sm text-gray-700'>Our Email</h3>
            <p className='text-base font-bold text-orange-900 mt-1'>
              wandernest@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className='mt-8 pt-8 w-[80%] mx-auto border-t flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm'>
        <p className='text-center md:text-left'>
          Copyright &copy; 2025 WanderNest. All rights reserved.
        </p>

        <div className='flex items-center space-x-4 mt-4 md:mt-0'>
          <span>Social: </span>
          <Link href={'#'} className='text-gray-500 hover:text-orange-900'>
            <FaFacebook />
          </Link>
          <Link href={'#'} className='text-gray-500 hover:text-orange-900'>
            <FaTwitter />
          </Link>
          <Link href={'#'} className='text-gray-500 hover:text-orange-900'>
            <FaDribbble />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
