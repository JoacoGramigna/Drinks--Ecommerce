import React, { useEffect, useState } from 'react';
import ItemDetail from '../../components/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc, collection } from "firebase/firestore";
import { db } from '../../firebase/config';

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState([]);
    const { id } = useParams();

    useEffect(() => {
            const collectionProd = collection(db, "productos");
            const refenceDoc = doc(collectionProd, id);
            getDoc(refenceDoc)
            .then((result)=>{
                setProductDetail({
                    id: result.id,
                    ...result.data()
                });
            })
            .catch((error)=> console.log(error));
    }, [id])

    return (
        <ItemDetail products={productDetail} />
    )
}

export default ItemDetailContainer;