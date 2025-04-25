import  { useState, useEffect } from 'react';
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
    <div className="container mx-auto px-4 py-8 pt-20 sm:pt-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center sm:text-left">Your Cart</h1>
      {items.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-lg sm:text-xl text-gray-600 mb-6">Your cart is empty.</p>
          <a href="/" className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            Continue Shopping
          </a>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg p-4 sm:p-6 flex flex-col">
                <div className="relative h-40 sm:h-48 flex items-center justify-center mb-3 sm:mb-4 bg-gray-50 rounded-md p-2">
                  <img src={item.image} alt={item.title} className="max-h-full max-w-full object-contain" />
                </div>
                <h2 className="text-base sm:text-xl font-bold mb-2 line-clamp-2">{item.title}</h2>
                <p className="text-base sm:text-lg text-gray-600 mb-4">{(item.price * 650 * quantities[item.id]).toLocaleString()} FCFA</p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:justify-between mt-auto">
                  <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                    <button 
                      className="bg-gray-100 text-gray-800 px-3 py-1 text-lg font-medium hover:bg-gray-200"
                      onClick={() => handleQuantityChange(item.id, -1)}
                    >
                      -
                    </button>
                    <span className="bg-white px-4 py-1 w-12 text-center">{quantities[item.id] || 1}</span>
                    <button 
                      className="bg-gray-100 text-gray-800 px-3 py-1 text-lg font-medium hover:bg-gray-200"
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                  <button className="bg-red-500 text-white w-full sm:w-auto px-4 py-2 rounded-lg hover:bg-red-600 transition-colors text-sm sm:text-base">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 border-t border-gray-200 pt-6 flex flex-col">
            <p className="text-xl sm:text-2xl font-bold mb-6 text-center sm:text-right">Total: {total.toLocaleString()} FCFA</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-end">
              <a href="/" className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg text-center text-base sm:text-lg font-medium hover:bg-gray-300 transition-colors">
                Continue Shopping
              </a>
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-green-600 transition-colors">
                Proceed to Checkout
              </button>
            </div>
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