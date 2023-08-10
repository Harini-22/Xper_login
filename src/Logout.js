import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Perform logout action when the component mounts
    localStorage.clear();
    navigate("/login");
  }, [navigate]);

  // You can return some JSX here if you want, but it won't be displayed as the component redirects immediately
  return null;
}

export default Logout;
