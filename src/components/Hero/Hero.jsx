import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Hero = ({ addItems }) => {
  const [product, setProduct] = useState({});

  const getARandomProduct = async () => {
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    try {
      const response = await fetch('https://fakestoreapi.com/products/' + randomNumber);
      const json = await response.json();
      setProduct(json);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  useEffect(() => {
    getARandomProduct();
  }, []);

  return (
    <div className='flex flex-col md:flex-row items-center justify-center h-[75dvh] w-full bg-white text-black mt-20'>
      <div className='w-full md:w-1/2 h-1/2 md:h-full flex justify-center items-center p-8'> {/* image */}
        {product.image && (
          <img 
            src={product.image} 
            alt={product.title} 
            className='w-full h-full object-contain rounded-lg shadow-2xl'
          />
        )}
      </div>
      <div className='w-full md:w-1/2 flex items-center flex-col justify-center p-8 space-y-6'> {/* text */}
        <h2 className='text-2xl font-bold uppercase tracking-wider'>{product.category}</h2>
        <h1 className='text-4xl font-extrabold text-center'>{product.title}</h1>
        <p className='text-xl font-semibold'>{(product.price * 650).toLocaleString()} FCFA</p>
        <p className='text-gray-600 text-center max-w-md'>{product.description}</p>
        <div className='flex flex-col md:flex-row gap-5 mt-8 w-full max-w-md'>
          <button 
            className='flex-1 p-4 rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors duration-300'
            onClick={() => addItems(product)}
          >
            Add to cart
          </button>
          <button className='flex-1 p-4 rounded-full bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-colors duration-300'>
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  addItems: PropTypes.func.isRequired,
};

export default Hero;