import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import ItemCart from '../ItemCart';

const Cart = () => {
    const { cart, cartPrecioTotal, clearCart } = useCart();

    if (cart.length === 0) {
        return (
            <div className='cartVacio'>
            <p>No hay productos.</p>
            <Link to='/bebidas' className='linkAgrega'>Agregá productos a tu carrito.</Link>
            </div>
        );
    }

    return (
        <div className='carro'>
        {cart.map(product => <ItemCart key={product.id} product={product} />)}
        <p>Total: ${cartPrecioTotal()}</p>
        <button onClick={clearCart}>Limpiar carrito</button>
        </div>
    )
}

export default Cart;