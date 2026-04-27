import { Helmet } from "react-helmet-async";
import ServiceHeroBanner from "../../components/common/ServiceHeroBanner";
import ObjectDetectionSystemsDetails from "../../components/service/ObjectDetectionSystemsDetails";
import heroBannerImage from "../../assets/images/v1/Ai  Development.png";

function ObjectDetectionSystems() {
  return (
    <>
      <Helmet>
        <title>Object Detection Systems | Chameleo GFX Studio</title>
        <meta name="description" content="AI Object Detection Solutions in Ahmedabad. We build systems that identify, boundary, and track multiple objects in real-time." />
        <meta name="keywords" content="Object Detection, AI Recognition, Visual Tracking, Computer Vision Ahmedabad, Smart City AI" />
        <meta name="author" content="Chameleo GFX Studio" />
        <link rel="canonical" href="https://chameleogfxstudio.com/services/ai-development/object-detection-systems" />
      </Helmet>
      <ServiceHeroBanner
        title="Object Detection Systems"
        breadcrumbTitle="Object Detection Systems"
        subtitle="Because What Your Business Can't See, It Can't Manage"
        image={heroBannerImage}
      />
      <div className="bg-white-smoke">
        <ObjectDetectionSystemsDetails />
      </div>
    </>
  );
}

export default ObjectDetectionSystems;
