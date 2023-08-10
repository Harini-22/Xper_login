import React from 'react';
import { render } from '@testing-library/react';
import Linechart from './LineChart';
import ErrorBoundary from '../ErrorBoundary';

test('renders Linechart component', () => {
  <ErrorBoundary>
  render(<Linechart />);
  </ErrorBoundary>

});

