import React from 'react';
import {Helmet} from 'react-helmet';
import { withPrefix } from 'gatsby';

import "../assets/css/navbar.css";


const Navbar = () => {

  return (
    <>
    <a href="#content" id="skip-nav">Skip to main content</a>
    <header className="navbar">
        <div className="navbar-wrapper">
            <section id="site-branding">
                <a href="#"><h1 id="site-title">Site Title</h1></a>
            </section>
            <nav id="main-menu" aria-labelledby="mainmenulabel">
                <h2 id="mainmenulabel" className="sr-only">Main Menu</h2>
                <button id="menu-toggle" className="" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="menu-btn-bar" id="bar-top"></span>
                    <span className="menu-btn-bar" id="bar-middle"></span>
                    <span className="menu-btn-bar" id="bar-bottom"></span>
                </button>
                <ul className="nav  collapsed" id="navbarSupporedtContent" aria-hidden="true">
                    <li className="nav-item"><a href="./navbar.html" className="nav-link" tabIndex="0">Home</a></li>
                    <li className="nav-item"><a href="./test.html" className="nav-link" tabIndex="0">Test Page</a></li>
                    <li className="nav-item"><a href="#" className="nav-link" tabIndex="0">Nav Link</a></li>
                </ul>
            </nav>
        </div>
        <Helmet>
            <script src={withPrefix('js/NavbarJs.js')} type="text/javascript"></script>
        </Helmet>
    </header>
    </>
  );
};

export default Navbar;