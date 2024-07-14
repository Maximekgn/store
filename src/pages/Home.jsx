import React from 'react'
import Hero from '../components/Hero/Hero'
import { useEffect, useState } from 'react'

const Home = () => {
    const [categories , setCategories] = useState([])
    const getCategories = async () => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategories(json))
    }

    useEffect(() => {
        getCategories();
    }, [])
  return (
    <>
        <Hero/>
        <div className='flex  gap-10 p-5 mt-5 '> {/*categories*/}
            <div className='w-1/3 gap-5 text-center font-bold flex items-center justify-center  '> {/*jewelery*/}
                <img src="/images/jewelery.jpg "className='  rounded-xl  shadow-xl h-full w-4/6  ' />
                <h1 className='text-xl underline'>Jewelery</h1>
            </div>
            <div className='w-1/3 gap-5 text-center font-bold flex items-center justify-center  '> {/*electronics*/}
                <img src="/images/electro.jpg "  className='  rounded-xl  h-full w-4/6  shadow-xl'/>
                <h1 className='text-xl underline'>Electronics</h1>
            </div>
            <div className='w-1/3 gap-5 text-center font-bold  flex items-center justify-center  '> {/*women's clothing*/}
                <img src="/images/women.jpg "  className='  rounded-xl   h-full w-4/6  shadow-xl'/>
                <h1 className='text-xl underline'>Women Clothes</h1>
            </div>
            
        </div>
        <div>
            {
                categories.map((category)=>{
                    return(
                        <div className='' key={category}> {/*women's clothing*/}
                            <h1>{category}</h1>
                            <div className='flex'>
                                {
                                    fetch('https://fakestoreapi.com/products/category/jewelery')
                                        .then(res=>res.json())
                                        .then(json=>console.log(json))
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default Home