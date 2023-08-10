import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import userEvent from '@testing-library/user-event';
import ErrorBoundary from './ErrorBoundary'

test('renders the login form', () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </MemoryRouter>
    );
  
    // Check if the email input field is rendered
    const emailInput = screen.getByTestId('email-input');
    expect(emailInput).toBeInTheDocument();
  
    // Check if the password input field is rendered
    const passwordInput = screen.getByTestId('password-input');
    expect(passwordInput).toBeInTheDocument();
  
    // Check if the login button is rendered
    const loginButton = screen.getByTestId('login-button');
    expect(loginButton).toBeInTheDocument();
  });


  test('shows an error message when login is attempted with invalid credentials', () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </MemoryRouter>
    );
  
    // Attempt login with invalid email and password
    const emailInput = screen.getByTestId('email-input');
    userEvent.type(emailInput, 'invalid-email');
  
    const passwordInput = screen.getByTestId('password-input');
    userEvent.type(passwordInput, 'short');
  
    const loginButton = screen.getByTestId('login-button');
    userEvent.click(loginButton);
 
    const errorMessage = screen.queryByTestId('error-message');
    expect(errorMessage).toBeInTheDocument(); 
  });

  

  test('submits form on pressing Enter key', ()=> {
    // Mock successful login response
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </MemoryRouter>
    );
  
    // Fill in the login form with valid credentials
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
  
    userEvent.type(emailInput, 'test@fleetstudio.com');
    userEvent.type(passwordInput, 'password123');
  
    // Press the Enter key to submit the form
    userEvent.type(passwordInput, '{enter}');
    
  });


  