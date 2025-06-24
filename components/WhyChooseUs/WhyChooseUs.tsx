import React from 'react';
import SectionHeading from '../Helper/SectionHeading';
import { WHY_CHOOSE_DATA } from '@/data/data';
import WhyChooseUsCard from './WhyChooseUsCard';

const WhyChooseUs = () => {
  return (
    <section className='py-20'>
      {/* SECTION HEADING */}
      <SectionHeading heading='Why Choose Us' />

      <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-16'>
        {/* WHY CHOOSE CARD */}
        {WHY_CHOOSE_DATA.map((data) => (
          <div key={data.id}>
            <WhyChooseUsCard policy={data} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
