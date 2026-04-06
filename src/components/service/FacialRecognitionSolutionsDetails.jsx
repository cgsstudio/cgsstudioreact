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
    question: "How accurate are modern facial recognition systems in real-world environments?",
    answer: "Today's deep learning-based facial recognition systems achieve accuracy rates exceeding 99% in controlled conditions, and remain highly reliable in real-world scenarios with varying lighting, angles, and demographics — provided they are properly trained and calibrated for the deployment environment."
  },
  {
    question: "Can your facial recognition solutions work with our existing hardware?",
    answer: "Yes. We design our systems to integrate with a wide range of camera hardware, including standard IP cameras, access control panels, and mobile devices. We assess your existing infrastructure during the discovery phase and engineer accordingly so you don't need to replace what already works."
  },
  {
    question: "How do you handle data privacy and GDPR/compliance requirements?",
    answer: "Privacy and compliance are built into our development process from day one, not added at the end. We implement data minimisation, secure storage, anonymisation where appropriate, and audit logging. We also advise on consent mechanisms and can structure the system to process biometric data on-premise if regulatory requirements demand it."
  },
  {
    question: "How do you prevent spoofing or deepfake attacks on the system?",
    answer: "We implement liveness detection as a core component, which analyses micro-movements, depth, and other physiological cues to distinguish a live person from a photo, video, or 3D mask. This makes passive spoofing attacks extremely difficult to execute successfully."
  },
  {
    question: "What industries are your facial recognition solutions suited to?",
    answer: "Our solutions have been applied across financial services (KYC and onboarding), manufacturing (attendance and access control), retail (customer intelligence), healthcare (staff authentication), hospitality (contactless check-in), and event management (ticketless entry). If identity verification or access management is part of your operations, facial recognition likely has a role to play."
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

function FacialRecognitionSolutionsDetails() {
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
        <title>Facial Recognition Solutions & Services | Chameleo GFX Studio</title>
        <meta
          name="description"
          content="Get AI-powered Facial Recognition Solutions in Ahmedabad. We build secure, instantly verifiable identity systems for access control, tracking, and surveillance."
        />
        <meta
          name="keywords"
          content="Facial Recognition Solutions, AI Facial Recognition Services in Ahmedabad, Facial Recognition System Development, Secure Access Control AI"
        />
        <link
          rel="canonical"
          href="https://chameleogfxstudio.com/services/ai-development/facial-recognition-solutions"
        />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Intro Section */}
      <div className="container py-4 py-md-5">
        <div className="aximo-service-details-wrap">
          <div className="row ">
            <div className="col-lg-12">
              <div className="aximo-default-content">
                <h1 className="text-lg-center text-sm-left"><span className="custom-h2"><span style={{ color: 'red' }}>Facial Recognition</span> Solutions: Smarter Identity, Stronger Security, Seamless Experiences</span></h1>

                <p className="text-lg-center text-sm-left mt-4">
                  Identity verification sits at the heart of almost every secure business process, from accessing a facility, onboarding a new customer, approving a transaction, or monitoring a restricted area. For years, this meant passwords, keycards, PINs, and paper-based checks. All of them share the same fundamental flaw: they verify credentials, not people.
                </p>

                <p className="text-lg-center text-sm-left">
                  Facial recognition changes that equation entirely. And at Chameleo GFX Studio, we build AI-powered Facial Recognition Solutions that verify the actual person, accurately, instantly, and without friction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What Makes Modern Facial Recognition So Powerful */}
      <div className="container py-4 py-md-5">
        <div className="aximo-service-details-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1 pt-4 pt-lg-0">
              <div className="aximo-default-content">
                <h2><span className="services-h2">What Makes Modern Facial Recognition <span style={{ color: 'red' }}>So Powerful?</span></span></h2>
                <p>
                  Today's facial recognition systems go well beyond matching a photo to a face. Powered by deep learning, they analyse dozens of unique facial geometry points to create a mathematical identity signature — one that is extraordinarily difficult to spoof and remarkably consistent across changes in lighting, angle, facial hair, and even ageing.
                </p>
                <p>
                  As a trusted facial recognition AI development company in Ahmedabad, India, Chameleo GFX Studio develops systems that perform reliably in real-world conditions, not just controlled test environments. Whether it's a busy entrance checkpoint, a mobile onboarding flow, or a large-scale surveillance network, our solutions are engineered to handle the complexity that comes with genuine deployment.
                </p>
              </div>
            </div>
            <div className="col-lg-6 align-items-center order-1 order-lg-2 pt-4 pt-lg-0">
              <div>
                <img src={servise_image2} alt="What Makes Modern Facial Recognition So Powerful" className="services_page_image" style={{ width: "600px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How Businesses Use Facial Recognition */}
      <div className="container py-4 py-md-5">
        <div className="aximo-service-details-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6 align-items-center">
              <div>
                <img src={servise_image4} alt="How Businesses Use Facial Recognition to Operate Better" className="services_page_image" style={{ width: "600px" }} />
              </div>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <div className="aximo-default-content">
                <h2><span className="services-h2">How Businesses Use Facial Recognition to <span style={{ color: 'red' }}>Operate Better</span></span></h2>
                <p>
                  Our AI Facial Recognition Services in Ahmedabad support a broad range of business applications, each addressing a specific challenge that traditional identity methods handle poorly:
                </p>
                <ul className="custom-list mt-1 ml-5 pl-5">
                  <li className="ml-4 mt-0"><b>Secure Access Control:</b> Replace keycards and PINs with contactless, spoof-resistant facial authentication for offices, data centres, and restricted zones, eliminating shared credentials and lost access cards permanently.</li>
                  <li className="ml-4 mt-0"><b>Automated Attendance Tracking:</b> Remove manual sign-ins and buddy-punching from your workforce management. Employees are logged accurately the moment they walk through the door.</li>
                  <li className="ml-4 mt-0"><b>Customer Identity Verification:</b> Streamline digital onboarding for banking, insurance, and financial services by verifying identity in seconds during account creation or high-value transactions.</li>
                  <li className="ml-4 mt-0"><b>Retail Customer Intelligence:</b> Recognise returning customers, flag VIPs for personalised service, or identify individuals on watchlists, all without interrupting the customer experience.</li>
                  <li className="ml-4 mt-0"><b>Surveillance and Threat Detection:</b> Search live or recorded footage for specific individuals, detect known threats entering a premises, or generate real-time alerts when flagged persons are identified.</li>
                  <li className="ml-4 mt-0"><b>Event and Venue Management:</b> Replace physical ticketing and credential checks with facial scan entry, reducing queues, eliminating fraud, and improving the attendee experience at scale.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section — matching other pages exactly */}
      <div className="container py-4 py-md-5" id="contact-form">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0 pr-5  mr-5">
            <div className="servisepage-form-section servisepage-form-section-1 pr-5">
              <h2>Ready to Move Beyond Passwords and Keycards?</h2>
            </div>

            <div className="d-flex justify-content-between align-items-left py-3 mt-4">
              <div>
                <h3 className="text-danger fw-bold mb-0 our_efficiently">99.9%</h3>
                <small className="text-muted our_efficiently_1">Verification Accuracy</small>
              </div>
              <div>
                <h3 className="text-danger fw-bold mb-0 our_efficiently">24/7</h3>
                <small className="text-muted our_efficiently_1">Scalable Availability</small>
              </div>
              <div>
                <h3 className="text-danger fw-bold mb-0 our_efficiently">100%</h3>
                <small className="text-muted our_efficiently_1">Contactless Operation</small>
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

      {/* Built Responsibly, Deployed Carefully */}
      <div className="container py-4 py-md-5">
        <div className="aximo-service-details-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1 pt-4 pt-lg-0">
              <div className="aximo-default-content">
                <h2><span className="services-h2">Built Responsibly, <span style={{ color: 'red' }}>Deployed Carefully</span></span></h2>
                <p>
                  Facial recognition is powerful technology, and with that power comes a real responsibility to build and deploy it thoughtfully. Accuracy must be consistently high across all demographics. Data handling must be secure and compliant. And the system must be transparent enough for your organisation to trust and audit.
                </p>
                <p>
                  These aren't afterthoughts for Chameleo GFX Studio; they're built into our Facial Recognition System Development in Ahmedabad, India, from the very first line of code. We design with bias mitigation, data privacy, and auditability as core requirements, not features added at the end.
                </p>
              </div>
            </div>
            <div className="col-lg-6 align-items-center order-1 order-lg-2 pt-4 pt-lg-0">
              <div>
                <img src={servise_image3} alt="Built Responsibly, Deployed Carefully" className="services_page_image" style={{ width: "600px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Chameleo GFX Studio */}
      <div className="container py-4 py-md-5">
        <div className="aximo-service-details-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6 align-items-center">
              <div>
                <img src={servise_image1} alt="Why Chameleo GFX Studio for Facial Recognition" className="services_page_image" style={{ width: "600px" }} />
              </div>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <div className="aximo-default-content">
                <h2><span className="services-h2">Why Chameleo GFX Studio for Facial Recognition <span style={{ color: 'red' }}>in Ahmedabad?</span></span></h2>
                <p>
                  Most businesses don't need a research paper; they need a system that works reliably on Monday morning, integrates with the hardware they already have, and scales without breaking. That's where our hands-on experience with Facial Recognition Solutions in Ahmedabad makes a genuine difference.
                </p>
                <p>
                  We take the time to understand your environment, your volume, your edge cases, and your compliance requirements, then we build, test, and deploy a solution that fits. Not a template. A system built around how your business actually operates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Services List */}
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

      {/* Final CTA Footer */}
      <div className="containar-flude bg-black">
        <div className="container py-4 py-md-5">
          <div className="aximo-service-details-wrap">
            <div className="row">
              <div className="col-lg-12">
                <div className="aximo-default-content">
                  <h2 className="text-center"><span className="services-h2 text-white-smoke">Identity management <span style={{ color: 'red' }}>is evolving.</span></span></h2>
                  <p className="text-white-smoke text-center mt-4">
                    The businesses that modernise their approach now will operate more securely, more efficiently, and with a far better experience for everyone who interacts with them.
                  </p>
                  <p className="text-white-smoke text-center">
                    Reach out to Chameleo GFX Studio today to discuss your requirements and explore how our facial recognition expertise can help your organisation operate with greater confidence, security, and intelligence.
                  </p>
                  <div className="text-center mt-4">
                    <Link to="/contact-us" className="aximo-default-btn pill bg-red">
                      Talk to the team
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container py-4 py-md-5">
        <section className="faq-section py-5 bg-white-smoke">
          <div className="container">
            <h2 className="mb-4 text-lg-center text-left">
              <span className="services-h2 text-lg-center text-left">FAQs on Facial Recognition Solutions</span>
            </h2>
            <ServiceAccordion faqData={faqData} defaultOpen={0} />
          </div>
        </section>
      </div>

    </div>
  );
}

export default FacialRecognitionSolutionsDetails;
