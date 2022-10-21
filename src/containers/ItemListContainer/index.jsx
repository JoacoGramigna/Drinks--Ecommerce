import React, { useState, useEffect } from 'react';

import './styles.css';

import ItemList from '../../components/ItemList/ItemList';
import Loader from '../../components/Loader';

import { db } from '../../firebase/config';
import { collection, query, getDocs, where } from "firebase/firestore";
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        (async () => {
            try {
                const q = categoryId ?
                    query(collection(db, "productos"), where("category", "==", categoryId))
                    :
                    query(collection(db, "productos"));
                const querySnapshot = await getDocs(q);
                const productosFirebase = [];
                querySnapshot.forEach((doc) => {
                    productosFirebase.push({ id: doc.id, ...doc.data() })
                });
                setProductos(productosFirebase);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        })();
    }, [categoryId])

    return (
        <div>
            {loading ? <Loader /> : <ItemList products={productos} />}
        </div>
    )
}

export default ItemListContainer;