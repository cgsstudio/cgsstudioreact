import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Field from "../common/Field";
import ServiceAccordion from "../../components/common/ServiceAccordion";
import { aiDevelopmentServices as services } from "../../data/serviceData";
import servise_image1 from "../../assets/images/v1/Process_1 6.webp";
import servise_image2 from "../../assets/images/v1/Process_1 5.webp";
import servise_image3 from "../../assets/images/v1/Process_1 4.webp";
import servise_image4 from "../../assets/images/v1/Process_1 7.png";

const faqData = [
  {
    question: "What systems can be integrated with AI?",
    answer: "We can integrate AI with almost any modern platform including ERPs (SAP, Oracle), CRMs (Salesforce, HubSpot), E-commerce platforms (Shopify, WooCommerce), and custom-built SaaS applications via secure APIs.",
  },
  {
    question: "How long does a typical AI integration project take?",
    answer: "A typical integration project can range from 4 to 12 weeks depending on the complexity of the systems involved and the specific AI models being deployed.",
  },
  {
    question: "Will AI integration disrupt my existing operations?",
    answer: "No. Our approach focuses on seamless integration, often using staging environments and phased rollouts to ensure your daily operations continue without interruption while the new AI layer is implemented.",
  },
  {
    question: "How do you ensure data security during integration?",
    answer: "Security is our top priority. We use industry-standard encryption, secure API protocols, and private VPC deployments to ensure your business data remains protected throughout the integration process.",
  },
  {
    question: "Do you provide ongoing support after integration?",
    answer: "Yes. We offer continuous monitoring, model retraining, and technical support to ensure your AI systems remain accurate and high-performing as your business and data evolve.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

function AIIntegrationServicesDetails() {
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
    <div className="section pb-0 bg-white">
      <Helmet>
        <title>AI Integration Services Company in Ahmedabad | Chameleo GFX Studio</title>
        <meta
          name="description"
          content="Leading AI Integration Company in Ahmedabad, India. We help businesses connect existing platforms with intelligent systems to automate, analyze, and adapt."
        />
        <meta
          name="keywords"
          content="AI Integration Services, AI Implementation, AI SaaS Integration, AI Automation India, Ahmedabad AI Agency"
        />
        <link
          rel="canonical"
          href="https://chameleogfxstudio.com/services/ai-development/ai-integration-services"
        />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="container py-4 py-md-5">
        <div className="aximo-service-details-wrap">
          <div className="row ">
            <div className="col-lg-12">
              <div className="aximo-default-content">
                <h1 className="text-lg-center text-sm-left"><span className="custom-h2"><span style={{ color: 'red' }}>AI Integration Services</span>: Powering Smarter SaaS for Modern Businesses</span></h1>

                <h3 className="text-lg-center text-sm-left pt-2" style={{ fontSize: '1.5rem', fontWeight: '500' }}>AI Integration Company in Ahmedabad, India · Trusted by Startups & Enterprises</h3>

                <p className="text-lg-center text-sm-left pt-sm-2 pt-3 pt-lg-0 mt-4">
                  <b>The Integration Gap Most Businesses Can't Afford to Ignore</b>
                </p>

                <p className="text-lg-center text-sm-left">
                  Most businesses today don't lack data or ambition; they lack the intelligent infrastructure to turn both into outcomes. Disconnected tools, manual workflows, and reactive decision-making slow companies down at the exact moment they need to accelerate. AI integration isn't a future consideration anymore. It's the operational advantage that separates growing businesses from stagnant ones.
                </p>

                <p className="text-lg-center text-sm-left">
                  Chameleo GFX Studio was built to close that gap. As a specialized AI integration company in Ahmedabad, we help businesses connect their existing platforms with intelligent systems that automate, analyze, and adapt, so your team can spend less time managing tools and more time driving growth.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4 py-md-5">
        <div className="aximo-service-details-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1 pt-4 pt-lg-0">
              <div className="aximo-default-content">

                <h2><span className="services-h2">What <span style={{ color: 'red' }}>AI SaaS Product Development & Integration</span> Actually Involves</span></h2>
                <p>
                  Building an AI-powered SaaS product is only part of the equation. The real value comes from seamless integration, connecting your AI layer to the workflows, data sources, and platforms your business already depends on.
                </p>
                <p>
                  Our AI & Automation Integration services in Ahmedabad cover everything from API connectivity and machine learning model deployment to intelligent process automation and real-time data pipelines.
                </p>
                <p>
                  Whether you need to embed a recommendation engine into your existing platform, automate customer support with conversational AI, or build predictive analytics directly into your SaaS product, our AI implementation services in Ahmedabad are designed to be practical, scalable, and built around how your business actually works.
                </p>
              </div>
            </div>
            <div className="col-lg-6 align-items-center order-1 order-lg-2 pt-4 pt-lg-0">
              <div >
                <img src={servise_image2} alt="AI Integration Services" className="services_page_image" style={{ width: "600px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4 py-md-5">
        <div className="aximo-service-details-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6 align-items-center">
              <div>
                <img src={servise_image4} alt="Why Businesses Invest in AI Integration" className="services_page_image" style={{ width: "600px" }} />
              </div>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <div className="aximo-default-content">
                <h2><span className="services-h2">Why Businesses <span style={{ color: 'red' }}>Invest</span> in AI Integration</span></h2>
                <ul className="custom-list mt-1 ml-5 pl-5">
                  <li className="ml-4 mt-0"><b>Smarter automation:</b> Repetitive tasks get handled intelligently, reducing errors and freeing your people for work that actually requires human judgment.</li>
                  <li className="ml-4 mt-0"><b>Real-time intelligence:</b> Integrated AI gives your teams live insights instead of lagging reports, turning data into decisions faster than your competitors.</li>
                  <li className="ml-4 mt-0"><b>Seamless scalability:</b> AI-integrated SaaS products grow with your business, handling higher volumes, more complex workflows, and new use cases without requiring system overhauls.</li>
                  <li className="ml-4 mt-0"><b>Lower operational cost:</b> Automation reduces the manual overhead that drains time and budget, delivering measurable ROI as the system matures.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4 py-md-5" id="contact-form">
        <div className="row align-items-center" >
          <div className="col-md-6 mb-4 mb-md-0 pr-5  mr-5">
            <div className="servisepage-form-section servisepage-form-section-1 pr-5">
              <h2>Powering Smarter SaaS</h2>
            </div>

            <div className="d-flex justify-content-between align-items-left py-3 mt-4">
              <div className="https://prnt.sc/lIfcJEfFEPPm">
                <h3 className="text-danger fw-bold mb-0 our_efficiently">85%</h3>
                <small className="text-muted our_efficiently_1">Operational Efficiency</small>
              </div>
              <div className="https://prnt.sc/lIfcJEfFEPPm">
                <h3 className="text-danger fw-bold mb-0 our_efficiently">10x</h3>
                <small className="text-muted our_efficiently_1">Faster Data Insight</small>
              </div>
              <div className="https://prnt.sc/lIfcJEfFEPPm">
                <h3 className="text-danger fw-bold mb-0 our_efficiently">40%</h3>
                <small className="text-muted our_efficiently_1">ROI in 6 Months</small>
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
                <span className="aximo-label-up">SUBMIT</span>
              </button>
              {isSubmitted && (
                <div className="alert-box mt-3 text-success">Thank you for your message!</div>
              )}
            </form>
          </div>
        </div>
      </div>

      <div className="container py-4 py-md-5">
        <div className="aximo-service-details-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1 pt-4 pt-lg-0">
              <div className="aximo-default-content">

                <h2><span className="services-h2">Why <span style={{ color: 'red' }}>Chameleo GFX Studio</span> Stands Apart</span></h2>
                <p>
                  Chameleo GFX Studio delivers end-to-end AI integration services in Ahmedabad with a team that understands both the technical complexity and the business context behind every project. We don't apply generic frameworks; we design integration strategies tailored to your product, your users, and your growth trajectory.
                </p>
                <p>
                  As one of the leading providers of Artificial Intelligence Integration Services in Ahmedabad India, we've helped businesses across industries automate critical workflows, launch intelligent SaaS products, and future-proof their digital operations.
                </p>
                <p>
                  Our process is collaborative and transparent; you stay informed and in control at every milestone. When you work with Chameleo GFX Studio, you're not hiring a development shop. You're gaining a strategic partner who is as invested in your results as you are. Our AI integration services are built on a foundation of trust, technical depth, and a genuine commitment to helping your business move forward with confidence.
                </p>
              </div>
            </div>
            <div className="col-lg-6 align-items-center order-1 order-lg-2 pt-4 pt-lg-0">
              <div >
                <img src={servise_image1} alt="Why Chameleo GFX Studio Stands Apart" className="services_page_image" style={{ width: "600px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4 py-md-5">
        <div className="aximo-service-details-wrap">
          <h2 className="text-center mb-5">
            <span className="services-h2">AI Development Services We Offer</span>
          </h2>

          {services.map((service, serviceIndex) => (
            <div key={serviceIndex} className="mb-5">
              <div className="row">
                {service.categories.map((category, catIndex) => (
                  <div
                    key={catIndex}
                    className="col-12 col-lg-4 col-md-6 d-flex flex-column align-items-start mb-5"
                  >
                    <button
                      className="px-4 py-2 bg-black text-white rounded-pill fw-semibold mb-3"
                      style={{ fontSize: "16px" }}
                    >
                      {category.subtitle}
                    </button>
                    <ul className="list-unstyled custom-list">
                      {category.items.map((item, iIndex) => (
                        <li key={iIndex} className="mb-2">
                          <Link to={item.link} className="text-dark">
                            {item.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="containar-flude bg-black ">
        <div className="container py-4 py-md-5">
          <div className="aximo-service-details-wrap">
            <div className="row">
              <div className="col-lg-12">
                <div className="aximo-default-content">

                  <h2 className="text-center"><span className="services-h2 text-white-smoke">Start Building <span style={{ color: 'red' }}>Smarter — Today</span></span></h2>
                  <p className="text-white-smoke text-center mt-4">
                    The businesses shaping tomorrow aren't waiting for the perfect moment. They're integrating intelligence into their operations right now, gaining advantages that compound over time. If you're ready to build a smarter, faster, and more resilient business, the path starts with the right integration partner.
                  </p>
                  <p className="text-white-smoke text-center">
                    Connect with Chameleo GFX Studio and bring intelligent AI integration to your business let's build your future together.
                  </p>

                  <div className="text-center mt-4">
                    <Link to="/contact-us" className="aximo-default-btn pill bg-red">
                      Schedule a call
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4 py-md-5">
        <section className="faq-section py-5 bg-white-smoke">
          <div className="container">
            <h2 className="mb-4 text-lg-center text-left">
              <span className="services-h2 text-lg-center text-left">FAQs on AI Integration Services</span>
            </h2>

            <ServiceAccordion faqData={faqData} defaultOpen={0} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default AIIntegrationServicesDetails;
