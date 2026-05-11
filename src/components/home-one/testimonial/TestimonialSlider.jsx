import React, { useState, useEffect, useRef } from 'react';
import './TestimonialSlider.css';
import HoccoLogo from "../../../assets/images/TestimonialSlider/HOCCO.webp";
import JagatjitLogo from "../../../assets/images/TestimonialSlider/Jagatjit.webp";
import CybervantageLogo from "../../../assets/images/TestimonialSlider/Cybervantage.webp";
import IslandSpaceLogo from "../../../assets/images/TestimonialSlider/IslandSPACE.webp";
import Sprinkle from "../../../assets/images/TestimonialSlider/Mr. Sprinkle.webp";
import Addy_Organics from "../../../assets/images/TestimonialSlider/Addy Organics.webp";

const ReviewText = ({ text, id, expandedCards, toggleReadMore }) => {
  const textRef = useRef(null);
  const [showButton, setShowButton] = useState(false);
  const isExpanded = expandedCards[id];

  useEffect(() => {
    if (textRef.current) {
      if (textRef.current.scrollHeight > textRef.current.clientHeight) {
        setShowButton(true);
      }
    }
  }, [text]);

  return (
    <>
      <p 
        ref={textRef}
        className={`review-text text-whitesmoke ${!isExpanded ? 'line-clamp-5' : ''}`}
      >
        {text}
      </p>
      {showButton && (
        <button
          className="read-more-btn"
          onClick={() => toggleReadMore(id)}
        >
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>
      )}
    </>
  );
};

const TestimonialSlider = () => {
  const testimonials = [


    {
      id: 1,
      company: "Hocco Ice Cream",
      date: "08/07/2025",
      stars: 5,
      verified: true,
      title: "Outstanding Brand Design & Quick Turnaround",
      text: "Chameleo GFX Studio delivered smart, creative brand design with a strong unders...",
      fullText: "Chameleo GFX Studio delivered smart, creative brand design with a strong understanding of our brand vision. The team was highly responsive, proactive, and efficient throughout the project. Revisions were handled quickly without compromising on quality. We truly appreciated their professionalism and commitment to timely delivery.",
      avatar: "H",
      avatarColor: "#EA4335", // Red
      logo: HoccoLogo,
    },
    {
      id: 2,
      company: "Jagatjit Industries",
      date: "08/07/2025",
      stars: 5,
      verified: true,
      title: "Exceptional Website for Jagatjit Industries",
      text: "Chameleo GFX Studio created a stunning, modern, and highly engaging...",
      fullText: "Chameleo GFX Studio created a stunning, modern, and highly engaging website for our liquor brand that perfectly captures the sophistication of Jagatjit Industries. The design is visually captivating with elegant aesthetics and a seamless user experience, while technical execution is flawless—fast, mobile-responsive, and fully industry-compliant. Since launch, we've seen remarkable increases in engagement and business inquiries from distributors and partners. Highly recommend Chameleo GFX Studio for premium website development that delivers exceptional results!",
      avatar: "J",
      avatarColor: "#FBBC04", // Yellow
      logo: JagatjitLogo,
    },
    {
      id: 3,
      company: "Mr. Sprinkle",
      date: "15/09/2025",
      stars: 5,
      verified: true,
      title: "From concept to reality, exceptional work!",
      text: "We came to Chameleo GFX Studio with just an idea for Mr. Spinkle Spices, and they...",
      fullText: "We came to Chameleo GFX Studio with just an idea for Mr. Spinkle Spices, and they brought it to life beautifully. The logo design process was collaborative; they presented multiple concepts that reflected our spice heritage and refined it until it was perfect. The website they built is fast and professional and includes an e-commerce system that makes online ordering seamless for our customers. Their SEO strategy is working wonders; we're getting daily orders from people finding us on Google. Our brand visibility has increased dramatically in the competitive spices market. Best investment we made for Mr. Spinkle!",
      avatar: "S",
      avatarColor: "#34A853",
      logo: Sprinkle,
    },
    {
      id: 4,
      company: "Cybervantage",
      date: "22/10/2025",
      stars: 5,
      verified: true,
      title: "Professional and fast delivery",
      text: "They built our cybersecurity website in record time without compromising quality...",
      fullText: "They built our cybersecurity website in record time without compromising quality. The site looks incredible and performs even better. The team understood our requirements perfectly and delivered exactly what we envisioned. Communication was excellent throughout the project, and they were always available to answer questions. The attention to detail is remarkable, from the smooth animations to the security features. Great team to work with, and we'll definitely use them again!",
      avatar: "C",
      avatarColor: "#FBBC04",
      logo: CybervantageLogo,
    },
    {
      id: 5,
      company: "Addy Organics",
      date: "22/10/2025",
      stars: 5,
      verified: true,
      title: "Exceptional Amazon Banners!",
      text: "Chameleo GFX Studio created extraordinary Amazon banners for Addy Organic...",
      fullText: "Chameleo GFX Studio created extraordinary Amazon banners for Addy Organic that completely elevated our cosmetic brand's presence. The designs are stunning, professionally crafted, and perfectly showcase our organic beauty products with vibrant visuals. Our conversion rates and sales have increased significantly since implementation. Highly recommend for e-commerce design!",
      avatar: "A",
      avatarColor: "#34A853",
      logo: Addy_Organics,
    },
    {
      id: 6,
      company: "Island Space",
      date: "22/10/2025",
      stars: 5,
      verified: true,
      title: "Outstanding Design Partner for Island Space!",
      text: "Chameleo GFX Studio is fantastic to work with! They deliver graphic...",
      fullText: "Chameleo GFX Studio is fantastic to work with! They deliver graphic designs with incredible speed without compromising quality. Their dedication is unmatched. They work beyond scheduled hours whenever we need urgent turnarounds and are always receptive to creative feedback. The consistency and professionalism they bring have made them our trusted partner for nearly all design projects. Their client-first approach and reliability make them highly recommended for any design needs!",
      avatar: "I",
      avatarColor: "#4285F4",
      logo: IslandSpaceLogo,
    },
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
            <h2 className='text-whitesmoke homepage-h2'>Testimonials</h2>
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
                      {testimonial.logo ? (
                        <img
                          src={testimonial.logo}
                          alt={testimonial.company}
                          className="TestimonialSliderlogo"
                          style={{ width: "38px", height: "38px", objectFit: "contain", borderRadius: "50%" }}
                        />
                      ) : (
                        <div
                          className="company-avatar"
                          style={{ backgroundColor: testimonial.avatarColor }}
                        >
                          {testimonial.avatar}
                        </div>
                      )}
                      <div className="company-details">
                        <div className="company-name-wrapper">
                          <h6 className="company-name text-whitesmoke">{testimonial.company}</h6>
                          {/* <svg className="google-icon" viewBox="0 0 24 24" width="16" height="16">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC04" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                          </svg> */}
                        </div>
                        {/* <p className="review-date">{testimonial.date}</p> */}
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

                  {/* Review Title */}
                  <p className="review-title text-whitesmoke mb-2 ">{testimonial.title}</p>

                  {/* Review Text */}
                  <ReviewText 
                    text={testimonial.fullText} 
                    id={testimonial.id} 
                    expandedCards={expandedCards} 
                    toggleReadMore={toggleReadMore} 
                  />
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