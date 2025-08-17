import { IoCartOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaStar } from 'react-icons/fa6';
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <div className="relative flex cursor-pointer flex-col justify-between rounded-2xl border border-gray-100 p-2 transition-all hover:scale-105 hover:shadow-2xl">
      <img
        src={Array.isArray(product.images) ? product.images[0] : product.images}
        alt=""
        className="aspect-square bg-gray-100"
        onClick={() => navigate(`/products/${product.id}`)}
      />
      <h1
        className="line-clamp-2 cursor-pointer p-1 font-semibold"
        onClick={() => navigate(`/products/${product.id}`)}
      >
        {product.title}
      </h1>

      <p className="my-1 text-lg font-bold text-gray-800">
        ${product.price}{' '}
        <span className="ml-4 inline-flex items-center font-semibold text-red-300">
          {product.rating} <FaStar className="text-yellow-500"></FaStar>
        </span>
      </p>
      <button
        onClick={() => addToCart(product)}
        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-red-500 px-3 py-2 text-lg font-semibold text-white"
      >
        <IoCartOutline className="h-6 w-6" />{' '}
        <span className="hidden lg:block">Add to Cart</span>
      </button>
    </div>
  );
};

export default ProductCard;
