import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Calculator from './calculator';
import App from '../App';

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

describe('Renders correctly', () => {
  test('User clicks on the number 3 of calculator', () => {
    const { container } = render(<App />);
    userEvent.click(screen.getAllByText('Calculator')[0]);
    userEvent.click(screen.getByText('3'));
    expect(container.getElementsByClassName('screen')[0].firstChild.innerHTML).toContain('3');
  });

  test('User clicks on the number 5 and then clicks AC', () => {
    const { container } = render(<App />);
    userEvent.click(screen.getAllByText('Calculator')[0]);
    userEvent.click(screen.getByText('5'));
    userEvent.click(screen.getByText('AC'));
    expect(container.getElementsByClassName('screen')[0].firstChild.innerHTML).toBe('  ');
  });

  test('User clicks on the number 5 and then +/-', () => {
    const { container } = render(<App />);
    userEvent.click(screen.getAllByText('Calculator')[0]);
    userEvent.click(screen.getByText('5'));
    userEvent.click(screen.getByText('+/-'));
    expect(container.getElementsByClassName('screen')[0].firstChild.innerHTML).toContain('-5');
  });
});