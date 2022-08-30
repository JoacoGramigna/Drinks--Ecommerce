import React from 'react';
import ItemConter from '../../components/ItemConter';
import './styles.css';

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemConter initial={1} stock={8}/>
        </div>
    )
}

export default ItemListContainer;