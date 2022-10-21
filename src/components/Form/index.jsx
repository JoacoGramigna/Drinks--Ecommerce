import React, {useState} from 'react';

import './styles.css';

import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { useCart } from '../../context/CartContext';
import OrdenGenerada from '../../services/generarOrden';
import { db } from '../../firebase/config';
import { collection, addDoc, getDoc, doc, updateDoc } from "firebase/firestore";

const MySwal = withReactContent(Swal);

const Form = () => {
    const { cart, cartPrecioTotal, clearCart } = useCart();
    const precioFinal = cartPrecioTotal()
    const navigate = useNavigate()

    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        direccion: '',
        pais: '',
        region: '',
        ciudad: '',
        postal: '',
        email: '',
        telefono: '',
        cart: cart,
        total: precioFinal,
    })

    const capturarDatos = (e) => {
        setDatos({ ...datos, [e.target.name]: e.target.value })
    }

    const guardarDatos = async (e) => {
        e.preventDefault()
        if (e.target.email.value !== e.target.emailVerificado.value) {
            MySwal.fire({
                position: 'center',
                icon: 'error',
                title: <p>Los E-mail no son iguales, vuelva a colocar sus datos correspondientes.</p>,
            })
        } else {
            const orden = OrdenGenerada(datos.nombre, datos.apellido, datos.direccion, datos.pais, datos.region, datos.ciudad, datos.postal, datos.email, datos.telefono, datos.cart, datos.total)
            const docRef = await addDoc(collection(db, "orders"), orden)
            MySwal.fire({
                position: 'center',
                icon: 'success',
                title: <p>La compra se realizó exitosamente.</p>,
                text: "Recibirá un correo electrónico con la información del pedido",
                footer: `Órden de compra: ${docRef.id}`
            })

            cart.forEach(async (productoOrden) => {
                const productoRef = doc(db, "productos", productoOrden.id)
                const docSnap = await getDoc(productoRef)

                await updateDoc(productoRef, {
                    stock: docSnap.data().stock - productoOrden.quantity,
                })
            });
            setDatos({})
            clearCart()
            navigate('/')
        }
    }

    return (
        <>
            <div className='formulario'>
                <div className='titulosFormulario'>
                    <h1>FINALIZAR COMPRA</h1>
                </div>
                <form className='form' onSubmit={guardarDatos}>
                    <div className='gridForm'>
                        <input type="text" placeholder='Nombre' name='nombre' onChange={capturarDatos} required />
                        <input type="text" placeholder='Apellido' name='apellido' onChange={capturarDatos} required />
                        <input type="text" placeholder='Direccion' name='direccion' onChange={capturarDatos} required />
                        <input type="text" placeholder='Pais' name='pais' onChange={capturarDatos} required />
                        <input type="text" placeholder='Region/Provincia' name='region' onChange={capturarDatos} required />
                        <input type="text" placeholder='Ciudad' name='ciudad' onChange={capturarDatos} required />
                        <input type="text" placeholder='Codigo postal' name='postal' onChange={capturarDatos} required />
                        <input type="email" placeholder='Direccion E-mail' name='email' onChange={capturarDatos} required />
                        <input type="email" placeholder='Verifique su Direccion E-mail' name='emailVerificado' required />
                        <input type="number" placeholder='Telefono' name='telefono' onChange={capturarDatos} required />
                    </div>
                    <div className='realizarCompra'>
                        <button className='botonRealizarCompra'>Finalizar compra</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form;