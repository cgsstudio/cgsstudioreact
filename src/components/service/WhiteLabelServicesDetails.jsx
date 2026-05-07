import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Field from "../common/Field";
import ServiceAccordion from "../common/ServiceAccordion";
import { FaSearch, FaCode, FaPalette, FaUsers, FaChartLine } from 'react-icons/fa';
import servise_image1 from "../../assets/images/v1/Process_1 1.png";
import servise_image2 from "../../assets/images/v1/Process_1 2.png";
import servise_image3 from "../../assets/images/v1/Process_1 3.png";
import servise_image4 from "../../assets/images/v1/Process_1 5.png";

const faqData = [
  {
    question: "What are white label services?",
    answer:
      "Professionally provided work done by an agency towards providing an outsourced service for an end client. This could include services such as web design, graphic design, social media handling, SEO, or PPC. The work is created by one agency (white label agency) and sold to the other (end client) under that agency's name. The end client only knows the agency they hired; there is no visibility of the white label agency providing services through the other agency to the end client.",
  },
  {
    question: "How do white label marketing agencies work?",
    answer:
      "A white label marketing agency operates as a silent delivery partner. The client-facing agency wins the project and manages the client relationship. The white label agency executes the work, provides deliverables in the partner agency's format, and maintains confidentiality throughout. Communication, reporting, and branding all carry the selling agency's identity.",
  },
  {
    question: "Why choose white label services in Ahmedabad, India?",
    answer:
      "Ahmedabad has an unusually large number of talented people who specialize in digital talent; many have worked on international projects, and most provide quality services at a very low cost, which results in this city being one of the best places to outsource to for agencies in the West. In addition, as the tech ecosystem in the city continues to grow, it provides agencies with access to talented professionals who understand the global quality standards that they need to produce, while also providing their services at a much lower cost than those found in larger metropolitan cities.",
  },
  {
    question: "Is white label marketing profitable?",
    answer:
      "Yes, when structured correctly. Agencies typically mark up white label work by 30–60%, depending on the service. Since you're not carrying the overhead of an in-house team for those deliverables, margins are healthier and more consistent. The key is partnering with a provider whose quality justifies the price you charge your clients.",
  },
  {
    question: "How do you choose the best white label marketing agency in Ahmedabad India?",
    answer:
      "It is advisable for you to consider the past work of the agencies that you are considering, specifically how they have worked with both agencies and individuals. An evaluation of each agency's history of timely delivery, response time, and adherence to your agency's report format must also be evaluated, in addition to their ability to maintain confidentiality and how they would handle changes in scope.",
  },
];

const workflowSteps = [
  {
    step: "Step 01",
    title: "Discovery & Setup",
    desc: "From the onset of our partnership, we'll begin by getting to know you through your agency. We'll learn how you prefer to communicate, which types of clients you associate with, and how you report your results and measure quality. No one template works for everyone. Your set-up will be based on your agency's needs, not a standard model.",
    icon: <FaSearch />

  },
  {
    step: "Step 02",
    title: "Project Execution",
    desc: "Once briefs are in, our team gets to work. Project timelines are agreed upon up front. You have a single point of contact who knows your accounts, your expectations, and your clients' sensitivities.",
    icon: <FaCode />
  },
  {
    step: "Step 03",
    title: "Quality Delivery",
    desc: "Deliverables arrive on schedule, formatted to match your branding or templates. Performance reports are structured for your client presentations. Nothing leaves our team that isn't ready for your client's eyes.",
    icon: <FaChartLine />
  },
  {
    step: "Step 04",
    title: "Invisible Partnership",
    desc: "We operate as your invisible partner. Your clients never know we exist unless you choose to tell them. NDAs, brand guidelines, and data handling, all managed with full professionalism.",
    icon: <FaUsers />
  },
  {
    step: "Step 05",
    title: "Dedicated Support",
    desc: "You won't be passed around a support queue. Your account has dedicated attention. Questions get answered quickly. Problems get resolved, not escalated into a thread that never resolves.",
    icon: <FaPalette />
  }
];

