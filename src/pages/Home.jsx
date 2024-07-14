import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero/Hero';
import Card from '../components/Card.jsx/Card';
import Footer from '../components/Footer/Footer';

const Home = () => {
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
            <Hero/>
            <div className='flex gap-10 p-5 mt-5'>
                <div className='w-1/3 gap-5 text-center font-bold flex items-center justify-center'>
                    <img src="/images/jewelery.jpg" className='rounded-xl shadow-xl h-full w-4/6' />
                    <h1 className='text-xl underline'>Jewelery</h1>
                </div>
                <div className='w-1/3 gap-5 text-center font-bold flex items-center justify-center'>
                    <img src="/images/electro.jpg" className='rounded-xl h-full w-4/6 shadow-xl'/>
                    <h1 className='text-xl underline'>Electronics</h1>
                </div>
                <div className='w-1/3 gap-5 text-center font-bold flex items-center justify-center'>
                    <img src="/images/women.jpg" className='rounded-xl h-full w-4/6 shadow-xl'/>
                    <h1 className='text-xl underline'>Women Clothes</h1>
                </div>
            </div>
            <div className='px-5'> 
                {categories.map((category) => (
                    <div key={category} className='my-10'>
                        <h1 className='text-2xl font-bold mb-4 underline'>{category} </h1>
                        <div className='overflow-x-auto overflow-y-hidden flex scrollbar-hide'>
                            <div className='flex flex-nowrap gap-8'>
                                {productsByCategory[category]?.map((product) => (
                                    <Card key={product.id} product={product} />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer/>
        </>
    );
};

export default Home;
