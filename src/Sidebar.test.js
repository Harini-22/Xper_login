import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter for testing links
import Sidebar from './Sidebar';

test('renders the sidebar links', () => {
  render(
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>
  );

  // Assert that the sidebar brand name is present
  const brandNameElement = screen.getByText(/Xper/i);
  expect(brandNameElement).toBeInTheDocument();

  // Assert that the links to different pages are present
  const dashboardLink = screen.getByRole('link', { name: /Dashboard/i });
  expect(dashboardLink).toBeInTheDocument();

  const userLink = screen.getByRole('link', { name: /User/i });
  expect(userLink).toBeInTheDocument();

  const chartsLink = screen.getByRole('link', { name: /Charts/i });
  expect(chartsLink).toBeInTheDocument();

  const logoutLink = screen.getByRole('link', { name: /Logout/i });
  expect(logoutLink).toBeInTheDocument();

  // Assert that the links contain the correct icons
  expect(screen.getByTestId('dashboard-icon')).toHaveClass('bi-speedometer2');
  expect(screen.getByTestId('user-icon')).toHaveClass('bi-person');
  expect(screen.getByTestId('charts-icon')).toHaveClass('bi-pie-chart');
  expect(screen.getByTestId('logout-icon')).toHaveClass('bi-box-arrow-right');
});
