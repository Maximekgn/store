import React from 'react'

import { FaCartShopping } from 'react-icons/fa6'
import { IoMdSearch } from 'react-icons/io'
import { RiMoonClearFill } from 'react-icons/ri'
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

const Footer = () => {
  return (
    <div className='py-4 bg-white '>
        <div className="px-14 flex justify-between">
            <div className='flex gap-5 items-center'>   {/*logo and links*/}
                <a href="#" className='text-red-500 italic tracking-widest text-xl uppercase sm:text-2xl'>KGN-Store</a> {/* Logo */}
                <div className='hidden sm:block '>  {/*links*/}
                    <ul className='flex items-center gap-3'> 
                        {
                            menuLinks.map((data , index) => (
                                <li key={index}>
                                    <a 
                                    href={data.path} key={data.id}
                                    className='text-gray-500 font-semibold  hover:text-red-500 hover:underline '
                                    >{data.name}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            <div>
                <h1>Made By @MaximeKGN</h1>
            </div>
        </div>
    </div>
  )
}

export default Footer