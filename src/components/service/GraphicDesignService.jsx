import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import SingleImg from "../../assets/images/service/Graphics_01 1.png";
import Star2Img from "../../assets/images/v1/star2.png";
import servise_image2 from "../../assets/images/v1/Process_1 5.png";
import servise_image1 from "../../assets/images/v1/Process_1 1.png";
import servise_image3 from "../../assets/images/v1/Process_1 3.png";
import servise_image4 from "../../assets/images/v1/Process_1 2.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Field from "../common/Field";




const services = [
  {
    title: "Graphics Design",
    items: [
      { text: "Logo Design", link: "/services/graphic-design/logo-design-company" },
      { text: "Branding and Identity Design", link: "/services/graphic-design/branding-and-identity-design-agency" },
      { text: "Social Media Banner Design", link: "/services/graphic-design/social-media-banner-design" },
      { text: "Flyer Design", link: "/services/graphic-design/flyer-design-services" },
      { text: "Brochure Design", link: "/services/graphic-design/brochure-design-company" },
      { text: "Poster Design", link: "/services/graphic-design/poster-design-services" },
      { text: "Hoarding Design", link: "/services/graphic-design/hoarding-design-services" },
      { text: "Packaging Design", link: "/services/graphic-design/packaging-design-agency" },
      { text: "Advertising Design", link: "/services/graphic-design/advertising-design-agency" },
      { text: "Newsletter Design", link: "/services/graphic-design/newsletter-design-service" },
      { text: "Infographic Design", link: "/services/graphic-design/infographic-design-services" },
      { text: "Business Card Design", link: "/services/graphic-design/visiting-card-design-service" },
      { text: "Presentation Design", link: "/services/graphic-design/presentation-design-services" },
      { text: "Magazine and Booklet Design", link: "/services/graphic-design/magazine-and-booklet-design" },
      { text: "Custom Illustration Design", link: "/services/graphic-design/custom-illustration-design" },
      { text: "Event Invitation Design", link: "/services/graphic-design/event-invitation-design" },
      { text: "Menu Design", link: "/services/graphic-design/menu-design-service" },
      { text: "Signage Design", link: "/services/graphic-design/signage-design-service" },
      { text: "Corporate Profile Design", link: "/services/graphic-design/corporate-profile-design" },
      { text: "Annual Report Design", link: "/services/graphic-design/annual-report-design-agency" },
      { text: "Digital Ad Design", link: "/services/graphic-design/digital-ad-design-agency" },
      { text: "Trade Show Booth Design", link: "/services/graphic-design/exhibition-booth-design" },
      { text: "Motion Graphics Design", link: "/services/graphic-design/motion-graphics-design-agency" },
      { text: "E-book Design", link: "/services/graphic-design/e-book-design-service" },
    ],
  },
];

