import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
const Store = () => {
  const categories = ['electronics', 'jewelery', "men's clothing", "women's clothing"];

  return (
    <>
      <Navbar />
      <Hero />

      <div className="flex gap-10 my-5 mx-14 ">
      {
        categories.map((category) => (
          <div key={category} className='text-center p-32 rounded-xl bg-blue-500'>
            <h1 className='font-bold text-xl'>{category}</h1>
          </div>
        ))
      }
      <div className='flex justify-center items-center'>
        <h1 className='font-bold underline  hover:cursor-pointer text-xl'> Voir plus </h1>
      </div>
      </div>

      <Footer/>
    </>
  );
};

export default Store;
