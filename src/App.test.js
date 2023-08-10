import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('redirects to login page for /dash when not authenticated', () => {
    // Here, you can mock the authentication state to simulate unauthenticated user.
    const isAuthenticated = false;
    render(
      <MemoryRouter initialEntries={['/dash']}>
        <App isAuthenticated={isAuthenticated} />
      </MemoryRouter>
    );
    const loginButtonElement = screen.getByRole('button', { name: /Login/i });
     expect(loginButtonElement).toBeInTheDocument();
});

test('renders Register component on the home page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    const registerElement = screen.getByText(/Sign Up/i);
    expect(registerElement).toBeInTheDocument();
  });

  test('renders Login component on the login page', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <App />
      </MemoryRouter>
    );
    const loginElement = screen.getByRole('button', { name: /Login/i });
    expect(loginElement).toBeInTheDocument();
  });

 