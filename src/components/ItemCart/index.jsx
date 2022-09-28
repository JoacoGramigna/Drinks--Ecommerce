import React from 'react';
import { useCart } from '../../context/CartContext';
import './styles.css';

const ItemCart = ({product}) => {
    const {removeItem} = useCart();

    return (
        <div className='itemCart'>
            <img src={product.image} alt="" />
            <div>
                <p>Titulo: {product.name}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio: ${product.precio}</p>
                <p>Sub-total: ${product.quantity * product.precio}</p>
                <button onClick={() => removeItem(product.id) }>X</button>
            </div>
        </div>
    )
}

export default ItemCart; 