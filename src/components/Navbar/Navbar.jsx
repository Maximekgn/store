import React, { useEffect, useState } from 'react';
import { CiShoppingCart } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { CiCircleList } from "react-icons/ci";
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ numOfItems }) => {
  const [numberOfItems, setNumberOfItems] = useState(0);

  useEffect(() => {
    setNumberOfItems(numOfItems);
  }, [numOfItems]);

  return (
    <nav className='flex justify-between font-sansS px-10 py-3 mt-2 bg-black text-white rounded-full shadow-xl mx-10'>
      <div> {/*left*/}
        <h1 className='text-2xl italic'>KgnStore</h1>
      </div>
      <div> {/*center*/}
        <ul className='flex gap-10 text-xl sm:flex hidden'>
          <li><Link to="/" className='links'>Home</Link></li>
          <li><a href="#" className='links'>Explore</a></li>
          <li><a href="#" className='links'>Contact</a></li>
        </ul>
      </div>
      <div className='flex gap-10'> {/*right*/}
        <div className='gap-1 p-2 flex hover:cursor-pointer hover:bg-white hover:text-black hover:rounded-xl'>
          <Link to="/cart">
            <div className="flex">
            <CiShoppingCart className='text-2xl' />
            <span className={numberOfItems > 0 ? "bg-red-500 text-white rounded-full px-1" : "hidden"}>
              {numberOfItems}
            </span>
            </div>
          </Link>
        </div>
        <div className='group relative flex items-center'>
          <RxAvatar className='text-2xl' />
          <ul className='hidden group-hover:block p-5 absolute -right-10 top-10 text-black bg-white rounded shadow-xl'>
            <li><a href="#">Login</a></li>
            <li><a href="#">See Details</a></li>
          </ul>
        </div>
        <div className='block sm:hidden'> {/*toggle btn*/}
          <CiCircleList />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
