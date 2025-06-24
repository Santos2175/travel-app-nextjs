'use client';

import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa6';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className='fixed bottom-4 right-4 animate-pulse'>
      {isVisible && (
        <button className='bg-orange-900 text-white rounded-full w-12 h-12  focus:outline-none cursor-pointer flex items-center justify-center'>
          <FaArrowUp onClick={scrollToTop} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
