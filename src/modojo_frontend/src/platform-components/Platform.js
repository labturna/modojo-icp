// src/components/Sidebar.js
import React, { useState, useEffect } from 'react';
import MainContent from './MainContent';
import Sidebar from './Sidebar';
import LoadingScreen from './LoadingScreen';

const Platform = () => {
  const [isLoading, setIsLoading] = useState(true);
    
  useEffect(() => {
      const timer = setTimeout(() => {
          setIsLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
      return <LoadingScreen />;
  }
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 ml-6 overflow-x-hidden w-full max-w-screen-3xl mx-auto">
        <MainContent />
      </main>
    </div>
  );
}

export default Platform;
