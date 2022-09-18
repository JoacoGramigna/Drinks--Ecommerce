import React from 'react';
import './styles.css';
import Video from '../../assets/video.mp4';

const Home = () => {
    return (
        <div className='homeContainer'>
            <header className='section'>
                <video src={Video} autoPlay loop muted/>
                <div class="textoIndex">
                    <h1>Disfrutá tus tragos con nosotros</h1>
                </div>
            </header>
            <main className='section'>
        Publicidad
            </main>
            <footer className='section'>
        Footer
            </footer>
        </div>
    )
}

export default Home;