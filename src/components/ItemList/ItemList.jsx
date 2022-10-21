import React from 'react';

import './styles.css';

import Item from '../Item/Item';

const ItemList = ({ products }) => {
    return (
        <div className='mainItemList'>
            <div className='itemList'>
                {products.map(product => {
                    return <Item key={products.id} product={product} />
                })}
            </div>
        </div>
    )
}

export default ItemList;