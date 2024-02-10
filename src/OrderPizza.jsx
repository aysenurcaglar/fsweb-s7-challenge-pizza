import React from 'react';
import { Form, FormGroup, Label, Input, Button, Row, Col, FormText, Container, FormFeedback } from 'reactstrap';
import OrderCounter from './OrderCounter';
import PizzaToppings from './PizzaToppings';


import 'bootstrap/dist/css/bootstrap.min.css';

export default function OrderPizza() {
  return (
    <div>
      <Container className='orderForm'>
        <div className='pizza-description'>
          <h4>Position Absolute Acı Pizza</h4>
          <h2><strong>85.50₺</strong></h2>
          <p className='pizzaP'>Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel alarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.</p>
        </div>

        <Form>
          <div className='form-cluster'>
            <FormGroup
              row
              tag="fieldset"
            >
              <Label>
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
              <Label
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
          <Label>
            Ek Malzemeler
          </Label>
          <br />
          <FormText>
            En fazla 10 malzeme seçebilirsiniz. 5₺
          </FormText>
          <PizzaToppings />
          <FormGroup
            check
            row
          >
            <FormGroup>
              <Label for="exampleNote">
                Sipariş Notu
              </Label>
              <Input placeholder='Siparişine eklemek istediğin bir not var mı?' />
            </FormGroup>
            <hr />
            <div className='end-of-form'>
            <OrderCounter />
            <div className="summary-box">
              <p>Sipariş Toplamı</p>
              <p>Seçimler 25₺</p>
              <p>Toplam 110.5₺</p>
            </div>
            </div>
            <Button className='orderButton'>
              SİPARİŞ VER
            </Button>


          </FormGroup>
        </Form>

      </Container>
    </div>
  )
}