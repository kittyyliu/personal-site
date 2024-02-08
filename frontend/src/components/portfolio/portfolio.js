import React, { useState } from 'react';
import './portfolio.css';
import straysafe from '../../assets/straysafe.png';
import pawndr from '../../assets/pawndr.png';
import ssb from '../../assets/ssb.png';
import verses from '../../assets/verses.png';

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('software');
    const [activeButton, setActiveButton] = useState('software');
  
    const projects = [
      {
        category: 'software',
        image: ssb,
        tech: 'SQL, Node.js, React.js, Express.js',
        title: 'Super Smash Bros. Tournament Tracker (CPSC 304 Project)',
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
        title: 'Pawndr (Hack Western X Winner)',
        description: `Collaborated with a team of 3 other software developers to build an AI-powered full-stack web application in 36 hours, placing in the top 5
        projects overall, as well as winning 3 other awards of Best Mental Health Hack,
        Most Creative Use of GitHub, and Organizer's Choice Award`,
        link: 'https://github.com/kittyyliu/304project'
      },
      {
        category: 'software',
        image: "",
        tech: 'Java, Java Swing',
        title: 'BetBank (CPSC 210 Project)',
        description: `Developed an application to simulate a sports-betting bank using Java, allowing users to deposit, bet, check their balance, and check their transaction history. 
        Persisted data to memory file in JSON format, allowing users to save and load data as a JSON file. 
        Designed a graphical user interface (GUI) using Java Swing with elements such as a splash screen and interactive popups`,
        link: 'https://github.com/kittyyliu/BetBank'
      },
      {
        category: 'product',
        image: straysafe,
        tech: 'Java, Java Swing',
        title: 'StraySafe (DTTP Product Hackathon)',
        description: `Led the ideation, research, design, and pitch of StraySafe, an AI-powered web app allowing users to post lost/found pets and facilitates pet reunions through photo similarity matching. 
        Worked cross-functionally with a team of 3 other product managers, overseeing project management, task assignment, and executing the entire design process`,
        link: 'https://github.com/kittyyliu/304project'
      },
    ];
  
    const filteredProjects = projects.filter(project => project.category === selectedCategory);
  
    return (
      <div className="portfolio">
        <header>
          <h1>Portfolio</h1>
          <div className="toggles">
          <button
            onClick={() => {
              setSelectedCategory('software');
              setActiveButton('software');
            }}
            className={activeButton === 'software' ? 'active' : ''}
          >
            Software
          </button>
          <button
            onClick={() => {
              setSelectedCategory('design');
              setActiveButton('design');
            }}
            className={activeButton === 'design' ? 'active' : ''}
          >
            Design
          </button>
          <button
            onClick={() => {
              setSelectedCategory('product');
              setActiveButton('product');
            }}
            className={activeButton === 'product' ? 'active' : ''}
          >
            Product
          </button>
        </div>
        </header>
  
        <section className="projects">
          {filteredProjects.map((project, index) => (
            <article className="project" key={index}>
              <h2 className='title'>{project.title}</h2>
              <p className='tech'>{project.tech}</p>
              <p className='description'>{project.description}</p>
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