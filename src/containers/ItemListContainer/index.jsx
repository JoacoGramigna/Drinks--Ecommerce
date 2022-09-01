import React from 'react';
import ItemConter from '../../components/ItemConter';
import './styles.css';

const ItemListContainer = ({ greeting }) => {
    const agregarAlCarrito = (cantidad) => {
        console.log(`Se agregó la cantidad de ${cantidad} productos a tu carrito!`)
    }

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemConter initial={1} stock={8} onAdd={agregarAlCarrito} />
        </div>
    )
}

export default ItemListContainer;