import React from 'react';
import { useCart } from '../context/CartContext';
import { useUser } from '@clerk/clerk-react';

const CartTest = () => {
  const {
    cartItem,
    addToCart,
    updateQuantity,
    deleteItem,
    totalItems,
    totalPrice,
    isSignedIn,
  } = useCart();
  const { user } = useUser();

  // Test product data
  const testProduct = {
    id: 999,
    title: 'Test Product',
    price: 99.99,
    image: 'https://via.placeholder.com/150',
    description: 'This is a test product for cart functionality',
  };

  if (!isSignedIn) {
    return (
      <div className="rounded border border-red-400 bg-red-100 p-4">
        <h3 className="font-bold text-red-800">Authentication Required</h3>
        <p className="text-red-600">
          Please sign in to test cart functionality.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md rounded-lg border bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-xl font-bold">Cart Test Component</h2>

      <div className="mb-4 rounded bg-blue-50 p-3">
        <p className="text-sm">
          <strong>User:</strong>{' '}
          {user?.firstName || user?.username || 'Unknown'}
        </p>
        <p className="text-sm">
          <strong>Items in cart:</strong> {totalItems}
        </p>
        <p className="text-sm">
          <strong>Total price:</strong> ${totalPrice.toFixed(2)}
        </p>
      </div>

      <div className="mb-4">
        <button
          onClick={() => addToCart(testProduct)}
          className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Add Test Product to Cart
        </button>
      </div>

      {cartItem.length > 0 && (
        <div className="space-y-2">
          <h3 className="font-semibold">Cart Items:</h3>
          {cartItem.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded bg-gray-50 p-2"
            >
              <div className="text-sm">
                <p className="font-medium">{item.title}</p>
                <p className="text-gray-600">
                  Qty: {item.quantity} × ${item.price}
                </p>
              </div>
              <div className="flex gap-1">
                <button
                  onClick={() => updateQuantity(cartItem, item.id, 'increase')}
                  className="rounded bg-green-500 px-2 py-1 text-xs text-white"
                >
                  +
                </button>
                <button
                  onClick={() => updateQuantity(cartItem, item.id, 'decrease')}
                  className="rounded bg-yellow-500 px-2 py-1 text-xs text-white"
                >
                  -
                </button>
                <button
                  onClick={() => deleteItem(item.id)}
                  className="rounded bg-red-500 px-2 py-1 text-xs text-white"
                >
                  X
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartTest;
