import React from 'react';
import Header from './Header';
import './Success.css';

const Success = ({ responseData }) => {
    console.log('responseData in success page:', responseData);

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
                        <p className='order-qty detail'>Adet: <strong>{responseData.counterValue}</strong></p>
                        <p className='order-size detail'>Boyut: <strong>{responseData.size}</strong></p>
                        <p className='order-thickness detail'>Hamur: <strong>{responseData.dough}</strong></p>
                        <p className='order-extra detail'>Ek Malzemeler: <strong>{responseData.toppings.join(', ')}</strong></p>
                        <p className='order-customer-name detail'>İsim: <strong>{responseData.name}</strong></p>
                        <p className='order-note detail'>Sipariş Notu: <strong>{responseData.orderNote}</strong></p>
                    </div>
                    <div className="order-box">
                        <p className='order-label detail'>Sipariş Toplamı</p>
                        <div className='order-box-choices'>
                            <p className='order-choices-p detail'>Seçimler</p><p className='order-choices-n detail'>{responseData.choices}₺</p>
                        </div>
                        <div className='order-box-total'>
                            <p className='order-total-p detail'>Toplam</p><p className='order-total-n detail'>{responseData.totalValue}₺</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Success;