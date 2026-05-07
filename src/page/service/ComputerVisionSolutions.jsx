import { Helmet } from "react-helmet-async";
import ServiceHeroBanner from "../../components/common/ServiceHeroBanner";
import ComputerVisionSolutionsDetails from "../../components/service/ComputerVisionSolutionsDetails";
import heroBannerImage from "../../assets/images/v1/Ai  Development.png";

function ComputerVisionSolutions() {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Computer Vision Solutions | Chameleo GFX Studio</title>
        <meta name="description" content="AI-powered Computer Vision Solutions in Ahmedabad. Give your systems the ability to see, interpret, and act on visual data in real time at scale." />
        <meta name="keywords" content="Computer Vision Solutions, Image Recognition AI, Visual Quality Inspection, Video Analytics, Ahmedabad AI Solutions" />
        <meta name="author" content="Chameleo GFX Studio" />
        <link rel="canonical" href="https://chameleogfxstudio.com/services/ai-development/computer-vision-solutions" />
      </Helmet>
      <ServiceHeroBanner
        title="Computer Vision Solutions"
        breadcrumbTitle="Computer Vision Solutions"
        subtitle="Teaching Machines to See — So Your Business Can Act Faster"
        image={heroBannerImage}
      />
      <div className="bg-white-smoke">
        <ComputerVisionSolutionsDetails />
      </div>
    </>
  );
}

export default ComputerVisionSolutions;
