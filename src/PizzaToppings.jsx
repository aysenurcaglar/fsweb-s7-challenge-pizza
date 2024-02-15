import React, { useState, useEffect } from 'react';
import { FormGroup, Label, Input, Row, Col, FormFeedback } from 'reactstrap';

const PizzaToppings = ({ updateChoices, getSelectedToppings }) => {
  const toppings = [
    'Pepperoni', 'Domates', 'Biber', 'Sosis', 'Mısır', 'Sucuk', 'Kanada Jambonu', 'Ananas', 'Tavuk Izgara',
    'Jalapeno', 'Kabak', 'Soğan', 'Sarımsak', 'Mantar',
  ];

  const [checkedCount, setCheckedCount] = useState(0);
  const [isMinLimitNotMet, setIsMinLimitNotMet] = useState(true);
  const [isMaxLimitExceeded, setIsMaxLimitExceeded] = useState(false);

  useEffect(() => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach((checkbox, index) => {
      checkbox.disabled = isMaxLimitExceeded && !checkbox.checked;
    });
  }, [isMaxLimitExceeded]);

  const handleCheckboxChange = () => {
    // Count the number of checked checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const checkedCheckboxes = Array.from(checkboxes).filter(
      (checkbox) => checkbox.checked
    );
    const selectedToppings = checkedCheckboxes.map((checkbox) => checkbox.value);

    // Update the checked count
    setCheckedCount(checkedCheckboxes.length);

    // Check if the checked count is within the desired range
    setIsMinLimitNotMet(checkedCheckboxes.length < 4);
    setIsMaxLimitExceeded(checkedCheckboxes.length >= 10);

    // Calculate the choices based on the number of checked checkboxes
    const choicesValue = checkedCheckboxes.length * 5;

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
      {isMinLimitNotMet && (
        <FormFeedback>
          Lütfen en az 4 malzeme seçin.
        </FormFeedback>
      )}
    </div>
  );
};

export default PizzaToppings;