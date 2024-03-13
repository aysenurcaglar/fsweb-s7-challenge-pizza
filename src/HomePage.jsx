import React from 'react';
import { useHistory } from 'react-router-dom';

import './HomePage.css';

export default function HomePage() {

    const history = useHistory();

    const redirectToOrder = () => {
        history.push('/order');
    };

    return (
        <main className='home-container'>
            <img src="./logo.svg" alt="Logo" className="home-logo" />
            <div className='slogan-container'>
                <p className='home-slogan'>fırsatı kaçırma</p>
                <h1 className='slogan'>KOD ACIKTIRIR</h1>
                <h1 className='slogan'>PİZZA DOYURUR</h1>
            </div>
            <button className='home-btn' onClick={redirectToOrder}>
                ACIKTIM
            </button>
        </main>
    );
}