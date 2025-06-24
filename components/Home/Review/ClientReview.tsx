import React from 'react';
import { FaStar } from 'react-icons/fa6';
import ClientReviewSlider from './ClientReviewSlider';

const REVIEW_DATA = {
  rating: 4.88,
};

const ClientReview = () => {
  return (
    <section
      id='review'
      className='py-20 flex items-center justify-center flex-col bg-orange-900'>
      <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10'>
        {/* TEXT CONTENT */}
        <div>
          <h2 className='text-2xl font-semibold text-white'>
            What our customers are saying about us?
          </h2>
          <p className='mt-6 text-gray-200'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur velit voluptate provident nihil repudiandae commodi
            ullam quidem quos aspernatur eos. Ab quisquam esse tempora doloribus
            modi, explicabo impedit cumque repudiandae?
          </p>

          {/* Overall Rating */}
          <div className='mt-6 flex items-center'>
            <div>
              <p className='text-2xl font-bold text-white'>
                {REVIEW_DATA.rating.toFixed(2)}
              </p>
              <p className='text-white mb-2'>Overall Rating</p>
              <div className='flex items-center'>
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={
                      star <= Math.round(REVIEW_DATA.rating)
                        ? 'text-yellow-500'
                        : 'text-white'
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CLIENT REVIEW SLIDER */}
        <div className='overflow-hidden'>
          <ClientReviewSlider />
        </div>
      </div>
    </section>
  );
};

export default ClientReview;
