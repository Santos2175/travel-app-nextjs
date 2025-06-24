import React from 'react';

type SectionHeadingProps = {
  heading: string;
};

const SectionHeading = ({ heading }: SectionHeadingProps) => {
  return (
    <div className='w-[80%] mx-auto'>
      <h1 className='text-xl sm:text-3xl text-orange-900 font-bold'>
        {heading}
      </h1>
      <p className='mt-2 text-gray-700 sm:text-base text-sm font-medium'>
        Lorem, ipsum dolor sit amet consectetur...
      </p>
    </div>
  );
};

export default SectionHeading;
