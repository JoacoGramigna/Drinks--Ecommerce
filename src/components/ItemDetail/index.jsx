import React, { useState } from 'react';
import './styles.css';
import ItemConter from '../../components/ItemConter';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const ItemDetail = ({ products }) => {
    const [contador, setContador] = useState(1);
    const navigate = useNavigate();
    const { image, name, id, precio, stock, description } = products;
    const {addCart} = useCart();

    const onAdd = (contador) => {
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
    }

    const handleFinish = () =>{
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
                    <div className='detailPrecio'>
                        <h1>Precio: ${products.precio}</h1>
                    </div>
                    <div className='detailConter'>
                        <ItemConter stock={stock} onAdd={onAdd} contador={contador} setContador={setContador} />
                        <button onClick={handleFinish}>Finalizar compra</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;