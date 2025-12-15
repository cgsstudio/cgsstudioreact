import React, { useState, useEffect } from 'react';
import './TestimonialSlider.css';

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      company: "Greenheat Scotland",
      date: "06/03/2025",
      stars: 5,
      verified: true,
      text: "I've worked with ChameleoGFXstudio for some time, their design and web...",
      fullText: "I’ve worked with ChameleoGFXstudio for some time, their design and web development are top-tier. Fast, responsive, and highly professional, they consistently deliver on time without sacrificing quality. Easily the most reliable and supportive team I’ve partnered with.",
      avatar: "G",
      avatarColor: "#34A853", // Green
    },
    {
      id: 2,
      company: "Complete Cons...",
      date: "12/05/2025",
      stars: 5,
      verified: true,
      text: "I've had the pleasure of working with Niraj and the ChameleoGFXstudio team on...",
      fullText: "I’ve had the pleasure of working with Niraj and the ChameleoGFXstudio team on multiple projects. Their clear communication, proactive problem-solving, and dedication truly stand out. They consistently deliver polished, thoughtful work on time, always responsive to feedback and invested in success. A reliable, collaborative partner I highly recommend.",
      avatar: "C",
      avatarColor: "#4285F4", // Blue
    },
    {
      id: 3,
      company: "Hocco Ice Cream",
      date: "08/07/2025",
      stars: 5,
      verified: true,
      text: "Niraj is a reliable, hardworking professional who consistently delivers...",
      fullText: "Niraj is a reliable, hardworking professional who consistently delivers high-quality work on time. He communicates clearly, pays close attention to detail, and ensures every task is completed to the highest standard. I highly recommend him to anyone seeking a dependable and skilled team member",
      avatar: "H",
      avatarColor: "#EA4335", // Red
    },
    {
      id: 4,
      company: "Jagatjit Industries",
      date: "08/07/2025",
      stars: 5,
      verified: true,
      text: "I truly appreciate the ChameleoGFXstudio team's 'can-do' attitude and...",
      fullText: "I truly appreciate the ChameleoGFXstudio team’s “can-do” attitude and strong sense of ownership. They’re highly dependable and consistently deliver high-quality work. Their professionalism, attention to detail, and reliability make them a team you can trust with any project. It’s always a pleasure working with them.",
      avatar: "J",
      avatarColor: "#FBBC04", // Yellow
    },
    {
      id: 5,
      company: "Mr. Sprinkle",
      date: "15/09/2025",
      stars: 5,
      verified: true,
      text: "We’ve had the pleasure of working with the outstanding team behind our Mr. Sprinkle® brand...",
      fullText: "We’ve had the pleasure of working with the outstanding team behind our Mr. Sprinkle® brand. Their efficiency, responsiveness, and problem-solving approach truly impressed us. Special thanks to Dhir for his exceptional leadership and support. Always dependable and proactive, they’re a collaborative partner we highly recommend.",
      avatar: "S",
      avatarColor: "#34A853",
    },
    {
      id: 6,
      company: "Stratica",
      date: "22/10/2025",
      stars: 5,
      verified: true,
      text: "Niraj has been such a great help while we made website and...",
      fullText: "Niraj has been such a great help while we made website and form changes for our moving company. He’s always quick to respond with simple, effective solutions and makes everything easy. I’m grateful I can count on him for every need. Thanks, Niraj!",
      avatar: "S",
      avatarColor: "#4285F4",
    },
    {
      id: 7,
      company: "Cybervantage",
      date: "22/10/2025",
      stars: 5,
      verified: true,
      text: "I’ve worked with Niraj and the ChameleoGFXstudio team on several...",
      fullText: "I’ve worked with Niraj and the ChameleoGFXstudio team on several projects, and they consistently deliver high-quality work. They’re professional, reliable, and detail-oriented, with excellent communication. Highly recommended for anyone seeking top-notch web design and development services.",
      avatar: "C",
      avatarColor: "#FBBC04",
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [expandedCards, setExpandedCards] = useState({});

  // Responsive slides detection
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 992) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1400) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => {
      const maxSlide = testimonials.length - slidesToShow;
      return prev >= maxSlide ? 0 : prev + 1;
    });
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => {
      const maxSlide = testimonials.length - slidesToShow;
      return prev <= 0 ? maxSlide : prev - 1;
    });
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const toggleReadMore = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const renderStars = (count) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className="star">★</span>
    ));
  };

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, slidesToShow]);

  return (
    <div className="testimonial-section-new bg-black pb-5">
      <div className="container">
        {/* Header */}
        <div className="text-center ">
          <div className="aximo-section-title ">
            <h2 className='text-white'>Testimonials</h2>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="slider-container-new">
          <div
            className="slider-wrapper-new"
            style={{
              transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="slide-new">
                <div className="google-review-card">
                  {/* Header: Avatar, Company Name, Google Icon */}
                  <div className="card-header">
                    <div className="company-info">
                      <div
                        className="company-avatar"
                        style={{ backgroundColor: testimonial.avatarColor }}
                      >
                        {testimonial.avatar}
                      </div>
                      <div className="company-details">
                        <div className="company-name-wrapper">
                          <h6 className="company-name">{testimonial.company}</h6>
                          <svg className="google-icon" viewBox="0 0 24 24" width="16" height="16">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC04" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                          </svg>
                        </div>
                        <p className="review-date">{testimonial.date}</p>
                      </div>
                    </div>
                  </div>

                  {/* Stars + Verified Badge */}
                  <div className="rating-section">
                    <div className="stars">
                      {renderStars(testimonial.stars)}
                    </div>
                    {testimonial.verified && (
                      <svg className="verified-badge" viewBox="0 0 24 24" width="16" height="16">
                        <path fill="#4285F4" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    )}
                  </div>

                  {/* Review Text */}
                  <p className="review-text">
                    {expandedCards[testimonial.id] ? testimonial.fullText : testimonial.text}
                  </p>

                  {/* Read More Link */}
                  <button
                    className="read-more-btn"
                    onClick={() => toggleReadMore(testimonial.id)}
                  >
                    {expandedCards[testimonial.id] ? 'Show Less' : 'Read More'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="nav-controls-new">
          <button
            className="nav-btn-new"
            onClick={prevSlide}
            disabled={isTransitioning}
            aria-label="Previous slide"
          >
            ‹
          </button>

          <div className="progress-dots">
            {Array.from({ length: Math.ceil(testimonials.length / slidesToShow) }).map((_, index) => (
              <div
                key={index}
                className={`progress-dot-new ${currentSlide === index ? 'active' : ''}`}
                onClick={() => !isTransitioning && setCurrentSlide(index)}
              />
            ))}
          </div>

          <button
            className="nav-btn-new"
            onClick={nextSlide}
            disabled={isTransitioning}
            aria-label="Next slide"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;