import React from 'react';
import Hero from './Hero/Hero';
import Destination from '../Destination/Destination';
import Hotel from '../Hotel/Hotel';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Destination />
      <Hotel />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
