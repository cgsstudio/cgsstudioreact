import { Helmet } from "react-helmet-async";
import ServiceHeroBanner from "../../components/common/ServiceHeroBanner";
import AIVoicebotDevelopmentDetails from "../../components/service/AIVoicebotDevelopmentDetails";
import heroBannerImage from "../../assets/images/v1/Group 112.webp";

function AIVoicebotDevelopment() {
  return (
    <>
      <Helmet>
        <title>AI Voice Bot Development | Chameleo GFX Studio</title>
        <meta name="description" content="AI Voice Bot Development in Ahmedabad. Automate customer support with intelligent, conversational voice AI that speaks your customers' language." />
        <meta name="keywords" content="AI Voice Bot Development, Voice AI Agency, Intelligent Voice Bots, Customer Service AI, Speech Recognition AI" />
        <meta name="author" content="Chameleo GFX Studio" />
        <link rel="canonical" href="https://chameleogfxstudio.com/services/ai-development/ai-voicebot-development" />
      </Helmet>
      <ServiceHeroBanner
        title="AI Voice Bot Development"
        breadcrumbTitle="AI Voice Bot Development"
        subtitle="Voice-Powered Automation That Speaks Your Customers' Language"
        image={heroBannerImage}
      />
      <div className="bg-white-smoke">
        <AIVoicebotDevelopmentDetails />
      </div>
    </>
  );
}

export default AIVoicebotDevelopment;
