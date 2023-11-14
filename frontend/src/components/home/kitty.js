import React, { useEffect, useState } from 'react';

const Kitty = () => {
  const [text, setText] = useState('');
  const fullText = 'Welcome! Happy you\'re here :)';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = 150; // Adjust this to control typing speed
    const loopInterval = 2000; // Time before the loop starts (in milliseconds)

    const typing = () => {
      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typing, typingInterval);
      } else {
        setTimeout(resetText, loopInterval);
      }
    };

    const resetText = () => {
      currentIndex = 0;
      setText('');
      typing(); // Start typing again after the loopInterval
    };

    typing();
  }, []);

  return (
    <div className="kliu">
      <h1>{text}</h1>
    </div>
  );
};

export default Kitty;
