import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button, FormText, Container, FormFeedback } from 'reactstrap';
import axios from 'axios';
import Header from './Header';
import OrderCounter from './OrderCounter';
import PizzaToppings from './PizzaToppings';

import './OrderPizza.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function OrderPizza({ handleOrderSubmit }) {

  const [choices, setChoices] = useState(0);
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [size, setSize] = useState('');
  const [dough, setDough] = useState('');
  const [name, setName] = useState('');
  const [orderNote, setOrderNote] = useState('');
  const [counterValue, setCounterValue] = useState(1);
  const [isFormValid, setIsFormValid] = useState(false);
  const [formError, setFormError] = useState(null);


  const updateChoices = (choicesValue, selectedToppings) => {
    const newChoices = selectedToppings.length > 0 ? selectedToppings.length * 5 : 0;
    setChoices(newChoices);
    setSelectedToppings(selectedToppings);
  };

  const getSelectedToppings = () => {
    return selectedToppings;
  };

  const getTotalValue = () => {
    return (85.50 + choices) * counterValue;
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
    const isSizeValid = size !== '';
    const isDoughValid = dough !== '';
    const isNameValid = name.trim().length >= 2;

    setIsFormValid(isSizeValid && isDoughValid && isNameValid);
  };


  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post('https://reqres.in/api/pizza', {
        choices,
        size,
        dough,
        name,
        orderNote,
        toppings: getSelectedToppings(),
        counterValue,
        totalValue: getTotalValue(),
      })
      .then((response) => {
        console.log('Response:', response.data);
        handleOrderSubmit(response.data);
        history.push('/success');
      })
      .catch((error) => {
        console.error(error);
        setFormError(error.code);
      });
  };


  return (
    <div>
      <Header />
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
                  type="radio"
                  name="radio2"
                  value="Küçük"
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
                  value="Orta"
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
                  value="Büyük"
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
          <PizzaToppings updateChoices={updateChoices} getSelectedToppings={getSelectedToppings} />
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
              <Input placeholder='Siparişine eklemek istediğin bir not var mı?'
                onChange={(e) => setOrderNote(e.target.value)} />
            </FormGroup>
            <hr className='form-separator' />
            <div className='end-of-form'>
              <OrderCounter updateCounterValue={setCounterValue} />
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
                <Button className='order-button' disabled={!isFormValid}>
                  SİPARİŞ VER
                </Button>
              </div>
            </div>
          </FormGroup>
        </Form>
        {formError && <div className='error-message'><p>{formError}</p></div>}
      </Container>
    </div>
  )
}