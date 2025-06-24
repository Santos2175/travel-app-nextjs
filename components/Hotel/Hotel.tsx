import React from 'react';
import SectionHeading from '../Helper/SectionHeading';
import { HOTELS_DATA } from '@/data/data';
import HotelCard from './HotelCard';

const Hotel = () => {
  return (
    <section id='hotel' className='py-20'>
      {/* SECTION HEADING */}
      <SectionHeading heading='Recommended Hotels' />

      <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-16'>
        {HOTELS_DATA.map((data) => (
          <div key={data.id}>
            <HotelCard hotel={data} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hotel;
