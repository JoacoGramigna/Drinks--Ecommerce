import React from 'react';

import './style.css'

import ItemCart from '../ItemCart';
import Form from '../Form';

import { Link } from 'react-router-dom';
import { BsFillBagXFill } from 'react-icons/bs';

import { useCart } from '../../context/CartContext';

const Cart = () => {
    const { cart, cartPrecioTotal, clearCart, } = useCart();

    if (cart.length === 0) {
        return (
            <div className='cartVacio'>
                <div className='iconCartVacio'>
                    <BsFillBagXFill size={50} />
                </div>
                <div className='textCartVacio'>
                    <p>No hay productos en tu carrito</p>
                </div>
                <div className='linkCartVacio'>
                    <p>Agregá productos a tu carrito haciendo <Link to='/bebidas' className='linkAgrega'> Click aquí.</Link> </p>
                </div>
            </div>
        );
    }

    return (
        <div className='carro'>
            <div>
                {cart.map(product => <ItemCart key={product.id} product={product} />)}
                <div className='totalYBoton'>
                    <p className='totalPriceItemsCart'>Total: ${cartPrecioTotal()}</p>
                    <button className='botonClearCart' onClick={clearCart}>Limpiar carrito</button>
                </div>
            </div>
            <Form />
        </div>
    )
}

export default Cart;