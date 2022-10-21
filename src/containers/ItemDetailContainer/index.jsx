import React, { useEffect, useState } from 'react';

import Loader from '../../components/Loader';
import ItemDetail from '../../components/ItemDetail';

import { useParams } from 'react-router-dom';
import { doc, getDoc, collection } from "firebase/firestore";
import { db } from '../../firebase/config';

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const collectionProd = collection(db, "productos");
        const refenceDoc = doc(collectionProd, id);
        getDoc(refenceDoc)
            .then((result) => {
                setProductDetail({
                    id: result.id,
                    ...result.data()
                });
            })
            .catch((error) => console.log(error));
        setLoading(false);
    }, [id]);

    return (
        <div>
            {loading ? <Loader /> : <ItemDetail products={productDetail} />}
        </div>
    )
}

export default ItemDetailContainer;