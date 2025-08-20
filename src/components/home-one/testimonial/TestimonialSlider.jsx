import React, { useState, useEffect } from 'react';

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      rating: 5.0,
      stars: 5,
      text: "Excellent from start to finish! Niraj is very knowledgeable. He was able to figure out exactly what I and my business needed from start to finish. Niraj built my webpage from scratch with all the plug-ins, add-ons etc. He then helped me maintain and promote my website. He's a one stop shop for all your digital needs. Recommend him highly!!",
      name: "Philip Smith",
      role: "Founder@XYZ",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face&auto=format"
    },
    {
      id: 2,
      rating: 4.7,
      stars: 4.5,
      text: "Mentioning consultation discover apartments. ndulgence off under folly death is wrote causes maintaing way spite. Plan upon yet way get coldest spot its week. Almost do am or limits hearts resolve parties the regular intension.",
      name: "Alex Hales",
      role: "Envato Client",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face&auto=format"
    },
    {
      id: 3,
      rating: 4.8,
      stars: 5,
      text: "Excellence consultation discover apartments. ndulgence off under folly death is wrote causes maintaing way spite. Plan upon yet way get coldest spot its week. Almost do am or limits hearts resolve parties the regular intension.",
      name: "Sarah Johnson",
      role: "Envato Client",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face&auto=format"
    },
    {
      id: 4,
      rating: 4.9,
      stars: 5,
      text: "Amazing consultation discover apartments. ndulgence off under folly death is wrote causes maintaing way spite. Plan upon yet way get coldest spot its week. Almost do am or limits hearts resolve parties the regular intension.",
      name: "John Smith",
      role: "Envato Client",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face&auto=format"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(2);

  // Responsive slides detection
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1200) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(2);
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

  const goToSlide = (index) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const renderStars = (rating, starCount) => {
    const stars = [];
    const fullStars = Math.floor(starCount);
    const hasHalfStar = starCount % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <span key={i} className="text-warning">★</span>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <span key={i} className="text-warning">☆</span>
        );
      } else {
        stars.push(
          <span key={i} className="text-muted">☆</span>
        );
      }
    }
    return stars;
  };

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide, slidesToShow]);

  return (
    <div className="testimonial-section py-5" style={{ backgroundColor: '#1a1a1a',}}>
      <style jsx>{`
        .testimonial-card {
          background: linear-gradient(135deg, #2d2d2d 0%, #1e1e1e 100%);
          border-radius: 20px;
          border: 1px solid #333;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          height: 100%;
        }
        
        .testimonial-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px rgba(253, 253, 225, 0.1);
          border-color: #fdfde1;
        }
        
        .slider-container {
          overflow: hidden;
          position: relative;
        }
        
        .slider-wrapper {
          display: flex;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }
        
        .slide {
          flex-shrink: 0;
          padding: 0 15px;
        }
        
        @media (max-width: 767.98px) {
          .slide {
            width: 100%;
          }
        }
        
        @media (min-width: 768px) and (max-width: 1199.98px) {
          .slide {
            width: 100%;
          }
        }
        
        @media (min-width: 1200px) {
          .slide {
            width: 50%;
          }
        }
        
        .rating-badge {
          background: #fdfde1;
          border-radius: 15px;
          padding: 10px 18px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          color: #333;
          box-shadow: 0 4px 15px rgba(253, 253, 225, 0.3);
        }
        
        .nav-btn {
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background: #333;
          border: 2px solid transparent;
          color: #fdfde1;
          font-size: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }
        
        .nav-btn:hover {
          background: #fdfde1;
          color: #333;
          border-color: #fdfde1;
          transform: scale(1.1);
        }
        
        .nav-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: scale(1);
        }
        
        .progress-container {
          display: flex;
          gap: 8px;
          align-items: center;
        }
        
        .progress-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #333;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .progress-dot.active {
          background: #fdfde1;
          transform: scale(1.2);
          box-shadow: 0 0 10px rgba(253, 253, 225, 0.5);
        }
        
        .progress-bar {
          height: 4px;
          background: #333;
          border-radius: 2px;
          overflow: hidden;
          flex-grow: 1;
          margin: 0 20px;
        }
        
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #fdfde1 0%, #ed1d24 100%);
          border-radius: 2px;
          transition: width 0.3s ease;
          box-shadow: 0 0 10px rgba(253, 253, 225, 0.3);
        }
        
        .brand-logo {
          font-size: clamp(40px, 8vw, 60px);
          font-weight: 800;
          background: linear-gradient(45deg, #fdfde1 0%, #4ade80 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
        }
        
        .overall-rating {
          background: rgba(253, 253, 225, 0.1);
          border-radius: 25px;
          padding: 15px 25px;
          border: 2px solid #fdfde1;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        }
        
        .testimonials-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 800;
          background: linear-gradient(45deg, #ffffff 0%, #fdfde1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        
        @media (max-width: 767.98px) {
          .overall-rating {
            margin-top: 20px;
          }
          
          .header-content {
            flex-direction: column;
            align-items: flex-start !important;
          }
          
          .testimonial-card {
            margin-bottom: 20px;
          }
          
          .nav-btn {
            width: 45px;
            height: 45px;
            font-size: 18px;
          }
        }
        
        @media (max-width: 575.98px) {
          .progress-container {
            flex-direction: column;
            gap: 15px;
          }
          
          .progress-bar {
            margin: 0;
            width: 100%;
          }
          
          .nav-controls {
            gap: 20px;
          }
        }
        
        .fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      
      <div className="container px-4">
        {/* Header */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center header-content">
              <div className="aximo-section-title light">
                <h2>Testimonials</h2>
              </div>
              <div className="overall-rating">
                <div className="d-flex align-items-center">
                  <span className="text-white h2 fw-bold mb-0 me-3">4.9</span>
                  <div>
                    <div className="mb-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-warning me-1">★</span>
                      ))}
                    </div>
                    <small className="text-light opacity-75">145 (Review)</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="slider-container mb-5">
          <div 
            className="slider-wrapper"
            style={{ 
              transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="slide">
                <div className={`testimonial-card p-4 fade-in`}>
                  {/* Rating */}
                  <div className="mb-4">
                    <div className="rating-badge">
                      <span className="fw-bold fs-5">{testimonial.rating}</span>
                      <div>
                        {renderStars(testimonial.rating, testimonial.stars)}
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <p className="text-light mb-4 lh-lg fs-6">
                    {testimonial.text}
                  </p>

                  {/* Author */}
                  <div className="d-flex align-items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="rounded-circle me-3"
                      style={{ 
                        width: '55px', 
                        height: '55px', 
                        objectFit: 'cover',
                        border: '3px solid #fdfde1',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                      }}
                    />
                    <div>
                      <h6 className="text-white mb-1 fw-bold">{testimonial.name}</h6>
                      <small className="text-light opacity-75">{testimonial.role}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="row">
          <div className="col-12">
            <div className="d-flex align-items-center justify-content-between nav-controls">
              {/* Navigation Buttons */}
              <button 
                className="nav-btn" 
                onClick={prevSlide}
                disabled={isTransitioning}
              >
                ‹
              </button>

              {/* Progress Section */}
              <div className="progress-container flex-grow-1">
                <div className="d-flex justify-content-center gap-2 d-md-none">
                  {Array.from({ length: Math.ceil(testimonials.length / slidesToShow) }).map((_, index) => (
                    <div
                      key={index}
                      className={`progress-dot ${currentSlide === index ? 'active' : ''}`}
                      onClick={() => goToSlide(index)}
                    ></div>
                  ))}
                </div>
                
                <div className="progress-bar d-none d-md-block">
                  <div 
                    className="progress-fill" 
                    style={{ 
                      width: `${((currentSlide + 1) / Math.ceil(testimonials.length / slidesToShow)) * 100}%`
                    }}
                  ></div>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3">
                <button 
                  className="nav-btn" 
                  onClick={nextSlide}
                  disabled={isTransitioning}
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;