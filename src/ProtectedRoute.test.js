import React from 'react';
import { render ,screen } from '@testing-library/react';
import { MemoryRouter, Route ,Routes} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import ErrorBoundary from './ErrorBoundary'


// A dummy component for testing purposes
const DummyComponent = () => <div>Protected Content</div>;
test('renders protected content when access_token is available',async () => {
  // Set the access_token in localStorage
  localStorage.setItem('access_token', 'dummy_token');
<ErrorBoundary>
  // Render the DummyComponent inside the ProtectedRoute
  render(
    <MemoryRouter initialEntries={['/protected']}>
      <Routes>
        <Route path="/protected" element={<ProtectedRoute><DummyComponent /></ProtectedRoute>} />
        <Route path="/login" element={<div>Login Page</div>} />
      </Routes>
    </MemoryRouter>
  );
  </ErrorBoundary>

const protectedContent = await screen.findByText((content, element) => {
  // Custom matcher function to check if the content includes "Protected Content"
  // Here, we are using 'content.includes' instead of 'content ===' for more flexibility
  return content.includes('Protected Content');
});
expect(protectedContent).toBeTruthy();


});