import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Education = () => {
  const educationData = [
 
    {
      degree: 'B.Tech in Information technology',
      institution: 'Maharaja surajmal institute of technology,New Delhi',
      duration: '2024 - 2027 (Ongoing)',
      description: [
        'Pursuing coursework in object oriented programming,Data structure, Java programming, and system design.',
        'Participating in various hackathons and trying to gain technical and soft skills',
        'Software Team Member at msit IEEE computer society',
      ],
    },
    {
        degree: 'Diploma in Computer Engineering',
        institution: 'Jamia Millia Islamia',
        duration: '2020 - 2023',
        description: [
          'Studied software development, database management, and computer networking.',
          'Completed projects in web development and system design.',
          ' ',
        ],
      },
  ];

  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      <div className="education-list">
        <div className="education-arrow">
          <FontAwesomeIcon icon={faArrowUp} />
        </div>
        {educationData.map((edu, index) => (
          <div key={index} className={`education-item step-${index + 1}`}>
            <div className="education-accent-bar"></div>
            <h3>{edu.degree}</h3>
            <div className="education-institution">{edu.institution}</div>
            <div className="education-duration">{edu.duration}</div>
            <ul className="education-description">
              {edu.description.map((item, idx) => (
                <li key={idx}>
                  <FontAwesomeIcon icon={faChevronRight} className="bullet-icon" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;