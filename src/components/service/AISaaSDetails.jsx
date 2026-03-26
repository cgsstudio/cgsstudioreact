import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Field from "../common/Field";

import servise_image2 from "../../assets/images/v1/Process_1 5.webp";
import servise_image1 from "../../assets/images/v1/Process_1 6.webp";
import servise_image3 from "../../assets/images/v1/Process_1 4.webp";
import servise_image4 from "../../assets/images/v1/Process_1 7.png";

const services = [
  {
    title: "AI SaaS Development",
    items: [
      { text: "AI Chatbot Development", link: "/services/digital-marketing/ai-chatbot-development" },
      { text: "AI SaaS Product Development", link: "/services/digital-marketing/ai-saas-product-development" },
      { text: "AI-Generated Content", link: "/services/digital-marketing/ai-generated-content" },
      { text: "Digital Marketing", link: "/services/digital-marketing" },
      { text: "Social Media Marketing", link: "/services/digital-marketing/social-media-marketing-agency" },
      { text: "Search Engine Optimization", link: "/services/digital-marketing/search-engine-optimization" },
      { text: "Email Marketing", link: "/services/digital-marketing/email-marketing-company" },
      { text: "Google Ads", link: "/services/digital-marketing/google-ads-management-agency" },
      { text: "Meta Ads", link: "/services/digital-marketing/meta-ads-management-company" },
    ],
  },
];

