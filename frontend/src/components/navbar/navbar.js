import React, { useState } from 'react';
import "./navbar.css";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const handleLinkClick = (link) => {
    setActiveLink(link);
};
return (
    
    <nav className="navbar">
      <a href="/">
      <h1>kittyliu.xyz</h1>
      </a>
      <div className="links">
        <a
          href="/"
          className={activeLink === 'home' ? 'active' : ''}
          onClick={() => handleLinkClick('home')}
        >
          Me
        </a>
        <a
          href="/projects"
          className={activeLink === 'portfolio' ? 'active' : ''}
          onClick={() => handleLinkClick('portfolio')}
        >
          Portfolio
        </a>
        <a
        href="https://drive.google.com/drive/folders/17GJCbOfVMTblprXDWuV84XhSCvjh8Fts?usp=sharing"
        className={activeLink === 'resume' ? 'active' : ''}
        target="_blank"
        onClick={() => handleLinkClick('resume')}
        >
          Resume
          </a>
        <a
          href="/fun"
          className={activeLink === 'fun' ? 'active' : ''}
          onClick={() => handleLinkClick('fun')}
        >
          Fun
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
