import React, { useState } from 'react';
import './styles.css';

const ItemConter = ({ initial, stock, onAdd }) => {
    const [contador, setcontador] = useState(initial);

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
    return (
        <div>
            <button onClick={restar}>-</button>
            <span>{contador}</span>
            <button onClick={sumar}>+</button>
            <button onClick={() => onAdd(contador)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemConter;