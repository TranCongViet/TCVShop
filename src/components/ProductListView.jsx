import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductListView = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  return (
    <div className="mt-2 space-y-4 rounded-md">
      <div className="flex items-center gap-7 rounded-md bg-gray-100 p-2">
        <img
          src={product.image}
          alt={product.title}
          className="h-25 w-25 cursor-pointer rounded-md md:h-60 md:w-60"
          onClick={() => navigate(`/products/${product.id}`)}
        />
        <div className="space-y-2">
          <h1 className="line-clamp-3 w-[220px] text-lg font-bold hover:text-red-400 md:w-full md:text-xl">
            {product.title}
          </h1>
          <p className="flex items-center text-sm font-semibold md:text-lg">
            $<span className="text-3xl md:text-4xl">{product.price}</span> (
            {product.discount}% off)
          </p>
          <p className="text-sm">
            FREE delivery <span className="font-semibold">Fri, 18 Apr</span>{' '}
            <br />
            Or fastest delivery{' '}
            <span className="font-semibold">Tomorrow, 17 Apr</span>
          </p>
          <button
            onClick={() => addToCart(product)}
            className="rounded-md bg-red-500 px-3 py-1 text-white"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListView;
