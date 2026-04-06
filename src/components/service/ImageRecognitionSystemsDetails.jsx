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
    question: "What types of images can your AI systems recognise?",
    answer: "Our systems can be trained to recognise virtually any visual content — products, faces, vehicles, medical scans, documents, manufacturing defects, and more. The key is having quality training data that represents your specific use case. We work with you to curate and prepare the right dataset."
  },
  {
    question: "How accurate are your image recognition models?",
    answer: "Accuracy depends on the complexity of the task and the quality of training data, but our production models consistently achieve 95–99%+ accuracy. We rigorously test against edge cases and challenging conditions to ensure reliability in real-world deployment, not just in controlled tests."
  },
  {
    question: "Can image recognition work in real time on live camera feeds?",
    answer: "Yes. We build systems optimised for real-time inference, processing live video streams frame by frame with minimal latency. This is essential for use cases like security monitoring, manufacturing quality control, and retail analytics where decisions need to happen instantly."
  },
  {
    question: "Do we need to provide our own training data?",
    answer: "Having your own data accelerates the process significantly, but it's not always a prerequisite. We can use transfer learning from pre-trained models and fine-tune with a smaller dataset from your environment. We also assist with data collection, labelling, and augmentation strategies."
  },
  {
    question: "How does image recognition integrate with our existing systems?",
    answer: "We design our solutions with integration as a priority. Our image recognition pipelines connect via standard APIs, webhooks, or direct database writes to your existing ERP, CRM, warehouse management, or security systems — ensuring the insights flow directly into your operational workflows."
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

function ImageRecognitionSystemsDetails() {
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
        <title>Image Recognition Systems Company in Ahmedabad | Chameleo GFX Studio</title>
        <meta
          name="description"
          content="AI Image Recognition Solutions in Ahmedabad. We build systems that identify, classify, and interpret visual content automatically, accurately, and at scale."
        />
        <meta
          name="keywords"
          content="Image Recognition Systems, AI Image Recognition Company, Visual Data Processing, Deep Learning Image Classification, Ahmedabad AI"
        />
        <link
          rel="canonical"
          href="https://chameleogfxstudio.com/services/ai-development/image-recognition-systems"
        />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Intro Section */}
      <div className="container py-4 py-md-5">
        <div className="aximo-service-details-wrap">
          <div className="row ">
            <div className="col-lg-12">
              <div className="aximo-default-content">
                <h1 className="text-lg-center text-sm-left"><span className="custom-h2"><span style={{ color: 'red' }}>Image Recognition Systems</span>: Helping Machines See What Matters — Instantly</span></h1>

                <p className="text-lg-center text-sm-left mt-4">
                  Every day, businesses generate an enormous amount of visual data — product photos, security footage, X-rays, satellite images, retail shelf captures — and most of it just sits there, unanalysed, because there simply aren't enough human eyes to process it all. Manual image review is slow, inconsistent, and scales poorly. The moment your visual data volume grows, the process breaks down.
                </p>

                <p className="text-lg-center text-sm-left">
                  That's the problem Chameleo GFX Studio was built to solve. Our <strong>AI Image Recognition Solutions</strong> give businesses the power to process visual data automatically, accurately, and at a speed no human team could realistically match.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What Are Image Recognition Systems */}
      <div className="container py-4 py-md-5">
        <div className="aximo-service-details-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1 pt-4 pt-lg-0">
              <div className="aximo-default-content">
                <h2><span className="services-h2">What Are <span style={{ color: 'red' }}>Image Recognition</span> Systems?</span></h2>
                <p>
                  Image Recognition Systems are AI-powered technologies that teach machines to identify, classify, and interpret visual content — whether that's a face, a product, a medical anomaly, or a vehicle. Using deep learning and convolutional neural networks (CNNs), these systems are trained on large visual datasets until they can reliably recognise patterns and objects with human-level, or better, accuracy.
                </p>
                <p>
                  As a trusted AI Image Recognition Company in Ahmedabad, India, Chameleo GFX Studio builds these systems to work within your specific environment — trained on your data, tuned for your use cases, and integrated with your existing platforms.
                </p>
              </div>
            </div>
            <div className="col-lg-6 align-items-center order-1 order-lg-2 pt-4 pt-lg-0">
              <div>
                <img src={servise_image2} alt="What Are Image Recognition Systems" className="services_page_image" style={{ width: "600px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Where AI Image Recognition Creates Real Business Value */}
      <div className="container py-4 py-md-5">
        <div className="aximo-service-details-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6 align-items-center">
              <div>
                <img src={servise_image4} alt="Where AI Image Recognition Creates Real Business Value" className="services_page_image" style={{ width: "600px" }} />
              </div>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <div className="aximo-default-content">
                <h2><span className="services-h2">Where AI Image Recognition Creates <span style={{ color: 'red' }}>Real Business Value</span></span></h2>
                <p>
                  Our Image Recognition AI Solutions in Ahmedabad are deployed across a wide range of industries and use cases, each solving a genuine operational challenge:
                </p>
                <ul className="custom-list mt-1 ml-5 pl-5">
                  <li className="ml-4 mt-0"><b>Security and Surveillance:</b> Automatically detect unauthorised individuals, track movement, and flag suspicious behaviour across camera networks — without anyone watching every screen.</li>
                  <li className="ml-4 mt-0"><b>Product Identification and Cataloguing:</b> Instantly recognise and classify products by visual appearance, streamlining inventory management, e-commerce listings, and supply chain tracking.</li>
                  <li className="ml-4 mt-0"><b>Manufacturing Quality Inspection:</b> Spot surface defects, dimensional inconsistencies, or assembly errors on production lines in real time — before defective products reach the customer.</li>
                  <li className="ml-4 mt-0"><b>Medical Imaging Analysis:</b> Support radiologists and diagnosticians by flagging anomalies in X-rays, MRIs, and pathology scans — faster and with consistent repeatability.</li>
                  <li className="ml-4 mt-0"><b>Retail Shelf Analytics:</b> Monitor product placement, detect out-of-stock situations, and measure planogram compliance across physical retail locations automatically.</li>
                  <li className="ml-4 mt-0"><b>Document and ID Verification:</b> Recognise and validate identity documents, signatures, or printed forms as part of digital onboarding or compliance workflows.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container py-4 py-md-5" id="contact-form">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0 pr-5  mr-5">
            <div className="servisepage-form-section servisepage-form-section-1 pr-5">
              <h2>Ready to Put Your Visual Data to Work?</h2>
            </div>

            <div className="d-flex justify-content-between align-items-left py-3 mt-4">
              <div>
                <h3 className="text-danger fw-bold mb-0 our_efficiently">99%+</h3>
                <small className="text-muted our_efficiently_1">Classification Accuracy</small>
              </div>
              <div>
                <h3 className="text-danger fw-bold mb-0 our_efficiently">24/7</h3>
                <small className="text-muted our_efficiently_1">Automated Processing</small>
              </div>
              <div>
                <h3 className="text-danger fw-bold mb-0 our_efficiently">10x</h3>
                <small className="text-muted our_efficiently_1">Faster Than Manual Review</small>
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

      {/* The Benefits Go Well Beyond Speed */}
      <div className="container py-4 py-md-5">
        <div className="aximo-service-details-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1 pt-4 pt-lg-0">
              <div className="aximo-default-content">
                <h2><span className="services-h2">The Benefits Go Well <span style={{ color: 'red' }}>Beyond Speed</span></span></h2>
                <p>
                  Businesses that invest in AI Image Recognition Services in Ahmedabad, India, don't just speed things up — they fundamentally change how decisions get made. Here's what that looks like in practice:
                </p>
                <ul className="custom-list mt-1 ml-5 pl-5">
                  <li className="ml-4 mt-0"><b>Faster Insights:</b> Visual data is processed in milliseconds. What once required hours of human review is now available the moment an image is captured.</li>
                  <li className="ml-4 mt-0"><b>Significantly Higher Accuracy:</b> AI systems don't suffer from fatigue, distraction, or subjective interpretation. Consistency is built in — especially valuable in quality control and diagnostics.</li>
                  <li className="ml-4 mt-0"><b>Operational Efficiency at Scale:</b> Once deployed, an image recognition system handles growing data volumes without proportional increases in cost or headcount.</li>
                  <li className="ml-4 mt-0"><b>Smarter, Data-Driven Decisions:</b> Instead of relying on spot-checks or sampled reviews, your team gets insights drawn from 100% of your visual data — giving decisions a far stronger foundation.</li>
                  <li className="ml-4 mt-0"><b>Reduced Operational Risk:</b> Whether it's a missed defect, a security breach, or a compliance gap — automated visual monitoring catches issues earlier and more reliably than manual processes.</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 align-items-center order-1 order-lg-2 pt-4 pt-lg-0">
              <div>
                <img src={servise_image3} alt="The Benefits Go Well Beyond Speed" className="services_page_image" style={{ width: "600px" }} />
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
                <img src={servise_image1} alt="Why Chameleo GFX Studio Is the Right Partner" className="services_page_image" style={{ width: "600px" }} />
              </div>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <div className="aximo-default-content">
                <h2><span className="services-h2">Why Chameleo GFX Studio Is the <span style={{ color: 'red' }}>Right Partner</span> for This Work</span></h2>
                <p>
                  Building a reliable image recognition system is far more nuanced than selecting an off-the-shelf API and calling it done. The accuracy of your model depends on the quality of your training data, the architecture choices made during development, and the rigour of your testing process — especially for edge cases and challenging lighting conditions.
                </p>
                <p>
                  Chameleo GFX Studio approaches every engagement as a long-term partner, not a vendor. Our team invests time upfront to understand what you're actually trying to achieve with AI Image Recognition Solutions in Ahmedabad — your data environment, your accuracy requirements, and your integration constraints — before building anything. The result is a system that performs in the real world, not just in a demo.
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
                  <h2 className="text-center"><span className="services-h2 text-white-smoke">Your visual data is already <span style={{ color: 'red' }}>generating value.</span></span></h2>
                  <p className="text-white-smoke text-center mt-4">
                    Your cameras and image libraries are already generating valuable information. The gap is between capturing that data and actually understanding it. With the right image recognition system in place, that gap closes — and your operations become sharper, faster, and more reliable as a result.
                  </p>
                  <p className="text-white-smoke text-center">
                    Talk to the team at Chameleo GFX Studio today about your visual data challenges, and let's build an AI solution that makes your business genuinely better at seeing what matters.
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
              <span className="services-h2 text-lg-center text-left">FAQs on Image Recognition Systems</span>
            </h2>
            <ServiceAccordion faqData={faqData} defaultOpen={0} />
          </div>
        </section>
      </div>

    </div>
  );
}

export default ImageRecognitionSystemsDetails;
