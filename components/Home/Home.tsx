import React from 'react';
import Hero from './Hero/Hero';
import Destination from './Destination/Destination';
import Hotel from './Hotel/Hotel';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import ClientReview from './Review/ClientReview';
import Blog from './Blogs/Blog';
import Newsletter from './Newsletter/Newsletter';

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Destination />
      <Hotel />
      <WhyChooseUs />
      <ClientReview />
      <Blog />
      <Newsletter />
    </div>
  );
};

export default Home;
