import React from 'react';
import SectionHeading from '../../Helper/SectionHeading';
import DestinationSlider from './DestinationSlider';

const Destination = () => {
  return (
    <section id='destination' className='pt-20 pb-20'>
      {/* SECTION HEADING */}
      <SectionHeading heading='Exploring Popular Destinations' />

      {/* SECTION CONTENTS */}
      <div className='mt-14 w-[80%] mx-auto'>
        <DestinationSlider />
      </div>
    </section>
  );
};

export default Destination;
