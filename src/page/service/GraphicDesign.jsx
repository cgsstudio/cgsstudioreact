import { Helmet } from "react-helmet";
import BreadCrumb from "../../components/common/Breadcrumb";
import GraphicDesignService from "../../components/service/GraphicDesignService";
import ServiceAccordion from "../../components/common/ServiceAccordion";

function GraphicDesign() {
  // FAQs Data
  const faqData = [
    {
      question: "What is graphic design in simple words?",
      answer:
        "Graphic design is the art of mixing text, images, and colors to share a message in a beautiful and easy way.",
    },
    {
      question: "Why do businesses need graphic design?",
      answer:
        "Businesses need design to look professional, build trust, and attract customers. Without good design, even great products may go unnoticed.",
    },
    {
      question: "What makes a good logo?",
      answer:
        "A strong logo is clear, easy to remember, and instantly recognizable. It reflects the company’s values and stays in people’s minds.",
    },
    {
      question: "How does graphic design help in marketing?",
      answer:
        "Design makes ads, social posts, and websites more engaging. It grabs attention and encourages people to take action, like buying a product or following a page.",
    },
    {
      question: "Can small businesses benefit from design?",
      answer:
        "Yes, definitely! Even small businesses need design to look trustworthy and compete with bigger brands. Good design makes a small business look professional and reliable.",
    },
    {
      question:
        "Why should you choose a graphic design company in Ahmedabad like Chameleo GFX Studio?",
      answer:
        "We provide creative, affordable, and high-quality design solutions that are tailored to your brand’s vision and needs.",
    },
  ];

  // FAQ Schema for Google SEO
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

  return (
    <>
      <Helmet>
        <title>Graphic Design Company in Ahmedabad - Chameleo GFX Studio</title>
        <meta
          name="description"
          content="Chameleo GFX Studio is leading Graphic Design Company in Ahmedabad. We have the best Graphic Designer that offers innovative graphic design services. Call now."
        />
        <meta
          name="keywords"
          content="Graphic Design Company in Ahmedabad, Graphic Design Agency in Ahmedabad, Graphic Design Studio in Ahmedabad, Graphic Designer in Ahmedabad"
        />
        <link
          rel="canonical"
          href="https://chameleogfxstudio.com/graphic-design-company-in-ahmedabad"
        />

        {/* FAQ Schema JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* Page Layout */}
      <BreadCrumb title="Graphic Design" />
      <GraphicDesignService />

      {/* FAQs Section */}
      <section className="faq-section py-5">
        <div className="container">
          <h2 className="mb-4 text-center">Frequently Asked Questions</h2>
          <ServiceAccordion items={faqData} defaultOpen={0} />
        </div>
      </section>
    </>
  );
}

export default GraphicDesign;
