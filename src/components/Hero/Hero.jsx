import React, { useEffect , useState } from 'react'

const Hero = ({addItems} ) => {

    const [product , setproduct] = useState([])
    const getARandomProduct = async () => {
        const randomNumber = Math.floor(Math.random() * 17)
        fetch('https://fakestoreapi.com/products/'+randomNumber)
            .then(res=>res.json())
            .then(json=>setproduct(json))  
    }

    useEffect(() => {
        getARandomProduct()
    }, [])

  return (

    <div className='flex justify-around h-[50dvh] w-full  mt-5'>
        <div> {/*image*/}
            <img src={product.image} alt={product.title} className='w-full h-full object-cover' />
        </div>
        <div className='flex items-center flex-col justify-center'> {/*text*/}
            <h1 className='text-3xl font-bold'>{product.category}</h1>
            <h1 className='text-2xl font-extrabold'>{product.title}</h1>
            <h1 className='text-lg font-semibold'>{product.price * 650} FCFA</h1>
            <div className='flex gap-5 mt-8'>
                <button className='p-5 rounded-xl shadow hover:shadow-2xl' onClick={() => addItems(product)} >Add to cart </button> <button className='p-5 shadow hover:shadow-2xl rounded-xl text-white bg-black'>Buy now</button>
            </div>
        </div>
    </div>
  )
}

export default 
Hero