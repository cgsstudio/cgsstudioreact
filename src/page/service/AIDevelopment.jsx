import { Helmet } from "react-helmet-async";
import ServiceHeroBanner from "../../components/common/ServiceHeroBanner";
import AISGeneratedDetails from "../../components/service/AISGeneratedDetails";
import heroBannerImage from "../../assets/images/v1/Group 112.webp";

function AIDevelopment() {
  return (
    <>
      <Helmet>
        <title>AI Development | Chameleo GFX Studio</title>
        <meta name="description" content="Advanced AI Development Services in Ahmedabad. AI-generated solutions with machine learning, deep learning, and neural networks. Build intelligent systems that learn and adapt." />
        <meta name="keywords" content="AI development, AI generated, machine learning, deep learning, neural networks, AI systems, intelligent automation, Ahmedabad" />
        <meta name="author" content="Chameleo GFX Studio" />
        <link rel="canonical" href="https://chameleogfxstudio.com/services/ai-development" />
      </Helmet>
      <ServiceHeroBanner
        title="AI Development"
        breadcrumbTitle="AI Development"
        subtitle="AI-Generated Solutions for Modern Business"
        image={heroBannerImage}
      />
      <div className="bg-white-smoke">
        <AISGeneratedDetails />
      </div>
    </>
  );
}

export default AIDevelopment;
