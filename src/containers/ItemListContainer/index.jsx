import React, { useState } from 'react';
import { useEffect } from 'react';
import ItemConter from '../../components/ItemConter';
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

    const agregarAlCarrito = (cantidad) => {
        console.log(`Se agregó la cantidad de ${cantidad} productos a tu carrito!`)
    }

    return (
        <div>
            <ItemList products={productos} />
            <ItemConter initial={1} stock={8} onAdd={agregarAlCarrito} />
        </div>
    )
}

export default ItemListContainer;