import React from 'react';
import { WHY_CHOOSE_DATA } from '@/data/data';
import WhyChooseUsCard from './WhyChooseUsCard';
import SectionHeading from '@/components/Helper/SectionHeading';

const WhyChooseUs = () => {
  return (
    <section className='py-20'>
      {/* SECTION HEADING */}
      <SectionHeading heading='Why Choose Us' />

      <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-16'>
        {/* WHY CHOOSE CARD */}
        {WHY_CHOOSE_DATA.map((data, i) => (
          <div
            key={data.id}
            data-aos='fade-up'
            data-aos-anchor-placement='top-center'
            data-aos-delay={`${i * 100}`}>
            <WhyChooseUsCard policy={data} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
