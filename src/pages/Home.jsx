import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Hero from '../components/Hero/Hero';
import Card from '../components/Card.jsx/Card';
import Loading from '../components/Loading';

const Home = ({ addItems }) => {
  const [categories, setCategories] = useState([]);
  const [productsByCategory, setProductsByCategory] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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
      const fetchAllProducts = async () => {
        setIsLoading(true);
        await Promise.all(categories.map(getProducts));
        setIsLoading(false);
      };
      fetchAllProducts();
    }
  }, [categories]);

  useEffect(() => {
    const filtered = Object.keys(productsByCategory).reduce((acc, category) => {
      acc[category] = productsByCategory[category]?.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      ) || [];
      return acc;
    }, {});
    setFilteredProducts(filtered);
  }, [searchTerm, productsByCategory]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50">
      <Hero addItems={addItems} />
      
      <section className="my-10 sm:my-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-10 text-center text-gray-800 relative after:content-[''] after:block after:w-16 sm:after:w-24 after:h-1 after:bg-blue-500 after:mx-auto after:mt-3 sm:after:mt-4">
          Featured Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-102 hover:shadow-xl">
            <div className="relative h-40 sm:h-56 overflow-hidden">
              <img src="/images/jewelery.jpg" alt="Jewelery" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold p-4 sm:p-5 text-gray-800">Jewelery</h3>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-102 hover:shadow-xl">
            <div className="relative h-40 sm:h-56 overflow-hidden">
              <img src="/images/electro.jpg" alt="Electronics" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold p-4 sm:p-5 text-gray-800">Electronics</h3>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-102 hover:shadow-xl">
            <div className="relative h-40 sm:h-56 overflow-hidden">
              <img src="/images/women.jpg" alt="Women's Clothing" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold p-4 sm:p-5 text-gray-800">Women&apos;s Clothing</h3>
          </div>
        </div>
      </section>
      
      <div className="my-8 sm:my-12">
        <div className="relative max-w-xl sm:max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-md text-base sm:text-lg"
          />
          <svg className="w-5 h-5 sm:w-6 sm:h-6 absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </div>
      
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Loading />
        </div>
      ) : (
        categories.map((category) => (
          <section key={category} className="my-10 sm:my-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 capitalize text-gray-800 border-l-4 border-blue-500 pl-4">
              {category}
            </h2>
            {filteredProducts[category]?.length === 0 ? (
              <p className="text-center text-gray-500 py-8">No products found in this category.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                {filteredProducts[category]?.map((product) => (
                  <Card key={product.id} product={product} addItems={addItems} />
                ))}
              </div>
            )}
          </section>
        ))
      )}
    </div>
  );
};

Home.propTypes = {
  addItems: PropTypes.func.isRequired
};

export default Home;