import React from 'react';

import './styles.css';

import { BsCart3 } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import { useCart } from '../../context/CartContext';

const CartWidget = () => {
    const { cartCantidad, cart } = useCart();

    return (
        <ul className='listaEnlacesRight'>
            <li>
                <BsCart3 color="white" size={20} className='icon' />
                {cart.length ? <span className='newProducts'>{cartCantidad()}</span> : ''}
                <Link to='/cart'>Carrito</Link>
            </li>
        </ul>
    )
}

export default CartWidget;