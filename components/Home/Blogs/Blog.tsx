import SectionHeading from '@/components/Helper/SectionHeading';
import { BLOG_DATA } from '@/data/data';
import React from 'react';
import BlogCard from './BlogCard';

const Blog = () => {
  return (
    <section id='blog' className='py-20'>
      {/* SECTION HEADING */}
      <SectionHeading heading='Exciting Travel Blogs For You' />

      <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10  items-center mt-20'>
        {BLOG_DATA.map((blog, i) => (
          <div
            key={blog.id}
            data-aos='fade-left'
            data-aos-anchor-placement='top-center'
            data-aos-delay={`${i * 100}`}>
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
