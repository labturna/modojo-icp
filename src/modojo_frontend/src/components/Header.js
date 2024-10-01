import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../context/AuthContext'; // useAuth hook'unu içe aktar

const Header = () => {
  const { isAuthenticated, handleLogin, handleLogout } = useAuth(); // useAuth'tan değerleri al

  return (
    <header className="bg-[#1e1e36] text-white py-2 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <img 
            src="/img/modojo-logo.png" 
            alt="MoDojo Logo" 
            className="h-14 w-50"  /* Adjust the height as needed */
          />
        </h1>
        <nav className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li><a href="#courses" className="hover:underline text-lg">Courses</a></li>
            <li><a href="#contents" className="hover:underline text-lg">Content</a></li>
          </ul>
          {isAuthenticated ? (
            <button 
              onClick={handleLogout} 
              className="flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
            >
              <span>Logout</span>
            </button>
          ) : (
            <button 
              onClick={handleLogin} 
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            >
              <FontAwesomeIcon icon={faWallet} />
              <span>Connect Wallet</span>
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
