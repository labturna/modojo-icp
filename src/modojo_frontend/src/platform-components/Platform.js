// src/components/Sidebar.js
import React, { useState, useEffect } from 'react';
import MainContent from './MainContent';
import Sidebar from './Sidebar';

const Platform = () => {
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
