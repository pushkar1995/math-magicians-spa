import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Calculator from '../components/calculator';

describe('Renders correctly', () => {
  test('Test CalculatorComponent', () => {
    const tree = render(
      <BrowserRouter>
        <Calculator />
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
