import React from 'react';
import './styles.css';
import ItemConter from '../../components/ItemConter';
import { useNavigate } from 'react-router-dom';

const ItemDetail = ({ products }) => {
    const { image, name } = products;

    const agregarAlCarrito = (cantidad) => {
        console.log(`Se agregó la cantidad de ${cantidad} productos a tu carrito!`)
    }

    const navigate = useNavigate();

    const Volver = () => {
        navigate(`/`)
    }

    <button onClick={Volver} className='botonVolver'>Volver al home</button>

    return (
        <div className='detailPage'>
            <div className='detailContainer'>
                <div className='imageDetail'>
                    <img src={image} alt={name} />
                </div>
                <div className='datosDetail'>
                    <div className='detailName'>
                        <h1>{products.name}</h1>
                    </div>
                    <div className='detailDescription'>
                        <h1>{products.description}</h1>
                    </div>
                    <div className='detailPrecio'>
                        <h1>Precio: ${products.precio}</h1>
                    </div>
                    <div className='detailConter'>
                        <ItemConter initial={1} stock={8} onAdd={agregarAlCarrito} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;