const ourServices = [
  {
    title: "White Label SEO",
    icon: <FaSearch />,
    desc: "Search engine ranking continues to be among the highest-ROI channels available to agencies. As part of our white-label digital marketing solutions, we provide you with the same reporting format as we do with your client, and throughout the duration of our project. There will be no disconnect between you and us, as we will communicate directly with the client and in the manner in which you would normally communicate with them.",
  },
  {
    title: "White Label Web Development",
    icon: <FaCode />,
    desc: "From WordPress builds to custom web applications, our development team handles full project cycles, design integration, front-end development, CMS configuration, speed optimization, and QA. You present the finished product. We handle the build.",
  },
  {
    title: "White Label Graphic Design",
    icon: <FaPalette />,
    desc: "Brand identity work, marketing collateral, social media creatives, presentations, and packaging. Chameleo GFX Studio has a design team built for variety and volume. Whether you need a single logo or an ongoing monthly design retainer for multiple clients, we deliver work that your clients will be proud to put their names on.",
  },
  {
    title: "White Label Social Media Marketing",
    icon: <FaUsers />,
    desc: "Content calendars, caption writing, graphic creation, community management, performance tracking, our social media team handles the full monthly cycle. You retain the client relationship. We do the consistent, creative work that keeps their feeds active and audiences engaged.",
  },
  {
    title: "White Label CRO",
    icon: <FaChartLine />,
    desc: "Through our White Label Conversion Rate Optimization (CRO) Work, you are able to improve conversions for your clients without having to add additional personnel for your agency. By analyzing user behavior, we identify gaps and then utilize the data we collect to improve the performance of websites or landing pages through testing and User Experience, thus producing improved results. All solutions are provided with your branding, allowing for a streamlined execution of your client's requests and providing an additional means for you to generate revenue through a higher ROI.",
  },
];


