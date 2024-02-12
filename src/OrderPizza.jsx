import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button, FormText, Container, FormFeedback } from 'reactstrap';
import axios from 'axios';
import OrderCounter from './OrderCounter';
import PizzaToppings from './PizzaToppings';

import './OrderPizza.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function OrderPizza() {

  const [choices, setChoices] = useState(0);
  const [size, setSize] = useState('');
  const [dough, setDough] = useState('');
  const [name, setName] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const updateChoices = (incrementValue) => {
    setChoices(choices + incrementValue);
  };

  const getTotalValue = () => {
    return 85.50 + choices;
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleDoughChange = (event) => {
    setDough(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const validateForm = () => {
    // Add your validation logic here
    const isSizeValid = size !== '';
    const isDoughValid = dough !== '';
    const isNameValid = name.trim().length >= 2;

    setIsFormValid(isSizeValid && isDoughValid && isNameValid);
  };


  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      // Send POST request to the API
      const response = await axios.post('https://reqres.in/api/pizza', {
        choices,
        size,
        dough,
        name,
      });

      console.log('Response:', response.data);

      // Redirect to /success on successful response
      history.push('/success');
    } catch (error) {
      console.error('Error:', error);

      // Redirect to /error on error
      history.push('/error');
    }
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

        <Form onSubmit={handleSubmit}>
          <div className='form-cluster'>
            <FormGroup
              row
              tag="fieldset"
            >
              <Label className='category-label'>
                Boyut Seç<span className="mandatory">*</span>
              </Label>

              <FormGroup check>
                <Input
                  name="radio2"
                  type="radio"
                  onChange={(e) => {
                    handleSizeChange(e);
                    validateForm();
                  }}
                  invalid={!size}
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
                  onChange={(e) => {
                    handleSizeChange(e);
                    validateForm();
                  }}
                  invalid={!size}
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
                  onChange={(e) => {
                    handleSizeChange(e);
                    validateForm();
                  }}
                  invalid={!size}
                />
                {' '}
                <Label check>
                  Büyük
                </Label>
                <FormFeedback>Lütfen pizzanın boyutunu seç.</FormFeedback>
              </FormGroup>
            </FormGroup>
            <FormGroup row>
              <Label className='category-label'
                for="exampleSelect"
              >
                Hamur Seç<span className="mandatory">*</span>
              </Label>

              <Input
                id="exampleSelect"
                name="select"
                type="select"
                onChange={(e) => {
                  handleDoughChange(e);
                  validateForm();
                }}
                invalid={!dough}
              >
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
              <FormFeedback>Lütfen hamurun kalınlığını seç.</FormFeedback>
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
                İsim<span className="mandatory">*</span>
              </Label>
              <Input
                onChange={(e) => {
                  handleNameChange(e);
                  validateForm();
                }}
                invalid={name.trim().length < 3} />
              <FormFeedback>Lütfen geçerli bir isim gir (en az 3 harf).</FormFeedback>
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
                <Button className='orderButton' disabled={!isFormValid}>
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