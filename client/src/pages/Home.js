import React, { useEffect, useState, useRef } from 'react'
import {
  Code2Icon,
  MonitorIcon,
  PieChartIcon,
  SmartphoneIcon,
  DatabaseIcon,
  CogIcon,
  ClockIcon,
  AwardIcon,
  UsersIcon,
  TargetIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  HeadphonesIcon,
} from 'lucide-react'
import { ProjectsCarousel } from '../components/ProjectsCarousel'
import './Home.css'
export default function Home() {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    apps: 0,
    awards: 0,
  })
  const statsSection = useRef(null)
  useEffect(() => {
    // Animation for elements when they come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
            // If this is the stats section, start the counters
            if (entry.target === statsSection.current) {
              startCounters()
            }
          }
        })
      },
      {
        threshold: 0.1,
      },
    )
    // Observe all elements with animation classes
    document
      .querySelectorAll('.fade-in, .slide-in, .zoom-in, .float-in, .pulse')
      .forEach((el) => {
        observer.observe(el)
      })
    // Observe the stats section
    if (statsSection.current) {
      observer.observe(statsSection.current)
    }
    return () => observer.disconnect()
  }, [])
  const startCounters = () => {
    const duration = 2000 // 2 seconds
    const finalValues = {
      clients: 250,
      projects: 500,
      apps: 120,
      awards: 30,
    }
    const startTime = performance.now()
    const updateCounters = (currentTime) => {
      const elapsedTime = currentTime - startTime
      const progress = Math.min(elapsedTime / duration, 1)
      setCounters({
        clients: Math.floor(progress * finalValues.clients),
        projects: Math.floor(progress * finalValues.projects),
        apps: Math.floor(progress * finalValues.apps),
        awards: Math.floor(progress * finalValues.awards),
      })
      if (progress < 1) {
        requestAnimationFrame(updateCounters)
      }
    }
    requestAnimationFrame(updateCounters)
  }
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Form submitted successfully!')
  }
  return (
    <div className="home-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-text">Vista IT Solutions</span>
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="contact-button">Contact Us</button>
      </nav>
      {/* Hero Section - Updated with dark background and new animations */}
      <section id="home" className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-shape-top"></div>
        <div className="hero-shape-bottom"></div>
        <div className="hero-content">
          <span className="hero-subtitle pulse">Award Winning Company</span>
          <h1 className="fade-in">
            Website & <span className="text-gradient">Mobile App</span>
            <br />
            development company
          </h1>
          <p className="fade-in">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews iterative approaches data communication.
          </p>
          <div className="hero-buttons">
            <button className="cta-button slide-in">Get a Quote</button>
            <button className="secondary-button slide-in">Explore Now</button>
          </div>
        </div>
        <div className="hero-image float-in">
          <div className="image-wrapper">
            <img
              src="https://uploadthingy.s3.us-west-1.amazonaws.com/doRynoPDEswG3GCEnH811F/Screenshot_2025-08-07_103048.png"
              alt="Team working together"
            />
          </div>
        </div>
      </section>
      {/* About Us Section */}
      <section id="about" className="about-section">
        <h2 className="section-title">About Vista IT Solutions</h2>
        <div className="about-content">
          <div className="about-text fade-in">
            <p>
              We are a forward-thinking software solutions company dedicated to
              creating innovative digital tools that empower businesses across
              industries. Our team combines technical expertise with creative
              problem-solving to deliver customized solutions that address your
              unique challenges.
            </p>
            <p>
              Founded in 2015, Vista IT has grown into a trusted technology
              partner for businesses ranging from startups to enterprise
              organizations. We pride ourselves on our collaborative approach
              and commitment to excellence in everything we do.
            </p>
            <div className="about-features">
              <div className="feature-item zoom-in">
                <CheckCircleIcon size={20} />
                <span>Innovative Solutions</span>
              </div>
              <div className="feature-item zoom-in">
                <CheckCircleIcon size={20} />
                <span>Expert Team</span>
              </div>
              <div className="feature-item zoom-in">
                <CheckCircleIcon size={20} />
                <span>Quality Assurance</span>
              </div>
              <div className="feature-item zoom-in">
                <CheckCircleIcon size={20} />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
          <div className="about-image zoom-in">
            <div className="image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Team working together"
              />
            </div>
            <div className="about-shape"></div>
          </div>
        </div>
      </section>
      {/* Services Section - Updated to match the second image */}
      <section id="services" className="services-section">
        <div className="services-background"></div>
        <h2 className="section-title light">Our Services</h2>
        <div className="services-grid">
          <div className="service-card float-in">
            <div className="service-number">01</div>
            <div className="service-icon">
              <SmartphoneIcon size={28} />
            </div>
            <h3>Mobile App Development</h3>
            <p>
              Creating innovative and user-friendly mobile applications tailored
              to meet clients' specific requirements.
            </p>
            <a href="#" className="service-link">
              Read More
            </a>
          </div>
          <div className="service-card float-in">
            <div className="service-number">02</div>
            <div className="service-icon">
              <BriefcaseIcon size={28} />
            </div>
            <h3>Search Engine Optimization</h3>
            <p>
              Optimizing websites to rank higher and drive highly targeted
              traffic for maximum exposure.
            </p>
            <a href="#" className="service-link">
              Read More
            </a>
          </div>
          <div className="service-card float-in">
            <div className="service-number">03</div>
            <div className="service-icon">
              <AwardIcon size={28} />
            </div>
            <h3>Brand Identity</h3>
            <p>
              Developing cohesive visual and narrative elements that reflect
              brand values and resonate with audiences.
            </p>
            <a href="#" className="service-link">
              Read More
            </a>
          </div>
          <div className="service-card float-in">
            <div className="service-number">04</div>
            <div className="service-icon">
              <TargetIcon size={28} />
            </div>
            <h3>Product Design</h3>
            <p>
              Designing intuitive and visually appealing digital products that
              enhance user experience.
            </p>
            <a href="#" className="service-link">
              Read More
            </a>
          </div>
          <div className="service-card float-in">
            <div className="service-number">05</div>
            <div className="service-icon">
              <Code2Icon size={28} />
            </div>
            <h3>Web Development</h3>
            <p>
              Building responsive and feature-rich websites that deliver
              exceptional user experiences and functionality.
            </p>
            <a href="#" className="service-link">
              Read More
            </a>
          </div>
          <div className="service-card float-in">
            <div className="service-number">06</div>
            <div className="service-icon">
              <PieChartIcon size={28} />
            </div>
            <h3>Digital Strategy</h3>
            <p>
              Crafting strategic plans to enhance online presence, engagement,
              and conversion for businesses.
            </p>
            <a href="#" className="service-link">
              Read More
            </a>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section - Updated with stats */}
      <section id="why-us" className="why-us-section" ref={statsSection}>
        <div className="why-us-background">
          <div className="why-us-shape"></div>
        </div>
        <div className="why-us-content">
          <div className="why-us-image">
            <img
              src="https://uploadthingy.s3.us-west-1.amazonaws.com/3MDyC7mv6XQWhQtMHbdDvn/Screenshot_2025-08-07_103323.png"
              alt="Team members discussing"
            />
          </div>
          <div className="why-us-text">
            <h2 className="section-title">Why Choose Our Services!</h2>
            <h3 className="section-subtitle">
              Leading the best digital agency
            </h3>
            <p>
              Choose us for excellence and tailored solutions. We prioritize
              client satisfaction, innovation, and transparent collaboration for
              your digital success.
            </p>
            <div className="why-us-features">
              <div className="feature-item fade-in">
                <div className="feature-icon">
                  <ClockIcon size={24} />
                </div>
                <div className="feature-content">
                  <h4>First Growing Process</h4>
                  <p>
                    Initiate your journey with our streamlined and efficient
                    growth strategies, designed for optimal success from the
                    start.
                  </p>
                </div>
              </div>
              <div className="feature-item fade-in">
                <div className="feature-icon">
                  <HeadphonesIcon size={24} />
                </div>
                <div className="feature-content">
                  <h4>Dedicated Support 24/7</h4>
                  <p>
                    Count on our round-the-clock support team for prompt
                    assistance, ensuring seamless operations and peace of mind.
                  </p>
                </div>
              </div>
              <div className="feature-item fade-in">
                <div className="feature-icon">
                  <Code2Icon size={24} />
                </div>
                <div className="feature-content">
                  <h4>Clean Code Design</h4>
                  <p>
                    Experience the difference with our meticulously crafted
                    code, ensuring efficiency, reliability, and easy maintenance
                    for your project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="stats-container">
          <div className="stat-item pulse">
            <h3>{counters.clients}+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat-item pulse">
            <h3>{counters.projects}+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-item pulse">
            <h3>{counters.apps}+</h3>
            <p>Apps Developed</p>
          </div>
          <div className="stat-item pulse">
            <h3>{counters.awards}+</h3>
            <p>Awards Won</p>
          </div>
        </div>
      </section>
      {/* Projects Section - Updated with carousel/slider */}
      <section id="projects" className="projects-section">
        <h2 className="section-title">Our Projects</h2>
        <p className="section-subtitle">
          Explore our latest work and success stories
        </p>
        <div className="projects-carousel">
          <ProjectsCarousel />
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Reach out to us to discuss how we can help with your next project
        </p>
        <div className="contact-container">
          <form className="contact-form fade-in" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
          <div className="contact-info fade-in">
            <h3>Contact Information</h3>
            <div className="info-item">
              <strong>Email:</strong>
              <p>info@vistait.com</p>
            </div>
            <div className="info-item">
              <strong>Phone:</strong>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="info-item">
              <strong>Address:</strong>
              <p>
                123 Tech Avenue, Suite 100
                <br />
                San Francisco, CA 94107
              </p>
            </div>
            <div className="social-links">
              <a href="#" className="social-link">
                <div className="social-icon">FB</div>
              </a>
              <a href="#" className="social-link">
                <div className="social-icon">TW</div>
              </a>
              <a href="#" className="social-link">
                <div className="social-icon">LI</div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="footer">
        <p>© 2023 Vista IT Solutions. All rights reserved.</p>
      </footer>
    </div>
  )
}
