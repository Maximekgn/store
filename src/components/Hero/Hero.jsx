import React, { useEffect, useState } from "react";

const Hero = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProduct = async (id) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch product:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const newProduct = await fetchProduct(Math.floor(Math.random() * 20) + 1);
      if (newProduct) {
        setProduct(newProduct);
      }
      setLoading(false);
    };

    fetchData();
    const intervalId = setInterval(fetchData, 6000);

    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return (
      <div className="bg-gray-200 flex p-10 mx-14 rounded-xl h-[500px] overflow-hidden"></div>
    );
  }

  if (!product) {
    return <div>No product available</div>;
  }

  return (
    <div className="bg-gray-200 flex flex-col lg:flex-row p-10 mx-14 rounded-xl h-auto lg:h-[500px] overflow-hidden items-center shadow-xl">
      <div className="lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
        <h1 className="text-2xl uppercase">{product.category}</h1>
        <h1 className="font-bold text-5xl">{product.title}</h1>
        <h1 className="text-xl">${product.price}</h1>
        <div className="flex gap-5 font-bold mt-8 justify-center lg:justify-start">
          <button className="border border-red-500 rounded-xl p-4 hover:bg-red-500 hover:border-none">
            Ajoutez au Panier
          </button>
          <button className="bg-red-500 p-4 rounded-xl text-white hover:bg-red-600">
            Acheter
          </button>
        </div>
      </div>
      <div className="lg:w-1/3 flex justify-center items-center">
        <img src={product.image} alt={product.title} className="w-full lg:w-2/3 object-contain" />
      </div>
      <div className="lg:w-1/3 mt-8 lg:mt-0 text-center lg:text-left">
        <h1 className="text-xl font-semibold">{product.description}</h1>
      </div>
    </div>
  );
};

export default Hero;
