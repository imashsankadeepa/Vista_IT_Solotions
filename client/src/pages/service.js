import React from 'react';
import './service.css';

const service = () => {
  return (
    <div className="service-container">
      <header className="hero">
        <h1>Our Services</h1>
        <div className="holo-graphic"> {/* Placeholder for holographic graphic */}
          <p>Tech Innovation</p>
        </div>
        <p>Empowering your business with cutting-edge MERN stack solutions.</p>
      </header>

      <section className="services">
        <h2>Our Expertise</h2>
        <div className="service-grid">
          <div className="service-card">
            <h3>MERN Stack Development</h3>
            <p>Scalable web apps with MongoDB, Express.js, React, and Node.js.</p>
          </div>
          <div className="service-card">
            <h3>UI/UX Design</h3>
            <p>Intuitive interfaces for seamless user experiences.</p>
          </div>
          <div className="service-card">
            <h3>API Development</h3>
            <p>Secure RESTful APIs for robust integrations.</p>
          </div>
          <div className="service-card">
            <h3>Cloud Solutions</h3>
            <p>Scalable deployments on AWS and Azure.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Innovate?</h2>
        <p>Partner with VistaIT to transform your vision.</p>
        <a href="/contact" className="btn">Learn More</a>
      </section>

      <footer>
        <p>&copy; 2025 VistaIT. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default service;