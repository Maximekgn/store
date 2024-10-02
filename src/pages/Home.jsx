import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero/Hero';
import Card from '../components/Card.jsx/Card';

const Home = ({ addItems }) => {
  const [categories, setCategories] = useState([]);
  const [productsByCategory, setProductsByCategory] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState({});

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
    getCategories();
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      categories.forEach(getProducts);
    }
  }, [categories]);

  useEffect(() => {
    const filtered = Object.keys(productsByCategory).reduce((acc, category) => {
      acc[category] = productsByCategory[category].filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return acc;
    }, {});
    setFilteredProducts(filtered);
  }, [searchTerm, productsByCategory]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Hero addItems={addItems} />
      <section className="my-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <img src="/images/jewelery.jpg" alt="Jewelery" className="w-full h-48 object-cover" />
            <h3 className="text-xl font-semibold p-4">Jewelery</h3>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <img src="/images/electro.jpg" alt="Electronics" className="w-full h-48 object-cover" />
            <h3 className="text-xl font-semibold p-4">Electronics</h3>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <img src="/images/women.jpg" alt="Women&apos;s Clothing" className="w-full h-48 object-cover" />
            <h3 className="text-xl font-semibold p-4">Women&apos;s Clothing</h3>
          </div>
        </div>
      </section>
      <div className="my-8">
        <input
          type="text"
          placeholder="Rechercher des produits..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {categories.map((category) => (
        <section key={category} className="my-12">
          <h2 className="text-2xl font-bold mb-6 capitalize">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts[category]?.map((product) => (
              <Card key={product.id} product={product} addItems={addItems} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Home;