function AISaaSDetails() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitForm = (formData) => {
    const serviceID = "service_4hzipjm";
    const templateID = "template_vnt9ibw";
    const userID = "9QWvlBpES51DX7O1X";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(() => {
        setIsSubmitted(true);
        reset();
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div className="ai-saas-details-wrapper">
      <div className="service-section bg-white-smoke">

        <div className="container py-5">
          <div className="aximo-service-details-wrap">
            <div className="row">
              <div className="col-lg-12 ">
                <div className="aximo-default-content ">
                  <h1 className="text-lg-center text-sm-left"><span className="custom-h2"><span style={{ color: 'red' }}>AI Data Training & Model Fine-tuning</span> · Ahmedabad, India or <Link to="/contact-us" className="text-decoration-none">Contact Us</Link> for AI SaaS Product Development</span></h1>

                  <p className="text-lg-center text-sm-left pt-sm-2 pt-3 pt-lg-0">
                    <b>The Intelligence Behind Every Great SaaS Product</b><br /><br />
                    Building a great SaaS product today means more than clean code and good design. The companies winning in their markets are the ones whose products genuinely think, products that learn from user behavior, surface the right insights at the right moment, and improve with every interaction. That kind of intelligence doesn't happen automatically. It's engineered, carefully, through rigorous data training and precision model tuning.
                  </p>

                  <p className="text-lg-center text-sm-left">
                    That's the foundation Chameleo GFX Studio builds on. As a specialized AI data training company in Ahmedabad, India, we work alongside product teams to develop the data pipelines and machine learning foundations that make truly intelligent SaaS products possible.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="row ">
            <div className="col-lg-6 align-items-center order-2 order-lg-1 pt-4 pt-lg-0">
              <div className="aximo-default-content">
                <h2>
                  <span className="services-h2 "><span style={{ color: 'red' }}>Where Data Meets Intelligence</span></span>
                </h2>
                <p className="m-0">
                  Most AI products underperform not because of poor architecture, but because of undertrained models. Raw models pulled off the shelf don't understand your industry, your users, or your edge cases. That's where AI model fine-tuning services in Ahmedabad make all the difference. Fine-tuning adapts a base model to your specific domain, dramatically improving accuracy, relevance, and real-world performance.
                </p><br />
                <p className="m-0">At Chameleo GFX Studio, our AI data training services in Ahmedabad cover the complete preparation cycle: data collection, cleaning, labeling, augmentation, and structured training runs, all aligned to the behavior you need your product to exhibit. We treat data as a product asset, not an afterthought.</p>
              </div>
            </div>
            <div className="col-lg-6 align-items-center order-1 order-lg-2 pt-4 pt-lg-0">
              <div >
                <img src={servise_image2} alt="AI SaaS Development" className="services_page_image" style={{ height: '550px', objectFit: 'contain', width: '100%', borderRadius: '8px' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6 align-items-center pt-4 pt-lg-0">
              <div>
                <img src={servise_image3} alt="AI Data Training" className="services_page_image" style={{ height: '550px', objectFit: 'contain', width: '100%', borderRadius: '8px' }} />
              </div>
            </div>
            <div className="col-lg-6 align-items-center pt-4 pt-lg-0">
              <div className="aximo-default-content">
                <h2>
                  <span className="services-h2"><span style={{ color: 'red' }}>Why Training Quality Defines</span> SaaS AI Performance</span>
                </h2>
                <ul className="custom-list mt-1 pl-5 pl-sm-4">
                  <li className="ml-4"><b>Higher accuracy from day one.</b> Well-curated training data means your model performs reliably in production, not just in controlled tests.</li>
                  <li className="ml-4"><b>Faster time to value.</b> Fine-tuned models require fewer corrections and support tickets, reducing the friction between launch and adoption.</li>
                  <li className="ml-4"><b>Scalable intelligence.</b> Models trained on structured, domain-specific data continue to perform as your product scales, without costly retraining cycles.</li>
                  <li className="ml-0"><b>Competitive differentiation.</b> A uniquely trained model becomes a proprietary advantage your competitors can't simply replicate.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6 align-items-center  order-2 order-lg-1 pt-4 pt-lg-0">
              <div className="aximo-default-content">
                <h2>
                  <span className="services-h2 ">A Partner Who Understands Both <span style={{ color: 'red' }}>Data and Product</span></span>
                </h2>
                <p className="m-0">
                  Chameleo GFX Studio brings together data scientists, ML engineers, and SaaS product specialists to deliver machine learning model training in Ahmedabad that is tightly aligned with your product roadmap. We don't hand you a model and walk away; we work iteratively, refining performance based on real usage data and your evolving business needs.
                </p>
                <br />
                <p className="m-0">
                  Our AI data training and model fine-tuning services have helped SaaS companies across verticals — from healthcare and fintech to logistics and edtech, build products their users rely on and trust. As a leading provider of AI data training and model fine-tuning in India, we combine global technical standards with the responsiveness and transparency that growing companies actually need from a development partner.
                </p>
              </div>
            </div>
            <div className="col-lg-6 align-items-center order-1 order-lg-2 pt-4 pt-lg-0">
              <div >
                <img src={servise_image1} alt="AI Development Process" className="services_page_image" style={{ height: '550px', objectFit: 'contain', width: '100%', borderRadius: '8px' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 pt-4 pt-lg-0">
              <div className="d-flex justify-content-center">
                <img src={servise_image4} alt="Why Chameleo GFX Studio" className="services_page_image" style={{ height: '550px', objectFit: 'contain', width: '100%', borderRadius: '8px' }} />
              </div>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <div className="aximo-default-content d-flex flex-column justify-content-center h-100">
                <h2>
                  <span className="services-h2"><span style={{ color: 'red' }}>Build AI That Works</span> in the Real World</span>
                </h2>
                <p className="m-0">
                  A great idea deserves a model that performs. If you're building an AI-powered SaaS product and want the intelligence layer to actually deliver on its promise, Chameleo GFX Studio is ready to make that happen, with data expertise, model precision, and a genuine commitment to your product's success.
                </p>
                <br />
                <div className="mt-3">
                  <Link to="/contact-us" className="aximo-default-btn pill bg-red">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-lg-5 py-3 mt-5" id='contact-form'>
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0 pr-5  mr-5">
              <div className="servisepage-form-section servisepage-form-section-1 pr-5">
                <h2>Build Intelligence That Scales</h2>
              </div>

              <div className="d-flex justify-content-between align-items-left py-3 mt-4" >
                <div className="text-left text-md-center">
                  <h3 className="text-danger fw-bold mb-0 our_efficiently">500+</h3>
                  <small className="text-muted our_efficiently_1">AI Models Trained</small>
                </div>
                <div className="text-left text-md-center">
                  <h3 className="text-danger fw-bold mb-0 our_efficiently">98%</h3>
                  <small className="text-muted our_efficiently_1">Model Accuracy</small>
                </div>
                <div className="text-left text-md-center">
                  <h3 className="text-danger fw-bold mb-0 our_efficiently">24/7</h3>
                  <small className="text-muted our_efficiently_1">AI Support</small>
                </div>
              </div>

            </div>

            <div className="col-md-6">
              <form onSubmit={handleSubmit(submitForm)} className="servise-aximo-form-wrap3 border border-1 rounded p-4  shadow-sm">
                <Field error={errors.name}>
                  <div className="aximo-form-field2 mb-5">
                    <input
                      {...register("name", { required: "Name is required." })}
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                </Field>
                <Field error={errors.email}>
                  <div className="aximo-form-field2 mb-5">
                    <input
                      {...register("email", { required: "Email is required." })}
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                </Field>
                <Field error={errors.phone}>
                  <div className="aximo-form-field2 mb-5">
                    <input
                      {...register("phone")}
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="Your Phone Number"
                    />
                  </div>
                </Field>
                <Field error={errors.message}>
                  <div className="aximo-form-field2  mb-5">
                    <textarea
                      {...register("message", { required: "Message is required." })}
                      name="message"
                      className="form-control"
                      style={{ backgroundColor: "#FFFFF5" }}
                      rows="3"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </Field>
                <button type="submit" className="aximo-default-btn bg-red w-100 fw-bold">
                  <span className="aximo-label-up">SUBMIT</span>
                </button>
                {isSubmitted && (
                  <div className="alert-box mt-3 text-success">Thank you for your message!</div>
                )}
              </form>
            </div>
          </div>
        </div>

        <div className="design-body-wrapper">
          <div className="container py-5">
            <div className="design-main-card">
              <div className="row gy-4">
                <div className="col-lg-5 col-md-5">
                  <div className="design-title-section">
                    <h1 className="design-title-heading">The Role of AI in Today's Digital World.</h1>
                  </div>
                </div>

                <div className="col-lg-7 col-md-7">
                  <div className="design-timeline-wrapper">
                    <div className="design-timeline-vertical-line"></div>

                    <div className="design-timeline-single-item">
                      <div className="design-timeline-circle-dot"></div>
                      <div className="design-info-content-box">
                        <p className="design-info-text-paragraph">For SaaS startups, AI builds smarter products that retain users longer and surface better insights at the right moment.</p>
                      </div>
                    </div>

                    <div className="design-timeline-single-item">
                      <div className="design-timeline-circle-dot"></div>
                      <div className="design-info-content-box">
                        <p className="design-info-text-paragraph">For healthcare and fintech SaaS, trained AI models improve accuracy, compliance, and user outcomes.</p>
                      </div>
                    </div>

                    <div className="design-timeline-single-item">
                      <div className="design-timeline-circle-dot"></div>
                      <div className="design-info-content-box">
                        <p className="design-info-text-paragraph">For healthcare and fintech SaaS, trained AI models improve accuracy, compliance, and user outcomes.</p>
                      </div>
                    </div>

                    <div className="design-timeline-single-item">
                      <div className="design-timeline-circle-dot"></div>
                      <div className="design-info-content-box">
                        <p className="design-info-text-paragraph">For logistics and edtech platforms, AI drives automation, predictive analytics, and personalized user experiences.</p>
                      </div>
                    </div>

                    <div className="design-timeline-single-item">
                      <div className="design-timeline-circle-dot"></div>
                      <div className="design-info-content-box">
                        <p className="design-info-text-paragraph">A properly trained AI foundation is the competitive edge that separates market leaders from market followers.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid bg-black mt-5 ">
          <div className="row bg-black text-white p-lg-4 p-0  rounded">
            <div className="col-lg-12 align-items-center">
              <div className="aximo-default-content">
                <h2 className="text-center">
                  <span className="services-h2 text-white-smoke text-center">Build AI That Works in the Real World</span>
                </h2>

                <p className="text-center text-white-smoke">
                  A great idea deserves a model that performs. If you're building an AI-powered SaaS product and want the intelligence layer to actually deliver on its promise, Chameleo GFX Studio is ready to make that happen — with data expertise, model precision, and a genuine commitment to your product's success.
                </p>
                <p className="text-center text-white-smoke">
                  Ready to train the AI behind your next great product? Let's talk — reach out to Chameleo GFX Studio today.
                </p>

                <p className="text-center text-white-smoke">
                  <b>Chameleo GFX Studio · AI Data Training & Model Fine-Tuning · Ahmedabad, India</b>
                </p>

                <div className="text-center">
                  <Link to="/contact-us" className="aximo-default-btn pill bg-red">
                    Start Your AI Project
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="container-fluid py-5 bg-white">
        <div className="container">
        {services.map((service, index) => (
          <div key={index} className="text-dark">
            <div className="aximo-section-title main center">
              <h2>
                <span className="services text-dark">
                  {service.title}
                </span>
              </h2>
            </div>

            <div className="row">
              <div className="col-12 d-flex flex-wrap justify-content-center">
                {service.items.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    <ul className="badge bg-black border border-dark custom-hover p-2 m-2">
                      <li>
                        <a
                          href={item.link}
                          rel="noopener noreferrer"
                          className="link-tegs text-whitesmoke  text-decoration-none"
                        >
                          {item.text}
                        </a>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div >
  );
}

export default AISaaSDetails;
