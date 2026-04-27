import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Field from "../common/Field";
import ServiceAccordion from "../../components/common/ServiceAccordion";
import { aiDevelopmentServices as services } from "../../data/serviceData";
import servise_image1 from "../../assets/images/v1/Process_1 6.webp";
import servise_image2 from "../../assets/images/v1/Group (8).png";
import servise_image3 from "../../assets/images/v1/Process_1 4.webp";
import servise_image4 from "../../assets/images/v1/Process_1 7.png";

const faqData = [
  {
    question: "How do you ensure data security in an AI SaaS product?",
    answer: "We implement enterprise-grade security protocols, including end-to-end encryption, regular vulnerability assessments, and strict compliance with global data protection regulations to keep your user data safe."
  },
  {
    question: "How long does it take to develop an AI-powered SaaS product?",
    answer: "Timelines vary based on complexity, but a typical MVP can launch in 3 to 4 months, while comprehensive platforms with advanced AI integrations may take 6 to 9 months."
  },
  {
    question: "Do you provide ongoing support after the product launches?",
    answer: "Yes. We offer continuous monitoring, machine learning model retraining, feature updates, and technical support to ensure your SaaS product scales securely as your user base grows."
  },
  {
    question: "Will I own the intellectual property (IP) of the AI models?",
    answer: "Absolutely. We build custom solutions exclusively for your business, and upon project completion, you retain full ownership of the source code, models, and intellectual property."
  },
  {
    question: "Can you integrate AI into my existing SaaS product?",
    answer: "Yes, we specialize in modernizing legacy platforms by seamlessly integrating AI layers like predictive analytics, intelligent automation, and NLP engines without disrupting current operations."
  }
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
    <div className="section pb-0 bg-white">
      <Helmet>
        <title>AI SaaS Product Development Company in Ahmedabad | Chameleo GFX Studio</title>
        <meta
          name="description"
          content="Leading AI SaaS Product Development Company in Ahmedabad, India. We build intelligent, cloud-based products that learn, adapt, and scale alongside your growth."
        />
        <meta
          name="keywords"
          content="AI SaaS Product Development, SaaS Agency, AI Startup Development, Machine Learning SaaS, Ahmedabad AI Development"
        />
        <link
          rel="canonical"
          href="https://chameleogfxstudio.com/services/ai-development/ai-saas-product-development"
        />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="container py-4 py-md-5">
        <div className="aximo-service-details-wrap">
          <div className="row ">
            <div className="col-lg-12">
              <div className="aximo-default-content">
                <h1 className="text-lg-center text-sm-left"><span className="custom-h2"><span style={{ color: 'red' }}>AI SaaS Product Development</span></span></h1>

                <h3 className="text-lg-center text-sm-left  pt-2" style={{ fontSize: '1.5rem', fontWeight: '700' }}>Ahmedabad, India · Built for Startups & Growth-Stage Companies</h3>

                <p className="text-lg-center text-sm-left mt-4">
                  <b>The Business Case for AI-Powered SaaS</b>
                </p>

                <p className="text-lg-center text-sm-left">
                  The way businesses operate is shifting fast. Companies that once relied on generic software are now turning to intelligent, cloud-based products that learn, adapt, and scale alongside their growth. AI SaaS, Software as a Service powered by artificial intelligence, sits at the center of this transformation. It's not just a technology upgrade; it's a strategic edge.
                </p>

                <p className="text-lg-center text-sm-left">
                  For founders and business leaders, building the right AI SaaS product can mean the difference between leading a market and playing catch-up. But turning a powerful idea into a reliable, scalable product takes more than good intentions; it takes a team that truly understands both the technology and the business behind it.
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

                <h2><span className="services-h2">What <span style={{ color: 'red' }}>AI SaaS Product Development</span> Actually Means</span></h2>
                <p>
                  AI SaaS product development is the end-to-end process of designing, building, and launching a cloud-hosted software product that uses artificial intelligence to deliver smarter outcomes. This includes everything from product architecture and machine learning model integration to UX design, API development, security, and post-launch optimization.
                </p>
                <p>
                  At Chameleo GFX Studio, we approach this process as a true product partner, not just a development vendor. Our team works closely with you from concept to launch, ensuring every feature we build serves a clear business purpose and creates real value for your users.
                </p>
              </div>
            </div>
            <div className="col-lg-6 align-items-center order-1 order-lg-2 pt-4 pt-lg-0">
              <div >
                <img src={servise_image2} alt="AI SaaS Product Development" className="services_page_image" style={{ width: "600px" }} />
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
                <img src={servise_image4} alt="Key Benefits of AI SaaS" className="services_page_image" style={{ width: "600px" }} />
              </div>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <div className="aximo-default-content">
                <h2><span className="services-h2">Key <span style={{ color: 'red' }}>Benefits</span> for Your Business</span></h2>
                <ul className="custom-list mt-1 ml-5 pl-5">
                  <li className="ml-4 mt-0"><b>Automation that scales.</b> AI-powered SaaS products handle repetitive workflows intelligently, freeing your team to focus on what actually moves the needle.</li>
                  <li className="ml-4 mt-0"><b>Smarter decision-making.</b> Built-in analytics and AI insights give your stakeholders real-time intelligence, not lagging reports.</li>
                  <li className="ml-4 mt-0"><b>Recurring revenue models.</b> SaaS architecture makes subscription-based pricing straightforward, creating predictable, compounding income streams.</li>
                  <li className="ml-4 mt-0"><b>Global reach from day one.</b> Cloud deployment means your product is accessible anywhere without the overhead of physical infrastructure.</li>
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
              <h2>Building the Future of SaaS</h2>
            </div>

            <div className="d-flex justify-content-between align-items-left py-3 mt-4">
              <div className="https://prnt.sc/lIfcJEfFEPPm">
                <h3 className="text-danger fw-bold mb-0 our_efficiently">3x</h3>
                <small className="text-muted our_efficiently_1">Faster Time-to-Market</small>
              </div>
              <div className="https://prnt.sc/lIfcJEfFEPPm">
                <h3 className="text-danger fw-bold mb-0 our_efficiently">40%</h3>
                <small className="text-muted our_efficiently_1">Higher User Retention</small>
              </div>
              <div className="https://prnt.sc/lIfcJEfFEPPm">
                <h3 className="text-danger fw-bold mb-0 our_efficiently">100%</h3>
                <small className="text-muted our_efficiently_1">Scalable Architecture</small>
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

                <h2><span className="services-h2">Why Choose <span style={{ color: 'red' }}>Chameleo GFX Studio</span></span></h2>
                <p>
                  Chameleo GFX Studio is a leading AI SaaS Product Development Company in Ahmedabad with a clear focus: helping ambitious businesses build software products that perform in the real world. Our cross-functional team brings together product strategists, AI engineers, UI/UX designers, and QA specialists under one roof.
                </p>
                <p>
                  As a trusted AI SaaS Product Development Company serving clients across India and internationally, we combine technical depth with genuine product thinking. We've helped startups validate MVPs quickly, and scaling companies rebuild legacy platforms into modern, intelligent systems.
                </p>
                <p>
                  Our AI SaaS Product Development Services in Ahmedabad, India, are structured to give you full visibility at every stage, no black boxes, no surprises. Whether you're an early-stage founder or a business leader exploring digital transformation, Chameleo GFX Studio is built to move at your pace and match your ambition.
                </p>
              </div>
            </div>
            <div className="col-lg-6 align-items-center order-1 order-lg-2 pt-4 pt-lg-0">
              <div >
                <img src={servise_image1} alt="Why Choose Chameleo GFX Studio" className="services_page_image" style={{ width: "600px" }} />
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

                  <h2 className="text-center"><span className="services-h2 text-white-smoke">Let's Build <span style={{ color: 'red' }}>Something That Matters</span></span></h2>
                  <p className="text-white-smoke text-center mt-4">
                    AI SaaS Product Development in Ahmedabad, India, has never been more accessible, or more critical. If you have a product vision and the drive to bring it to market, Chameleo GFX Studio has the expertise to make it real. From the first wireframe to your first thousand users, we're with you every step of the way.
                  </p>
                  <p className="text-white-smoke text-center">
                    Ready to build your AI SaaS product? Let's talk — connect with Chameleo GFX Studio today.
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
              <span className="services-h2 text-lg-center text-left">FAQs on AI SaaS Product Development</span>
            </h2>

            <ServiceAccordion faqData={faqData} defaultOpen={0} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default AISaaSDetails;
