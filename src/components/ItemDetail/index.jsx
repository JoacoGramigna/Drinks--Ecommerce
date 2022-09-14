import React from 'react';
import './styles.css';
import ItemConter from '../../components/ItemConter';


const ItemDetail = ({ product }) => {
    const agregarAlCarrito = (cantidad) => {
        console.log(`Se agregó la cantidad de ${cantidad} productos a tu carrito!`)
    }

    return (
        <div className='detail'>
            <div className='image'>
                <img src={product.image} alt="" />
            </div>
            <div className='detailsContainer'>
                <div className='details'>
                    <h1>{product.title}</h1>
                    <h2>{product.description}</h2>
                    <h3>Precio: {product.price}u$d</h3>
                    <ItemConter initial={1} stock={8} onAdd={agregarAlCarrito} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;