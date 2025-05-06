import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faCloud } from '@fortawesome/free-solid-svg-icons';
import profileImage from '../assets/profile.png';

const Intro = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const titles = ["Hii i am Shoaib Akhtar,","Welcome to My Portfolio"];

  const shortBio = 'Hi, I’m a B.Tech IT student at MSIT, passionate about technology and innovation. I’m keen on exploring AI, ML, and emerging fields like React and Node.js, alongside web development. My goal is to build impactful solutions that address real-world challenges by leveraging cutting-edge technologies and a strong foundation in IT.';
  const fullBio = 'Hi, I’m Shoaib, a passionate developer with expertise in building scalable web applications. I specialize in React, Node.js, and cloud technologies, delivering user-focused solutions with clean code and modern design. My journey includes working on diverse projects, from startups to enterprise systems, always striving for excellence and innovation.  I’m always eager to collaborate on innovative projects and contribute to the tech community. Let’s connect tocreate something amazing! ';

  const skills = [
    { name: 'React', icon: faCode },
    { name: 'Node.js', icon: faCode },
    { name: 'AWS', icon: faCloud },
    { name: 'MongoDB', icon: faDatabase },
  ];

  useEffect(() => {
    console.log(`titleIndex: ${titleIndex}, charIndex: ${charIndex}, displayedText: "${displayedText}", isTyping: ${isTyping}`);

    if (isTyping) {
      if (charIndex < titles[titleIndex].length) {
        const timer = setTimeout(() => {
          setDisplayedText(titles[titleIndex].slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 100); // Typing speed
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setIsTyping(false);
        }, 1500); // Pause after full phrase
        return () => clearTimeout(timer);
      }
    } else {
      const timer = setTimeout(() => {
        setDisplayedText('');
        setCharIndex(0);
        setTitleIndex((prev) => (prev + 1) % titles.length);
        setIsTyping(true);
      }, 500); // Pause before clearing
      return () => clearTimeout(timer);
    }
  }, [charIndex, titleIndex, isTyping, titles]);

  return (
    <section id="home" className="intro-section">
      <div className="intro-content">
        <h1 className="intro-title">
          <span className="title-phrase">{displayedText}</span>
        </h1>
        <div className="intro-tagline">
          <span style={{ animationDelay: '5s' }}>Developer</span>
          <span style={{ animationDelay: '5.2s' }}><FontAwesomeIcon icon={faCode} /></span>
          <span style={{ animationDelay: '5.4s' }}>DevOps Enthusiast</span>
          <span style={{ animationDelay: '5.2s' }}><FontAwesomeIcon icon={faCode} /></span>
          <span style={{ animationDelay: '5.4s' }}>Ai/ml learner</span>
        </div>
        <div className="intro-container">
          <img src={profileImage} alt="Profile" className="intro-image" />
          <div className="intro-text">
            <p>{isExpanded ? fullBio : shortBio}</p>
            {isExpanded && (
              <div className="intro-full-text">
                <div className="intro-skills">
                  {skills.map((skill, index) => (
                    <span key={index} className="intro-skill-badge">
                      <FontAwesomeIcon icon={skill.icon} />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="intro-buttons">
          <button
            className="intro-know-more"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Show Less' : 'Know More'}
          </button>
          <a href="#contact" className="intro-get-in-touch">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;