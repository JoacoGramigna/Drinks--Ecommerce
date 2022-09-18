import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const Item = ({ product }) => {
    const { image, name } = product;

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/detail/${product.id}`)
    }

    return (
        <div className='card' onClick={handleNavigate}>
            <div className='cardImg'>
                <img className='imgCard' src={image} alt={name}></img>
            </div>
            <div className='cardDatos'>
                <h1 className='priceCard'>${product.precio}</h1>
                <h2 className='nameCard'>{product.name}</h2>
            </div>
        </div>
    )
}

export default Item;