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
                        <h5 className='early-delivery-message detail'><strong>{responseData.earlyDeliveryMessage}</strong></h5>
                    </div>
                    <div className="order-box">
                        <p className='order-label detail'><strong>Sipariş Toplamı</strong></p>
                        <div className='order-box-choices'>
                            <p className='order-choices-p detail'><strong>Seçimler</strong></p><p className='order-choices-n detail'><strong>{responseData.choices}₺</strong></p>
                        </div>
                        <div className='order-box-total'>
                            <p className='order-total-p detail'><strong>Toplam</strong></p><p className='order-total-n detail'><strong>{responseData.totalValue}₺</strong></p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Success;