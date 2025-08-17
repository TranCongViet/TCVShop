import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrums from '../components/Breadcrums';
import { IoCartOutline } from 'react-icons/io5';
import { FaStar } from 'react-icons/fa6';
import { useCart } from '../context/CartContext';
import { MdOutlineLocalShipping } from 'react-icons/md';
import ProductDetailSkeleton from '../components/skeleton/ProductDetailSkeleton';
const SingleProduct = () => {
  const params = useParams();
  const [SingleProduct, setSingleProduct] = useState('');
  const { addToCart } = useCart();

  const getSingleProduct = async () => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/${params.id}`
      );
      const product = res.data;
      setSingleProduct(product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  const OriginalPrice = Math.round(
    SingleProduct.price +
      (SingleProduct.price * SingleProduct.discountPercentage) / 100
  );

  return (
    <>
      {SingleProduct ? (
        <div className="bg-gray-100 px-4 pb-4 md:px-0">
          <Breadcrums title={SingleProduct.title} />
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 rounded-2xl bg-white shadow-lg md:grid-cols-2 md:p-6">
            {/* product image */}
            <div className="w-full">
              <img
                src={
                  Array.isArray(SingleProduct.images)
                    ? SingleProduct.images[0]
                    : SingleProduct.images
                }
                alt={SingleProduct.title}
                className="w-full rounded-2xl object-cover"
              />
            </div>
            {/* product details */}
            <div className="flex flex-col gap-6 p-5">
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
                  {SingleProduct.discountPercentage}% discount
                </span>
                <span className="ml-4 inline-flex items-center">
                  {SingleProduct.rating}{' '}
                  <FaStar className="text-yellow-500"></FaStar>
                </span>
              </p>

              <p className="text-gray-900">{SingleProduct.description}</p>
              <p className="flex items-center space-x-2">
                <span className="text-gray-400">Shipping: </span>
                <MdOutlineLocalShipping className="text-green-500" />
                <span>{SingleProduct.shippingInformation}</span>
              </p>

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
                  className="flex cursor-pointer gap-2 rounded-md bg-red-500 px-6 py-2 text-lg text-white"
                >
                  <IoCartOutline className="h-6 w-6" /> Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-5 max-w-6xl rounded-2xl bg-white p-5 shadow-lg">
            <h2 className="w-full bg-gray-100 px-5 py-2 text-xl font-bold">
              Product Specifications
            </h2>
            <div className="space-y-5 p-5">
              <div className="flex">
                <div className="w-50 text-sm text-gray-500">Category</div>
                <div className="flex-1 text-sm">{SingleProduct.category} </div>
              </div>

              <div className="flex">
                <div className="w-50 text-sm text-gray-500">Brand</div>
                <div className="flex-1 text-sm text-gray-900">
                  {SingleProduct.brand}
                </div>
              </div>

              <div className="flex">
                <div className="w-50 text-sm text-gray-500">Stock</div>
                <div className="flex-1 text-sm text-gray-900">
                  {SingleProduct.stock}
                </div>
              </div>

              <div className="flex">
                <div className="w-50 text-sm text-gray-500">
                  Warranty Information
                </div>
                <div className="flex-1 text-sm text-gray-900">
                  {SingleProduct.warrantyInformation}
                </div>
              </div>

              <div className="flex">
                <div className="w-50 text-sm text-gray-500">Return Policy</div>
                <div className="flex-1 text-sm text-gray-900">
                  {SingleProduct.returnPolicy}
                </div>
              </div>
            </div>

            <h2 className="w-full bg-gray-100 px-5 py-2 text-xl font-bold">
              Product Description
            </h2>
            <div className="space-y-5 p-5 text-gray-900">
              <p>{SingleProduct.description}</p>
              <div className="block">
                <span className="font-semibold">Weight:</span>{' '}
                {SingleProduct.weight} g
              </div>
              <div>
                <span className="font-semibold">Dimensions:</span>{' '}
                {SingleProduct.dimensions.width} ×{' '}
                {SingleProduct.dimensions.height} ×{' '}
                {SingleProduct.dimensions.depth} cm
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ProductDetailSkeleton />
      )}
    </>
  );
};

export default SingleProduct;
