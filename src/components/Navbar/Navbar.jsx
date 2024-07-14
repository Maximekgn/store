import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { CiCircleList } from "react-icons/ci";
import './Navbar.css'



const Navbar = () => {
  return (
    <nav className='  flex justify-between font-sansS px-10 py-5  mt-2 bg-black text-white rounded-full shadow-xl '>
        <div> {/*left*/}
            <h1 className='text-2xl italic'>KgnStore</h1>
        </div>
        <div > {/*center*/}
           <ul className='flex gap-10 text-xl'>
               <li><a href="#" className='links' >Home</a></li>
               <li><a href="#" className='links' >Explore</a></li>
               <li><a href="#" className='links' >Contact</a></li>
           </ul>
        </div>
        <div className='flex gap-10'> {/*right*/}
            <div>
                <CiShoppingCart className='text-2xl' />
            </div>
            <div className='group relative  '>
                <RxAvatar className='text-2xl' />
                <ul className='hidden group-hover:block p-5  absolute right-2 text-white bg-black  '>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">See Details</a></li>
                </ul>
            </div>
            <div className='block sm:hidden '> {/*toogle btn*/}
                <CiCircleList />
            </div>
        </div>
    </nav>
  )
}

export default Navbar