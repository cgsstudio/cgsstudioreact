import { Helmet } from "react-helmet-async";
import ServiceHeroBanner from "../../components/common/ServiceHeroBanner";
import AIRecommendationEnginesDetails from "../../components/service/AIRecommendationEnginesDetails";
import heroBannerImage from "../../assets/images/v1/Group 112.webp";

function AIRecommendationEngines() {
  return (
    <>
      <Helmet>
        <title>AI Recommendation Engines | Chameleo GFX Studio</title>
        <meta name="description" content="Expert AI Recommendation Engine Solutions in Ahmedabad. Deliver personalization at scale and connect every user to exactly what they need. Personalized discovery AI." />
        <meta name="keywords" content="AI recommendation engines, personalization systems, e-commerce recommendations, content discovery AI, machine learning personalization" />
        <meta name="author" content="Chameleo GFX Studio" />
        <link rel="canonical" href="https://chameleogfxstudio.com/services/ai-development/ai-recommendation-engines" />
      </Helmet>
      <ServiceHeroBanner
        title="AI Recommendation Engines"
        breadcrumbTitle="AI Recommendation Engines"
        subtitle="Personalization at Scale — Connecting Every User to Exactly What They Need"
        image={heroBannerImage}
      />
      <div className="bg-white-smoke">
        <AIRecommendationEnginesDetails />
      </div>
    </>
  );
}

export default AIRecommendationEngines;
