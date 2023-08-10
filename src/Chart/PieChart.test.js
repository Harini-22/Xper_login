import React from 'react';
import { render } from '@testing-library/react';
import Piechart from './PieChart';
import ErrorBoundary from '../ErrorBoundary';

test('renders Piechart component', () => {
  <ErrorBoundary>
  render(<Piechart />);
  </ErrorBoundary>
});

