import React from 'react';
import Hero from './Hero/Hero';
import Destination from './Destination/Destination';
import Hotel from './Hotel/Hotel';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import ClientReview from './Review/ClientReview';
import Blog from './Blogs/Blog';

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Destination />
      <Hotel />
      <WhyChooseUs />
      <ClientReview />
      <Blog />
    </div>
  );
};

export default Home;
