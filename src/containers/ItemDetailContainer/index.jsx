import React, { useEffect, useState } from 'react';
import { obtenerProductos } from '../../data/products';
import ItemDetail from '../../components/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        obtenerProductos
        .then((res) => setProductDetail(res.find((item) => item.id === id)))
        .catch((error) => console.log(error));
    }, [id])

    return (
        <ItemDetail products={productDetail} />
    )
}

export default ItemDetailContainer;