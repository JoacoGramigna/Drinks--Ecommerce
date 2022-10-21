import React from 'react';

import './styles.css';

import { useCart } from '../../context/CartContext';

const ItemCart = ({ product }) => {
    const { removeItem } = useCart();

    return (
        <div className='itemCart'>
            <div className='itemImage'>
                <img src={product.image} alt="" />
            </div>
            <div className='itemCartDatos'>
                <p className='itemCartDatosTitulo'>{product.name}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio: ${product.precio}</p>
                <p>Sub-total: ${product.quantity * product.precio}</p>
            </div>
            <div className='botonRemoveItem'>
                <button onClick={() => removeItem(product.id)}>x</button>
            </div>
        </div>
    )
}

export default ItemCart; 