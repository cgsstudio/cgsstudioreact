import { Helmet } from "react-helmet-async";
import ServiceHeroBanner from "../../components/common/ServiceHeroBanner";
import CustomAiModelDevelopmentDetails from "../../components/service/CustomAiModelDevelopmentDetails";
import heroBannerImage from "../../assets/images/v1/Ai  Development.png";

function CustomAiModelDevelopment() {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Custom AI Model Development | Chameleo GFX Studio</title>
        <meta name="description" content="Custom AI Model Development Services tailored for your business. High accuracy, proprietary training, and seamless integration in Ahmedabad." />
        <meta name="keywords" content="Custom AI Model Development, AI Model Training, Business Intelligence, Machine Learning Models, Ahmedabad AI" />
        <meta name="author" content="Chameleo GFX Studio" />
        <link rel="canonical" href="https://chameleogfxstudio.com/services/ai-development/custom-ai-model-development" />
      </Helmet>
      <ServiceHeroBanner
        title="Custom AI Model Development"
        breadcrumbTitle="Custom AI Model Development"
        subtitle="Built for your business. Trained on your data. Designed to scale."
        image={heroBannerImage}
      />
      <div className="bg-white-smoke">
        <CustomAiModelDevelopmentDetails />
      </div>
    </>
  );
}

export default CustomAiModelDevelopment;
