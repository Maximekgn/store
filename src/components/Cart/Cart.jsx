import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Cart = ({ items }) => {
  const [quantities, setQuantities] = useState({});
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const initialQuantities = items.reduce((acc, item) => {
      acc[item.id] = 1;
      return acc;
    }, {});
    setQuantities(initialQuantities);
  }, [items]);

  useEffect(() => {
    const newTotal = items.reduce((sum, item) => {
      return sum + item.price * 650 * (quantities[item.id] || 1);
    }, 0);
    setTotal(newTotal);
  }, [items, quantities]);

  const handleQuantityChange = (id, change) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + change)
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {items.length === 0 ? (
        <p className="text-xl text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg p-6 flex flex-col">
                <img src={item.image} alt={item.title} className="w-full h-48 object-contain mb-4" />
                <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                <p className="text-lg text-gray-600 mb-4">{(item.price * 650 * quantities[item.id]).toLocaleString()} FCFA</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center">
                    <button 
                      className="bg-gray-200 text-gray-800 px-3 py-1 rounded-l-lg"
                      onClick={() => handleQuantityChange(item.id, -1)}
                    >
                      -
                    </button>
                    <span className="bg-gray-100 px-4 py-1">{quantities[item.id] || 1}</span>
                    <button 
                      className="bg-gray-200 text-gray-800 px-3 py-1 rounded-r-lg"
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-right">
            <p className="text-2xl font-bold">Total: {total.toLocaleString()} FCFA</p>
            <button className="mt-4 bg-green-500 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:bg-green-600 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

Cart.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Cart;