import { createContext, useState, useContext, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const addCart = (item) => {
        const itemInCart = cart.find((producto) => producto.id === item.id)
        if (itemInCart) {
            const newCart = cart.map((producto) => {
                if (producto.id === item.id) {
                    return { ...producto, quantity: producto.quantity + item.quantity }
                } else {
                    return producto;
                }
            })
            setCart(newCart);
        } else {
            setCart([...cart, item])
        }
    }

    const clearCart = () => {
        setCart([]);
    }

    const removeItem = (id) => {
        setCart(cart.filter((producto) => producto.id !== id));
    }

    const cartCantidad = () => {
        return cart.reduce((acc, producto) => acc += producto.quantity, 0)
    }

    const cartPrecioTotal = () => {
        return cart.reduce((acc, producto) => acc += producto.precio * producto.quantity, 0)
    }

    return (
        <CartContext.Provider value={{ cart, addCart, clearCart, removeItem, cartCantidad, cartPrecioTotal }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);