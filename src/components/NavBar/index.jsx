import React from 'react';
import './styles.css';
import logo from '../../img/logo.png';

const NavBar = () => {
    return (
        <nav className='navBar'>
            <img src={logo} alt='' />
            <ul className='listaEnlaces'>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/react'>React</a>
                </li>
                <li>
                    <a href='/javascript'>JavaScript</a>
                </li>
                <li>
                    <a href='/html'>Html</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar