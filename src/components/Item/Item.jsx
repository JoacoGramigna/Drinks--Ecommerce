import React from 'react';
import './styles.css';
import ItemConter from '../../components/ItemConter';
import { useNavigate } from 'react-router-dom';

const Item = ({ product }) => {
    const {image, name} = product;

    const agregarAlCarrito = (cantidad) => {
        console.log(`Se agregó la cantidad de ${cantidad} productos a tu carrito!`)
    }

    const navigate = useNavigate();

    const handleNavigate = () =>{
        navigate (`/detail/${product.id}`)
    }

    return (
        <div className='card' onClick={handleNavigate}>
            <img className='imgCard' src={image} alt={name}></img>
            <h1>{product.name}</h1>
            <h2>{product.description}</h2>
            <ItemConter initial={1} stock={8} onAdd={agregarAlCarrito} />
        </div>
    )
}

export default Item;