import React from 'react';
import { render } from '@testing-library/react';
import HomePage from '../components/home';

describe('HomePage component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<HomePage />);
    const header = getByText('Welcome to our page!');
    expect(header).toBeTruthy();
  });

  test('HomePage renders correctly', () => {
    const { container } = render(<HomePage />);
    expect(container).toMatchSnapshot();
  });
});
