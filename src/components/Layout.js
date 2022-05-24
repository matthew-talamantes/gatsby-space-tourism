import React from 'react';
import Navbar from './navbar';

import "../assets/css/normalize.css";

const Layout = ({ children }) => {
  return (
    <>
        <Navbar />
        <main id="content">
            {children}
        </main>
    </>
  );
};

export default Layout;