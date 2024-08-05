import React from 'react';
import './About.css';

import an from '../../resources/ankita.jpeg'


const teamMembers = [
  { name: 'Ankita Singh', photo: an },
];

const About = () => {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p>
        Our project focuses on providing high-quality furniture and clothing. We aim 
        to offer a curated selection that combines both style and comfort. Here's how it works:
      </p>
      <div className="steps-container">
        <div className="step">
          <div className="step-icon">
            <i className="fas fa-couch"></i>
          </div>
          <p>We offer a wide range of stylish and comfortable furniture for your home.</p>
        </div>
        <div className="step">
          <div className="step-icon">
            <i className="fas fa-tshirt"></i>
          </div>
          <p>We provide a variety of clothing options that blend fashion with comfort.</p>
        </div>
        <div className="step">
          <div className="step-icon">
            <i className="fas fa-tags"></i>
          </div>
          <p>Enjoy great deals and discounts on our exclusive collections.</p>
        </div>
      </div>
      <div className="highlight-box">
        <p>
          This initiative aims to enhance your lifestyle with high-quality, stylish, and 
          affordable furniture and clothing options.
        </p>
      </div>
      <h3>Developed by</h3>
      <div className="team-container">
        {teamMembers.map((member) => (
          <TeamMember key={member.name} name={member.name} photo={member.photo} />
        ))}
      </div>
    </div>
  );
};

const TeamMember = ({ name, photo }) => {
  return (
    <div className="team-member">
      <img src={photo} alt={name} />
      <h4>{name}</h4>
    </div>
  );
};

export default About;
