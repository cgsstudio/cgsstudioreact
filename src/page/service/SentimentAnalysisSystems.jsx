import { Helmet } from "react-helmet-async";
import ServiceHeroBanner from "../../components/common/ServiceHeroBanner";
import SentimentAnalysisSystemsDetails from "../../components/service/SentimentAnalysisSystemsDetails";
import heroBannerImage from "../../assets/images/v1/Ai  Development.png";

function SentimentAnalysisSystems() {
  return (
    <>
      <ServiceHeroBanner
        title="Sentiment Analysis Systems"
        breadcrumbTitle="Sentiment Analysis Systems"
        subtitle="Understanding What Your Customers Really Feel"
        image={heroBannerImage}
      />
      <div className="bg-white-smoke">
        <SentimentAnalysisSystemsDetails />
      </div>
    </>
  );
}

export default SentimentAnalysisSystems;
