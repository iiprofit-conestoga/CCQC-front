import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import LogoutPage from './pages/Logout';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard';
import ListData from './components/ListData/ListData';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} /> {/* Login Page */}
        <Route path="/logout" element={<LogoutPage />} /> {/* Logout Page */}
        
        {/* Private Routes */}
        <Route path="/app/*" element={<Layout />}>
          {/* These should be relative to '/app' */}
          <Route path="dashboard" element={<Dashboard />} /> {/* Nested Dashboard Page */}
          <Route path="user-profile" element={<ListData />} /> {/* Nested User Profile Page */}
          <Route path="user-role" element={<ListData />} /> {/* Nested User Profile Page */}
          <Route path="user-permission" element={<ListData />} /> {/* Nested User Profile Page */}
        </Route>

        {/* Catch-All Route */}
        <Route path="*" element={<NotFound />} /> {/* 404 Page */}
      </Routes>
    </Router>
  );
};

export default App;