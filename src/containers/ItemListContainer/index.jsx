import React, { useState } from 'react';
import { useEffect } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import { products } from '../../data/products';
import './styles.css';

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])

    useEffect(() => {

        (async () => {
            const obtenerProductos = new Promise((accept, reject) => {
                setTimeout(() => {
                    accept(products)
                }, 2000);
            });

            try {
                const productos = await obtenerProductos;
                setProductos(productos);
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    return (
            <div>
                <ItemList products={productos} />
            </div>
    )
}

export default ItemListContainer;