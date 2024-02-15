import React, { useState, useEffect } from 'react';
import { FormGroup, Label, Input, Row, Col } from 'reactstrap';

const PizzaToppings = ({ updateChoices }) => {
  const toppings = [
    'Pepperoni', 'Domates', 'Biber', 'Sosis', 'Mısır', 'Sucuk', 'Kanada Jambonu', 'Ananas', 'Tavuk Izgara',
    'Jalapeno', 'Kabak', 'Soğan', 'Sarımsak', 'Mantar',
  ];

  const [checkedCount, setCheckedCount] = useState(0);
  const [isMaxLimitExceeded, setIsMaxLimitExceeded] = useState(false);

  useEffect(() => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach((checkbox) => {
      checkbox.disabled = isMaxLimitExceeded && !checkbox.checked;
    });
  }, [isMaxLimitExceeded]);

  const handleCheckboxChange = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const checkedBoxes = [];

    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        checkedBoxes.push(checkboxes[i]);
      }
    }
    const selectedToppings = checkedBoxes.map((checkbox) => checkbox.value);

    setCheckedCount(checkedBoxes.length);

    setIsMaxLimitExceeded(checkedBoxes.length >= 10);

    const choicesValue = checkedCount * 5;

    // Update choices with the calculated value
    // If no checkboxes are checked, set choices to 0
    // This ensures that the value is not cumulative
    updateChoices(choicesValue || 0, selectedToppings);
  };

  const renderCheckboxes = () => {
    return toppings.map((topping, index) => (
      <Col key={index} xs={6} md={4}>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" onChange={handleCheckboxChange} disabled={isMaxLimitExceeded} value={topping} /> {topping}
          </Label>
        </FormGroup>
      </Col>
    ));
  };

  return (
    <div>
      <Row>
        {renderCheckboxes()}
      </Row>
    </div>
  );
};

export default PizzaToppings;