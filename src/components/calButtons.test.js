import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CalculatorButtons from './calButtons';

test('Test Calculator Buttons', () => {
  const tree = render(
    <BrowserRouter>
      <CalculatorButtons onButtonClick={jest.fn()} />
    </BrowserRouter>,
  );
  expect(tree).toMatchSnapshot();
});