function GraphicDesignService() {
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
    <div className="service-section bg-white-smoke">
      <Helmet>
        <title>Graphic Design Company in Ahmedabad - Chameleo GFX Studio</title>
        <meta
          name="description"
          content="Chameleo GFX Studio is a top graphic design company in Ahmedabad, India. We offer creative logo design, branding, and graphic design services to elevate your brand."
        />
      </Helmet>


      <div className="container pt-5 pt-lg-5">
        <div className="aximo-service-details-wrap">
          <div className="row">
            <div className="col-lg-12 ">
              <div className="aximo-default-content ">
                <h1 className="text-lg-center text-sm-left"><span className="custom-h2"><span style={{ color: 'red' }}>Graphic Design</span> Company in Ahmedabad</span></h1>

                <p className="text-lg-center text-sm-left pt-sm-2 pt-3 pt-lg-0">
                  Graphic design is the creative process of combining text, images, shapes, and colors to convey ideas in a clear and visually appealing manner. One of the strongest assets a business can have is its impact on branding, marketing, and digital presence. From logos and brochures to social media posts and websites, design plays a big role in how people see and remember a brand.</p>


                <p className="text-lg-center text-sm-left">
                  A well-made design is more than just decoration. It tells your story, explains your message, and creates a lasting impression. It makes a brand look professional, trustworthy, and unique. At Chameleo GFX Studio, a leading Graphic Design Company in Ahmedabad, India, to stay ahead in today's competitive market, we also integrate AI-driven market insights and creative strategies to make your designs more impactful.	</p>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-lg-5 py-3">
        <div className="row ">
          <div className="col-lg-6 align-items-center order-2 order-lg-1 pt-4 pt-lg-0">
            <div className="aximo-default-content">
              <h2>
                <span className="services-h2 ">  <span style={{ color: 'red' }}>Why Graphic Design</span> is Important for Businesses?</span>
              </h2>
              <p className="m-0">
                In today’s world, people make quick decisions based on what they see. When your brand looks professional, it naturally earns more trust from people. If it looks messy or unclear, customers may move to your competitors. That is why graphic design is not just about beauty; it is about business success.
              </p><br />
              <p className="m-0"><b>Here’s why design matters so much:</b></p>
              <ul className="custom-list mt-1 ml-5 pl-5">
                <li className="ml-4"><b>Creates a strong identity –</b> A logo, color theme, and style make your brand recognizable.</li>
                <li className="ml-4"><b>Builds trust and credibility –</b> A professional look shows that you care about quality.</li>
                <li className="ml-4"><b>Increases engagement –</b> Eye-catching visuals make people stop, look, and interact.</li>
                <li className="ml-4"><b>Boosts sales –</b> Good design encourages people to buy and stay loyal to your brand.</li>
              </ul>
              <br />
              <p className="m-0">Whether it is a small startup or a big company, every business needs graphic design to stand out and grow.</p>
            </div>
          </div>
          <div className="col-lg-6 align-items-center order-1 order-lg-2 pt-4 pt-lg-0">
            <div >
              <img src={servise_image4} alt="Graphic Design" className="services_page_image" />
            </div>
          </div>
        </div>
      </div>





      <div className="container py-lg-5 py-3">
        <div className="row">
          <div className="col-lg-6 align-items-center pt-4 pt-lg-0">
            <div>
              <img src={servise_image3} alt="Graphic Design" className="services_page_image" />
            </div>
          </div>
          <div className="col-lg-6 align-items-center pt-4 pt-lg-0">
            <div className="aximo-default-content">
              <h2>
                <span className="services-h2">  <span style={{ color: 'red' }}>What We Do</span> at Chameleo GFX Studio?</span>
              </h2>
              <p className="m-0">
                At Chameleo GFX Studio, we help businesses of all sizes create visuals that truly connect with their audience. As one of the top <b>graphic design companies in Ahmedabad, India,</b> we offer a wide range of services:
              </p>
              <ul className="custom-list mt-1 pl-5 pl-sm-4">
                <li className="ml-4"><b>Logo Design and Branding –</b> We design logos that are simple, unique, and memorable. Along with logos, we create full brand identities that include colors, fonts, and styles.</li>
                <li className="ml-4"><b>Brochures and Flyers –</b> Perfect for explaining products and services in an attractive and simple format.</li>
                <li className="ml-4"><b>Social Media Graphics –</b> Posts, stories, and ads designed to grab attention and get likes, shares, and clicks.</li>
                <li className="ml-4"><b>Website Design Elements –</b> Visuals, icons, and layouts that make websites modern, clear, and easy to use.</li>
                <li className="ml-0"><b>Packaging Design –</b> Creative packaging that makes products stand out on shelves and encourages people to buy.</li>
              </ul>
              <br />
              <p className="m-0">Every design is made with your brand’s vision in mind. We make sure it reflects your values and speaks directly to your target customers.</p>
            </div>
          </div>

        </div>
      </div>


      <div className="container py-lg-5 py-3">
        <div className="row">

          <div className="col-lg-6 align-items-center order-2 order-lg-1 pt-4 pt-lg-0">
            <div className="aximo-default-content">
              <h2>
                <span className="services-h2 ">How We Work?</span>
              </h2>
              <ul className="custom-list">
                <li className="ml-4"><b>Understanding Your Needs –</b> We first learn about your business, goals, and audience.</li>
                <li className="ml-4"><b>Idea Development –</b> Our creative team discusses different design options.</li>
                <li className="ml-4"><b>Design Creation –</b> We prepare sample designs and share them with you.</li>
                <li className="ml-4"><b>Feedback and Edits – </b>You tell us what you like, and we make improvements.</li>
                <li className="ml-4"><b>Final Delivery –</b> Once you are happy, we deliver high-quality files ready for use.</li>
              </ul>
              <br />
              <p>
                Throughout this process, we also keep track of AI-driven design trends to make sure your brand looks fresh, modern, and competitive.
              </p>
            </div>
          </div>
          <div className="col-lg-6 align-items-center order-1 order-lg-2 pt-4 pt-lg-0">
            <div >
              <img src={servise_image1} alt="Graphic Design" className="services_page_image" />
            </div>
          </div>
        </div>
      </div>

      <div className="container py-lg-5 py-3">
        <div className="row">
          <div className="col-lg-6 align-items-center  pt-4 pt-lg-0">
            <div >
              <img src={servise_image2} alt="Graphic Design" className="services_page_image" />
            </div>
          </div>
          <div className="col-lg-6 align-items-center pt-4 pt-lg-0 ">
            <div className="aximo-default-content">
              <h2>
                <span className="services-h2">  <span style={{ color: 'red' }}>Why Choose</span> Chameleo GFX Studio in Ahmedabad?</span>
              </h2>
              <ul className="custom-list m-2">
                <li className="ml-4"><b>Creative and fresh ideas –</b> We bring originality to every project.</li>
                <li className="ml-4"><b>High-quality results –</b> Our designs are sharp, polished, and professional.</li>
                <li className="ml-4"><b>Custom solutions –</b> Since every business is unique, we create designs that reflect that individuality.</li>
                <li className="ml-4"><b>Experienced team –</b> We have worked with multiple industries and understand different needs.</li>
                <li className="ml-4"><b>Affordable pricing – </b>Great design does not always need to be expensive.</li>
              </ul>
              <br />
              <p>We combine creativity with strategy so that your brand not only looks good but also achieves results.</p>
            </div>
          </div>

        </div>
      </div>
      <div className="container py-lg-5 py-3 " id='contact-form'>
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0 pr-5  mr-5">
            <div className="servisepage-form-section servisepage-form-section-1 pr-5">
              <h2>Optimize your Business Hours Efficiently  </h2>
            </div>

            <div className="d-flex justify-content-between align-items-left py-3 mt-4" >
              <div className="text-left text-md-center">
                <h3 className="text-danger fw-bold mb-0 our_efficiently">5K+</h3>
                <small className="text-muted our_efficiently_1">Projects Delivered</small>
              </div>
              <div className="text-left text-md-center">
                <h3 className="text-danger fw-bold mb-0 our_efficiently">11+</h3>
                <small className="text-muted our_efficiently_1">Years of Experience</small>
              </div>
              <div className="text-left text-md-center">
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


      <div className="design-body-wrapper mt-lg-5 mt-3" >
        <div className="container">
          <div className="container py-5">
            <div className="design-main-card">
              <div className="row gy-4">
                <div className="col-lg-5 col-md-5">
                  <div className="design-title-section">
                    <h1 className="design-title-heading">The Role of Design in Today's Digital World.</h1>
                  </div>
                </div>

                <div className="col-lg-7 col-md-7">
                  <div className="design-timeline-wrapper">
                    <div className="design-timeline-vertical-line"></div>

                    <div className="design-timeline-single-item">
                      <div className="design-timeline-circle-dot"></div>
                      <div className="design-info-content-box">
                        <p className="design-info-text-paragraph">Websites build confidence and bring local customers for small businesses.</p>
                      </div>
                    </div>

                    <div className="design-timeline-single-item">
                      <div className="design-timeline-circle-dot"></div>
                      <div className="design-info-content-box">
                        <p className="design-info-text-paragraph">Websites drive sales with hassle-free shopping experiences for e-commerce stores.</p>
                      </div>
                    </div>

                    <div className="design-timeline-single-item">
                      <div className="design-timeline-circle-dot"></div>
                      <div className="design-info-content-box">
                        <p className="design-info-text-paragraph">Websites enhance brand image and deliver critical updates for corporates.</p>
                      </div>
                    </div>

                    <div className="design-timeline-single-item">
                      <div className="design-timeline-circle-dot"></div>
                      <div className="design-info-content-box">
                        <p className="design-info-text-paragraph">A properly developed website is the core of your growth and digital marketing strategy.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="container pt-5">
          {services.map((service, index) => (
            <div key={index}>
              <div className="aximo-section-title main center">
                <h2>
                  <span className="services">
                    {service.title}

                  </span>
                </h2>
              </div>

              <div className="row">
                <div className="col-12 d-flex flex-wrap justify-content-center">
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <ul className="badge bg-black custom-hover p-2 m-2">
                        <li>
                          <a
                            href={item.link}
                            rel="noopener noreferrer"
                            className="link-tegs text-white text-decoration-none"
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

        <div className="container-fluid bg-black mt-5 ">
          <div className="container-fluid bg-black py-5 mt-5 ">
            <div className="container ">
              <div className="row bg-black text-white p-lg-4 p-0  rounded">
                <div className="row bg-black text-white rounded">
                  <div className="col-lg-12 align-items-center">
                    <div className="aximo-default-content">
                      <h2 className="text-center">
                        <span className="services-h2 text-white-smoke text-center">Final Words</span>
                      </h2>

                      <p className="text-center text-white-smoke">
                        Graphic design is much more than making things pretty. It is about communication, trust, and creating an identity that people remember. At <b>Chameleo GFX Studio in Ahmedabad,</b> we specialize in crafting designs that not only look great but also help businesses grow.
                      </p>
                      <p className="text-center text-white-smoke">
                        Whether you need a logo, a brochure, or a complete brand identity, our team is ready to deliver designs that truly make an impact. With Chameleo GFX Studio, your brand will not just exist. It will shine.
                      </p>

                      <p className="text-center text-white-smoke">
                        Because for us, <b>design is not just our work. It’s our passion.</b>
                      </p>

                      <div className="text-center">
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
        </div>
      </div>
      {/* Services List */}

    </div>
  );
}

export default GraphicDesignService;
