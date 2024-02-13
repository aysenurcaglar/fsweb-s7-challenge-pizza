import React from 'react';
import Header from './Header';
import './Success.css';

export default function Success() {
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
                        <p className='order-size detail'>Boyut: <strong>Büyük</strong></p>
                        <p className='order-thickness detail'>Hamur: <strong>İnce</strong></p>
                        <p className='order-extra detail'>Ek Malzemeler: <strong>Pepperoni, Sosis, Mısır, Ananas, Jalapeno</strong></p>
                        <p></p>
                        <p></p>
                    </div>
                    <div className="order-box">
                  <p className='order-label detail'>Sipariş Toplamı</p>
                  <div className='order-box-choices'>
                    <p className='order-choices-p detail'>Seçimler</p><p className='order-choices-n detail'>25₺</p>
                  </div>
                  <div className='order-box-total'>
                    <p className='order-total-p detail'>Toplam</p><p className='order-total-n detail'>110.5₺</p>
                  </div>
                </div>
                </main>
            </div>
        </div>
    );
}