import { Helmet } from "react-helmet-async";
import ServiceHeroBanner from "../../components/common/ServiceHeroBanner";
import ImageRecognitionSystemsDetails from "../../components/service/ImageRecognitionSystemsDetails";
import heroBannerImage from "../../assets/images/v1/Group 112.webp";

function ImageRecognitionSystems() {
  return (
    <>
      <Helmet>
        <title>Image Recognition Systems | Chameleo GFX Studio</title>
        <meta name="description" content="AI Image Recognition Solutions in Ahmedabad. We build systems that identify, classify, and interpret visual content automatically at scale." />
        <meta name="keywords" content="Image Recognition Systems, AI Image Recognition, Visual Data Processing, Deep Learning, Ahmedabad AI Solutions" />
        <meta name="author" content="Chameleo GFX Studio" />
        <link rel="canonical" href="https://chameleogfxstudio.com/services/ai-development/image-recognition-systems" />
      </Helmet>
      <ServiceHeroBanner
        title="Image Recognition Systems"
        breadcrumbTitle="Image Recognition Systems"
        subtitle="Helping Machines See What Matters — Instantly"
        image={heroBannerImage}
      />
      <div className="bg-white-smoke">
        <ImageRecognitionSystemsDetails />
      </div>
    </>
  );
}

export default ImageRecognitionSystems;
