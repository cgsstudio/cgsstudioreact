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
    question: "What kind of hardware is required for computer vision systems?",
    answer: "Hardware requirements depend entirely on your use case. We can deploy lightweight models that run on edge devices like standard IP cameras, or robust models that leverage cloud GPU clusters for intensive real-time video analytics."
  },
  {
    question: "How do you ensure data privacy with camera feeds?",
    answer: "We prioritize privacy-by-design. We can implement edge AI where video is processed locally and discarded instantly, and we use techniques like facial blurring and anonymization so that only actionable metadata ever leaves your facility."
  },
  {
    question: "Do you need a massive amount of our data to train the model?",
    answer: "Not always. While having your proprietary data helps, we frequently use transfer learning—starting with a powerful pre-trained vision model and fine-tuning it with a smaller, highly specific dataset from your actual environment."
  },
  {
    question: "Can these solutions integrate with our existing factory or security software?",
    answer: "Yes. We specialize in seamless integration. Our computer vision pipelines can trigger alerts in your Video Management System, log quality defects in your ERP, or pause machinery via standard industrial protocols."
  },
  {
    question: "What happens if the lighting conditions in our facility change?",
    answer: "We build robust models trained on diverse datasets that account for varying environmental factors. We also apply augmentation techniques during training to ensure the system performs reliably regardless of shadows, glare, or temporal lighting shifts."
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

function ComputerVisionSolutionsDetails() {
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
        <title>Computer Vision Solutions Company in Ahmedabad | Chameleo GFX Studio</title>
        <meta
          name="description"
          content="Leading Computer Vision Consulting Company in Ahmedabad. We build AI-powered systems that see, interpret, and act on visual data in real time at scale."
        />
        <meta
          name="keywords"
          content="Computer Vision Solutions, AI Vision Company, Image Recognition, Video Analytics, Ahmedabad AI Consulting"
        />
        <link
          rel="canonical"
          href="https://chameleogfxstudio.com/services/ai-development/computer-vision-solutions"
        />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="container py-4 py-md-5">
        <div className="aximo-service-details-wrap">
          <div className="row ">
            <div className="col-lg-12">
              <div className="aximo-default-content">
                <h1 className="text-lg-center text-sm-left"><span className="custom-h2"><span style={{ color: 'red' }}>Computer Vision Solutions</span>: Teaching Machines to See — So Your Business Can Act Faster</span></h1>

                <p className="text-lg-center text-sm-left mt-4">
                  Think about how much of your business depends on visual information. Security footage that nobody has time to review. Thousands of product images await quality checks. Assembly lines where a single defect, missed by a tired human eye, makes it all the way to the customer. The bottleneck isn't data, it's the human capacity to process what the camera already sees.
                </p>

                <p className="text-lg-center text-sm-left">
                  At Chameleo GFX Studio, we build AI-powered Computer Vision Solutions that give your systems the ability to see, interpret, and act on visual data, in real time, at scale, and with a level of consistency no human team can match.
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

                <h2><span className="services-h2">What Are <span style={{ color: 'red' }}>Computer Vision Solutions</span>?</span></h2>
                <p>
                  Computer Vision is a branch of artificial intelligence that trains machines to extract meaningful information from images, video feeds, and visual inputs. It's how a system can look at a photo and identify a crack in a weld, recognize a face in a crowd, read a license plate at a toll gate, or count items moving along a conveyor belt, all without a human in the loop.
                </p>
                <p>
                  As a leading Computer Vision Consulting Company in Ahmedabad, India, Chameleo GFX Studio designs solutions custom-built for your industry, not generic demos, but production-ready systems that integrate into your real operations and deliver measurable results.
                </p>
              </div>
            </div>
            <div className="col-lg-6 align-items-center order-1 order-lg-2 pt-4 pt-lg-0">
              <div >
                <img src={servise_image2} alt="Computer Vision Solutions" className="services_page_image" style={{ width: "600px" }} />
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
                <img src={servise_image4} alt="What Can AI Computer Vision Do for Your Business?" className="services_page_image" style={{ width: "600px" }} />
              </div>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <div className="aximo-default-content">
                <h2><span className="services-h2">What Can <span style={{ color: 'red' }}>AI Computer Vision</span> Do for Your Business?</span></h2>
                <p>
                  Our AI Computer Vision Solutions in Ahmedabad are built to tackle real operational challenges across industries. Here's what they're capable of:
                </p>
                <ul className="custom-list mt-1 ml-5 pl-5">
                  <li className="ml-4 mt-0"><b>Image Recognition and Classification:</b> Automatically categorize thousands of images by content, condition, or type, from product catalogues to medical scans.</li>
                  <li className="ml-4 mt-0"><b>Object Detection and Tracking:</b> Identify and follow specific objects across video frames in real time, whether it's a person, vehicle, or component on a production line.</li>
                  <li className="ml-4 mt-0"><b>Visual Quality Inspection:</b> Detect defects, inconsistencies, or anomalies in manufactured goods with far greater speed and accuracy than manual inspection.</li>
                  <li className="ml-4 mt-0"><b>Video Analytics:</b> Extract insights from surveillance and operational footage, foot traffic patterns, safety violations, equipment behavior, without anyone watching every frame.</li>
                  <li className="ml-4 mt-0"><b>Facial Recognition and Access Control:</b> Enable secure, contactless identity verification for facilities, attendance systems, or customer experiences.</li>
                  <li className="ml-4 mt-0"><b>Document and Text Recognition (OCR):</b> Read and extract text from images, handwritten notes, or printed forms as part of a larger automation pipeline.</li>
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
              <h2>Unlock the Power of Visual Data at Scale</h2>
            </div>

            <div className="d-flex justify-content-between align-items-left py-3 mt-4">
              <div className="https://prnt.sc/lIfcJEfFEPPm">
                <h3 className="text-danger fw-bold mb-0 our_efficiently">99%</h3>
                <small className="text-muted our_efficiently_1">Defect Detection Precision</small>
              </div>
              <div className="https://prnt.sc/lIfcJEfFEPPm">
                <h3 className="text-danger fw-bold mb-0 our_efficiently">10ms</h3>
                <small className="text-muted our_efficiently_1">Processing Speed</small>
              </div>
              <div className="https://prnt.sc/lIfcJEfFEPPm">
                <h3 className="text-danger fw-bold mb-0 our_efficiently">10x</h3>
                <small className="text-muted our_efficiently_1">Scalable Volume Processing</small>
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

                <h2><span className="services-h2">Real-World <span style={{ color: 'red' }}>Benefits</span> That Show Up on the Balance Sheet</span></h2>
                <p>
                  The impact of deploying Computer Vision Services in Ahmedabad, India, isn't just technical; it's financial and operational. Businesses that make the shift typically experience:
                </p>
                <ul className="custom-list mt-1 ml-5 pl-5">
                  <li className="ml-4 mt-0"><b>Dramatically Improved Accuracy:</b> AI vision systems don't blink, get distracted, or have bad days. Defect detection rates and classification accuracy consistently outperform manual review.</li>
                  <li className="ml-4 mt-0"><b>Faster Decision-Making:</b> Visual data is processed in milliseconds. Your operations respond to what's happening right now, not in tomorrow's report.</li>
                  <li className="ml-4 mt-0"><b>Significant Cost Reduction:</b> Automating inspection, monitoring, and classification tasks reduces labour costs and the expense of catching quality issues late in the process.</li>
                  <li className="ml-4 mt-0"><b>Enhanced Security:</b> Real-time monitoring and anomaly detection mean threats or safety incidents are flagged immediately, not discovered after the fact.</li>
                  <li className="ml-4 mt-0"><b>Scalability Without Proportional Cost:</b> Once deployed, a computer vision system can handle ten times the volume with no additional headcount.</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 align-items-center order-1 order-lg-2 pt-4 pt-lg-0">
              <div >
                <img src={servise_image3} alt="Real-World Benefits" className="services_page_image" style={{ width: "600px" }} />
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
                <img src={servise_image1} alt="Why Your AI Partner Matters" className="services_page_image" style={{ width: "600px" }} />
              </div>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <div className="aximo-default-content">
                <h2><span className="services-h2">Why Your AI Partner Matters as <span style={{ color: 'red' }}>Much as the Technology</span></span></h2>
                <p>
                  Computer vision is a powerful technology, but its real-world performance depends entirely on how well it's trained, tuned, and deployed. Models trained on the wrong data, or integrated carelessly into existing systems, deliver disappointing results and erode trust in AI across your organisation.
                </p>
                <p>
                  Chameleo GFX Studio brings together deep expertise in computer vision, machine learning, and systems integration to ensure your solution performs reliably in real production environments. Our team works closely with your stakeholders from discovery through deployment, understanding your visual data, your edge cases, and your business goals before a single model is trained.
                </p>
                <p>
                  Whether you're exploring Computer Vision Solutions in Ahmedabad for the first time or looking to replace an underperforming system, we bring the experience and rigour that complex visual AI demands.
                </p>
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

                  <h2 className="text-center"><span className="services-h2 text-white-smoke">Let's Build Something Your Business Can <span style={{ color: 'red' }}>See Real Value In</span></span></h2>
                  <p className="text-white-smoke text-center mt-4">
                    Visual data is already flowing through your operations. The question is whether you're using it to its full potential. With the right computer vision system in place, you're not just automating a task, you're unlocking a layer of intelligence your business has never had access to before.
                  </p>
                  <p className="text-white-smoke text-center">
                    Reach out to Chameleo GFX Studio today to discuss your vision challenges and discover what AI-powered computer vision can make possible for your industry.
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
              <span className="services-h2 text-lg-center text-left">FAQs on Computer Vision Solutions</span>
            </h2>

            <ServiceAccordion faqData={faqData} defaultOpen={0} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default ComputerVisionSolutionsDetails;
