import React, { createContext, useContext} from 'react';
import { auth } from "./firebase"; 
import { signInWithEmailAndPassword, signOut, updatePassword } from 'firebase/auth';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
 
  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleLogout = () => {
    signOut(auth);
    localStorage.removeItem('token');
    clearTimeout(logoutTimer); 
  };

  const handleUpdatePassword = (newPassword) => {
    if (user) {
      return updatePassword(user, newPassword);
    }
  };

  const value = {
    user,
    handleLogin,
    handleLogout,
    handleUpdatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
