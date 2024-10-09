// src/context/AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { AuthClient } from '@dfinity/auth-client';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authClient, setAuthClient] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState(null);
  // Initialize AuthClient and check authentication status
  const initializeAuthClient = async () => {
    try {
      const client = await AuthClient.create();
      setAuthClient(client);
      const isLoggedIn = await client.isAuthenticated();
      setIsAuthenticated(isLoggedIn); 
      setIsLoading(false);
      if (isLoggedIn) {
        const identity = client.getIdentity();
        const principal = identity.getPrincipal();
        setUserId(principal.toString());  // Kullanıcı ID'sini sakla
      }
    } catch (error) {
      console.error("Failed to initialize AuthClient:", error); // Error handling
    }
  };

  const handleLogin = async () => {
    if (authClient) {
      try {
        await authClient.login({
          identityProvider: 'https://identity.ic0.app',
          onSuccess: () => {
            setIsAuthenticated(true); // Update state on successful login
          },
        });
      } catch (error) {
        console.error("Login failed:", error); // Error handling
      }
    }
  };

  const handleLogout = async () => {
    if (authClient) {
      try {
        await authClient.logout();
        setIsAuthenticated(false);
        setUserId(null);  
      } catch (error) {
        console.error("Logout failed:", error); // Error handling
      }
    }
  };

  useEffect(() => {
    initializeAuthClient(); 
  }, []);
  if (isLoading) {
    return <div>Loading...</div>; 
  }
  return (
    <AuthContext.Provider value={{ isAuthenticated, handleLogin, handleLogout, authClient, userId }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
