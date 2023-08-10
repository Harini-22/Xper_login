import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Charts from './Charts';
import ErrorBoundary from './ErrorBoundary';
import { MemoryRouter } from 'react-router-dom';

test('renders Charts component with initial sidebar visible', () => {
  // Store the result of the render function in a constant
  const { container } = 
  <ErrorBoundary>
  render(
    <MemoryRouter>
      <Charts />
    </MemoryRouter>
  );

  </ErrorBoundary>

  // Use the container or getByTestId to perform assertions on the rendered component
  const sidebarElement = container.querySelector('[data-testid="sidebar"]');
  expect(sidebarElement).toBeInTheDocument();
});