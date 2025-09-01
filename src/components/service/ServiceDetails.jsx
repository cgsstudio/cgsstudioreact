import { Helmet } from "react-helmet";
import SingleImg from "../../assets/images/service/uiux.jpg";
import Star2Img from "../../assets/images/v1/star2.png";
import ServiceAccordion from "../../components/common/ServiceAccordion"; // Accordion component

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
  return (
    <div className="section aximo-section-padding2">
      <Helmet>
        <title>UI/UX Design Company in Ahmedabad - Chameleo GFX Studio</title>
        <meta
          name="description"
          content="Chameleo GFX Studio provides professional UI/UX design services in Ahmedabad. We create beautiful, user-friendly websites, apps, and digital products that boost sales and customer trust."
        />
        <meta
          name="keywords"
          content="UI/UX Design Company in Ahmedabad, UI Design Services, UX Design Services, App UI Design, Website UX Design"
        />
        <link
          rel="canonical"
          href="https://chameleogfxstudio.com/ui-ux-design-company-in-ahmedabad"
        />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="container">
        <div className="aximo-service-details-wrap">
          <div className="aximo-service-details-thumb">
            <img src={SingleImg} alt="UI UX Design" />
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="aximo-default-content">
                <h1>
                  <span className="custom-h2">
                    UI/UX Design Company in Ahmedabad
                    <span className="aximo-title-icon">
                      <img src={Star2Img} alt="star" />
                    </span>
                  </span>
                </h1>

                <p>
                  At Chameleo GFX Studio, we believe good design is more than just looks; it’s about creating digital experiences that feel effortless. UI/UX design may sound technical, but in simple words, it’s about making websites, apps, and software <b>easy to use, enjoyable, and meaningful</b> for your audience.
                </p>

                <ul className="custom-list">
                  <li><b>UI (User Interface)</b> is all about the visuals like colors, buttons, icons, and overall layout.</li>
                  <li><b>UX (User Experience)</b> focuses on how people interact with it whether it’s smooth, simple, and satisfying.</li>
                </ul><br />

                <p>
                  Think about your favorite app: you know exactly where to tap, the design feels clean and inviting, and everything works fast. That’s the power of great UI/UX.
                </p>

                <p>
                  As a leading <b>UI/UX Design Company in Ahmedabad</b>, Chameleo GFX Studio combines creativity with AI-driven insights to design digital products that are visually stunning, user-friendly, and built for modern audiences.
                </p>

                <h2>
                  <span className="custom-h2">Why UI/UX Design Matters?</span>
                </h2>
                <p>
                  No matter how great your product is, a poor design can drive users away. Today’s customers expect speed, clarity, and simplicity online. Good UI/UX design helps businesses <b>make strong first impressions, build trust, and keep customers coming back.</b>
                </p>
                <p>  Here’s why it’s so important: </p>
                <ul className="custom-list">
                  <li><b>First impressions count –</b> Users judge in seconds.</li>
                  <li><b>Easy navigation –</b> Clear layouts keep people engaged.</li>
                  <li><b>Builds credibility –</b> A polished experience shows professionalism.</li>
                  <li><b>Boosts conversions –</b> Smooth designs make buying simple.</li>
                  <li><b>Encourages loyalty –</b> Happy users always return.</li>
                </ul><br />
                <p>At Chameleo GFX Studio, we ensure your platforms are not only visually appealing but also smooth and effortless to use.</p>

                <h2>
                  <span className="custom-h2">Our UI/UX Services</span>
                </h2><br />
                <p>As one of the most trusted UI/UX design companies in Ahmedabad, we provide end-to-end design solutions tailored to your business needs:</p>
                <ul className="custom-list">
                  <li><b>Website UI/UX Design –</b> Modern, responsive, and easy-to-navigate sites.</li>
                  <li><b>Mobile App UI/UX Design –</b> Creating professional, engaging apps that users enjoy.</li>
                  <li><b>Wireframes & Prototypes –</b> Early drafts to visualize structure and flow.</li>
                  <li><b>User Research & Testing –</b> Real user insights to optimize performance.</li>
                  <li><b>Dashboard & Software Design –</b> Simplifying data into clean, readable visuals.</li>
                </ul><br />
                <p>Every design is crafted with your audience in mind, making every click, swipe, and scroll enjoyable.</p>
                <h2>
                  <span className="custom-h2">Our Design Process</span>
                </h2>
                <ul className="custom-list">
                  <li><b>Discovery –</b> Understand your business, goals, and users.</li>
                  <li><b>Research –</b> Study customer behavior and competitor benchmarks.</li>
                  <li><b>Wireframing –</b> Create layouts to plan structure and flow.</li>
                  <li><b>Designing –</b> Add visuals, colors, and styles.</li>
                  <li><b>Testing –</b> Get real user feedback and refine.</li>
                  <li><b>Delivery –</b> Provide a polished, development-ready design.</li>
                </ul><br />
                <p>This process guarantees smooth, user-friendly digital experiences for your customers. </p>
                <h2>
                  <span className="custom-h2">Why Choose Chameleo GFX Studio?</span>
                </h2>
                <p>We design not just for looks, but with clear purpose and meaning. Here’s what sets us apart: </p>
                <ul className="custom-list">
                  <li><b>User-first approach –</b> Focused on real people, not just visuals.</li>
                  <li><b>Modern, creative designs –</b> Trendy yet professional.</li>
                  <li><b>Effortless usability –</b> Making every interaction feel smooth and natural.</li>
                  <li><b>Experienced team –</b> Expertise across industries.</li>
                  <li><b>High-quality design –</b> Delivering premium creativity at a fair price.</li>
                </ul><br />
                <p>Our goal is to make your brand look great and keep your users coming back for more.  </p>
                <h2>
                  <span className="custom-h2">The Role of UI/UX in Today’s Digital World</span>
                </h2>
                <ul className="custom-list">
                  <li>On <b>websites,</b> design influences how long visitors stay.</li>
                  <li>On <b>apps,</b> design decides whether users keep or delete it.</li>
                  <li>In <b>software,</b> design impacts efficiency and productivity.</li>
                  <li>Strong UI/UX is the secret to customer satisfaction, retention, and long-term growth.</li>
                </ul><br />

                <h2>
                  <span className="custom-h2">Final Words </span>
                </h2>
                <p>UI/UX design isn’t just about looks, it’s about creating smooth, meaningful digital journeys. At <b>Chameleo GFX Studio in Ahmedabad,</b> we blend creativity with AI-powered insights to build designs that your users will love. Whether it’s a website, app, or digital product, our team ensures your brand doesn’t just stand out but also provides the <b>best user experience possible.</b> Because at Chameleo GFX Studio, we design for people, <b>not just screens.</b> </p>
                {/* Services List */}
                {services.map((service, index) => (
                  <div key={index}>
                    <h2>
                      <span className="acustom-h2">
                        {service.title}
                        <span className="aximo-title-icon">
                          <img
                            className="shape-color"
                            src={Star2Img}
                            alt="Star2Img"
                          />
                        </span>
                      </span>
                    </h2>
                    <div className="row">
                      {service.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="col-12 col-md-6">
                          <ul className="list-unstyled custom-list">
                            <li>
                              <a href={item.link} rel="noopener noreferrer">
                                {item.text}
                              </a>
                            </li>
                          </ul><br />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                {/* FAQ Section */}
                <section className="faq-section py-5">
                  <div className="container ">
                    <h2 className="mb-4 text-center">FAQs About UI/UX Design</h2>
                    <ServiceAccordion items={faqData} defaultOpen={0} />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;
