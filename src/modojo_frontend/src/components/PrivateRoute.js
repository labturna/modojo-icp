import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, authClient } = useAuth();

  // Eğer authClient yüklenmediyse (yani authentication durumu henüz belirlenmediyse) yükleniyor mesajı göster
  if (authClient === null) {
    return <div>Loading...</div>;
  }

  // Eğer kullanıcı doğrulanmamışsa, giriş sayfasına yönlendir
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
