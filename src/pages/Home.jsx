import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";

const images = [
  {
    id: 1,
    name: "electronics",
    image: "../../public/images/electro.jpg",
  },
  {
    id: 2,
    name: "jewelery",
    image: "../../public/images/jewelery.jpg",
  },
  {
    id: 3,
    name: "men's clothing",
    image: "../../public/images/clothes.jpg",
  },
];
const Store = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Hero />

        <div className="flex my-10 mx-14 h-[350px] space-x-5">
          <div className="relative bg-gray-500 rounded-xl flex flex-col justify-end items-start p-2 md:flex-none md:w-1/4 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <img src={images[0].image} alt="image" className="w-full h-auto" />
            <h1 className="text-black ml-3 mt-3 text-2xl font-bold absolute top-0 left-0">Electronics</h1>
            <button className="bg-red-500 mr-5 mb-5 text-white font-bold py-2 px-4 rounded-xl absolute bottom-0 right-0">Explore</button>
          </div>
          <div className="relative bg-yellow-400 rounded-xl flex flex-col justify-end items-start p-2 md:flex-none md:w-1/4 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <img src={images[1].image} alt="image" className="w-full h-auto" />
            <h1 className="text-black ml-3 mt-3 text-2xl font-bold absolute top-0 left-0">Jewelery</h1>
            <button className="bg-red-500 mr-5 mb-5 text-white font-bold py-2 px-4 rounded-xl absolute bottom-0 right-0">Explore</button>
          </div>
          <div className="relative bg-sky-200 rounded-xl flex flex-col justify-end items-start p-2 md:flex-none md:w-1/2 overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <img src={images[2].image} alt="image" className="w-full h-auto" />
            <h1 className="text-black ml-3 mt-3 text-2xl font-bold absolute top-0 left-0">Men's clothing</h1>
            <button className="bg-red-500 mr-5 mb-5 text-white font-bold py-2 px-4 rounded-xl absolute bottom-0 right-0">Explore</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Store;
