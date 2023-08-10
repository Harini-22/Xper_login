import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Nav from './Nav';

test('renders the Nav component', () => {
  render(<Nav />);

  // Check if the navigation menu is rendered
  const navElement = screen.getByTestId('nav');
  expect(navElement).toBeInTheDocument();

  

  // Check if the dropdown menu items are rendered after clicking the toggle
  const profileLink = screen.getByRole('link', { name: /profile/i });
  expect(profileLink).toBeInTheDocument();

  const settingLink = screen.getByRole('link', { name: /setting/i });
  expect(settingLink).toBeInTheDocument();

  const logoutLink = screen.getByRole('link', { name: /logout/i });
  expect(logoutLink).toBeInTheDocument();
});
