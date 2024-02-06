import React, { useState } from 'react';
import './portfolio.css';
import straysafe from '../../assets/straysafe.png';
import pawndr from '../../assets/pawndr.png';
import ssb from '../../assets/ssb.png';
import verses from '../../assets/verses.png';

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('software');
  
    const projects = [
      {
        category: 'software',
        image: ssb,
        tech: 'SQL, Node.js, React.js, Express.js',
        title: 'Super Smash Bros. Tournament Tracker',
        description: 'Created a web application to manage and track Super Smash Bros. tournaments, allowing users to add tournaments, filter for tournaments based on players, country, wins, or losses, and delete players ',
        link: 'https://github.com/kittyyliu/304project'
      },
      {
        category: 'design',
        image: verses,
        tech: 'Figma, React.js, Axios, Node.js, Express.js, MongoDB, Spotify API',
        title: 'verses (Hack Western 9 Organizer\'s Choice Award)',
        description: 'Description of Project 2 goes here. Provide information about the technologies used and the challenges faced.',
        link: 'https://devpost.com/software/verses'
      },
      {
        category: 'product',
        image: '',
        tech: '',
        title: 'Freshify',
        description: 'A food expiration tracker designed to become the ultimate guide for fresher, smarter eating',
        link: 'https://efficient-cosmonaut-4cd.notion.site/Freshify-Product-Pack-Write-up-60b43ba68a284aa3910564002b56418b?pvs=4'
      },
      {
        category: 'software',
        image: pawndr,
        tech: 'SQL, Node.js, React.js, Express.js',
        title: 'Pawndr',
        description: `Collaborated with a team of 3 other software developers to build an AI-powered full-stack web application in 36 hours, placing in the top 5
        projects overall, as well as winning 3 other awards of Best Mental Health Hack,
        Most Creative Use of GitHub, and Organizer's Choice Award`,
        link: 'https://github.com/kittyyliu/304project'
      },
    ];
  
    const filteredProjects = projects.filter(project => project.category === selectedCategory);
  
    return (
      <div className="portfolio">
        <header>
          <h1>Portfolio</h1>
          <div className="toggles">
            <button onClick={() => setSelectedCategory('software')}>Software</button>
            <button onClick={() => setSelectedCategory('design')}>Design</button>
            <button onClick={() => setSelectedCategory('product')}>Product</button>
          </div>
        </header>
  
        <section className="projects">
          {filteredProjects.map((project, index) => (
            <article className="project" key={index}>
              <h2>{project.title}</h2>
              <p>{project.tech}</p>
              <p>{project.description}</p>
              <div className='image-container'>
              <img src={project.image}></img>
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </article>
          ))}
        </section>
      </div>
    );
  }
  
  export default Portfolio;