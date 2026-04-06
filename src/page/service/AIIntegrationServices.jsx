import { Helmet } from "react-helmet-async";
import ServiceHeroBanner from "../../components/common/ServiceHeroBanner";
import AIIntegrationServicesDetails from "../../components/service/AIIntegrationServicesDetails";
import heroBannerImage from "../../assets/images/v1/Group 112.webp";

function AIIntegrationServices() {
  return (
    <>
      <Helmet>
        <title>AI Integration Services | Chameleo GFX Studio</title>
        <meta name="description" content="Professional AI Integration Services in Ahmedabad. Connect your existing platforms with intelligent systems to automate, analyze, and adapt. Expert AI implementation." />
        <meta name="keywords" content="AI integration, AI SaaS integration, machine learning deployment, intelligent process automation, AI implementation Ahmedabad" />
        <meta name="author" content="Chameleo GFX Studio" />
        <link rel="canonical" href="https://chameleogfxstudio.com/services/ai-development/ai-integration-services" />
      </Helmet>
      <ServiceHeroBanner
        title="AI Integration Services"
        breadcrumbTitle="AI Integration Services"
        subtitle="Powering Smarter SaaS for Modern Businesses"
        image={heroBannerImage}
      />
      <div className="bg-white-smoke">
        <AIIntegrationServicesDetails />
      </div>
    </>
  );
}

export default AIIntegrationServices;
