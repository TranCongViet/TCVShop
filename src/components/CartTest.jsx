import React from 'react';
import { useCart } from '../context/CartContext';
import { useUser } from '@clerk/clerk-react';

const CartTest = () => {
  const { cartItem, addToCart, updateQuantity, deleteItem, totalItems, totalPrice, isSignedIn } = useCart();
  const { user } = useUser();

  // Test product data
  const testProduct = {
    id: 999,
    title: "Test Product",
    price: 99.99,
    image: "https://via.placeholder.com/150",
    description: "This is a test product for cart functionality"
  };

  if (!isSignedIn) {
    return (
      <div className="p-4 bg-red-100 border border-red-400 rounded">
        <h3 className="text-red-800 font-bold">Authentication Required</h3>
        <p className="text-red-600">Please sign in to test cart functionality.</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white border rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Cart Test Component</h2>
      
      <div className="mb-4 p-3 bg-blue-50 rounded">
        <p className="text-sm"><strong>User:</strong> {user?.firstName || user?.username || 'Unknown'}</p>
        <p className="text-sm"><strong>Items in cart:</strong> {totalItems}</p>
        <p className="text-sm"><strong>Total price:</strong> ${totalPrice.toFixed(2)}</p>
      </div>

      <div className="mb-4">
        <button 
          onClick={() => addToCart(testProduct)}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Test Product to Cart
        </button>
      </div>

      {cartItem.length > 0 && (
        <div className="space-y-2">
          <h3 className="font-semibold">Cart Items:</h3>
          {cartItem.map((item) => (
            <div key={item.id} className="p-2 bg-gray-50 rounded flex justify-between items-center">
              <div className="text-sm">
                <p className="font-medium">{item.title}</p>
                <p className="text-gray-600">Qty: {item.quantity} × ${item.price}</p>
              </div>
              <div className="flex gap-1">
                <button 
                  onClick={() => updateQuantity(cartItem, item.id, "increase")}
                  className="px-2 py-1 bg-green-500 text-white rounded text-xs"
                >
                  +
                </button>
                <button 
                  onClick={() => updateQuantity(cartItem, item.id, "decrease")}
                  className="px-2 py-1 bg-yellow-500 text-white rounded text-xs"
                >
                  -
                </button>
                <button 
                  onClick={() => deleteItem(item.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded text-xs"
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