function WhiteLabelServicesDetails() {
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
        setTimeout(() => setIsSubmitted(false), 3000);
      })
      .catch((error) => console.error("Error sending email:", error));
  };

  return (
    <div className="section pb-0 bg-white">

      {/* Intro */}
      <div className="container py-4 py-md-5">
        <div className="aximo-service-details-wrap">
          <div className="row">
            <div className="col-lg-12">
              <div className="aximo-default-content">
                <h1 className="text-lg-center text-sm-left">
                  <span className="custom-h2">
                    <span style={{ color: "red" }}>White Label Services</span> That Help Agencies Scale Without the Growing Pains
                  </span>
                </h1>
                <p className="text-lg-center text-sm-left mt-4">
                  You started your agency because you're good at what you do. Clients came. Projects multiplied. And then, somewhere between the third unanswered Slack message and a deadline you almost missed, the excitement started feeling a lot like exhaustion.
                </p>

                <p className="text-lg-center text-sm-left">
                  Most agency owners don't struggle because they lack talent. They struggle because real growth demands more capacity than any one team can reasonably carry. You want to say yes to bigger clients. You want to expand into new service areas. But hiring takes months, training takes energy, and payroll doesn't pause while you figure it out.
                </p>

                <p className="text-lg-center text-sm-left">
                  On this particular page, we will discuss what white label service offerings look like from a practical standpoint, as well as why it is beneficial for you as a company to partner with a white label agency in Ahmedabad India, and what it means for you to collaborate with a provider that is dedicated to preserving your company's reputation just like you do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What Are White Label Services */}
      <div className="container py-4 py-md-5">
        <div className="aximo-service-details-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1 pt-4 pt-lg-0">
              <div className="aximo-default-content">
                <h2>
                  <span className="services-h2">
                    What Are <span style={{ color: "red" }}>White Label Services?</span>
                  </span>
                </h2>
                <p>
                  White label services are deliverables, SEO campaigns, websites, ad management, design work, and social media content produced by one agency and sold by another under their own brand name.
                </p>
                <p>
                  You bring the client relationship. The white label partner does the work. Your client sees only your brand.
                </p>
                <p>
                  It sounds simple, and in execution, it genuinely can be. But the value goes deeper than just getting work done. When you plug into a quality white label partnership, you're essentially borrowing an entire delivery infrastructure, specialists, systems, quality checks, and turnaround pipelines that would have taken years and significant capital to build yourself.
                </p>

              </div>
            </div>
            <div className="col-lg-6 align-items-top order-1 order-lg-2 pt-4 pt-lg-0">
              <img src={servise_image2} alt="White Label Services" className="services_page_image img-fluid rounded shadow-sm w-100" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <p><b>For agencies, that means:</b></p>
              <ul className="custom-list mt-1 ml-5 pl-5">
                <li className="ml-4">Immediate capacity without a long hiring cycle</li>
                <li className="ml-4">New service lines added overnight without new expertise on your payroll</li>
                <li className="ml-4">Consistent output even during peak demand periods</li>
                <li className="ml-4">Profit margins that hold because your costs stay predictable</li>
                <li className="ml-4">More time spent on client relationships and business development, less on execution bottlenecks</li>
              </ul>
              <br />
              <p>
                Agencies that white label aren't cutting corners. They're making a smart business decision, the same way law firms use paralegals, or architects outsource structural engineering. Specialization and partnership aren't weaknesses. They're how sustainable agencies are built.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Why India */}
      <div className="container py-4 py-md-5">
        <div className="aximo-service-details-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6 align-items-center pt-4 pt-lg-0">
              <img src={servise_image3} alt="White Label Marketing Agency India" className="services_page_image img-fluid rounded shadow-sm w-100" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <div className="aximo-default-content">
                <h2>
                  <span className="services-h2">
                    Why Agencies Need a <span style={{ color: "red" }}>White Label Marketing Agency in Ahmedabad India?</span>
                  </span>
                </h2>
                <p>
                  The global digital economy has quietly made India one of the most valuable outsourcing destinations for agencies, not just because of cost, but because of capability.
                </p>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700" }}>Cost Efficiency That Doesn't Compromise Quality</h3>
                <p>
                  Running a full in-house team across SEO, design, development, and paid media in the US, UK, or Australia is expensive by any measure. Partnering with a white label marketing agency on the India side-by-side gives agencies access to the same caliber of work at a fraction of the cost without the risk of hiring, benefits, and turnover that comes with permanent headcount.
                </p>

              </div>
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-12">
              <h3 style={{ fontSize: "1.2rem", fontWeight: "700" }}>A Talent Pool That's Genuinely Deep</h3>
              <p>
                India produces hundreds of thousands of engineering, design, and marketing graduates annually. The country's digital industry has matured significantly over the past decade, and that shows in the quality of work coming out of its best agencies. You're not just getting affordable, you're getting skilled.
              </p>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "700" }}>Scalability When You Actually Need It</h3>
              <p>
                Client load is rarely consistent. Seasonality, campaign launches, and new business wins create spikes that a fixed team handles poorly. A white label partner can flex with your demand. Three projects this month, twelve next month, the infrastructure absorbs it.
              </p>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "700" }}>Speed That Keeps Clients Happy</h3>
              <p>
                With the right partner, turnaround times improve because there's a dedicated team focused exclusively on delivery. No context switching. No one is balancing client work with internal meetings. Just focused execution.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Ahmedabad */}
      <div className="container py-4 py-md-5">
        <div className="aximo-service-details-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1 pt-4 pt-lg-0">
              <div className="aximo-default-content">
                <h2>
                  <span className="services-h2">
                    Why <span style={{ color: "red" }}>White Label Services in Ahmedabad, India,</span> Are a Strategic Advantage?
                  </span>
                </h2>
                <p>
                  Ahmedabad may not be the first name that comes to mind for many thinking about India's technology centres, but this isn't fair and needs to be changed.
                </p>
                <p>
                  The nation has long been working toward establishing Ahmedabad as one of its top ten resourceful digital centres. It combines lower operating costs than Mumbai or Bangalore with a growing concentration of genuinely skilled developers, designers, and marketers who've built their experience working with international clients.
                </p>

              </div>
            </div>
            <div className="col-lg-6 align-items-center order-1 order-lg-2 pt-4 pt-lg-0">
              <img src={servise_image1} alt="White Label Services Ahmedabad" className="services_page_image img-fluid rounded shadow-sm w-100" />
            </div>
          </div>

        </div>
      </div>

      {/* Why Chameleo */}
      <div className="container py-4 py-md-5">
        <div className="aximo-service-details-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6 align-items-center pt-4 pt-lg-0">
              <img src={servise_image4} alt="Why Chameleo GFX Studio" className="services_page_image img-fluid rounded shadow-sm w-100" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <div className="aximo-default-content">
                <h2>
                  <span className="services-h2">
                    Why <span style={{ color: "red" }}>Chameleo GFX Studio?</span>
                  </span>
                </h2>
                <p>
                  There are plenty of white label vendors happy to take your money. Finding one that treats your client relationships with the same care you do is a different matter.
                </p>
                <p>
                  Chameleo GFX Studio was created with agency collaboration in mind; it was not viewed as a secondary, afterthought business component, but represents committed support. This defines how we conduct our business.
                </p>
                <p>
                  In our eyes, there is no point in overloading your inbox with the same standard status update; our reporting structure is provided in each client engagement to ensure that you are always clearly aware of what is happening with your project without having to track us down.
                </p>
              </div>
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-12">


            </div>
          </div>
        </div>
      </div>

      {/* Our White Label Services */}
      <div className="container py-4 py-md-5">
        <div className="aximo-service-details-wrap">
          <h2 className="text-center mb-5">
            <span className="services-h2">Our <span style={{ color: "red" }}>White Label Services</span></span>
          </h2>
          <div className="row gy-4">
            {ourServices.map((s, i) => (
              <div key={i} className="col-lg-6 col-md-6 mb-4">
                <div className="card h-100 p-4 border rounded shadow-sm">
                  <div className="text-danger mb-3" style={{ fontSize: "2rem" }}>
                    {s.icon}
                  </div>
                  <h3 className="h5 fw-bold text-dark mb-3">
                    {s.title}
                  </h3>
                  <p className="text-muted mb-0" style={{ lineHeight: "1.75" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="container py-lg-5 py-3" id="contact-form">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0 pr-5 mr-5">
            <div className="servisepage-form-section servisepage-form-section-1 pr-5">
              <h2>Start the Conversation</h2>
            </div>
            <div className="d-flex justify-content-between align-items-left py-3 mt-4">
              <div className="text-left text-md-center">
                <h3 className="text-danger fw-bold mb-0 our_efficiently">30–60%</h3>
                <small className="text-muted our_efficiently_1">Typical Markup Range</small>
              </div>
              <div className="text-left text-md-center">
                <h3 className="text-danger fw-bold mb-0 our_efficiently">11+</h3>
                <small className="text-muted our_efficiently_1">Years of Experience</small>
              </div>
              <div className="text-left text-md-center">
                <h3 className="text-danger fw-bold mb-0 our_efficiently">100%</h3>
                <small className="text-muted our_efficiently_1">Client Confidentiality</small>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit(submitForm)} className="servise-aximo-form-wrap3 border border-1 rounded p-4 shadow-sm">
              <Field error={errors.name}>
                <div className="aximo-form-field2 mb-5">
                  <input {...register("name", { required: "Name is required." })} type="text" name="name" className="form-control" placeholder="Your Name" />
                </div>
              </Field>
              <Field error={errors.email}>
                <div className="aximo-form-field2 mb-5">
                  <input {...register("email", { required: "Email is required." })} type="email" name="email" className="form-control" placeholder="Your Email" />
                </div>
              </Field>
              <Field error={errors.phone}>
                <div className="aximo-form-field2 mb-5">
                  <input {...register("phone")} type="text" name="phone" className="form-control" placeholder="Your Phone Number" />
                </div>
              </Field>
              <Field error={errors.message}>
                <div className="aximo-form-field2 mb-5">
                  <textarea {...register("message", { required: "Message is required." })} name="message" className="form-control" style={{ backgroundColor: "#FFFFF5" }} rows="3" placeholder="Message"></textarea>
                </div>
              </Field>
              <button type="submit" className="aximo-default-btn bg-red w-100 fw-bold">
                <span className="aximo-label-up">SUBMIT</span>
                <span className="aximo-label-up">SUBMIT</span>
              </button>
              {isSubmitted && <div className="alert-box mt-3 text-success">Thank you for your message!</div>}
            </form>
          </div>
        </div>
      </div>

      {/* How We Work (Enhanced Design) */}
      <div className="container-fluid bg-dark py-5 mt-5">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="text-white"><span className="services-h2 text-white">How <span style={{ color: 'red' }}>We Work</span></span></h2>
            <p className="text-light mt-3">Our structured approach ensures seamless integration and high-quality delivery.</p>
          </div>
          <div className="row justify-content-center g-4 mt-4">
            {workflowSteps.map((step, i) => (
              <div key={i} className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100 p-4 bg-transparent border border-secondary rounded shadow-sm text-center">
                  <div className="mb-4 text-danger" style={{ fontSize: "2.8rem" }}>
                    {step.icon}
                  </div>
                  <div className="mb-3">
                    <span className="badge badge-danger bg-danger px-3 py-2 rounded-pill text-uppercase">{step.step}</span>
                  </div>
                  <h3 className="text-white h4 mb-3">{step.title}</h3>
                  <p className="text-light opacity-75 mb-0" style={{ lineHeight: "1.6" }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What Growth Looks Like */}
      <div className="container-fluid py-5 bg-light border-top border-bottom">
        <div className="container">
          <div className="aximo-service-details-wrap">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="aximo-default-content">
                  <h2 className="text-center">
                    <span className="services-h2">What <span style={{ color: "red" }}>Growth</span> Actually Looks Like?</span>
                  </h2>
                  <p className="text-center mt-4 lead">
                    Agencies that build effective white label partnerships describe the change in similar ways. The immediate pressure around capacity eases. The hesitation around pitching larger clients fades. Monthly revenue becomes more predictable because delivery has become more reliable.
                  </p>
                  <p className="text-center lead">
                    Operationally, the stress reduction isn't a soft benefit; it's a real one. When you can devote your energy to growing an agency instead of executing the actual tasks, it allows you to build relationships with clients, create a strategy, and go after new business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container-fluid bg-black pt-4 pb-5">
        <div className="container">
          <div className="row bg-black text-white p-lg-4 p-0 rounded">
              <div className="col-lg-12 align-items-center">
                <div className="aximo-default-content">
                  <h2 className="text-center">
                    <span className="services-h2 text-white-smoke text-center">Let's Build <span style={{ color: "red" }}>Something Big</span> Together</span>
                  </h2>
                  <p className="text-center text-white-smoke mt-4">
                    If you find yourself in a position where you have been causing your digital marketing team too much stress due to an excessive amount of work being required to support your clients, or you have had to turn down clients you would normally accept because you do not have enough resources to accommodate their projects, or you feel like you would rather "give up" than to keep "growing" because your clients require you to produce too much for them; then it is time to speak with a supplier about how you can assist them in meeting the needs of your clients.
                  </p>
                  <p className="text-center text-white-smoke">
                    Chameleo GFX Studio partners with agencies that are serious about scale. We know we are not the best option for everyone, but if you want a consistent partner, clear in their communication, and who values the relationships they have with your clients, we would love to show you what this type of partnership entails.
                  </p>

                  <p className="text-center text-white-smoke">
                    <b>Your clients expect the best from you. Let's make sure you can deliver it.</b>
                  </p>
                  <div className="text-center mt-4">
                    <Link to="/contact-us" className="aximo-default-btn pill bg-red">
                      Start the Conversation →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* FAQ */}
      <div className="container mt-5">
        <section className="faq-section py-5 bg-white-smoke">
          <div className="container">
            <h2 className="mb-4 text-lg-center text-left">
              <span className="services-h2 text-lg-center text-left">Frequently Asked Questions</span>
            </h2>
            <ServiceAccordion faqData={faqData} defaultOpen={0} />
          </div>
        </section>
      </div>

    </div>

  );
}


export default WhiteLabelServicesDetails;
