import React from 'react';
import './styles.css';

const Item = ({ product }) => {
    return (
        <div className='card'>
            <div className='imgCard'>Imagen</div>
            <h1>{product.name}</h1>
            <h2>{product.description}</h2>
        </div>
    )
}

export default Item;