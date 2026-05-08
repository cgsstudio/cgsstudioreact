import React from "react";
import "./Testimonials.css";

const testimonialsData = [
    {
        id: 1,
        author: "Rajesh Joshi",
        role: "Owner, Joshi Realtors – Ahmedabad",
        avatar: "RJ",
        text: "Chameleo Tech built our website and within 3 months our inquiries tripled. The SEO team is exceptional – we rank #1 in Ahmedabad for our category now.",
        rating: "★★★★★"
    },
    {
        id: 2,
        author: "Priya Shah",
        role: "Founder, StyleKart – E-commerce",
        avatar: "PS",
        text: "The Meta Ads campaign brought us 40+ leads in the first week alone. The ROI has been unreal. Chameleo genuinely cares about your success.",
        rating: "★★★★★"
    },
    {
        id: 3,
        author: "Arjun Mehta",
        role: "CEO, TechFlow Solutions – Surat",
        avatar: "AM",
        text: "Their AI chatbot handles 70% of our customer queries automatically. We've reduced our support team workload and increased conversions simultaneously.",
        rating: "★★★★★"
    },
    {
        id: 4,
        author: "Nisha Kapoor",
        role: "Director, Arogya Clinic – Baroda",
        avatar: "NK",
        text: "Professional, responsive, and they actually deliver what they promise. Rare to find an agency that combines design quality with real marketing results.",
        rating: "★★★★★"
    },
    {
        id: 5,
        author: "Varun Singh",
        role: "Founder, Urban Threads – Mumbai",
        avatar: "VS",
        text: "Our Shopify store was underperforming before Chameleo. They redesigned it, ran Google Shopping Ads, and we hit 3x sales in under 60 days.",
        rating: "★★★★★"
    },
    {
        id: 6,
        author: "Manish Rao",
        role: "MD, Rao Manufacturers – Gujarat",
        avatar: "MR",
        text: "Finally an agency that speaks our language and understands local business needs. Everything is delivered on time, on budget, and on point.",
        rating: "★★★★★"
    }
];

function Testimonial() {
    return (
        <section className="testimonials-section">
            <div className="container">
                {/* Section Header */}
                <div className="testimonials-header">
                    <span className="testimonials-label">Client Stories</span>
                    <h2 className="testimonials-title">
                        Real Businesses. Real <span className="accent">Results.</span>
                    </h2>
                    <p className="testimonials-desc">
                        Don't take our word for it. Here's what business owners across India are saying.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="testimonials-grid">
                    {testimonialsData.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-card-premium">
                            <div className="stars-rating">{testimonial.rating}</div>
                            <p className="testimonial-quote">"{testimonial.text}"</p>
                            
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
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
