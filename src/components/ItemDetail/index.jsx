import React from 'react';
import './styles.css';
import ItemConter from '../../components/ItemConter';
import { useNavigate } from 'react-router-dom';

const ItemDetail = ({ products }) => {
    const {image, name} = products;

    const agregarAlCarrito = (cantidad) => {
        console.log(`Se agregó la cantidad de ${cantidad} productos a tu carrito!`)
    }

    const navigate = useNavigate();

    const Volver = () => {
        navigate(`/`)
    }

    return (
        <div className='detailPage'>
            <div className='backgroundDetail'></div>
            <button onClick={Volver} className='botonVolver'>Volver al home</button>
            <div className='detail'>
                <div className='image'>
                    <img src={image} alt={name} />
                </div>
                <div className='detailsContainer'>
                    <div className='details'>
                        <h1>{products.name}</h1>
                        <h2>{products.description}</h2>
                        <h3>Precio: ${products.precio}</h3>
                        <ItemConter initial={1} stock={8} onAdd={agregarAlCarrito} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;