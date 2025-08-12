import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../assets/Loading4.webm';
import Breadcrums from '../components/Breadcrums';
import { IoCartOutline } from 'react-icons/io5';
import { useCart } from '../context/CartContext';

const SingleProduct = () => {
  const params = useParams();
  const [SingleProduct, setSingleProduct] = useState('');
  const { addToCart } = useCart();

  const getSingleProduct = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.in/api/products/${params.id}`
      );
      const product = res.data.product;
      setSingleProduct(product);
      console.log(product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  const OriginalPrice = Math.round(
    SingleProduct.price + (SingleProduct.price * SingleProduct.discount) / 100
  );

  return (
    <>
      {SingleProduct ? (
        <div className="px-4 pb-4 md:px-0">
          <Breadcrums title={SingleProduct.title} />
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2 md:p-6">
            {/* product image */}
            <div className="w-full">
              <img
                src={SingleProduct.image}
                alt={SingleProduct.title}
                className="w-full rounded-2xl object-cover"
              />
            </div>
            {/* product details */}
            <div className="flex flex-col gap-6">
              <h1 className="text-xl font-bold text-gray-800 md:text-3xl">
                {SingleProduct.title}
              </h1>
              <div className="text-gray-700">
                {SingleProduct.brand?.toUpperCase()} /
                {SingleProduct.category?.toUpperCase()} /{SingleProduct.model}
              </div>
              <p className="text-xl font-bold text-red-500">
                ${SingleProduct.price}{' '}
                <span className="text-gray-700 line-through">
                  ${OriginalPrice}
                </span>{' '}
                <span className="rounded-full bg-red-500 px-4 py-2 text-white">
                  {SingleProduct.discount}% discount
                </span>
              </p>
              <p className="text-gray-600">{SingleProduct.description}</p>

              {/* qunatity selector */}
              <div className="flex items-center gap-4">
                <label htmlFor="" className="text-sm font-medium text-gray-700">
                  Quantity:
                </label>
                <input
                  type="number"
                  min={1}
                  value={1}
                  className="foucs:ring-red-500 w-20 rounded-lg border border-gray-300 px-3 py-1 focus:ring-2 focus:outline-none"
                />
              </div>

              <div className="mt-4 flex gap-4">
                <button
                  onClick={() => addToCart(SingleProduct)}
                  className="flex gap-2 rounded-md bg-red-500 px-6 py-2 text-lg text-white"
                >
                  <IoCartOutline className="h-6 w-6" /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-screen items-center justify-center">
          <video muted autoPlay loop>
            <source src={Loading} type="video/webm" />
          </video>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
