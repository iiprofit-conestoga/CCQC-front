import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar'; // Shared Navbar Component

const Layout = () => {
  return (
    <>
      <Navbar /> {/* Shared Navigation */}
      <main className="main-content">
        <Outlet /> {/* Render Nested Routes */}
      </main>
    </>
  );
};

export default Layout;