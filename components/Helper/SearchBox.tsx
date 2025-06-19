import React from 'react';
import { FaCalendarWeek, FaMap } from 'react-icons/fa';
import { FaUserGroup } from 'react-icons/fa6';

const SearchBox = () => {
  return (
    <div className='bg-slate-50 p-8 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-8 mt-4 md:mt-12 w-[95%] sm:w-[80%]'>
      {/* FIRST SEARCH INPUT */}
      <div className='flex items-center space-x-6'>
        <FaMap className='h-6 w-6 text-orange-600 shrink-0' />
        <div>
          <p className='text-base md:text-lg font-medium mb-[0.2rem]'>
            Location
          </p>
          <input
            type='text'
            placeholder='Where are you going?'
            className='outline-none border-none placeholder:text-gray-800 placeholder:text-base placeholder:md:text-lg'
          />
        </div>
      </div>

      {/* SECOND SEARCH INPUT */}
      <div className='flex items-center space-x-6'>
        <FaCalendarWeek className='h-6 w-6 text-orange-600 shrink-0' />
        <div>
          <p className='text-base md:text-lg font-medium mb-[0.2rem]'>
            Start Date
          </p>
          <input
            type='date'
            className='outline-none border-none text-base md:text-lg'
          />
        </div>
      </div>

      {/* THIRD SEARCH INPUT */}
      <div className='flex items-center space-x-6'>
        <FaCalendarWeek className='h-6 w-6 text-orange-600 shrink-0' />
        <div>
          <p className='text-base md:text-lg font-medium mb-[0.2rem]'>
            End Date
          </p>
          <input
            type='date'
            className='outline-none border-none text-base md:text-lg'
          />
        </div>
      </div>

      {/* FOURTH SEARCH INPUT */}
      <div className='flex items-center space-x-6'>
        <FaUserGroup className='h-6 w-6 text-orange-600 shrink-0' />
        <div>
          <p className='text-base md:text-lg font-medium mb-[0.2rem]'>Guest</p>
          <input
            type='text'
            placeholder='1 guest 1 room'
            className='outline-none border-none placeholder:text-gray-800 placeholder:text-base placeholder:md:text-lg'
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
