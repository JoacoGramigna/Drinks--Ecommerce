import React, { useState } from 'react';

import './styles.css';

import ItemConter from '../../components/ItemConter';

import { useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { useCart } from '../../context/CartContext';

const ItemDetail = ({ products }) => {
    const [contador, setContador] = useState(1);
    const [compra, setCompra] = useState(false)
    const navigate = useNavigate();
    const { image, name, id, precio, stock, description } = products;
    const { addCart } = useCart();

    const onAdd = (contador) => {
        if (stock <= 0) {
            alert("No hay suficiente stock");
        }
        else {
            let itemAComprar = {
                id,
                name,
                image,
                precio,
                stock,
                description,
                quantity: contador,
            }
            addCart(itemAComprar)
            setCompra(true)
        }
    }

    const handleFinish = () => {
        navigate('/cart');
    }

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
                    <div className='detailStock'>
                        <h1>Stock: {products.stock}</h1>
                    </div>
                    <div className='detailPrecio'>
                        <h1>Precio: ${products.precio}</h1>
                    </div>
                    <div className='detailConter'>
                        {!compra ? <ItemConter stock={stock} onAdd={onAdd} contador={contador} setContador={setContador} />
                            : <button className='detailFinalizarCompra' onClick={handleFinish}>Finalizar compra</button>}
                        <Toaster
                            position="top-right"
                            reverseOrder={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;