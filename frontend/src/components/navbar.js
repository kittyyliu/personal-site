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
          Home
        </a>
        <a
          href="/about"
          className={activeLink === 'about' ? 'active' : ''}
          onClick={() => handleLinkClick('about')}
        >
          About
        </a>
        <a
          href="/projects"
          className={activeLink === 'projects' ? 'active' : ''}
          onClick={() => handleLinkClick('projects')}
        >
          Projects
        </a>
        <a
          href="/resume"
          className={activeLink === 'resume' ? 'active' : ''}
          onClick={() => handleLinkClick('resume')}
        >
          Resume
        </a>
        <a
          href="/art"
          className={activeLink === 'art' ? 'active' : ''}
          onClick={() => handleLinkClick('art')}
        >
          Fun
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
