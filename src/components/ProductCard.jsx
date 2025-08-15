import { IoCartOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart, cartItem } = useCart();

  console.log(cartItem);

  return (
    <div className="relative h-max cursor-pointer rounded-2xl border border-gray-100 p-2 transition-all hover:scale-105 hover:shadow-2xl">
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
      <p className="my-1 text-lg font-bold text-gray-800">${product.price}</p>
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
