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
import "../../assets/css/ai-services-global.css";

const faqData = [
  {
    question: "Do I need to buy new cameras for video analytics?",
    answer: "Often, no. Modern video analytics platforms can integrate with most standard IP cameras already installed in your facility, turning your existing infrastructure into intelligent sensors."
  },
  {
    question: "Can video analytics work in low light or harsh weather conditions?",
    answer: "Yes. Advanced AI models can be trained to perform effectively in challenging real-world conditions, including variable lighting, occlusions, and diverse weather environments."
  },
  {
    question: "How accurate is the people counting and crowd analysis?",
    answer: "Our video analytics solutions deliver highly accurate counts. We build and train models specifically against your actual environment to ensure precision that manual observation cannot match."
  },
  {
    question: "What kind of alerts can the system generate?",
    answer: "The system can generate real-time alerts for unauthorized access, perimeter breaches, unusual behavior, safety violations, or operational bottlenecks like excessive queue lengths."
  },
  {
    question: "Is raw footage sent to the cloud for analysis?",
    answer: "We offer both edge and cloud deployment options depending on your security and bandwidth needs. Processing can occur locally to ensure sensitive footage never leaves your premises."
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

function VideoAnalyticsSolutionsDetails() {
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
    <div className="section pb-0 ai-services-global bg-white">
      <Helmet>
        <title>Video Analytics Solutions in Ahmedabad, India | Chameleo GFX Studio</title>
        <meta
          name="description"
          content="Chameleo GFX Studio builds intelligent Video Analytics Solutions in Ahmedabad. Transform passive camera infrastructure into an active layer of business intelligence."
        />
        <meta
          name="keywords"
          content="Video Analytics Solutions Ahmedabad, Video Analytics System Development, AI Camera Systems, Intelligent Video Analysis Company India"
        />
        <link
          rel="canonical"
          href="https://chameleogfxstudio.com/services/ai-development/video-analytics-solutions"
        />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Intro Section */}
      <div className="container py-3 py-md-4">
        <div className="aximo-service-details-wrap">
          <div className="row ">
            <div className="col-lg-12">
              <div className="aximo-default-content">
                <h1 className="text-lg-center text-sm-left"><span className="custom-h2">Video Analytics Solutions: <span style={{ color: 'red' }}>Your Cameras Are Recording But Are You Actually Watching?</span></span></h1>

                <p className="text-lg-center text-sm-left mt-4">
                  Most organisations have invested significantly in cameras. Warehouses, retail stores, hospitals, campuses, manufacturing floors, they're all covered. And yet, the vast majority of that footage is never reviewed at all. It sits on a hard drive, reviewed only when something has already gone wrong. That's not security. That's documentation after the fact.
                </p>

                <p className="text-lg-center text-sm-left">
                  Video analytics changes this completely. And at Chameleo GFX Studio, we build <strong>Video Analytics Solutions</strong> that transform passive camera infrastructure into an active layer of business intelligence, one that monitors, analyses, and alerts in real time, around the clock.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What Video Analytics Actually Does */}
      <div className="container py-3 py-md-4">
        <div className="aximo-service-details-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1 pt-4 pt-lg-0">
              <div className="aximo-default-content">
                <h2><span className="services-h2">What Video Analytics <span style={{ color: 'red' }}>Actually Does</span></span></h2>
                <p>
                  Video analytics is the application of AI and computer vision to automatically interpret what's happening in video footage, live or recorded. Rather than relying on a person to watch a screen, the system watches for you. It detects events, identifies patterns, tracks movement, and generates alerts or data outputs based on what it sees.
                </p>
                <p>
                  The scope is broad. Our <strong>Video Analytics Solutions in Ahmedabad</strong> have been deployed across industries, including retail, logistics, manufacturing, healthcare, smart cities, and enterprise security, each configured to surface insights that are specific and actionable, not just data for the sake of data.
                </p>
              </div>
            </div>
            <div className="col-lg-6 align-items-center order-1 order-lg-2 pt-4 pt-lg-0">
              <div>
                <img src={servise_image2} alt="What Video Analytics Does" className="services_page_image" style={{ width: "600px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container py-3 py-md-4">
        <div className="aximo-service-details-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6 align-items-center">
              <div>
                <img src={servise_image4} alt="Business Can Do" className="services_page_image" style={{ width: "600px" }} />
              </div>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <div className="aximo-default-content">
                <h2><span className="services-h2">What Your Business Can Do <span style={{ color: 'red' }}>with Intelligent Video</span></span></h2>
                <p>The most impactful deployments of video analytics aren't just about security; they're about operational awareness. Here's what becomes possible with the right system in place:</p>
                <ul className="custom-list mt-1 ml-5 pl-5">
                  <li className="ml-4 mt-0"><b>Real-Time Threat and Anomaly Detection:</b> Automatically flag unauthorised access, perimeter breaches, loitering, or unusual behaviour the moment it occurs, not the following morning during a review.</li>
                  <li className="ml-4 mt-0"><b>People Counting and Crowd Analysis:</b> Measure footfall, analyse movement patterns, and manage crowd density in retail, transport hubs, venues, and public spaces with precision that manual observation cannot match.</li>
                  <li className="ml-4 mt-0"><b>Operational Efficiency Monitoring:</b> Track how spaces and resources are being used across a facility. Identify bottlenecks, underutilised areas, or workflow inefficiencies that are invisible without data.</li>
                  <li className="ml-4 mt-0"><b>Queue and Wait-Time Management:</b> Monitor queue lengths at service points, checkouts, or entry gates in real time, enabling staff deployment decisions before frustration builds.</li>
                  <li className="ml-4 mt-0"><b>Safety and Compliance Monitoring:</b> Detect PPE violations, unsafe proximity to hazardous equipment, or restricted zone entry on industrial sites, without requiring a dedicated safety officer to watch every corner.</li>
                  <li className="ml-4 mt-0"><b>Retail Customer Behaviour Insights:</b> Understand how customers navigate a store, which displays attract attention, and where purchasing decisions are actually being made grounding merchandising strategy in evidence.</li>
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
              <h2>Ready to see what your cameras are actually capturing?</h2>
            </div>

            <div className="d-flex justify-content-between align-items-left py-3 mt-4">
              <div>
                <h3 className="text-danger fw-bold mb-0 our_efficiently">24/7</h3>
                <small className="text-muted our_efficiently_1">Active Monitoring</small>
              </div>
              <div>
                <h3 className="text-danger fw-bold mb-0 our_efficiently">98%</h3>
                <small className="text-muted our_efficiently_1">Detection Accuracy</small>
              </div>
              <div>
                <h3 className="text-danger fw-bold mb-0 our_efficiently">Real-time</h3>
                <small className="text-muted our_efficiently_1">Instant Alerts</small>
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

      {/* From Camera Feed to Business Decision */}
      <div className="container py-3 py-md-4">
        <div className="aximo-service-details-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1 pt-4 pt-lg-0">
              <div className="aximo-default-content">
                <h2><span className="services-h2">From Camera Feed to <span style={{ color: 'red' }}>Business Decision</span></span></h2>
                <p>
                  The true value of video analytics isn't the alerts themselves; it's the decisions those alerts enable. When your operations team gets a real-time notification that a queue has exceeded a threshold, they act immediately. When your security team sees an anomaly flagged the moment it happens, they respond before it escalates. When your retail manager sees a heatmap of customer movement, they rearrange the floor with confidence rather than guesswork.
                </p>
                <p>
                  Our <strong>Video Analytics System Development in Ahmedabad</strong> process is built around this principle. Chameleo GFX Studio doesn't build systems that generate noise; we build systems that surface signal. Every alert, every dashboard, every data output is designed to support a specific decision your team needs to make.
                </p>
              </div>
            </div>
            <div className="col-lg-6 align-items-center order-1 order-lg-2 pt-4 pt-lg-0">
              <div>
                <img src={servise_image3} alt="Camera Feed to Decision" className="services_page_image" style={{ width: "600px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Approaches Section */}
      <div className="container py-3 py-md-4">
        <div className="aximo-service-details-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6 align-items-center">
              <div>
                <img src={servise_image1} alt="How We Approach Video Analytics" className="services_page_image" style={{ width: "600px" }} />
              </div>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <div className="aximo-default-content">
                <h2><span className="services-h2">How Chameleo GFX Studio Approaches <span style={{ color: 'red' }}>Video Analytics Development</span></span></h2>
                <p>
                  Building video analytics that works in practice, not just in controlled demos, requires deep expertise in computer vision, an honest understanding of real-world camera environments, and experience integrating AI outputs into existing business workflows. Variable lighting, camera angles, occlusions, weather, and network constraints all affect system performance in ways that theory doesn't prepare you for.
                </p>
                <p>
                  As a provider of the <strong>Best Video Analytics System Development in Ahmedabad</strong>, India, our team brings that real-world experience to every project. We assess your existing camera infrastructure, define the specific outcomes you need, build and train models against your actual environment, and deploy solutions that integrate cleanly with the management systems your team already uses.
                </p>
                <p>
                  From initial scoping through to post-launch optimisation, Chameleo GFX Studio remains a hands-on partner, refining model performance as your environment evolves and ensuring the system continues to deliver the accuracy and reliability your operations depend on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Services List */}
      <div className="container py-3 py-md-4">
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
      <div className="container-fluid bg-black">
        <div className="container py-3 py-md-4">
          <div className="aximo-service-details-wrap">
            <div className="row">
              <div className="col-lg-12">
                <div className="aximo-default-content">
                  <h2 className="text-center"><span className="services-h2 text-white-smoke">Make Your Cameras Work as <span style={{ color: 'red' }}>Hard as the Rest of Your Business</span></span></h2>
                  <p className="text-white-smoke text-center mt-4">
                    The infrastructure is already there. What most organisations are missing is the intelligence layer that makes it useful in real time. With the right video analytics system in place, your camera network stops being a passive recording tool and starts being one of the most valuable sources of operational insight your business has.
                  </p>
                  <p className="text-white-smoke text-center">
                    Talk to Chameleo GFX Studio about your video environment and business objectives. Our team will help you identify where video analytics will deliver the greatest impact, and build a solution that delivers it reliably.
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
      <div className="container py-3 py-md-4">
        <section className="faq-section py-5 bg-white-smoke">
          <div className="container">
            <h2 className="mb-4 text-lg-center text-left">
              <span className="services-h2 text-lg-center text-left">FAQs on Video Analytics Solutions</span>
            </h2>
            <ServiceAccordion faqData={faqData} defaultOpen={0} />
          </div>
        </section>
      </div>

    </div>
  );
}

export default VideoAnalyticsSolutionsDetails;
