import React from 'react';
import './styles.css';
import Logo from '../../assets/logo.png';
import CardWidget from '../CardWidget';

const NavBar = () => {
    return (
        <nav className='navBar'>
            <img src={Logo} alt='' className='navLogo' />
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
            <CardWidget/>
        </nav>
    )
}

export default NavBar;