import React, { useState } from 'react';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const handleLinkClick = (link) => {
    setActiveLink(link);
};
return (
    
    <nav className="navbar">
      <h1>kittyliu.xyz</h1>
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
          href="/resume"
          className={activeLink === 'resume' ? 'active' : ''}
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
