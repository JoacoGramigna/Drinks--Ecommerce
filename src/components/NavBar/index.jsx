import React from 'react';
import './styles.css';
import logo from '../../img/logo.png';

const NavBar = () => {
    return (
        <header>
            <div className="backgroundIndex"></div>
            <nav className='navBar'>
                <img src={logo} alt='' className='navLogo' />
                <ul className='listaEnlacesMiddle'>
                    <li>
                        <a href='/'>Inicio</a>
                    </li>
                    <li>
                        <a href='/bebidas'>Bebidas</a>
                    </li>
                    <li>
                        <a href='/promociones'>Promociones</a>
                    </li>
                    <li>
                        <a href='/marcas'>Navegá por marcas</a>
                    </li>
                </ul>
                <ul className='listaEnlacesRight'>
                    <li>
                        <box-icon name='cart' color='#ffffff' ></box-icon><a href='/carrito'>Carrito</a>
                    </li>
                </ul>
            </nav>
            <div class="textoIndex">
                <h1>Armá tus tragos con nosotros.</h1>
            </div>
        </header>
    )
}

export default NavBar