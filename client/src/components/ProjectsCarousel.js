import React, { useEffect, useState } from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
// Project data
const projects = [
  {
    id: 1,
    name: 'Hello Ride',
    type: 'Mobile Application',
    description:
      'A ride-sharing platform with seamless booking experience and real-time tracking.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    bgColor: 'bg-blue-900',
  },
  {
    id: 2,
    name: 'Eazy',
    type: 'Web Development',
    description:
      'A project management solution that streamlines workflows and enhances team collaboration.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    bgColor: 'bg-indigo-900',
  },
  {
    id: 3,
    name: 'Greenpass Inspect',
    type: 'Mobile Application',
    description:
      'An automated vehicle inspection system that ensures compliance with environmental standards.',
    image:
      'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    bgColor: 'bg-green-900',
  },
  {
    id: 4,
    name: 'Smart Salon',
    type: 'Web Application',
    description:
      'Elevate salon management with a digital platform offering appointment scheduling, inventory tracking, client management, and payment processing.',
    image:
      'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    bgColor: 'bg-purple-900',
  },
]
export const ProjectsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState('next')
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  // Auto-advance the carousel
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isAnimating) {
        handleNext()
      }
    }, 5000)
    return () => clearTimeout(timer)
  }, [currentIndex, isAnimating])
  const handleNext = () => {
    if (isAnimating) return
    setDirection('next')
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
      setIsAnimating(false)
    }, 500)
  }
  const handlePrev = () => {
    if (isAnimating) return
    setDirection('prev')
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + projects.length) % projects.length,
      )
      setIsAnimating(false)
    }, 500)
  }
  const handleDotClick = (index) => {
    if (isAnimating || index === currentIndex) return
    setDirection(index > currentIndex ? 'next' : 'prev')
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setIsAnimating(false)
    }, 500)
  }
  // Touch event handlers
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      handleNext()
    }
    if (touchStart - touchEnd < -75) {
      handlePrev()
    }
  }
  return (
    <div
      className="carousel-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={`carousel-track ${isAnimating ? `sliding-${direction}` : ''}`}
      >
        {projects.map((project, index) => {
          const isActive = index === currentIndex
          const isPrev =
            index === currentIndex - 1 ||
            (currentIndex === 0 && index === projects.length - 1)
          const isNext =
            index === currentIndex + 1 ||
            (currentIndex === projects.length - 1 && index === 0)
          return (
            <div
              key={project.id}
              className={`carousel-slide ${isActive ? 'active' : ''} ${isPrev ? 'prev' : ''} ${isNext ? 'next' : ''}`}
              style={{
                backgroundImage: `url(${project.image})`,
              }}
            >
              <div className="slide-overlay"></div>
              <div className="slide-content">
                <h3 className="slide-title">{project.name}</h3>
                <div className="slide-type">
                  <span className="type-badge">{project.type}</span>
                </div>
                <p className="slide-description">{project.description}</p>
                <a href="#" className="slide-button">
                  View Project
                </a>
              </div>
            </div>
          )
        })}
      </div>
      <div className="carousel-controls">
        <button
          className="control-button prev"
          onClick={handlePrev}
          disabled={isAnimating}
          aria-label="Previous project"
        >
          <ArrowLeftIcon size={24} />
        </button>
        <div className="carousel-dots">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
        <button
          className="control-button next"
          onClick={handleNext}
          disabled={isAnimating}
          aria-label="Next project"
        >
          <ArrowRightIcon size={24} />
        </button>
      </div>
    </div>
  )
}
