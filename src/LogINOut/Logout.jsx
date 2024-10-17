import React from 'react';
import { useAuth } from './AuthContext'; // Adjust the path

const LogoutButton = () => {
  const { handleLogout } = useAuth();

  return (
    <button onClick={handleLogout}>Log Out</button>
  );
};

export default LogoutButton;
