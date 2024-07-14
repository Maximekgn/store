import React from 'react';

const Card = ({ product }) => {
  return (
    <div className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
      <div className='flex-shrink-0'>
        <img className='h-48 w-full object-cover' src={product.image} alt={product.title} />
      </div>
      <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
        <div className='flex-1'>
          <p className='text-sm font-medium text-indigo-600'>{product.category}</p>
          <a href={product.slug} className='block mt-2'>
            <p className='text-xl font-semibold text-gray-900'>{product.title}</p>
          </a>
        </div>
        <div className='flex items-center mt-4'>
          <p className='text-2xl font-semibold text-gray-900'>${product.price}</p>
          <button className='ml-auto bg-white text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
