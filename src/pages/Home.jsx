import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero/Hero';
import Card from '../components/Card.jsx/Card';

const Home = ({ addItems }) => {
  const [categories, setCategories] = useState([]);
  const [productsByCategory, setProductsByCategory] = useState({});

  const getCategories = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const getProducts = async (category) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
      const data = await response.json();
      setProductsByCategory(prevProducts => ({
        ...prevProducts,
        [category]: data
      }));
    } catch (error) {
      console.error(`Error fetching products for category ${category}:`, error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getCategories();
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      await Promise.all(categories.map(category => getProducts(category)));
    };

    if (categories.length > 0) {
      fetchProducts();
    }
  }, [categories]);

  return (
    <>
      <div className='mx-10'>
        <Hero addItems={addItems} />
        <div className='flex flex-col gap-10 p-5 mt-5 font-sans'>
          <div className='flex flex-col md:flex-row gap-5 text-center font-bold items-center justify-center'>
            <div className='flex-1'>
              <img src="/images/jewelery.jpg" alt="Jewelery" className='rounded-xl shadow-xl w-full' />
              <h1 className='text-xl underline'>Jewelery</h1>
            </div>
            <div className='flex-1'>
              <img src="/images/electro.jpg" alt="Electronics" className='rounded-xl shadow-xl w-full'/>
              <h1 className='text-xl underline'>Electronics</h1>
            </div>
            <div className='flex-1'>
              <img src="/images/women.jpg" alt="Women Clothes" className='rounded-xl shadow-xl w-full'/>
              <h1 className='text-xl underline'>Women's Clothing</h1>
            </div>
          </div>
        </div>
        <div className='px-5 font-sans'>
          {categories.map((category) => (
            <div key={category} className='my-10'>
              <h1 className='text-2xl font-bold mb-4 underline'>{category}</h1>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {productsByCategory[category]?.map((product) => (
                  <Card key={product.id} product={product} addItems={addItems} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;