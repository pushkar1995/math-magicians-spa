import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import NavBar from './Navbar';
import App from '../../App';

test('Test NavigationBar', () => {
  const tree = render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>,
  );
  expect(tree).toMatchSnapshot();
});

describe('Click events', () => {
  test('User clicks Quotes', () => {
    const { container } = render(<App />);
    expect(screen.getByText(/Welcome to our page!/)).toBeInTheDocument();
    expect(container.getElementsByClassName('quoteDiv').length).toBe(0);
    userEvent.click(screen.getAllByText('Quotes')[0]);
    expect(container.getElementsByClassName('quoteDiv').length).toBe(1);
  });

  test('User leaves Home and then clicks Home again', () => {
    render(<App />);
    userEvent.click(screen.getAllByText('Calculator')[0]);
    expect(screen.queryByText(/Welcome to our page!/)).toBeNull();
    userEvent.click(screen.getByText('Home'));
    expect(screen.getByText(/Welcome to our page!/)).toBeInTheDocument();
  });

  test('User clicks Calculator', () => {
    const { container } = render(<App />);
    expect(screen.queryByText(/Let's do some math!/)).toBeNull();
    userEvent.click(screen.getAllByText('Calculator')[0]);
    expect(screen.getByText(/Let's do some math!/)).toBeInTheDocument();
    expect(container.getElementsByClassName('calc').length).toBe(1);
  });
});
