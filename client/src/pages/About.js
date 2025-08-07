import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <header className="hero">
        <h1>About VistaIT</h1>
        <p>Leading the way in MERN stack innovation since 2015.</p>
      </header>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>At VistaIT, we deliver innovative, scalable, and user-centric web solutions using the MERN stack to empower businesses for growth and success.</p>
      </section>

      <section className="team">
        <h2>Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <h3>John Doe</h3>
            <p>Lead MERN Developer</p>
            <p>John leads our team with 10+ years of experience in building robust MERN applications.</p>
          </div>
          <div className="team-member">
            <h3>Jane Smith</h3>
            <p>UI/UX Designer</p>
            <p>Jane crafts intuitive interfaces that enhance user experiences.</p>
          </div>
          <div className="team-member">
            <h3>Mike Johnson</h3>
            <p>Cloud Architect</p>
            <p>Mike ensures scalable and secure deployments using AWS and Azure.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Join Our Journey</h2>
        <p>Partner with VistaIT to bring your ideas to life with cutting-edge technology.</p>
        <a href="/contact" className="btn">Contact Us</a>
      </section>

      <footer>
        <p>&copy; 2025 VistaIT. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;