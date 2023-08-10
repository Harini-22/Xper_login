import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function ProtectedRoute(props) {
  const {children} =props;
  
    const accessToken = localStorage.getItem('access_token');
    console.log(accessToken)
   
  if (!accessToken) {
    // Redirect to the login page if not logged in
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;
