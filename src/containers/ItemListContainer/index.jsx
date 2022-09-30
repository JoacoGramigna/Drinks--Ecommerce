import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';
import './styles.css';
import { db } from '../../firebase/config';
import { collection, query, getDocs, where } from "firebase/firestore";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const { categoryId } = useParams();

    useEffect(() => {
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
        })();
    }, [categoryId])

    return (
        <div>
            <ItemList products={productos} />
        </div>
    )
}

export default ItemListContainer;