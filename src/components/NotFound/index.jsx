import React from 'react';

import './styles.css';

import { Link } from 'react-router-dom';
import { BiErrorCircle } from 'react-icons/bi';

const NotFound = () => {
    return (
        <div className='notFound'>
            <BiErrorCircle size={70} />
            <h1>Pagina/producto no encontrado, vuelva a <Link to='/' className='linkHome'>Inicio.</Link></h1>
        </div>
    )
}

export default NotFound;