import React from 'react';
import './styles.css';
import Logo from '../../assets/logo.png';
import CardWidget from '../CardWidget';
import { Link } from 'react-router-dom';
import { TbPoint } from 'react-icons/tb';

const NavBar = () => {
    return (
        <nav className='navBar'>
            <img src={Logo} alt='' className='navLogo' />
            <ul className='listaEnlacesMiddle'>
                <li>
                    <Link to='/'>Inicio</Link>
                </li>
                <li>
                    <Link to='/bebidas'>Bebidas</Link>
                </li>
                <li className='submenu'>
                    <Link to=''>Navegá por bebida</Link>
                    <ul className='submenuHijos'>
                        <li>
                            <TbPoint color='white' /><Link to='/category/Vodka'>Vodka</Link>
                        </li>
                        <li>
                            <TbPoint color='white' /><Link to='/category/Fernet'>Fernet</Link>
                        </li>
                    </ul>
                </li>
            </ul>
            <div className='carrito'>
                <CardWidget />
            </div>
        </nav>
    )
}

export default NavBar;