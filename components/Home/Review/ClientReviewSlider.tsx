'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { CLIENT_REVIEW_DATA } from '@/data/data';
import { FaStar } from 'react-icons/fa6';
import Image from 'next/image';

const ClientReviewSlider = () => {
  return (
    <div>
      <Swiper
        effect='cards'
        grabCursor={true}
        modules={[EffectCards]}
        className='h-[300px] w-[90%] md:w-[450px] md:h-[350px]'>
        {CLIENT_REVIEW_DATA.map((data) => (
          <SwiperSlide key={data.id} className='bg-white rounded-3xl'>
            <div className='w-[80%] mx-auto mt-16'>
              {/* REVIEW TEXT */}
              <p className='text-xs sm:text-sm md:text-base font-semibold'>
                {data.review}
              </p>

              {/* ICON */}
              <div className='flex items-center mt-4'>
                <FaStar className='h-3 w-3 md:h-6 md:w-6 text-yellow-600' />
                <FaStar className='h-3 w-3 md:h-6 md:w-6 text-yellow-600' />
                <FaStar className='h-3 w-3 md:h-6 md:w-6 text-yellow-600' />
                <FaStar className='h-3 w-3 md:h-6 md:w-6 text-yellow-600' />
                <FaStar className='h-3 w-3 md:h-6 md:w-6 text-yellow-600' />
              </div>

              {/* USER PROFILE */}
              <div className='mt-10'>
                <div className='flex items-center space-x-4'>
                  <Image
                    src={data.image}
                    alt={'client review'}
                    width={60}
                    height={60}
                    className='rounded-full'
                  />

                  <div>
                    <p className='text-sm sm:text-lg font-semibold'>
                      {data.name}
                    </p>
                    <p className='text-gray-600 text-xs sm:text-base'>
                      Web Developer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientReviewSlider;
