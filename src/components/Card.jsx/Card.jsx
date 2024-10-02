import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ product, addItems }) => {
  return (
    <div className='flex flex-col rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl'>
      <div className='flex-shrink-0 relative pb-[100%]'>
        <img 
          className='absolute top-0 left-0 w-full h-full object-cover' 
          src={product.image} 
          alt={product.title} 
        />
      </div>
      <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
        <div className='flex-1'>
          <p className='text-sm font-medium text-indigo-600 mb-2'>{product.category}</p>
          <h3 className='text-xl font-semibold text-gray-900 mb-2'>{product.title}</h3>
          <p className='text-gray-500 text-sm line-clamp-3'>{product.description}</p>
        </div>
        <div className='flex items-center justify-between mt-4'>
          <p className='text-xl font-semibold text-gray-900'>{(product.price * 650).toLocaleString()} FCFA</p>
          <button 
            className='bg-black text-white font-semibold py-2 px-4 rounded-lg shadow-sm hover:bg-gray-800 transition-colors duration-300' 
            onClick={() => addItems(product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  addItems: PropTypes.func.isRequired,
};

export default Card;