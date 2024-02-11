import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Row, Col, FormText, Container, FormFeedback } from 'reactstrap';
import OrderCounter from './OrderCounter';
import PizzaToppings from './PizzaToppings';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function OrderPizza() {

  const [choices, setChoices] = useState(0);

  const updateChoices = (incrementValue) => {
    setChoices(choices + incrementValue);
  };

  const getTotalValue = () => {
    return 85.5 + choices;
  };

  return (
    <main>
      <header className='order-header'>
        <p className='order-header-text'>
          Anasayfa - Seçenekler - <strong>Sipariş Oluştur</strong>
        </p>
      </header>
      <Container className='order-form'>
        <div className='pizza-description'>
          <h4>Position Absolute Acı Pizza</h4>
          <div className='pizza-details'>
            <h2><strong>85.50₺</strong></h2>
            <p className='pizza-points'>4.9</p>
            <p className='pizza-reviews'>(200)</p>
          </div>
          <p className='pizzaP'>Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel alarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.</p>
        </div>

        <Form>
          <div className='form-cluster'>
            <FormGroup
              row
              tag="fieldset"
            >
              <Label className='category-label'>
                Boyut Seç
              </Label>

              <FormGroup check>
                <Input
                  name="radio2"
                  type="radio"
                />
                {' '}
                <Label check>
                  Küçük
                </Label>
              </FormGroup>
              <FormGroup check>
                <Input
                  name="radio2"
                  type="radio"
                />
                {' '}
                <Label check>
                  Orta
                </Label>
              </FormGroup>
              <FormGroup
                check
              >
                <Input
                  name="radio2"
                  type="radio"
                />
                {' '}
                <Label check>
                  Büyük
                </Label>
              </FormGroup>
            </FormGroup>
            <FormGroup row>
              <Label className='category-label'
                for="exampleSelect"
              >
                Hamur Seç
              </Label>

              <Input
                id="exampleSelect"
                name="select"
                type="select"
              >
                <option>
                  Hamur Kalınlığı Seç
                </option>
                <option>
                  İnce
                </option>
                <option>
                  Orta
                </option>
                <option>
                  Kalın
                </option>
              </Input>
            </FormGroup>
          </div>
          <Label className='category-label'>
            Ek Malzemeler
          </Label>
          <br />
          <FormText className='toppings-note'>
            En fazla 10 malzeme seçebilirsin. 5₺
          </FormText>
          <PizzaToppings updateChoices={updateChoices} />
          <FormGroup
            check
            row
          >
            <FormGroup className='name-field'>
              <Label className='category-label' for="exampleName">
                İsim
              </Label>
              <Input placeholder='Lütfen en az 3 harfli bir isim gir.' />
            </FormGroup>
            <FormGroup className='order-note'>
              <Label className='category-label' for="exampleNote">
                Sipariş Notu
              </Label>
              <Input placeholder='Siparişine eklemek istediğin bir not var mı?' />
            </FormGroup>
            <hr />
            <div className='end-of-form'>
              <OrderCounter />
              <div className='summary-box-b'>
                <div className="summary-box">
                  <p className='category-label'>Sipariş Toplamı</p>
                  <div className='summary-box-choices'>
                    <p className='choices-p'>Seçimler</p><p className='choices-n'>{choices}₺</p>
                  </div>
                  <div className='summary-box-total'>
                    <p className='total-p'>Toplam</p><p className='total-n'>{getTotalValue()}₺</p>
                  </div>
                </div>
                <Button className='orderButton'>
                  SİPARİŞ VER
                </Button>
              </div>
            </div>
          </FormGroup>
        </Form>

      </Container>
    </main>
  )
}