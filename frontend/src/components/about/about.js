import React, { useState, useEffect } from 'react';
import aboutPic from '../../assets/about.jpg';

const About = () => {
  const phrases = [
    'software developer.',
    'product manager.',
    'problem-solver.',
    'lifelong learner.',
    'cat-lover.',
    'bronze in Valorant.'
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
          <img
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
      </p>
    </div>
  );
        };
  

export default About;
