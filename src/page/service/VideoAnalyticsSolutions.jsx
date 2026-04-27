import { Helmet } from "react-helmet-async";
import ServiceHeroBanner from "../../components/common/ServiceHeroBanner";
import VideoAnalyticsSolutionsDetails from "../../components/service/VideoAnalyticsSolutionsDetails";
import heroBannerImage from "../../assets/images/v1/Ai  Development.png";

function VideoAnalyticsSolutions() {
  return (
    <>
      <ServiceHeroBanner
        title="Video Analytics Solutions"
        breadcrumbTitle="Video Analytics Solutions"
        subtitle="Your Cameras Are Recording But Are You Actually Watching?"
        image={heroBannerImage}
      />
      <div className="bg-white-smoke">
        <VideoAnalyticsSolutionsDetails />
      </div>
    </>
  );
}

export default VideoAnalyticsSolutions;
