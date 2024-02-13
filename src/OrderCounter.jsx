import React, { useState } from "react";

const OrderCounter = ({ minValue = 1, maxValue = 100, updateCounterValue }) => {
  const [count, setCount] = useState(minValue);

  const handleIncrementCounter = (e) => {
    e.preventDefault();
    if (count < maxValue) {
      setCount((prevState) => {
        updateCounterValue(prevState + 1);
        return prevState + 1;
      });
    }
  };

  const handleDecrementCounter = (e) => {
    e.preventDefault();
    if (count > minValue) {
      setCount((prevState) => {
        updateCounterValue(prevState - 1);
        return prevState - 1;
      });
    }
  };

  return (
    <div className="btn-group">
        <button className="decrement-btn" onClick={handleDecrementCounter}>
        <span class="material-symbols-outlined">-</span>
      </button>
      <p className="counterP">{count}</p>
      <button className="increment-btn" onClick={handleIncrementCounter}>
        <span class="material-symbols-outlined">+</span>
      </button>
    </div>
  );
};

export default OrderCounter;