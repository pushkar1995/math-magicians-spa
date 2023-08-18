import React from 'react';
import PropTypes from 'prop-types';

function calculatorButtons({ onButtonClick }) {
  const innerHtmlClick = (event) => {
    const value = event.target.innerHTML;
    onButtonClick(value);
  };
  return (
    <div className="buttonContainer">
      <button type="button" className="operator" onClick={innerHtmlClick}>AC</button>
      <button type="button" className="operator" onClick={innerHtmlClick}>+/-</button>
      <button type="button" className="operator" onClick={innerHtmlClick}>%</button>
      <button type="button" className="operator" onClick={innerHtmlClick}>÷</button>
      <button type="button" className="number" onClick={innerHtmlClick}>7</button>
      <button type="button" className="number" onClick={innerHtmlClick}>8</button>
      <button type="button" className="number" onClick={innerHtmlClick}>9</button>
      <button type="button" className="operator" onClick={innerHtmlClick}>x</button>
      <button type="button" className="number" onClick={innerHtmlClick}>4</button>
      <button type="button" className="number" onClick={innerHtmlClick}>5</button>
      <button type="button" className="number" onClick={innerHtmlClick}>6</button>
      <button type="button" className="operator" onClick={innerHtmlClick}>-</button>
      <button type="button" className="number" onClick={innerHtmlClick}>1</button>
      <button type="button" className="number" onClick={innerHtmlClick}>2</button>
      <button type="button" className="number" onClick={innerHtmlClick}>3</button>
      <button type="button" className="operator" onClick={innerHtmlClick}>+</button>
      <button type="button" className="number zero" onClick={innerHtmlClick}>0</button>
      <button type="button" className="number" onClick={innerHtmlClick}>.</button>
      <button type="button" className="operator equal" onClick={innerHtmlClick}>=</button>
    </div>
  );
}

calculatorButtons.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default calculatorButtons;
