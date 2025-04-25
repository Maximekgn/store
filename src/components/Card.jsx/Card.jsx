import PropTypes from 'prop-types';

const Card = ({ product, addItems }) => {
  return (
    <div className='flex flex-col rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 h-full'>
      <div className='flex-shrink-0 relative pb-[70%] sm:pb-[100%] overflow-hidden bg-gray-50'>
        <img 
          className='absolute top-0 left-0 w-full h-full object-contain p-2 transition-transform duration-500 hover:scale-105' 
          src={product.image} 
          alt={product.title} 
        />
        <div className='absolute top-3 right-3 bg-black text-white text-xs font-bold px-2 py-1 rounded-full'>
          {product.category}
        </div>
      </div>
      <div className='flex-1 bg-white p-4 sm:p-6 flex flex-col justify-between'>
        <div className='flex-1 space-y-2 sm:space-y-3'>
          <h3 className='text-lg sm:text-xl font-bold text-gray-900 line-clamp-2'>{product.title}</h3>
          <p className='text-gray-500 text-xs sm:text-sm line-clamp-3'>{product.description}</p>
        </div>
        <div className='pt-3 mt-3 sm:pt-4 sm:mt-4 border-t border-gray-100'>
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2'>
            <p className='text-lg sm:text-xl font-bold text-gray-900'>{(product.price * 650).toLocaleString()} FCFA</p>
            <button 
              className='bg-black text-white font-semibold py-2 px-4 rounded-lg shadow-sm hover:bg-gray-800 transition-all duration-300 hover:shadow-md w-full sm:w-auto' 
              onClick={() => addItems(product)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  addItems: PropTypes.func.isRequired,
};

export default Card;