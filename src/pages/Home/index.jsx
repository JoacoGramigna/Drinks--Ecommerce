import React from 'react';

import './styles.css';

import Video from '../../assets/video.mp4';

const Home = () => {
    return (
        <div className='homeContainer'>
            <video src={Video} autoPlay loop muted />
            <div class="textoIndex">
                <h1>Disfrutá tus tragos con nosotros</h1>
            </div>
        </div>
    )
}

export default Home;