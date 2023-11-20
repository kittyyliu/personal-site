import React, { useState } from 'react';
import './portfolio.css';

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('software');
  
    const projects = [
      {
        category: 'software',
        title: 'Super Smash Bros. Tournament Tracker',
        description: 'Created a web application to manage and track Super Smash Bros. tournaments, allowing users to add tournaments, filter for tournaments based on players, country, wins, or losses, and delete players ',
        link: 'https://github.com/kittyyliu/304project'
      },
      {
        category: 'design',
        title: 'verses (Hack Western 9 Organizer\'s Choice Award)',
        description: 'Description of Project 2 goes here. Provide information about the technologies used and the challenges faced.',
        link: 'https://devpost.com/software/verses'
      },
      {
        category: 'product',
        title: 'Freshify',
        description: 'A food expiration tracker designed to become the ultimate guide for fresher, smarter eating',
        link: 'https://efficient-cosmonaut-4cd.notion.site/Freshify-Product-Pack-Write-up-60b43ba68a284aa3910564002b56418b?pvs=4'
      },
      // Add more projects as needed
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
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </article>
          ))}
        </section>
      </div>
    );
  }
  
  export default Portfolio;