import React from 'react';
import { useContext } from 'react';
import { Shop } from '../../context/ShopProvider';
import Item from '../Item/Item';
import './styles.css';

const ItemList = ({ products }) => {

    const {setMensaje} = useContext(Shop);

    const onChangeMensaje = () => {
        setMensaje("Chau")
    }

    return (
        <div className='mainItemList'>
            <div className='itemList'>
                {products.map(product => {
                    return <Item key={products.id} product={product} />
                })}
            </div>
            <button onClick={onChangeMensaje}>Cambiar mensaje de NavBar</button>
        </div>
    )
}

export default ItemList;