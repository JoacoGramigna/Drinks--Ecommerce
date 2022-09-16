import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';
import './styles.css';
import { obtenerProductos } from '../../data/products';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const { categoryId } = useParams();

    useEffect(() => {
        obtenerProductos
            .then((res) => {
                if (!categoryId) {
                    setProductos(res)
                } else {
                    setProductos(res.filter((prod) => prod.category === categoryId))
                }
            })
            .catch((error) => console.log(error));
    }, [categoryId])

    return (
        <div>
            <ItemList products={productos} />
        </div>
    )
}

export default ItemListContainer;