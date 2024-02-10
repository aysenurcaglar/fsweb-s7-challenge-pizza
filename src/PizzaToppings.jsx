import React from 'react';
import { FormGroup, Label, Input, Row, Col } from 'reactstrap';

const PizzaToppings = () => {
  const toppings = [
    'Pepperoni', 'Domates', 'Biber', 'Sosis', 'Mısır', 'Sucuk', 'Kanada Jambonu', 'Ananas', 'Tavuk Izgara',
    'Jalapeno', 'Kabak', 'Soğan', 'Sarımsak', 'Mantar',
  ];

  const renderCheckboxes = () => {
    return toppings.map((topping, index) => (
      <Col key={index} xs={12} md={4}>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" /> {topping}
          </Label>
        </FormGroup>
      </Col>
    ));
  };

  return (
    <Row>
      {renderCheckboxes()}
    </Row>
  );
};

export default PizzaToppings;
