import React from 'react';

import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import NavBar from '../components/Navbar/Navbar';

import App from '../App';

describe('Test NavigationBar', () => {
  test('Render correctly', () => {
    const tree = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    expect(tree).toMatchSnapshot();
  });

  describe('Click events', () => {
    // test('User clicks Quotes', () => {
    //   const { container } = render(<App />);
    //   expect(screen.getByText('Welcome to our page!')).toBeTruthy();
    //   expect(container.getElementsByClassName('quoteDiv').length).toBe(0);

    //   const quoteLinks = screen.getAllByText('Quotes');
    //   userEvent.click(quoteLinks[0]); // Assuming the first one is the desired link
    //   expect(container.getElementsByClassName('quoteDiv').length).toBe(1);
    // });

    // test('User leaves Home and then clicks Home again', () => {
    //   render(<App />);
    //   userEvent.click(screen.getAllByText('Calculator')[0]);
    //   expect(screen.queryByText('Welcome to our page!')).not.toBeTruthy();
    //   userEvent.click(screen.getByText('Home'));
    //   expect(screen.getByText('Welcome to our page!')).toBeTruthy();
    // });
    // test('User clicks Calculator', () => {
    //   const { container } = render(<App />);
    //   expect(screen.queryByText("Let's do some math!")).toBeNull();
    //   userEvent.click(screen.getAllByText('Calculator')[0]);
    //   expect(screen.getByText("Let's do some math!")).toBeTruthy();
    //   expect(container.getElementsByClassName('calc').length).toBe(1);
    // });
  });
});
