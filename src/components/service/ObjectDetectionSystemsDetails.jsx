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
    question: "How does object detection differ from simple image recognition?",
    answer: "Image recognition identifies what a single image represents. Object detection goes much further — it identifies multiple objects, draws bounding boxes around them, labels each one, and can track their movement across frames in real time."
  },
  {
    question: "What types of hardware are needed for real-time object detection?",
    answer: "We design systems to be flexible. Depending on your needs, we can deploy models on high-performance cloud servers, on-premise workstations with GPUs, or even 'at the edge' on specialized hardware like NVIDIA Jetson or mobile devices for low-latency processing."
  },
  {
    question: "Can your systems detect custom objects specific to my industry?",
    answer: "Absolutely. We specialize in custom model training. Whether it's a specific manufacturing defect, a particular type of medical tool, or unique retail SKU, we train the model on your dedicated data to ensure high precision."
  },
  {
    question: "How do you handle challenging lighting or environmental conditions?",
    answer: "Robustness is a core requirement. We use data augmentation techniques and multi-spectral imaging analysis to ensure our models perform reliably in low light, rain, glare, or when objects are partially obscured (occlusion)."
  },
  {
    question: "Does the system integrate with our existing security camera network?",
    answer: "Yes. Most of our deployments leverage existing IP camera infrastructure via standard protocols (RTSP/ONVIF). We process these feeds through our AI pipeline and push the results directly to your existing dashboards or management systems."
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

function ObjectDetectionSystemsDetails() {
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
        <title>AI Object Detection Systems Company in Ahmedabad | Chameleo GFX Studio</title>
        <meta
          name="description"
          content="Chameleo GFX Studio builds AI-powered Object Detection Systems in Ahmedabad. We identification, boundary drawing, and tracking for manufacturing, retail, and security."
        />
        <meta
          name="keywords"
          content="Object Detection Systems, AI Object Recognition, Real-time Visual Tracking, YOLO Development Ahmedabad, Computer Vision India"
        />
        <link
          rel="canonical"
          href="https://chameleogfxstudio.com/services/ai-development/object-detection-systems"
        />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Intro Section */}
      <div className="container py-4 py-md-5">
        <div className="aximo-service-details-wrap">
          <div className="row ">
            <div className="col-lg-12">
              <div className="aximo-default-content">
                <h1 className="text-lg-center text-sm-left"><span className="custom-h2"><span style={{ color: 'red' }}>Object Detection Systems</span>: Because What Your Business Can't See, It Can't Manage</span></h1>

                <p className="text-lg-center text-sm-left mt-4">
                  A warehouse worker manually scans shelves for misplaced inventory. A security guard reviewing hours of overnight footage the next morning. A production supervisor walking the line to spot assembly errors. These are real scenarios where businesses are relying on human attention to do something AI can do faster, more accurately, and without ever needing a break.
                </p>

                <p className="text-lg-center text-sm-left">
                  Object detection is one of the most powerful capabilities in modern AI, and at Chameleo GFX Studio, we build systems that put this capability to work in real operational environments, not just research labs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What Object Detection Systems Actually Do */}
      <div className="container py-4 py-md-5">
        <div className="aximo-service-details-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1 pt-4 pt-lg-0">
              <div className="aximo-default-content">
                <h2><span className="services-h2">What Object Detection Systems <span style={{ color: 'red' }}>Actually Do</span></span></h2>
                <p>
                  Unlike basic image recognition, which simply classifies what's in an image, object detection goes further. It identifies multiple objects within a single frame, draws precise boundaries around each one, labels them, and tracks their position as they move. All of this happens in real time, from live camera feeds, video files, or still images.
                </p>
                <p>
                  As a leading <strong>AI Object Detection Development Company in Ahmedabad</strong>, Chameleo GFX Studio builds these systems using state-of-the-art architectures — from YOLO and Faster R-CNN to custom-trained models designed for your specific data — ensuring accuracy that generic off-the-shelf tools simply can't deliver.
                </p>
              </div>
            </div>
            <div className="col-lg-6 align-items-center order-1 order-lg-2 pt-4 pt-lg-0">
              <div>
                <img src={servise_image2} alt="What Object Detection Systems do" className="services_page_image" style={{ width: "600px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Where Object Detection Delivers Measurable Business Impact */}
      <div className="container py-4 py-md-5">
        <div className="aximo-service-details-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6 align-items-center">
              <div>
                <img src={servise_image4} alt="Where Object Detection Delivers Measurable Business Impact" className="services_page_image" style={{ width: "600px" }} />
              </div>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <div className="aximo-default-content">
                <h2><span className="services-h2">Where Object Detection Delivers <span style={{ color: 'red' }}>Measurable Business Impact</span></span></h2>
                <p>
                  Our Object Detection Development Services in Ahmedabad, India, are deployed across industries where visual awareness directly affects performance, safety, and profitability:
                </p>
                <ul className="custom-list mt-1 ml-5 pl-5">
                  <li className="ml-4 mt-0"><b>Manufacturing and Quality Control:</b> Detect defective components, misaligned parts, or foreign objects on production lines — before they reach packaging or the end customer.</li>
                  <li className="ml-4 mt-0"><b>Retail and Inventory Management:</b> Monitor shelves in real time to detect out-of-stock conditions, misplaced products, or compliance gaps with planogram requirements.</li>
                  <li className="ml-4 mt-0"><b>Logistics and Warehouse Automation:</b> Track the location and movement of goods, vehicles, and personnel across large facilities without relying on manual scanning or RFID tags.</li>
                  <li className="ml-4 mt-0"><b>Security and Perimeter Monitoring:</b> Automatically identify and alert on unauthorised access, abandoned objects, or crowd density anomalies across camera networks.</li>
                  <li className="ml-4 mt-0"><b>Traffic and Smart City Applications:</b> Count vehicles, monitor lane compliance, detect accidents, or manage pedestrian flow as part of broader urban intelligence systems.</li>
                  <li className="ml-4 mt-0"><b>Healthcare and Clinical Settings:</b> Assist in detecting anatomical structures, surgical instruments, or anomalies in imaging data to support faster and more consistent clinical decisions.</li>
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
              <h2>Let's Build a System That Sees What You Need It To</h2>
            </div>

            <div className="d-flex justify-content-between align-items-left py-3 mt-4">
              <div>
                <h3 className="text-danger fw-bold mb-0 our_efficiently">98%+</h3>
                <small className="text-muted our_efficiently_1">Detection Precision</small>
              </div>
              <div>
                <h3 className="text-danger fw-bold mb-0 our_efficiently">60fps</h3>
                <small className="text-muted our_efficiently_1">Real-time Performance</small>
              </div>
              <div>
                <h3 className="text-danger fw-bold mb-0 our_efficiently">0ms</h3>
                <small className="text-muted our_efficiently_1">Latancy Response</small>
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

      {/* The Expertise Behind the Technology */}
      <div className="container py-4 py-md-5">
        <div className="aximo-service-details-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1 pt-4 pt-lg-0">
              <div className="aximo-default-content">
                <h2><span className="services-h2">The Expertise Behind <span style={{ color: 'red' }}>the Technology</span></span></h2>
                <p>
                  Great object detection isn't just about choosing the right algorithm. It's about the quality of your training data, how well your model handles real-world variation — different lighting, partial occlusions, unusual angles — and whether it integrates cleanly with the cameras, platforms, and workflows your business already relies on.
                </p>
                <p>
                  Our Object Detection System Development in Ahmedabad process covers every layer of that complexity. Chameleo GFX Studio handles data collection and annotation, model selection and training, edge deployment and cloud integration, and ongoing performance monitoring, so your system doesn't just work at launch; it improves over time.
                </p>
                <p>
                  And because we work across industries, our Object Recognition Development experience means we've already solved many of the edge cases and real-world complications that can derail a less experienced team.
                </p>
              </div>
            </div>
            <div className="col-lg-6 align-items-center order-1 order-lg-2 pt-4 pt-lg-0">
              <div>
                <img src={servise_image3} alt="Expertise Behind the Technology" className="services_page_image" style={{ width: "600px" }} />
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
                  <h2 className="text-center"><span className="services-h2 text-white-smoke">Stop Relying on <span style={{ color: 'red' }}>Manual Observation.</span></span></h2>
                  <p className="text-white-smoke text-center mt-4">
                    The businesses that move fastest are the ones that stop relying on manual observation and start building intelligence into their visual environments. Object detection is one of the clearest paths to doing exactly that.
                  </p>
                  <p className="text-white-smoke text-center">
                    Get in touch with Chameleo GFX Studio to talk through your use case, and let's build an Object Recognition Development solution that gives your operations a genuine competitive edge.
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
              <span className="services-h2 text-lg-center text-left">FAQs on Object Detection Systems</span>
            </h2>
            <ServiceAccordion faqData={faqData} defaultOpen={0} />
          </div>
        </section>
      </div>

    </div>
  );
}

export default ObjectDetectionSystemsDetails;
