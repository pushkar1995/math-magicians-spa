import React from 'react';

import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import NavBar from '../components/Navbar/Navbar';

describe('Test NavigationBar', () => {
  test('Render correctly', () => {
    const tree = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
