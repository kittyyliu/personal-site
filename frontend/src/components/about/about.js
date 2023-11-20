import React, { useState, useEffect } from 'react';
import aboutPic from '../../assets/about.jpg';
import "./about.css";

const About = () => {
  const phrases = [
    'software developer.',
    'product manager.',
    'problem-solver.',
    'lifelong learner.',
    'cat-lover.'
  ];

  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
  
    const interval = setInterval(() => {
      if (displayedText === phrases[index]) {
        clearInterval(interval);
        setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
          setDisplayedText('');
          setShowCursor(true);
        }, 1000);
      } else {
        setDisplayedText(phrases[index].substring(0, displayedText.length + 1));
        setShowCursor(false);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [displayedText, index, phrases]);

  return (
    <div className="about-container">
      <div className="about-content">
      <a href="https://www.youtube.com/watch?v=bNoWWf5XhJk&ab_channel=kiiu" target="_blank">
          <img className='aboutPic'
            src={aboutPic}
            alt="kittyliu"
            style={{
              padding: '10px',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
          </a>
          <p className="about-text">
        I'm a
        <br />
        <span className="typewriter-text">{displayedText}</span>
        {showCursor && <span className="cursor">_</span>}
      </p>
      </div>
      <br />
      <p className="about-me">
        My name is Kitty Liu and I am currently a 3rd year computer science student at the University of British Columbia. 
        After wanting to pursue medicine my entire life, I found out I hated biology, and that I really like building stuff and working with people.
        From there, I found my way to tech and haven't looked back. Now, I've attended several hackathons, organized hackathons for 1000+ attendees, hosted software programming workshops,
        am completing a product management internship, and finally learned how to do a cartwheel.
        <br />
        <br />
        Outside of tech, some of my passions include playing piano, folding origami flower bouquets, playing video games (+ streaming sometimes!), 
        traveling, and trying out new food recipes. You'll also find out very quickly that I love cats.
        <br />
        <br />
        </p>
        <br />
        <div className='container'>
        <div className='current'>
        Currently, I...
        <br/>
        <br/>
        <ol className='list1'>
        <li className='item11'>Am working as a Product Management Intern at Signify</li>
        <li className='item11'>Was selected as one of 150 Canadians to receive a $8000 scholarship to participate in the Diverse Tech Talent Program in Product Management</li>
        <li className='item11'>Organized 3 of Western Canada's largest hackathons with over 2000 hackers</li>
        </ol>
        <br/>
        <br/>
        </div>
        <div className="past">
        In my 8 past lives, I...
        <br/>
        <br/>
        <ol className='list2'>
        <li className='item11'>Was a competitive classical pianist and performed at Carnegie Hall</li>
        <li className='item11'>Taught piano for 8 years, with several students winning 1st place prizes at music festivals!</li>
        <li className='item11'>Slept for 23 hours straight once</li>
        </ol>
      </div>
      </div>
    </div>
  );
};
  

export default About;
