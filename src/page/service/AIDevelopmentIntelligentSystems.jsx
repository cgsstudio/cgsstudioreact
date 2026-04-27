import { Helmet } from "react-helmet-async";
import ServiceHeroBanner from "../../components/common/ServiceHeroBanner";
import AIDevelopmentIntelligentSystemsDetails from "../../components/service/AIDevelopmentIntelligentSystemsDetails";
import heroBannerImage from "../../assets/images/v1/Ai  Development.png";

function AIDevelopmentIntelligentSystems() {
  return (
    <>
      <Helmet>
        <title>AI Development & Intelligent Systems | Chameleo GFX Studio</title>
        <meta name="description" content="Building the Future of SaaS with AI Development & Intelligent Systems in Ahmedabad, India. Serving Startups & Enterprises Worldwide." />
        <meta name="keywords" content="AI Development, Intelligent Systems, SaaS, Ahmedabad, Chameleo GFX Studio" />
        <link rel="canonical" href="https://chameleogfxstudio.com/services/ai-development/ai-development-intelligent-systems" />
      </Helmet>
      <ServiceHeroBanner
        title="AI Development & Intelligent Systems"
        breadcrumbTitle="AI Development & Intelligent Systems"
        subtitle="Building the Future of SaaS"
        image={heroBannerImage}
      />
      <AIDevelopmentIntelligentSystemsDetails />
    </>
  );
}

export default AIDevelopmentIntelligentSystems;
