import React from 'react';
import { render } from '@testing-library/react';
import FetchedApi from './api';

test('FetchedApi renders correctly', () => {
  const { container } = render(<FetchedApi />);
  expect(container).toMatchSnapshot();
});