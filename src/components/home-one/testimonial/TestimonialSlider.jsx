import React, { useState, useEffect } from 'react';

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,

      stars: 5,
      text: "Working with the CGS Team was a fantastic experience. Truly one of the best graphic designers I have worked with—able to quickly transform a complex set of numbers and information into visually appealing yet highly professional graphics for my company. Highly recommended! ",
      name: "- Hocco Icecreams",

    },
    {
      id: 2,

      stars: 5,
      text: "CGS Team brings real value through thier ability to listen attentively, strong work ethic, and high-level web design skills. I will definitely hire them again whenever the need arises. I had asked to enhance the look and feel of our website, and they completed the work in just two working days—super efficient and dependable. A solid and trustworthy business connection.",
      name: "- James Zoomeren",

    },
    {
      id: 3,

      stars: 5,
      text: "I highly recommend this company, they are reliable, meet deadlines, and truly take the time to understand your needs. I’ve been working with them on and off for two years, and any issues have always been resolved quickly. They’re always available, responsive, and consistently prioritize the client’s best interests. Their website and graphic design services are top-notch, and I wouldn’t hesitate to recommend them.",
      name: "- Jagatjit Industries",

    },
    {
      id: 4,

      stars: 5,
      text: "I had an excellent experience, they brought my website vision to life effortlessly and worked with the Figma designs flawlessly. Communication was clear throughout, and they delivered high-quality work right on time. I highly recommend their services.! ",
      name: "- Jamie Moriarty",

    },
    {
      id: 5,

      stars: 5,
      text: "The CGS team works quickly and delivers amazing results. I’m very happy to partner with them for my network of websites. ",
      name: "- Aruna Viswanathan",

    },
    {
      id: 6,

      stars: 5,
      text: "The CGS team works quickly and delivers amazing results. I’m very happy to partner with them for my network of websites.",
      name: "- BidX",

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
    <div className="testimonial-section py-lg-5 py-md-2" style={{ backgroundColor: '#000000ff', }}>
      <style jsx>{`
        .testimonial-card {
          background: linear-gradient(135deg, #2d2d2d 0%, #1e1e1e 100%);
          border-radius: 20px;
          border: 1px solid #333;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          height: 100%;
        }
        
        .testimonial-card:hover {
        
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
          .testimonial-text {
  font-size: 1rem !important;   /* default = mobile */
  line-height: 2;
}

@media (MAX-width: 768px) {
  .testimonial-text {
    font-size: 1.5rem !important;   /* desktop (lg) */
      line-height: 1.3;
  }
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
          .home-Testimonials{
          padding:20px 0;
          }
      `}</style>

      <div className="container px-lg-4 px-sm-2 pb-5">
        {/* Header */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="text-center header-content">
              <div className="aximo-section-title light home-Testimonials">
                <h2>Testimonials</h2>
              </div>
              {/* <div className="overall-rating">
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
              </div> */}
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
                      {/* <span className="fw-bold fs-5">{testimonial.rating}</span> */}
                      <div>
                        {renderStars(testimonial.rating, testimonial.stars)}
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <p className="text-light mb-4 testimonial-text fs-6">
                    {testimonial.text}
                  </p>

                  {/* Author */}
                  <div className="d-flex align-items-center">
                    {/* <img 
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
                    /> */}
                    <div>
                      <h6 className="text-white mb-1 fw-bold">{testimonial.name}</h6>
                      {/* <small className="text-light opacity-75">{testimonial.role}</small> */}
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