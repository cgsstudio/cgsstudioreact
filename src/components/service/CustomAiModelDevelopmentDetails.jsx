import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Field from "../common/Field";
import { aiDevelopmentServices as services } from "../../data/serviceData";
import servise_image1 from "../../assets/images/v1/Process_1 6.webp";
import servise_image2 from "../../assets/images/v1/Process_1 5.webp";
import servise_image3 from "../../assets/images/v1/Process_1 4.webp";
import servise_image4 from "../../assets/images/v1/Process_1 7.png";

function CustomAiModelDevelopmentDetails() {
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
        <title>Custom AI Model Development Services | Chameleo GFX Studio</title>
        <meta
          name="description"
          content="Chameleo GFX Studio specializes in Custom AI Model Development Services built around what your business actually needs. High accuracy, tighter integration."
        />
        <meta
          name="keywords"
          content="Custom AI Model Development, AI Model Development Company in Ahmedabad, AI Model Training, Business AI Solutions"
        />
        <link
          rel="canonical"
          href="https://chameleogfxstudio.com/services/ai-development/custom-ai-model-development"
        />
      </Helmet>

      {/* Intro Section */}
      <div className="container py-4 py-md-5">
        <div className="aximo-service-details-wrap">
          <div className="row ">
            <div className="col-lg-12">
              <div className="aximo-default-content">
                <h1 className="text-lg-center text-sm-left"><span className="custom-h2"><span style={{ color: 'red' }}>Custom AI Model</span> Development</span></h1>

                <p className="text-lg-center text-sm-left mt-4">
                  <strong>Built for your business. Trained on your data. Designed to scale.</strong><br/><br/>
                  Off-the-shelf AI tools can take you far — but they'll never take you all the way. When your business has unique data, distinct processes, and specific goals that generic models simply can't accommodate, custom is the only answer that makes sense.
                </p>

                <p className="text-lg-center text-sm-left">
                  Chameleo GFX Studio specializes in <strong>Custom AI Model Development Services</strong> that are built from the ground up around what your business actually needs — not what a pre-packaged solution was designed to approximate.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Build Section */}
      <div className="container py-4 py-md-5">
        <div className="aximo-service-details-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1 pt-4 pt-lg-0">
              <div className="aximo-default-content">
                <h2><span className="services-h2">What We <span style={{ color: 'red' }}>Build</span></span></h2>
                <p>
                  As a leading AI Model Development Company in Ahmedabad, Chameleo GFX Studio designs, trains, and deploys AI models tailored to your industry, your data, and your objectives. Whether you need a predictive model that forecasts demand, a classification model that automates decision-making, or a natural language model that understands your domain-specific terminology — we build it with precision.
                </p>
                <p>
                  Our AI Model Development Services in Ahmedabad cover the full pipeline: data preparation, model architecture, training, evaluation, integration, and ongoing refinement. Nothing is handed off half-finished.
                </p>
              </div>
            </div>
            <div className="col-lg-6 align-items-center order-1 order-lg-2 pt-4 pt-lg-0">
              <div >
                <img src={servise_image2} alt="What We Build: Custom AI Models" className="services_page_image" style={{ width: "600px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Custom AI Section */}
      <div className="container py-4 py-md-5">
        <div className="aximo-service-details-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6 align-items-center">
              <div>
                <img src={servise_image4} alt="Why Choose Custom AI?" className="services_page_image" style={{ width: "600px" }} />
              </div>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <div className="aximo-default-content">
                <h2><span className="services-h2">Why <span style={{ color: 'red' }}>Custom AI?</span></span></h2>
                <p>
                  Generic models are trained on general data. Your business isn't general. A custom model learns from your inputs, reflects your logic, and gets better with your outcomes over time — creating a compounding advantage that no off-the-shelf tool can replicate.
                </p>
                <p>
                  <strong>The result:</strong> higher accuracy, tighter integration with your existing systems, and measurable ROI that grows as the model matures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container py-4 py-md-5" id="contact-form">
        <div className="row align-items-center" >
          <div className="col-md-6 mb-4 mb-md-0 pr-5 mr-5">
            <div className="servisepage-form-section servisepage-form-section-1 pr-5">
              <h2>Ready to build an AI model that actually fits your business?</h2>
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

      {/* Why Chameleo GFX Studio Section */}
      <div className="container py-4 py-md-5">
        <div className="aximo-service-details-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1 pt-4 pt-lg-0">
              <div className="aximo-default-content">
                <h2><span className="services-h2">Why <span style={{ color: 'red' }}>Chameleo</span> GFX Studio</span></h2>
                <p>
                  Custom AI Model Development in Ahmedabad, India is at the core of what Chameleo GFX Studio does. Our team combines machine learning expertise with real-world business understanding — so the models we build don't just perform in testing, they perform in production.
                </p>
                <p>
                  We work closely with founders and decision-makers to ensure every model we deliver is aligned with your growth strategy, not just your technical requirements.
                </p>
              </div>
            </div>
            <div className="col-lg-6 align-items-center order-1 order-lg-2 pt-4 pt-lg-0">
              <div >
                <img src={servise_image3} alt="Why Chameleo GFX Studio" className="services_page_image" style={{ width: "600px" }} />
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
      <div className="containar-flude bg-black ">
        <div className="container py-4 py-md-5">
          <div className="aximo-service-details-wrap">
            <div className="row">
              <div className="col-lg-12">
                <div className="aximo-default-content">

                  <h2 className="text-center"><span className="services-h2 text-white-smoke">Let's build something <span style={{ color: 'red' }}>that lasts.</span></span></h2>
                  <p className="text-white-smoke text-center mt-4">
                    Ready to build an AI model that actually fits your business?
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

    </div>
  );
}

export default CustomAiModelDevelopmentDetails;
