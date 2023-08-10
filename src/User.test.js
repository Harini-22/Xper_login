import { render, screen } from '@testing-library/react';
import User from './User';
import ErrorBoundary from './ErrorBoundary';
import { MemoryRouter } from 'react-router-dom';

test('renders the User component', () => {

  render
  (
    <MemoryRouter>
    <User />
    </MemoryRouter>
  );

  // Assert that the table caption with text "Users" is present
  const element = screen.getByText(/Users/i);

    expect(element).toBeInTheDocument();

    const usersData = [
      { name: 'Harini', email: 'harini@example.com' },
      { name: 'Shreenath', email: 'shree@example.com' },
      // Add more user data as needed
    ];
  
    usersData.forEach((user) => {
      const nameElement = screen.getByText(user.name);
      expect(nameElement).toBeInTheDocument();
  
      const emailElement = screen.getByText(user.email);
      expect(emailElement).toBeInTheDocument();
    });
});

test('hides the sidebar after clicking the toggle button', () => {
  render
  (
    <MemoryRouter>
    <User />
    </MemoryRouter>
  );

  const elements = screen.getByTestId(/sidebar/i);
  expect(elements).toBeInTheDocument();

  const toggleButton = screen.getByTestId(/nav/i);
  expect(toggleButton).toBeInTheDocument();

  const toggleButtonElement = screen.getByTestId(/nav/i);
  toggleButtonElement.click();
});

test('renders user data in the table', () => {
  render
  (
    <MemoryRouter>
    <User />
    </MemoryRouter>
  );
  
  const userDataRows = screen.getAllByTestId('user-data-row');

  // Assert that the user data is correct
  const usersData = [
    { name: 'Harini', email: 'harini@example.com', age: '20' },
    { name: 'Shreenath', email: 'shree@example.com', age: '25' },
    // Add more user data as needed
  ];

  usersData.forEach((user, index) => {
    const nameElement = screen.getByText(user.name);
    expect(nameElement).toBeInTheDocument();

    const emailElement = screen.getByText(user.email);
    expect(emailElement).toBeInTheDocument();

    const ageElement = screen.getByText(user.age);
    expect(ageElement).toBeInTheDocument();

    // Check that the user data rows are rendered in the correct order
    const userDataRow = userDataRows[index];
    expect(userDataRow).toContainElement(nameElement);
    expect(userDataRow).toContainElement(emailElement);
    expect(userDataRow).toContainElement(ageElement);
  });
});