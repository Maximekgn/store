import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CiShoppingCart } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { CiCircleList } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ numOfItems }) => {
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(false);

  useEffect(() => {
    setNumberOfItems(numOfItems);
  }, [numOfItems]);

  useEffect(() => {
    const handleScroll = () => {
      setIsTransparent(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center font-sans px-4 sm:px-10 py-3 mt-2 ${isTransparent ? 'bg-black bg-opacity-50' : 'bg-black'} text-white rounded-full shadow-xl mx-2 sm:mx-10 transition-all duration-300 ease-in-out`}
      onMouseEnter={() => setIsTransparent(false)}
      onMouseLeave={() => window.scrollY > 10 && setIsTransparent(true)}
    >
      <div> {/* left */}
        <Link to="/">
          <h1 className='text-xl sm:text-2xl italic'>KgnStore</h1>
        </Link>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:block`}> {/* center */}
        <ul className='flex flex-col sm:flex-row gap-5 sm:gap-10 text-xl absolute sm:relative top-full left-0 right-0 bg-black sm:bg-transparent mt-2 sm:mt-0 p-5 sm:p-0 rounded-b-2xl sm:rounded-none shadow-lg sm:shadow-none z-50 border-t sm:border-t-0 border-gray-800'>
          <li><Link to="/" className='links block py-2 sm:py-0'>Home</Link></li>
          <li><Link to="/contact" className='links block py-2 sm:py-0'>Contact</Link></li>
        </ul>
      </div>
      <div className='flex gap-4 sm:gap-10 items-center'> {/* right */}
        <div className='p-2 flex items-center hover:cursor-pointer hover:bg-white hover:text-black hover:rounded-xl transition-colors duration-200'>
          <Link to="/cart" className='flex items-center'>
            <CiShoppingCart className='text-xl sm:text-2xl' />
            {numberOfItems > 0 && (
              <span className="bg-red-500 text-white rounded-full px-1.5 text-xs ml-1 flex items-center justify-center min-w-[20px] h-5">
                {numberOfItems}
              </span>
            )}
          </Link>
        </div>
        <div className='group relative flex items-center'>
          <RxAvatar className='text-xl sm:text-2xl' />
          <ul className='hidden group-hover:block p-3 sm:p-5 absolute -right-5 sm:-right-10 top-8 sm:top-10 text-black bg-white rounded shadow-xl z-50 min-w-[120px]'>
            <li className='py-1'><a href="#" className='block hover:bg-gray-100 px-2 py-1 rounded'>Login</a></li>
            <li className='py-1'><a href="#" className='block hover:bg-gray-100 px-2 py-1 rounded'>See Details</a></li>
          </ul>
        </div>
        <div className='block sm:hidden'> {/* toggle btn */}
          {isMenuOpen ? (
            <IoMdClose className='text-2xl cursor-pointer' onClick={toggleMenu} />
          ) : (
            <CiCircleList className='text-2xl cursor-pointer' onClick={toggleMenu} />
          )}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  numOfItems: PropTypes.number.isRequired,
};

export default Navbar;