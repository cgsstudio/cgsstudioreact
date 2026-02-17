import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import BlogHero from "../../components/common/BlogHero";
import ServiceAccordion from "../../components/common/ServiceAccordion"; // Accordion component
import uiux_image1 from "../../assets/images/v1/ui-ux-1.webp";
import uiux_image2 from "../../assets/images/v1/ui-ux-2.webp";
import uiux_image3 from "../../assets/images/v1/ui-ux-3.webp";
import uiux_image4 from "../../assets/images/v1/ui-ux-4.webp";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Field from "../common/Field";


const services = [
  {
    title: "UI/UX Design",
    items: [
      { text: "Website UI/UX Design", link: "/website-ui-ux-design" },
      { text: "iOS UI/UX Design", link: "/ios-ui-ux-design" },
      { text: "Android UI/UX Design", link: "/android-ui-ux-design" },
      { text: "Backend UI/UX Design", link: "/backend-ui-ux-design" },
      { text: "ERP UI/UX Design", link: "/erp-ui-ux-design" },
    ],
  },
];

const faqData = [
  {
    question: "What is UI/UX design in simple words?",
    answer:
      "It’s about making websites and apps look attractive, easy to use, and enjoyable.",
  },
  {
    question: "What’s the difference between UI and UX?",
    answer:
      "UI is the look (colors, buttons, fonts). UX is the feel (ease, flow, and experience).",
  },
  {
    question: "Why is UI/UX important for my business?",
    answer:
      "It builds trust, improves sales, and keeps customers returning.",
  },
  {
    question: "How does UI/UX design increase sales?",
    answer:
      "When users enjoy the process, they buy more and stay longer.",
  },
  {
    question: "Can small businesses benefit from UI/UX?",
    answer:
      "Yes! A user-friendly design helps even small businesses attract more customers.",
  },
  {
    question: "Why choose Chameleo GFX Studio in Ahmedabad?",
    answer:
      "Because we deliver creative, user-focused, and affordable designs that help businesses grow.",
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

function ServiceDetails() {
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
    <div className="section ">
      <Helmet>
        <title>Best UI/UX Design Agency in Ahmedabad</title>
        <meta
          name="description"
          content="Chameleo GFX Studio is the best UI/UX Design Agency in Ahmedabad. We create beautiful, user-friendly websites, apps, and digital products that boost sales and customer trust."
        />
        <meta
          name="keywords"
          content="UI/UX Design Company in Ahmedabad, UI Design Services, UX Design Services, App UI Design, Website UX Design"
        />
        <link
          rel="canonical"
          href="https://chameleogfxstudio.com/ui-ux-design-agency-in-ahmedabad"
        />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="container pt-5">
        <div className="aximo-default-content text-lg-center">
          <h1 className="text-lg-center text-sm-left"><span className="custom-h2"><span style={{ color: 'red' }}>Best UI/UX Design </span> Design Agency in Ahmedabad</span></h1>

          <p className="text-lg-center text-sm-left pt-sm-2 pt-3 pt-lg-0">
            At Chameleo GFX Studio, we believe good design is more than just looks; it’s about creating digital experiences that feel effortless. UI/UX design may sound technical, but in simple words, it’s about making websites, apps, and software easy to use, enjoyable, and meaningful for your audience.</p>
          <ul className="custom-list mb-2">
            <li className="m-lg-0 m-sm-2"><b>UI (User Interface)</b> is all about the visuals like colors, buttons, icons, and overall layout.</li>
            <li className="m-lg-0 m-sm-2"><b>UX (User Experience)</b> focuses on how people interact with it whether it’s smooth, simple, and satisfying.</li>
          </ul>
          <p className="text-lg-center text-sm-left pt-sm-2 pt-3 pt-lg-0">
            Think about your favorite app: you know exactly where to tap, the design feels clean and inviting, and everything works fast. That’s the power of great UI/UX.
          </p>
          <p className="text-lg-center text-sm-left pt-sm-2 pt-3 pt-lg-0">
            As a leading UI/UX Design Company in Ahmedabad, Chameleo GFX Studio combines creativity with AI-driven insights to design digital products that are visually stunning, user-friendly, and built for modern audiences.
          </p>

        </div>
      </div>

      {/* Why UI/UX Design Matters */}
      <div className="container pt-5">
        <div className="aximo-service-details-wrap">
          <div className="row">
            <div className="col-lg-6 align-items-center order-2 order-md-1">
              <div className="aximo-default-content">
                <h2><span className="services-h2 mt-lg-0 mt-lg-0 mt-4">Why UI/UX Design Matters?</span></h2>
                <p>No matter how great your product is, a poor design can drive users away. Today’s customers expect speed, clarity, and simplicity online. Good UI/UX design helps businesses make strong first impressions, build trust, and keep customers coming back.
                </p>
                <p>  Here’s why it’s so important: </p>
                <ul className="custom-list mt-1">
                  <li className="m-lg-0 m-sm-2"><b>First impressions count –</b> Users judge in seconds.</li>
                  <li className="m-lg-0 m-sm-2"><b>Easy navigation –</b> Clear layouts keep people engaged.</li>
                  <li className="m-lg-0 m-sm-2"><b>Builds credibility –</b> A polished experience shows professionalism.</li>
                  <li className="m-lg-0 m-sm-2"><b>Boosts conversions –</b> Smooth designs make buying simple.</li>
                  <li className="v"><b>Encourages loyalty –</b> Happy users always return.</li>
                </ul><br />
                <p>At Chameleo GFX Studio, we ensure your platforms are not only visually appealing but also smooth and effortless to use.</p>
              </div>
            </div>
            <div className="col-lg-6 align-items-center order-1 order-md-2">
              <div>
                <img src={uiux_image1} alt="Graphic Design" className="services_page_image img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our UI/UX Services in Ahmedabad */}
      <div className="container pt-5">
        <div className="aximo-service-details-wrap">
          <div className="row">
            <div className="col-lg-6 align-items-center">
              <div>
                <img src={uiux_image3} className="ui-ux_image2 img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 align-items-center ">
              <div className="aximo-default-content ">
                <h2 className="services-h2 mt-lg-0 mt-4">
                  <span >Our UI/UX Services in Ahmedabad</span>
                </h2><br />
                <p>As one of the most trusted UI/UX design companies in Ahmedabad, we provide end-to-end design solutions tailored to your business needs:</p>
                <ul className="custom-list mt-1 ml-2">
                  <li className="m-lg-0 m-sm-2"><b>Website UI/UX Design –</b> Modern, responsive, and easy-to-navigate sites.</li>
                  <li className="m-lg-0 m-sm-2"><b>Mobile App UI/UX Design –</b> Creating professional, engaging apps that users enjoy.</li>
                  <li className="m-lg-0 m-sm-2"><b>Wireframes & Prototypes –</b> Early drafts to visualize structure and flow.</li>
                  <li className="m-lg-0 m-sm-2"><b>User Research & Testing –</b> Real user insights to optimize performance.</li>
                  <li className="m-lg-0 m-sm-2"><b>Dashboard & Software Design –</b> Simplifying data into clean, readable visuals.</li>
                </ul><br />
                <p>Every design is crafted with your audience in mind, making every click, swipe, and scroll enjoyable.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Contect Form */}
      <div className="container py-5" id="contact-form">
        <div className="row align-items-center" >
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="servisepage-form-section servisepage-form-section-1">
              <h2>Optimize your Business Hours Efficiently  </h2>
            </div>

            <div className="d-flex justify-content-between align-items-left py-3 mt-4">
              <div className="https://prnt.sc/lIfcJEfFEPPm">
                <h3 className="text-danger fw-bold mb-0 our_efficiently">5K+</h3>
                <small className="text-muted our_efficiently_1">Projects Delivered</small>
              </div>
              <div className="https://prnt.sc/lIfcJEfFEPPm">
                <h3 className="text-danger fw-bold mb-0 our_efficiently">11+</h3>
                <small className="text-muted our_efficiently_1">Years of Experience</small>
              </div>
              <div className="https://prnt.sc/lIfcJEfFEPPm">
                <h3 className="text-danger fw-bold mb-0 our_efficiently">100%</h3>
                <small className="text-muted our_efficiently_1">Success Projects</small>
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

      {/* The Role of Design in Today's Digital World. */}
      <div className="design-body-wrapper">
        <div className="container py-5">
          <div className="design-main-card">
            <div className="row gy-4">
              <div className="col-lg-5 col-md-5">
                <div className="design-title-section">
                  <h1 className="design-title-heading">The Role of UI/UX Design in Today's Digital World..</h1>
                </div>
              </div>

              <div className="col-lg-7 col-md-7">
                <div className="design-timeline-wrapper">
                  <div className="design-timeline-vertical-line"></div>

                  <div className="design-timeline-single-item">
                    <div className="design-timeline-circle-dot"></div>
                    <div className="design-info-content-box">
                      <p className="design-info-text-paragraph">On websites, design influences how long visitors stay.</p>
                    </div>
                  </div>

                  <div className="design-timeline-single-item">
                    <div className="design-timeline-circle-dot"></div>
                    <div className="design-info-content-box">
                      <p className="design-info-text-paragraph">On apps, design decides whether users keep or delete it.</p>
                    </div>
                  </div>

                  <div className="design-timeline-single-item">
                    <div className="design-timeline-circle-dot"></div>
                    <div className="design-info-content-box">
                      <p className="design-info-text-paragraph">In software, design impacts efficiency and productivity.</p>
                    </div>
                  </div>

                  <div className="design-timeline-single-item">
                    <div className="design-timeline-circle-dot"></div>
                    <div className="design-info-content-box">
                      <p className="design-info-text-paragraph">Strong UI/UX is the secret to customer satisfaction, retention, and long-term growth.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our UI/UX Design Process */}
      <div className="container pt-5">
        <div className="aximo-service-details-wrap">
          <div className="row">
            <div className="col-lg-6 align-items-center order-2 order-md-1">
              <div className="aximo-default-content">
                <h2>
                  <span className="services-h2 mt-lg-0 mt-4">Our UI/UX Design Process</span>
                </h2>
                <ul className="custom-list">
                  <li className="m-lg-0 m-sm-2"><b>Discovery –</b> Understand your business, goals, and users.</li>
                  <li className="m-lg-0 m-sm-2"><b>Research –</b> Study customer behavior and competitor benchmarks.</li>
                  <li className="m-lg-0 m-sm-2"><b>Wireframing –</b> Create layouts to plan structure and flow.</li>
                  <li className="m-lg-0 m-sm-2"><b>Designing –</b> Add visuals, colors, and styles.</li>
                  <li className="m-lg-0 m-sm-2"><b>Testing –</b> Get real user feedback and refine.</li>
                  <li className="m-lg-0 m-sm-2"><b>Delivery –</b> Provide a polished, development-ready design.</li>
                </ul><br />
                <p>This process guarantees smooth, user-friendly digital experiences for your customers. </p>
              </div>
            </div>
            <div className="col-lg-6 align-items-center order-1 order-md-2">
              <div>
                <img src={uiux_image2} className="ui-ux_image2 img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Chameleo GFX Studio? */}
      <div className="container pt-5">
        <div className="aximo-service-details-wrap">
          <div className="row">
            <div className="col-lg-6 align-items-center">
              <div>
                <img src={uiux_image4} alt="Graphic Design" className="ui-ux_image4 img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 align-items-center">
              <div className="aximo-default-content">
                <h2>
                  <span className="services-h2 mt-lg-0 mt-4">Why Choose Chameleo GFX Studio?</span>
                </h2>
                <p>We design not just for looks, but with clear purpose and meaning. Here’s what sets us apart: </p>
                <ul className="custom-list">
                  <li className="m-lg-0 m-sm-2"><b>User-first approach –</b> Focused on real people, not just visuals.</li>
                  <li className="m-lg-0 m-sm-2"><b>Modern, creative designs –</b> Trendy yet professional.</li>
                  <li className="m-lg-0 m-sm-2"><b>Effortless usability –</b> Making every interaction feel smooth and natural.</li>
                  <li className="m-lg-0 m-sm-2"><b>Experienced team –</b> Expertise across industries.</li>
                  <li className="m-lg-0 m-sm-2"><b>High-quality design –</b> Delivering premium creativity at a fair price.</li>
                </ul><br />
                <p>Our goal is to make your brand look great and keep your users coming back for more.  </p>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* Services page link */}
      <div className="container pt-5">
        <div className="aximo-service-details-wrap">

          {/* Services List */}
          {services.map((service, index) => (
            <div key={index}>
              <h2 className="text-center"><span className="services-h2">  {service.title}</span></h2>


              {/* Add g-4 for spacing between columns */}
              <div className="row g-4 pt-5">
                {service.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="col-12 col-md-3  pb-3 justify-content-start align-items-center text-center text-md-start" >
                    <ul className="badge bg-black custom-hover">
                      <li> <a href={item.link} rel="noopener noreferrer" className="link-tegs text-white text-decoration-none" >  {item.text}  </a> </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>


      {/* Final Words */}
      <div className="containar-flude bg-black mt-5 ">
        <div className="container pt-5 pb-5">
          <div className="aximo-service-details-wrap">
            <div className="row text-white text-center">
              <div className="aximo-default-content">
                <h2>
                  <span className="services-h2 text-white-smoke text-center">Creating Meaningful Digital Experiences with UI UX Design Company in Ahmedabad </span>
                </h2>
                <p className='text-white-smoke text-center'>UI/UX design isn't just about looks, it's about creating smooth, meaningful digital journeys. At <b>Chameleo GFX Studio in Ahmedabad,</b> we blend creativity with AI-powered insights to build designs that your users will love. Whether it's a website, app, or digital product, our team ensures your brand doesn't just stand out but also provides the <b>best user experience possible.</b> Because at Chameleo GFX Studio, we design for people, <b>not just screens.</b> </p>
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

      {/* FAQ Section */}
      <section className="faq-section py-5 bg-white-smoke">
        <div className="container pt-5">
          <h2 className="mb-4 text-center">FAQs About UI/UX Design</h2>
          <ServiceAccordion items={faqData} defaultOpen={0} />
        </div>
      </section>
    </div >
  );
}

export default ServiceDetails;
