import Image from 'next/image';
import React from 'react';

type BlogCardProps = {
  blog: {
    id: number;
    title: string;
    image: string;
    date: string;
  };
};

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <div className='flex flex-col h-[400px]'>
      {/* BLOG IMAGE */}
      <div className='h-[300px]'>
        <Image
          src={blog.image}
          alt={blog.title}
          width={300}
          height={300}
          className='h-full w-full object-cover rounded-lg'
        />
      </div>

      {/* BLOG DETAIL */}

      <h2 className='mt-6 text-lg text-orange-900 font-semibold hover:text-slate-600 cursor-pointer transition-all duration-200'>
        {blog.title}
      </h2>
      <p className='text-sm text-gray-600  mt-2'>{blog.date}</p>
    </div>
  );
};

export default BlogCard;
