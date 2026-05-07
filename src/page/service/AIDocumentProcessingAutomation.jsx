import { Helmet } from "react-helmet-async";
import ServiceHeroBanner from "../../components/common/ServiceHeroBanner";
import AIDocumentProcessingAutomationDetails from "../../components/service/AIDocumentProcessingAutomationDetails";
import heroBannerImage from "../../assets/images/v1/Ai  Development.png";

function AIDocumentProcessingAutomation() {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>AI Document Processing Automation | Chameleo GFX Studio</title>
        <meta name="description" content="AI Document Processing Automation Services in Ahmedabad. Stop drowning in paperwork with OCR, NLP, and intelligent data extraction. Expert AI automation systems." />
        <meta name="keywords" content="AI document processing, OCR automation, NLP solutions, document automation Ahmedabad, data extraction AI, intelligent systems" />
        <meta name="author" content="Chameleo GFX Studio" />
        <link rel="canonical" href="https://chameleogfxstudio.com/services/ai-development/ai-document-processing-automation" />
      </Helmet>
      <ServiceHeroBanner
        title="AI Document Processing Automation"
        breadcrumbTitle="AI Document Processing Automation"
        subtitle="Stop Drowning in Paperwork and Start Working Smarter"
        image={heroBannerImage}
      />
      <div className="bg-white-smoke">
        <AIDocumentProcessingAutomationDetails />
      </div>
    </>
  );
}

export default AIDocumentProcessingAutomation;
