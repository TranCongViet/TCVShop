import React from 'react';
import { useCart } from '../context/CartContext';
import { FaRegTrashAlt } from 'react-icons/fa';
import { LuNotebookText } from 'react-icons/lu';
import { MdDeliveryDining } from 'react-icons/md';
import { GiShoppingBag } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import emptyCart from '../assets/empty-cart.png';

const Cart = ({ location, getLocation }) => {
  const { cartItem, updateQuantity, deleteItem, user, isSignedIn, totalPrice } =
    useCart();
  const navigate = useNavigate();

  // Redirect to sign in if not authenticated
  if (!isSignedIn) {
    return (
      <div className="mt-20 text-center">
        <h2 className="mb-4 text-2xl font-bold">
          Please sign in to view your cart
        </h2>
        <p className="text-gray-600">
          You need to be logged in to access your shopping cart.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-10 mb-5 max-w-6xl px-4 md:px-0">
      {cartItem.length > 0 ? (
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold">My Cart ({cartItem.length})</h1>
            <div className="text-sm text-gray-600">
              Welcome, {user?.firstName || user?.username || 'User'}!
            </div>
          </div>
          <div>
            <div className="mt-10">
              {cartItem.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="mt-3 flex w-full items-center justify-between rounded-md bg-gray-100 p-5"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-20 w-20 rounded-md"
                      />
                      <div>
                        <h1 className="line-clamp-2 md:w-[300px]">
                          {item.title}
                        </h1>
                        <p className="text-lg font-semibold text-red-500">
                          ${item.price}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 rounded-md bg-red-500 p-2 text-xl font-bold text-white">
                      <button
                        onClick={() =>
                          updateQuantity(cartItem, item.id, 'decrease')
                        }
                        className="cursor-pointer"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(cartItem, item.id, 'increase')
                        }
                        className="cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                    <span
                      onClick={() => deleteItem(item.id)}
                      className="rounded-full p-3 transition-all hover:bg-white/60 hover:shadow-2xl"
                    >
                      <FaRegTrashAlt className="cursor-pointer text-2xl text-red-500" />
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20">
              <div className="mt-4 space-y-2 rounded-md bg-gray-100 p-7">
                <h1 className="text-xl font-bold text-gray-800">
                  Delivery Info
                </h1>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="rounded-md p-2"
                    value={user?.fullName}
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="">Address</label>
                  <input
                    type="text"
                    placeholder="Enter your address"
                    className="rounded-md p-2"
                    value={location?.county}
                  />
                </div>
                <div className="flex w-full gap-5">
                  <div className="flex w-full flex-col space-y-1">
                    <label htmlFor="">State</label>
                    <input
                      type="text"
                      placeholder="Enter your state"
                      className="w-full rounded-md p-2"
                      value={location?.state}
                    />
                  </div>
                  <div className="flex w-full flex-col space-y-1">
                    <label htmlFor="">PostCode</label>
                    <input
                      type="text"
                      placeholder="Enter your postcode"
                      className="w-full rounded-md p-2"
                      value={location?.postcode}
                    />
                  </div>
                </div>
                <div className="flex w-full gap-5">
                  <div className="flex w-full flex-col space-y-1">
                    <label htmlFor="">Country</label>
                    <input
                      type="text"
                      placeholder="Enter your country"
                      className="w-full rounded-md p-2"
                      value={location?.country}
                    />
                  </div>
                  <div className="flex w-full flex-col space-y-1">
                    <label htmlFor="">Phone No</label>
                    <input
                      type="text"
                      placeholder="Enter your Number"
                      className="w-full rounded-md p-2"
                    />
                  </div>
                </div>
                <button className="mt-3 cursor-pointer rounded-md bg-red-500 px-3 py-1 text-white">
                  Submit
                </button>
                <div className="flex w-full items-center justify-center text-gray-700">
                  ---------OR-----------
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={getLocation}
                    className="rounded-md bg-red-500 px-3 py-2 text-white"
                  >
                    Detect Location
                  </button>
                </div>
              </div>
              <div className="mt-4 h-max space-y-2 rounded-md border border-gray-100 bg-white p-7 shadow-xl">
                <h1 className="text-xl font-bold text-gray-800">
                  Bill details
                </h1>
                <div className="flex items-center justify-between">
                  <h1 className="flex items-center gap-1 text-gray-700">
                    <span>
                      <LuNotebookText />
                    </span>
                    Items total
                  </h1>
                  <p>${totalPrice}</p>
                </div>
                <div className="flex items-center justify-between">
                  <h1 className="flex items-center gap-1 text-gray-700">
                    <span>
                      <MdDeliveryDining />
                    </span>
                    Delivery Charge
                  </h1>
                  <p className="font-semibold text-red-500">
                    <span className="text-gray-600 line-through">$25</span> FREE
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <h1 className="flex items-center gap-1 text-gray-700">
                    <span>
                      <GiShoppingBag />
                    </span>
                    Handling Charge
                  </h1>
                  <p className="font-semibold text-red-500">$5</p>
                </div>
                <hr className="mt-2 text-gray-200" />
                <div className="flex items-center justify-between">
                  <h1 className="text-lg font-semibold">Grand total</h1>
                  <p className="text-lg font-semibold">${totalPrice + 5}</p>
                </div>
                <div>
                  <h1 className="mt-7 mb-3 font-semibold text-gray-700">
                    Apply Promo Code
                  </h1>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="w-full rounded-md p-2"
                    />
                    <button className="cursor-pointer rounded-md border border-gray-200 bg-white px-4 py-1 text-black">
                      Apply
                    </button>
                  </div>
                </div>
                <button className="mt-3 w-full cursor-pointer rounded-md bg-red-500 px-3 py-2 text-white">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-[600px] flex-col items-center justify-center gap-3">
          <h1 className="text-muted text-5xl font-bold text-red-500/80">
            Oh no! Your cart is empty
          </h1>
          <img src={emptyCart} alt="" className="w-[400px]" />
          <button
            onClick={() => navigate('/products')}
            className="cursor-pointer rounded-md bg-red-500 px-3 py-2 text-white"
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
