import React, { useState } from "react";
import "./Testimonials.css";

const testimonialsData = [
    {
        id: 1,
        author: "Hocco Ice Cream",
        role: "Owner, Premium Dessert Brand",
        avatar: <img src="./src/assets/images/TestimonialSlider/HOCCO.webp" alt="Hocco Ice Cream" className="author-avatar-image" />,
        text: "Outstanding Brand Design & Quick Turnaround. Chameleo GFX Studio delivered smart, creative brand design with a strong understanding of our brand vision. The team was highly responsive, proactive, and efficient throughout the project. Revisions were handled quickly without compromising on quality. We truly appreciated their professionalism and commitment to timely delivery.",
        rating: "★★★★★",
        fullText: "Chameleo GFX Studio delivered smart, creative brand design with a strong understanding of our premium dessert brand vision. The new branding captures the essence of Hocco Ice Cream's heritage while positioning it for modern market expansion. From logo redesign to complete brand guidelines, every detail was executed flawlessly, resulting in increased brand recognition and customer engagement. The team was highly responsive, proactive, and efficient throughout the project. Revisions were handled quickly without compromising on quality. We truly appreciated their professionalism and commitment to timely delivery."
    },
    {
        id: 2,
        author: "Jagatjit Industries",
        role: "Legacy Liquor Brand Transformation",
        avatar: <img src="./src/assets/images/TestimonialSlider/jagatjit_logo.png" alt="Jagatjit Industries" className="author-avatar-image" />,
        text: "Exceptional Website for Jagatjit Industries. The design is visually captivating with elegant aesthetics and a seamless user experience, while technical execution is flawless—fast, mobile-responsive, and fully industry compliant. Since launch, we've seen remarkable increases in engagement and business inquiries from distributors and partners. Highly recommend Chameleo GFX Studio for premium website development that delivers exceptional results!",
        rating: "★★★★★"
    },
    {
        id: 3,
        author: "Cybervantage",
        role: "AI Security Leader",
        avatar: <img src="./src/assets/images/TestimonialSlider/Cybervantage.webp" alt="Cybervantage" className="author-avatar-image" />,
        text: "Professional and fast delivery. They built our cybersecurity website in record time without compromising quality. The site looks incredible and performs even better. The team understood our requirements perfectly and delivered exactly what we envisioned. Communication was excellent throughout the project, and they were always available to answer questions. The attention to detail is remarkable, from smooth animations to security features. Great team to work with, and we'll definitely use them again!",
        rating: "★★★★★"
    },
    {
        id: 4,
        author: "Mr. Sprinkle",
        role: "Premium Dessert Brand",
        avatar: <img src="./src/assets/images/TestimonialSlider/Mr. Sprinkle.webp" alt="Mr. Sprinkle" className="author-avatar-image" />,
        text: "From concept to reality, exceptional work! We came to Chameleo GFX Studio with just an idea for Mr. Sprinkle Spices, and they brought it to life beautifully. The logo design process was collaborative; they presented multiple concepts that reflected our spice heritage and refined it until it was perfect. The website they built is fast and professional and includes an e-commerce system that makes online ordering seamless for our customers. Their SEO strategy is working wonders; we're getting daily orders from people finding us on Google. Our brand visibility has increased dramatically in the competitive spices market. Best investment we made for Mr. Sprinkle!",
        rating: "★★★★★"
    },
    {
        id: 5,
        author: "Island Space",
        role: "Innovation Partner",
        avatar: <img src="src/assets/images/TestimonialSlider/IslandSPACE.webp" alt="Island Space" className="author-avatar-image" />,
        text: "Outstanding Design Partner for Island Space! Chameleo GFX Studio is fantastic to work with! They deliver graphic design services that exceed expectations every time. Their creative team understands our space industry needs and delivers cutting-edge visuals that capture the essence of innovation. The attention to detail and commitment to deadlines is remarkable. We've seen significant improvement in our brand recognition and customer engagement since partnering with them. Highly recommended for any business looking for exceptional design services!",
        rating: "★★★★★"
    },
    {
        id: 6,
        author: "Addy Organics",
        role: "Health & Wellness Leader",
        avatar: <img src="src/assets/images/TestimonialSlider/Addy Organics.webp" alt="Addy Organics" className="author-avatar-image" />,
        text: "Exceptional Amazon Banners! Chameleo GFX Studio created extraordinary Amazon banners for Addy Organic that completely elevated our cosmetic brand's presence. The designs are stunning, professionally crafted, and perfectly showcase our organic beauty products with vibrant visuals. Our conversion rates and sales have increased significantly since implementation. Highly recommend for e-commerce design!",
        rating: "★★★★★"
    }
];

function Testimonial() {
    const [expandedId, setExpandedId] = useState(null);

    const toggleExpanded = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    // Check if text needs truncation (more than 5 lines approximately)
    const needsTruncation = (text) => {
        // Set threshold to 150 characters to catch all testimonials that need truncation
        return text.length > 150;
    };

    return (
        <section className="testimonials-section">
            <div className="container">
                {/* Section Header */}
                <div className="testimonials-header">
                    <span className="testimonials-label">Client Stories</span>
                    <h2 className="testimonials-title homepage-h2">
                        Real Businesses. Real <span className="accent">Results.</span>
                    </h2>
                    <p className="testimonials-desc">
                        Don't take our word for it. Here's what business owners across India are saying.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="testimonials-grid">
                    {testimonialsData.map((testimonial) => {
                        const shouldTruncate = needsTruncation(testimonial.text);
                        const isExpanded = expandedId === testimonial.id;

                        // Debug: log which testimonials need truncation
                        console.log(`Testimonial ${testimonial.id}: ${testimonial.text.length} chars, needs truncation: ${shouldTruncate}`);

                        return (
                            <div key={testimonial.id} className="testimonial-card-premium">
                                <div className="stars-rating">{testimonial.rating}</div>

                                <div className="testimonial-content-wrapper">
                                    <p className={`testimonial-quote ${shouldTruncate && !isExpanded ? 'truncated' : ''}`}>
                                        "{isExpanded && testimonial.fullText ? testimonial.fullText : testimonial.text}"
                                    </p>

                                    {shouldTruncate && (
                                        <button
                                            className="read-more-toggle-btn"
                                            onClick={() => toggleExpanded(testimonial.id)}
                                        >
                                            {isExpanded ? 'Read Less' : 'Read More'}
                                        </button>
                                    )}
                                </div>

                                <div className="testimonial-author-box">
                                    <div className="author-avatar-circle">
                                        {testimonial.avatar}
                                    </div>
                                    <div className="author-info-text">
                                        <span className="author-name-text">{testimonial.author}</span>
                                        <span className="author-role-text">{testimonial.role}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
