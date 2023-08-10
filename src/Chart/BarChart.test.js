import React from 'react';
import { render } from '@testing-library/react';
import Barchart from './BarChart';
import ErrorBoundary from '../ErrorBoundary';

test('renders Barchart component', () => {
  <ErrorBoundary>
  render(<Barchart />);
  </ErrorBoundary>
});
