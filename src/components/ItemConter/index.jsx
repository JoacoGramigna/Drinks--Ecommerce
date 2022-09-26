import React, { useState } from 'react';
import './styles.css';

const ItemConter = ({ stock, onAdd }) => {
    const [contador, setcontador] = useState(0);

    const sumar = () => {
        if (contador < stock) {
            setcontador(contador + 1);
        } else {
            alert("No hay suficiente stock");
        }
    }
    const restar = () => {
        if (contador > 0) {
            setcontador(contador - 1);
        }
    }

    const addCart = () =>{
        onAdd(contador);
        setcontador(0);
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