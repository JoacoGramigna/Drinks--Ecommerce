import './styles.css';
import React from 'react';
import { useCart } from '../../context/CartContext';

const CartContainer = () => {
    const {cart} = useCart();
    console.log(cart);

    return (
        <h1>{cart.name}</h1>
    )
}

export default CartContainer;