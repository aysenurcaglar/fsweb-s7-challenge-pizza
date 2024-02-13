import React from 'react';
import Header from './Header';

export default function Success() {
    return (
        <div>
        <Header />
        <main className='success-container'>
            <div className='slogan-container'>
                <h1 className='slogan'>TEBRİKLER!</h1>
                <h1 className='slogan'>SİPARİŞİNİZ ALINDI!</h1>
            </div>
        </main>
        </div>
    );
}