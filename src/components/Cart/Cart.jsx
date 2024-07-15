import React, { useState } from 'react';

const Cart = ({ items }) => {
  const [quantities, setQuantities] = useState(items.map(item => 1));

  const handleIncrease = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const handleDecrease = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
    }
    setQuantities(newQuantities);
  };

  return (
    <div>
      <h1>Cart</h1>
      {items.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-6">
          {items.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4">
              <div className="flex justify-center">
                <div className="w-20 h-20 border-2 border-black rounded-full flex items-center justify-center text-black">
                  <p className="text-lg font-bold">{quantities[index]}</p>
                </div>
              </div>
              <div className="mt-4">
                <img src={item.image} alt={item.title} className="w-40 mx-auto" />
                <h2 className="text-xl font-bold mt-2">{item.title}</h2>
                <p className="text-lg text-gray-600 mt-1">{item.price * 650 * quantities[index]} FCFA</p>
              </div>
              <div className="flex justify-center mt-4">
                <button 
                  className="bg-black text-white px-4 py-2 rounded-lg mr-2"
                  onClick={() => handleDecrease(index)}
                >
                  -
                </button>
                <button 
                  className="bg-black text-white px-4 py-2 rounded-lg"
                  onClick={() => handleIncrease(index)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;