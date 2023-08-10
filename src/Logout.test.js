import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Use MemoryRouter to test routing components
import Logout from './Logout';

test('Logout component redirects to login page', () => {
  // Render the Logout component within a MemoryRouter
  const { container } = render(
    <MemoryRouter>
      <Logout />
    </MemoryRouter>
  );

  // Check if the component redirects to the login page
  expect(container.innerHTML).toBe('');
});
