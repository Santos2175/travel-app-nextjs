import Image from 'next/image';
import React from 'react';

type WhyChooseUsCardProps = {
  policy: {
    id: number;
    title: string;
    image: string;
    description: string;
  };
};

const WhyChooseUsCard = ({ policy }: WhyChooseUsCardProps) => {
  return (
    <div>
      <Image
        src={policy.image}
        alt={policy.title}
        width={70}
        height={70}
        className='mx-auto'
      />
      <h2 className='mt-6 text-center text-orange-900 font-medium text-lg'>
        {policy.title}
      </h2>
      <p className='mt-2 text-center text-xs font-medium text-gray-700'>
        {policy.description}
      </p>
    </div>
  );
};

export default WhyChooseUsCard;
