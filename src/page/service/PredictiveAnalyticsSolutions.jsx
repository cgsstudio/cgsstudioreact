import ServiceHeroBanner from "../../components/common/ServiceHeroBanner";
import PredictiveAnalyticsSolutionsDetails from "../../components/service/PredictiveAnalyticsSolutionsDetails";
import heroBannerImage from "../../assets/images/v1/Ai  Development.png";

const PredictiveAnalyticsSolutions = () => {
  return (
    <>
      <ServiceHeroBanner
        title="Predictive Analytics Solutions"
        subtitle="Data-Driven Intelligence for Smarter Business Decisions"
        image={heroBannerImage}
      />
      <PredictiveAnalyticsSolutionsDetails />
    </>
  );
};

export default PredictiveAnalyticsSolutions;
