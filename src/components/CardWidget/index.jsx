import React from 'react';
import './styles.css';
import {BsCart3} from 'react-icons/bs';

const CardWidget = () => {
    return (
        <ul className='listaEnlacesRight'>
            <li>
            <BsCart3 color="white" className='icon'/><a href='/carrito'>Carrito</a>
                
            </li>
        </ul>
    )
}

export default CardWidget;