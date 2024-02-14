import React from 'react';
import Header from './Header';
import { useLocation } from 'react-router-dom';
import './Success.css';

const Success = () => {
    const location = useLocation();
    const {
        size,
        dough,
        toppings,
        choices,
        name,
        orderNote,
        counterValue,
        totalValue,
    } = location.state;

    return (
        <div>
            <Header />
            <div className='success-container'>
                <main className='order-details'>
                    <div className='slogan-container'>
                        <p className='success-slogan'>lezzetin yolda</p>
                        <h1 className='slogan'>SİPARİŞ ALINDI</h1>
                    </div>
                    <div className='separate-line'></div>
                    <h4 className='order-title'>Position Absolute Acı Pizza</h4>
                    <div className='order-summary'>
                        <p className='order-qty detail'>Adet: <strong>{counterValue}</strong></p>
                        <p className='order-size detail'>Boyut: <strong>{size}</strong></p>
                        <p className='order-thickness detail'>Hamur: <strong>{dough}</strong></p>
                        <p className='order-extra detail'>Ek Malzemeler: <strong>{toppings.join(', ')}</strong></p>
                        <p className='order-customer-name detail'>İsim: <strong>{name}</strong></p>
                        <p className='order-note detail'>Sipariş Notu: <strong>{orderNote}</strong></p>
                    </div>
                    <div className="order-box">
                        <p className='order-label detail'>Sipariş Toplamı</p>
                        <div className='order-box-choices'>
                            <p className='order-choices-p detail'>Seçimler</p><p className='order-choices-n detail'>{choices}₺</p>
                        </div>
                        <div className='order-box-total'>
                            <p className='order-total-p detail'>Toplam</p><p className='order-total-n detail'>{totalValue}₺</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Success;