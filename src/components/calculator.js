import React, { useState } from 'react';
import CalculatorButtons from './calButtons';
import calculate from '../logic/calculate';

function Calculator() {
  const [calculatorState, setCalculatorState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (value) => {
    const updatedState = calculate(calculatorState, value);
    setCalculatorState(updatedState);
  };
  return (

    <div className="calculator-container">
      <div className="screen">
        <span>
          {calculatorState.total}
          {' '}
          {calculatorState.operation}
          {' '}
          {calculatorState.next}
        </span>
      </div>
      <CalculatorButtons onButtonClick={handleClick} />
    </div>
  );
}
export default Calculator;
