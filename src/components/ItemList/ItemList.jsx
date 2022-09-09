import React from 'react';
import Item from '../Item/Item';
import './styles.css';

const ItemList = ({ products }) => {
    return (
        <div>
            {products.map(product => {
                return <Item key={products.id} product={product} />
            })}
        </div>
    )
}

export default ItemList;