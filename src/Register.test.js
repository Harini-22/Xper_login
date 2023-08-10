// Register.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Register from './Register';

describe('Register component', () => {
  it('should render the Register component', () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    const registerHeading = screen.getByText('Register');
    expect(registerHeading).toBeInTheDocument();
  });

  it('should show an error message when signing up with invalid input', () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    const signUpButton = screen.getByRole('button', { name: /Sign Up/i });
    userEvent.click(signUpButton);

  });

  it('should navigate to /login when clicking on "Click here to login"', () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    const loginLink = screen.getByText(/Click here to login/i);
    userEvent.click(loginLink);

    const loginHeading = screen.getByText(/Login/i);
    expect(loginHeading).toBeInTheDocument();
    
  });

  it('should sign up successfully with valid input', () => {
    localStorage.setItem('isRegistered', JSON.stringify({
        fname: 'harini',
        lname: 'kk',
        email: 'hkarthikeyan@fleetstudio.com',
        password: '@Harini22',
      }));
    
      <MemoryRouter>
      <Register />
    </MemoryRouter>

  });
});
