import React from 'react';
import { render ,screen } from '@testing-library/react';
import Areachart from './AreaChart';
//import ErrorBoundary from '../ErrorBoundary';

test('renders the area chart', () => {

  render(
  <Areachart />
  );


  // screen.debug();
  const areaChartElement = screen.getByTestId('area-chart');
  expect(areaChartElement).toBeInTheDocument();
});
