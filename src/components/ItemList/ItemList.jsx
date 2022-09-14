import React from 'react';
import Item from '../Item/Item';
import './styles.css';

const ItemList = ({ products }) => {
    return (
        <div className='itemList'>
            {products.map(product => {
                return <Item key={products.id} product={product} />
            })}
        </div>
    )
}

export default ItemList;