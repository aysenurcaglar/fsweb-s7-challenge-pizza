import React from 'react';
import { useHistory } from 'react-router-dom';

export default function HomePage() {

    const backgroundImageUrl = './Assets/mile1-assets/home-banner.png';

    const containerStyle = {
        background: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const history = useHistory();

    const redirectToOrder = () => {
        history.push('/order');
    };

    return (
        <main className='home-container' style={containerStyle}>
            <div className='slogan-container'>
                <h1 className='slogan'>KOD ACIKTIRIR</h1>
                <h1 className='slogan'>PİZZA DOYURUR</h1>
            </div>
            <button className='button' onClick={redirectToOrder}>
                ACIKTIM
            </button>
        </main>
    );
}