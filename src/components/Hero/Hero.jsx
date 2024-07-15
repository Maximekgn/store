import React, { useEffect, useState } from 'react';

const Hero = ({ addItems }) => {
  const [product, setProduct] = useState({});

  const getARandomProduct = async () => {
    const randomNumber = Math.floor(Math.random() * 20) + 1; // 20 since there are 20 products
    fetch('https://fakestoreapi.com/products/' + randomNumber)
      .then(res => res.json())
      .then(json => setProduct(json));
  };

  useEffect(() => {
    getARandomProduct();
  }, []);

  return (
    <div className='flex flex-col md:flex-row justify-around h-[50dvh] w-full mt-5'>
      <div className='w-full md:w-1/2 h-1/2 md:h-full flex justify-center items-center p-4'> {/* image */}
        {product.image && <img src={product.image} alt={product.title} className='w-full h-full object-cover rounded-lg' />}
      </div>
      <div className='w-full md:w-1/2 flex items-center flex-col justify-center p-4'> {/* text */}
        <h1 className='text-3xl font-bold text-center md:text-left'>{product.category}</h1>
        <h1 className='text-2xl font-extrabold text-center md:text-left'>{product.title}</h1>
        <h1 className='text-lg font-semibold text-center md:text-left'>{(product.price * 650).toLocaleString()} FCFA</h1>
        <div className='flex flex-col md:flex-row gap-5 mt-8'>
          <button className='p-3 md:p-5 rounded-xl shadow hover:shadow-2xl' onClick={() => addItems(product)}>Add to cart</button>
          <button className='p-3 md:p-5 shadow hover:shadow-2xl rounded-xl text-white bg-black'>Buy now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;