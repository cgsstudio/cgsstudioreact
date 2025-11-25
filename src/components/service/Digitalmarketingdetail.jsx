import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

import ServiceAccordion from "../../components/common/ServiceAccordion";
import Field from '../common/Field';

import servise_image4 from "../../assets/images/v1/Digital_marketing01.webp";
import servise_image3 from "../../assets/images/v1/Digital_marketing02.webp";
import servise_image1 from "../../assets/images/v1/Digital_marketing03.webp"; // Renamed from servise_image1 to servise_image5
import servise_image5 from "../../assets/images/v1/Digital_marketing04.webp";
import SingleImg from "../../assets/images/v1/Group 122.webp";

const services = [
  {
    title: "Digital Marketing",
    items: [
      { text: "Digital Marketing", link: "/digital-marketing" },
      { text: "Search Engine Optimization (SEO)", link: "/search-engine-optimization" },
      { text: "Social Media Marketing", link: "/social-media-marketing" },
      { text: "Email Marketing", link: "/email-marketing" },
      { text: "Google Ads", link: "/google-ads" },
      { text: "Meta Ads", link: "/meta-ads" },
    ],
  },
];

const faqData = [
  {
    question: "What is digital marketing in simple terms?",
    answer: "Digital marketing is promoting a business using online tools such as Google, social media, and email.",
  },
  {
    question: "Why do businesses need digital marketing?",
    answer: "Because the majority of customers are on the internet. Without it, you're invisible, don't get leads, and have no sales.",
  },
  {
    question: "Why is digital marketing superior to traditional marketing?",
    answer: "It's cheaper, focused, and quantifiable. You have full control over how much you spend and what you receive.",
  },
  {
    question: "What businesses require digital marketing?",
    answer: "All businesses, small, medium, or big, can benefit from being online.",
  },
  {
    question: "How soon can I see the results?",
    answer: "SEO takes several months, whereas paid advertising and social media campaigns exhibit quicker results.",
  },
  {
    question: "Does Chameleo GFX Studio offer tailor-made plans?",
    answer: "Absolutely! We design strategies based on your line of industry, budget, and aims.",
  },
  {
    question: "Why Chameleo GFX Studio for digital marketing in Ahmedabad?",
    answer: "Each business is different, so we develop personalized strategies according to your objectives, blending creativity, data, and AI-driven insights to drive maximum outcomes.",
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

function DigitalMarketingDetail() {
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
    <div className="service-section">
      <Helmet>
        <title>Digital Marketing Company in Ahmedabad - Chameleo GFX Studio</title>
        <meta
          name="description"
          content="Chameleo GFX Studio offers comprehensive digital marketing services in Ahmedabad, including SEO, social media, Google Ads, and email marketing to boost your online presence."
        />
        <link
          rel="canonical"
          href="https://chameleogfxstudio.com/digital-marketing-company-in-ahmedabad"
        />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="container pt-5 pt-lg-5">
        <div className="aximo-service-details-wrap">
          {/* <div className="aximo-service-details-thumb">
            <img src={SingleImg} alt="Digital Marketing" />
          </div> */}

          <div className="row">
            <div className="col-lg-12">
              <div className="aximo-default-content">
                <h1 className="text-lg-center text-sm-left"><span className="custom-h2"><span style={{ color: 'red' }}>Digital Marketing</span> Agency in India</span></h1>

                <p className="text-lg-center text-sm-left pt-sm-2 pt-3 pt-lg-0">
                  Digital marketing is the science and art of marketing your company online. It employs tools such as Google, social media, emails, and websites to connect with the right audience at the right moment. To put it simply, it's how brands are seen in the digital world.
                </p>

                <p className="text-lg-center text-sm-left">
                  Consider your own day-to-day existence: you Google, browse Instagram, view videos on YouTube, or read emails. Whatever advertisement, posting, or campaign you view is digital marketing. Companies that leverage it effectively have more people to reach, grow faster, and establish better relationships with customers.
                </p>

                <p className="text-lg-center text-sm-left">
                  At Chameleo GFX Studio, one of the premier Digital Marketing Companies in Ahmedabad, we develop strategies that make your brand noticeable, engage with your audience, and generate results. Our strategy is a blend of creativity, technology, and AI-driven decision-making for maximum effect.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-lg-5 py-3">
        <div className="row">
          <div className="col-lg-6 align-items-center order-2 order-lg-1 pt-4 pt-lg-0">
            <div className="aximo-default-content">
              <h2><span className="services-h2"><span style={{ color: 'red' }}>Why Digital Marketing </span>is Important?</span></h2>
              <p>
                Old-school marketing, such as billboards and flyers, is still effective, but in the digital age, most of our customers are online. If you are not there, you are leaving tremendous opportunities behind.
              </p>
              <p><b>
                Here's why digital marketing is necessary for all businesses: </b> </p>
              <ul className="custom-list mt-1 ml-5 pl-5">
                <li className="ml-4 mt-0"><b>Global reach –</b> Spread your brand beyond the city or country that you are in.</li>
                <li className="ml-4 mt-0"><b>Targeted campaigns –</b> Target only those who have an interest in your products.</li>
                <li className="ml-4  mt-0"><b>Affordable –</b> Online ads tend to cost less than offline ads.</li>
                <li className="ml-4 mt-0"><b>Measurable results –</b> Real-time metrics on what's going well and what's not.</li>
                <li className="ml-4 mt-0"><b>Engagement builder –</b> Reach out to customers through likes, comments, shares, and reviews.</li>
                <li className="ml-4 mt-0"><b>Improves sales –</b> Increased visibility and engagement result in more sales.</li>
              </ul><br />

              <p>
                At Chameleo GFX Studio, we create AI-powered digital marketing strategies that convert clicks to customers and campaigns to growth.
              </p>
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
            <div >
              <img src={servise_image3} alt="Graphic Design" className="services_page_image" />
            </div>
          </div>
          <div className="col-lg-6 align-items-center pt-4 pt-lg-0">
            <div className="aximo-default-content">
              <h2><span className="services-h2"><span style={{ color: 'red' }}>What We Do </span>at Chameleo GFX Studio?</span></h2>
              <ul className="custom-list mt-1 ml-5 pl-5">
                <li className="ml-4 mt-0"><b>Search Engine Optimization (SEO) –</b> Enhancing your website's ranking on Google to attract more visitors.</li>
                <li className="ml-4 mt-0"><b>Pay-Per-Click Advertising (PPC) –</b> Displaying targeted ads on Google and other platforms for instant results.</li>
                <li className="ml-4 mt-0"><b>Social Media Marketing (SMM) –</b> Managing Facebook, Instagram, LinkedIn, and more to establish a robust brand presence.</li>
                <li className="ml-4 mt-0"><b>Content Marketing –</b> Developing blogs, articles, and posts that resonate and engage your audience.</li>
                <li className="ml-4 mt-0"><b>Email Marketing –</b> Transmitting bespoke campaigns that cultivate customer relationships.</li>
                <li className="ml-4 mt-0"><b>Online Reputation Management (ORM) –</b> Establishing and safeguarding your brand image online.</li>
                <li className="ml-4 mt-0"><b>Analytics and Reporting –</b> Measuring results and refining strategies for optimal impact.</li>
              </ul><br />
              <p>
                Every business is different, so we craft personalized strategies specific to your objectives, whether it's generating more leads, sales, or brand visibility.
              </p>
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

            <div className="d-flex justify-content-between align-items-left py-3 mt-4">
              <div className="text-center">
                <h3 className="text-danger fw-bold mb-0 our_efficiently">5K+</h3>
                <small className="text-muted our_efficiently_1">Projects Delivered</small>
              </div>
              <div className="text-center">
                <h3 className="text-danger fw-bold mb-0 our_efficiently">11+</h3>
                <small className="text-muted our_efficiently_1">Years of Experience</small>
              </div>
              <div className="text-center">
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
              <div className="row">
                <div className="col-lg-5 col-md-5">
                  <div className="design-title-section">
                    <h1 className="design-title-heading">The Digital<br />Marketing<br />Role in the <br />Modern<br />World.</h1>
                  </div>
                </div>

                <div className="col-lg-7 col-md-7">
                  {/* <div >
                    <p className="design-info-text-paragraph">Today, customers spend hours online every day. From online shopping to learning to entertainment, everything is digital. As a business, it means that digital marketing is no longer a choice, it's obligatory.</p>
                  </div> */}

                  <div className="design-timeline-wrapper">
                    <div className="design-timeline-vertical-line"></div>


                    <div className="design-timeline-single-item">
                      <div className="design-timeline-circle-dot"></div>
                      <div className="design-info-content-box">
                        <p className="design-info-text-paragraph">For SMEs, digital marketing generates visibility and trust.</p>
                      </div>
                    </div>

                    <div className="design-timeline-single-item">
                      <div className="design-timeline-circle-dot"></div>
                      <div className="design-info-content-box">
                        <p className="design-info-text-paragraph">For online businesses, it generates traffic, sales, and repeat business.</p>
                      </div>
                    </div>

                    <div className="design-timeline-single-item">
                      <div className="design-timeline-circle-dot"></div>
                      <div className="design-info-content-box">
                        <p className="design-info-text-paragraph">For corporates, it enhances branding and market control.</p>
                      </div>
                    </div>


                  </div>
                  {/* <div >
                    <p className="design-info-text-paragraph">In short, digital marketing is the quickest and wisest way to expand in today's competitive world.</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-lg-5 py-3">
        <div className="row">
          <div className="col-lg-6 align-items-center order-2 order-lg-1 pt-4 pt-lg-0">
            <div className="aximo-default-content">
              <h2><span className="services-h2">Our Digital Marketing Process</span></h2>
              <p>
                Structured, data-driven marketing is what we believe in. Here's what we do at Chameleo GFX Studio:
              </p>
              <ul className="custom-list mt-1 ml-5 pl-5">
                <li className="ml-4"><b>Research & Analysis –</b> Learning about your business, competitors, and target market.</li>
                <li className="ml-4"><b>Strategy Building –</b> Creating a plan that fits your objectives and budget.</li>
                <li className="ml-4"><b>Campaign Deployment –</b> Executing ads, SEO, social media, or content campaigns.</li>
                <li className="ml-4"><b>Tracking –</b> Monitoring performance with analytics tools.</li>
                <li className="ml-4"><b>Optimization –</b> Adjusting for increased outcome.</li>
                <li className="ml-4"><b>Reporting –</b> Presenting clear insights on growth and progress.</li>
              </ul><br />
              <p>
                This structured process ensures your business derives maximum value from each campaign.
              </p>
            </div>
          </div>
          <div className="col-lg-6 align-items-center order-1 order-lg-2 pt-4 pt-lg-0">
            <div >
              <img src={servise_image1} alt="Digital Marketing Process" className="services_page_image" />
            </div>
          </div>
        </div>
      </div>

      <div className="container py-lg-5 py-3">
        <div className="row">
          <div className="col-lg-6 align-items-center pt-4 pt-lg-0">
            <div>
              <img src={servise_image5} alt="Why Chameleo GFX Studio" className="services_page_image" />
            </div>
          </div>
          <div className="col-lg-6 align-items-center pt-4 pt-lg-0">
            <div className="aximo-default-content">
              <h2><span className="services-h2">Why Chameleo GFX Studio for Digital Marketing?</span></h2>
              <ul className="custom-list mt-1 ml-5 pl-5">
                <li className="ml-4 mt-0"><b>Evidence-based approaches –</b> We prioritize actual outcomes, not ego metrics.</li>
                <li className="ml-4 mt-0"><b>All customers are our customers –</b> From SEO to social media to ads, we do it all.</li>
                <li className="ml-4 mt-0"><b>Creative content –</b> Shareable images and posts that get people talking.</li>
                <li className="ml-4 mt-0"><b>Data-driven strategy –</b> Every decision supported by analytics and insights.</li>
                <li className="ml-4 mt-0"><b>Low-cost packages –</b> Scalable plans for startups, SMEs, and enterprises.</li>
                <li className="ml-4 mt-0"><b>Personalized support –</b> We care about your business like it's our own.</li>
              </ul><br />
              <p>
                We blend creativity and technology at Chameleo GFX Studio to provide campaigns that perform.
              </p>
            </div>
          </div>
        </div>
      </div>

              {/* Services List */}
      <div className="container pt-5">
        {services.map((service, index) => (
          <div key={index}>
            <div className="aximo-section-title main center">
              <h2><span className="services">{service.title}</span></h2>
            </div>
            <div className="col-12 d-flex flex-wrap justify-content-center">
              {service.items.map((item, itemIndex) => (
                <div key={itemIndex}>
                  <ul className="badge bg-black custom-hover p-2 m-2">
                    <li className="ml-4 mt-0">
                      <a href={item.link} rel="noopener noreferrer" className="link-tegs text-white text-decoration-none">
                        {item.text}
                      </a>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="design-body-wrapper mt-lg-5 mt-3" >
        <div className="container-fluid bg-black mt-5 ">
          <div className="container-fluid bg-black py-5 mt-5 ">
            <div className="container ">
              <div className="row bg-black text-white p-lg-4 p-0  rounded">
                <div className="row bg-black text-white rounded">
                  <div className="col-lg-12 align-items-center">
                    <div className="aximo-default-content">
                      <h2 className="text-center">
                        <span className="services-h2 text-white text-center">Final Words</span>
                      </h2>

                      <p className="text-center">
                        Digital marketing is the pulse of contemporary business growth. At Chameleo GFX Studio in Ahmedabad, we design strategies that improve visibility, bring customers, and generate sales.
                      </p>
                      <p className="text-center">
                        Whether you're a new startup wanting to create buzz or an established brand wanting to grow, our digital marketing professionals are here for you. With the perfect combination of creativity, strategy, data, and future-proof AI trends, we ensure your business stands out online.
                      </p>

                      <p className="text-center">
                        Because at Chameleo GFX Studio, we don't merely market brands, we craft success stories.
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

      

      {/* FAQ Section */}
      <section className="faq-section py-5">
        <div className="container">
          <h2 className="mb-4 text-center">
            <span className="custom-h2">FAQs on Digital Marketing</span>
          </h2>
          <ServiceAccordion items={faqData} defaultOpen={0} />
        </div>
      </section>


    </div>
  );
}

export default DigitalMarketingDetail;
