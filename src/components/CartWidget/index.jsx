import React from 'react';
import './styles.css';
import { BsCart3 } from 'react-icons/bs';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { cartCantidad } = useCart();

    return (
        <ul className='listaEnlacesRight'>
            <li>
                <BsCart3 color="white" className='icon' />
                <span className='newProducts'>{cartCantidad() || ''}</span>
                <Link to='/cart'>Carrito</Link>
            </li>
        </ul>
    )
}

export default CartWidget;