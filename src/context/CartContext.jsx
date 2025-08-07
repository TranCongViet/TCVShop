import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useUser } from "@clerk/clerk-react";

export const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
    const { user, isSignedIn } = useUser();
    const [cartItem, setCartItem] = useState([])

    // Get cart key for current user
    const getCartKey = () => {
        return isSignedIn && user ? `cart_${user.id}` : 'cart_guest';
    };

    // Load cart from localStorage
    const loadCartFromStorage = () => {
        try {
            const cartKey = getCartKey();
            const savedCart = localStorage.getItem(cartKey);
            return savedCart ? JSON.parse(savedCart) : [];
        } catch (error) {
            console.error('Error loading cart from storage:', error);
            return [];
        }
    };

    // Save cart to localStorage
    const saveCartToStorage = (cart) => {
        try {
            const cartKey = getCartKey();
            localStorage.setItem(cartKey, JSON.stringify(cart));
        } catch (error) {
            console.error('Error saving cart to storage:', error);
        }
    };

    // Load cart when component mounts or user changes
    useEffect(() => {
        const savedCart = loadCartFromStorage();
        setCartItem(savedCart);
        console.log('Cart loaded for user:', isSignedIn ? user?.id : 'guest', savedCart);
    }, [user, isSignedIn]);

    // Save cart whenever cartItem changes
    useEffect(() => {
        saveCartToStorage(cartItem);
    }, [cartItem, user, isSignedIn]);

    const addToCart = (product) => {
        if (!isSignedIn) {
            toast.error("Please sign in to add items to cart!");
            return;
        }

        const itemInCart = cartItem.find((item) => item.id === product.id)
        if (itemInCart) {
            // Increase quantity if already in cart
            const updatedCart = cartItem.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCartItem(updatedCart)
            toast.success("Product quantity increased!")
        } else {
            //Add new item with quantity 1
            setCartItem([...cartItem, { ...product, quantity: 1 }])
            toast.success("Product is added to cart!")
        }
        console.log('Cart updated for user:', user?.firstName || user?.id);
    }

    const updateQuantity = (cartItem, productId, action) => {
        if (!isSignedIn) {
            toast.error("Please sign in to update cart!");
            return;
        }

        setCartItem(cartItem.map(item => {
            if (item.id === productId) {
                let newUnit = item.quantity;
                if (action === "increase") {
                    newUnit = newUnit + 1
                    toast.success("Quantity is increased!")
                } else if (action === "decrease") {
                    newUnit = newUnit - 1
                    toast.success("Quantity is decreased!")
                }
                return newUnit > 0 ? { ...item, quantity: newUnit } : null
            }
            return item;
        }).filter(item => item != null) // remove item quantity 0
        )
    }

    const deleteItem = (productId) => {
        if (!isSignedIn) {
            toast.error("Please sign in to modify cart!");
            return;
        }

        setCartItem(cartItem.filter(item => item.id !== productId))
        toast.success("Product is deleted from cart!")
    }

    const clearCart = () => {
        setCartItem([]);
        toast.success("Cart cleared!");
    }

    return <CartContext.Provider value={{ 
        cartItem, 
        setCartItem, 
        addToCart, 
        updateQuantity, 
        deleteItem, 
        clearCart,
        user,
        isSignedIn,
        totalItems: cartItem.reduce((total, item) => total + item.quantity, 0),
        totalPrice: cartItem.reduce((total, item) => total + (item.price * item.quantity), 0)
    }}>
        {children}
    </CartContext.Provider>
}

export const useCart = () => useContext(CartContext)