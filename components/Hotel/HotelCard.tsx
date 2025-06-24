import Image from 'next/image';
import React from 'react';
import { FaHeart } from 'react-icons/fa6';

type HotelCardProps = {
  hotel: {
    id: number;
    image: string;
    name: string;
    location: string;
    rating: number;
    reviews: string;
    price: string;
  };
};

const HotelCard = ({ hotel }: HotelCardProps) => {
  return (
    <div>
      <div className='relative h-[300px] w-full rounded-lg cursor-pointer group overflow-hidden'>
        {/* ADD TO FAV BUTTON */}
        <div className='absolute top-4 right-4 z-20 h-8 w-8 bg-white rounded-full text-black flex items-center justify-center flex-col'>
          <FaHeart className='w-3 h-3' />
        </div>

        {/* OVERLAY */}
        <div className='absolute inset-0 bg-black opacity-20 z-1' />
        <Image
          src={hotel.image}
          alt={hotel.name}
          width={500}
          height={500}
          className='h-full w-full object-cover overflow-hidden transition-all duration-300 group-hover:scale-110'
        />
      </div>

      {/* HOTEL DETAILS */}
      <div>
        <h2 className='mt-4 text-lg font-semibold text-orange-900 hover:text-slate-600 cursor-pointer transition-all duration-200'>
          {hotel.name}
        </h2>
        <p className='text-sm text-gray-600 mt-1 mb-2 sm:mt-3 sm:mb-6 font-medium'>
          {hotel.location}
        </p>

        {/* RATING */}
        <div className='flex items-center space-x-2'>
          <div className='p-2 bg-orange-800 rounded-md font-bold text-white text-xs '>
            {hotel.rating}
          </div>
          <p className='text-sm text-gray-800'>Exceptional</p>
          <p className='text-sm font-bold text-gray-800'>
            {hotel.reviews} Reviews
          </p>
        </div>

        {/* PRICE */}
        <p className='mt-1 sm:mt-3 text-gray-700 font-medium'>
          Starting from{' '}
          <span className='text-orange-700 font-bold'>US ${hotel.price}</span>
        </p>
      </div>
    </div>
  );
};

export default HotelCard;
