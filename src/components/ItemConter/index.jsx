import React, { useState } from 'react';
import './styles.css';

const ItemConter = ({ initial, stock }) => {
    const [contador, setcontador] = useState(initial);

    const sumar = () => {
        if (contador < stock)
            setcontador(contador + 1);
    }
    const restar = () => {
        if (contador > 0)
            setcontador(contador - 1);
    }
    return (
        <div>
            <button onClick={restar}>-</button>
            <span>{contador}</span>
            <button onClick={sumar}>+</button>
        </div>
    )
}

export default ItemConter;