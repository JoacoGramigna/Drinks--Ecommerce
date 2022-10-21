import React from 'react';

import './styles.css';

import { toast } from 'react-hot-toast';

const ItemConter = ({ stock, onAdd, contador, setContador }) => {
    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        } else {
            alert("No hay suficiente stock");
        }
    }
    const restar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }

    const addCart = () => {
        onAdd(contador);
        toast.success('Producto agregado al carrito')
    }

    return (
        <div className='itemConter'>
            <button className='botonRestar' onClick={restar}>-</button>
            <span>{contador}</span>
            <button className='botonSumar' onClick={sumar}>+</button>
            <button className='botonAgregar' onClick={addCart}>Agregar al carrito</button>
        </div>
    )
}

export default ItemConter;