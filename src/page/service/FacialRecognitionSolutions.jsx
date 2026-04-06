import { Helmet } from "react-helmet-async";
import ServiceHeroBanner from "../../components/common/ServiceHeroBanner";
import FacialRecognitionSolutionsDetails from "../../components/service/FacialRecognitionSolutionsDetails";
import heroBannerImage from "../../assets/images/v1/Group 112.webp";

function FacialRecognitionSolutions() {
  return (
    <>
      <Helmet>
        <title>Facial Recognition Solutions | Chameleo GFX Studio</title>
        <meta name="description" content="AI Facial Recognition Services in Ahmedabad. Secure access control, attendance tracking, and smart surveillance with instant, accurate identity verification." />
        <meta name="keywords" content="Facial Recognition Solutions, AI Facial Recognition Services, Face Recognition Software, Access Control AI, Ahmedabad AI" />
        <meta name="author" content="Chameleo GFX Studio" />
        <link rel="canonical" href="https://chameleogfxstudio.com/services/ai-development/facial-recognition-solutions" />
      </Helmet>
      <ServiceHeroBanner
        title="Facial Recognition Solutions"
        breadcrumbTitle="Facial Recognition Solutions"
        subtitle="Smarter Identity, Stronger Security, Seamless Experiences"
        image={heroBannerImage}
      />
      <div className="bg-white-smoke">
        <FacialRecognitionSolutionsDetails />
      </div>
    </>
  );
}

export default FacialRecognitionSolutions;
