// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LandingPage from './components/Landing-Page';
import Platform from './platform-components/Platform';
import Dashboard from './platform-components/Dashboard';
import Overview from './platform-components/Overview';
import Challenges from './platform-components/Challenges';
import Leaderboard from './platform-components/LeaderBoard';
import PrivateRoute from './components/PrivateRoute'; // PrivateRoute'ı ayrı bir bileşen olarak oluştur

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/overview" element={<PrivateRoute><Overview /></PrivateRoute>} />
          <Route path="/practice" element={<PrivateRoute><Platform /></PrivateRoute>} />
          <Route path="/challenges" element={<PrivateRoute><Challenges /></PrivateRoute>} />
          <Route path="/leaderboard" element={<PrivateRoute><Leaderboard /></PrivateRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
