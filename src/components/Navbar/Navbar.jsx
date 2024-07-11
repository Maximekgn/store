import React from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import { IoMdSearch } from 'react-icons/io'
import { RiMoonClearFill } from 'react-icons/ri'
import { RxAvatar } from 'react-icons/rx'
const menuLinks = [
    {
        id: 1,
        name: "Home",
        path: "/"
    },
    {
        id: 2,
        name: "Shop",
        path: "/Shop"
    },
    {
        id: 3,
        name: "About",
        path: "/About"
    }, 
    {
        id: 4,
        name: "Contact",
        path: "/Contact"
    }

]
const Navbar = () => {
  return (
    <nav className='py-4 bg-white mb-5 w-full fixed '>
        <div className="px-14 flex justify-between">
            <div className='flex gap-7 items-center'>   {/*logo and links*/}
                <a href="#" className='text-red-500 font-semibold tracking-widest text-xl uppercase sm:text-2xl'>KGN-Store</a> {/* Logo */}
                <div className='hidden sm:block '>  {/*links*/}
                    <ul className='flex items-center gap-5'> 
                        {
                            menuLinks.map((data , index) => (
                                <li key={index}>
                                    <a 
                                    href={data.path} key={data.id}
                                    className='text-gray-500 font-bold text-lg  hover:text-red-500 hover:underline '
                                    >{data.name}
                                    </a>
                                </li>
                            ))
                        }
                        {/* dropdown */}
                    </ul>
                </div>
            </div>

            <div className='flex justify-between items-center gap-4'>  {/*search bar AND BUTTONS */}
                <div className='relative group hidden sm:block' > {/*search bar*/}
                    <input type="text" placeholder='Search'
                    className='w-0 group-hover:w-full transition-all duration-500 rounded-full group-hover:border group-hover:border-gray-800 py-1 focus:outline-none focus:border-1 px-2'/>
                    <IoMdSearch className='text-2xl text-gray-600 hover:cursor-pointer absolute top-1/2 right-3 translate-y-[-50%] '/>
                </div>

                <div className='gap-5 hidden sm:flex'> {/*buttons*/}
                    <button className='relative p-3'>
                        <FaCartShopping className='text-xl text-gray-600 '/>
                        <span className='absolute -top-0 -right-0 text-white bg-red-500 rounded-full px-1 text-xs'>0</span>
                    </button>
                    <button onClick={()=>console.log("change theme")}>
                        <RiMoonClearFill className='text-2xl'/>
                    </button>
                    <button className='group'>
                        <RxAvatar className='text-2xl'/>
                        <div className='bg-gray-300 hidden group-hover:block absolute right-5 p-3'>
                            <p>Username</p>
                            <p>Logout</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar