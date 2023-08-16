import React from 'react';

const calculatorButtons = () => (
  <div className="button-container">
    <button type="button" className="operator">AC</button>
    <button type="button" className="operator">+/-</button>
    <button type="button" className="operator">%</button>
    <button type="button" className="operator">/</button>
    <button type="button" className="number">7</button>
    <button type="button" className="number">8</button>
    <button type="button" className="number">9</button>
    <button type="button" className="operator">x</button>
    <button type="button" className="number">4</button>
    <button type="button" className="number">5</button>
    <button type="button" className="number">6</button>
    <button type="button" className="operator">-</button>
    <button type="button" className="number">1</button>
    <button type="button" className="number">2</button>
    <button type="button" className="number">3</button>
    <button type="button" className="operator">+</button>
    <button type="button" className="number zero">0</button>
    <button type="button" className="number">.</button>
    <button type="button" className="operator equal">=</button>
  </div>
);

export default calculatorButtons;
