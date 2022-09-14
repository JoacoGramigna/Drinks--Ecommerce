import React from 'react';
import './styles.css';
import ItemConter from '../../components/ItemConter';

const Item = ({ product }) => {
    const agregarAlCarrito = (cantidad) => {
        console.log(`Se agregó la cantidad de ${cantidad} productos a tu carrito!`)
    }

    return (
        <div className='card'>
            <div className='imgCard'>Imagen</div>
            <h1>{product.name}</h1>
            <h2>{product.description}</h2>
            <ItemConter initial={1} stock={8} onAdd={agregarAlCarrito} />
        </div>
    )
}

export default Item;