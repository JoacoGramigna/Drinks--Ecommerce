import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import ItemCart from '../ItemCart';
import OrdenGenerada from '../../services/generarOrden';
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import {db} from '../../firebase/config';

const Cart = () => {
    const { cart, cartPrecioTotal, clearCart, } = useCart();

    const handleBuy = async () => {
        const total = cartPrecioTotal();
        const orden = OrdenGenerada("Joaquin", "joacogramigna@gmail.com", 2994013723, cart, total)
        console.log(orden);

        const docRef = await addDoc(collection(db, "orders"), orden);
        

        cart.forEach(async (productoEnCarrito)=>{
            const productRef = doc(db, "productos", productoEnCarrito.id);
            const productSnap = await getDoc(productRef);
            await updateDoc(productRef,{
                stock: productSnap.data().stock - productoEnCarrito.quantity,
            })
        })
        alert(`Compra realizada, ID de compra:  ${docRef.id}`);
    }

    if (cart.length === 0) {
        return (
            <div className='cartVacio'>
                <p>No hay productos.</p>
                <Link to='/bebidas' className='linkAgrega'>Agregá productos a tu carrito.</Link>
            </div>
        );
    }

    return (
        <div className='carro'>
            {cart.map(product => <ItemCart key={product.id} product={product} />)}
            <p>Total: ${cartPrecioTotal()}</p>
            <button onClick={clearCart}>Limpiar carrito</button>
            <button onClick={handleBuy}>Realizar compra</button>
        </div>
    )
}

export default Cart;