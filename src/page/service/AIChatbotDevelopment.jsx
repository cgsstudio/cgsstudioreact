import { Helmet } from "react-helmet-async";
import ServiceHeroBanner from "../../components/common/ServiceHeroBanner";
import AIChatbotDetails from "../../components/service/AIChatbotDetails";
import heroBannerImage from "../../assets/images/v1/Ai  Development.png";

function AIChatbotDevelopment() {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>AI Chatbot Development | Chameleo GFX Studio</title>
        <meta name="description" content="Intelligent AI Chatbot Development Services in Ahmedabad. Build conversational AI solutions that convert - 24/7 customer support, lead qualification, booking automation. Expert chatbot developers." />
        <meta name="keywords" content="AI chatbot development, chatbot development company, conversational AI, AI chatbot Ahmedabad, chatbot developers, customer service automation, lead generation chatbot" />
        <meta name="author" content="Chameleo GFX Studio" />
        <link rel="canonical" href="https://chameleogfxstudio.com/services/ai-development/ai-chatbot-development" />
      </Helmet>
      <ServiceHeroBanner
        title="AI Chatbot Development"
        breadcrumbTitle="AI Chatbot Development"
        subtitle="Conversations That Convert Intelligent Chatbots Built for Real Business"
        image={heroBannerImage}
      />
      <div className="bg-white-smoke">
        <AIChatbotDetails />
      </div>
    </>
  );
}

export default AIChatbotDevelopment;
