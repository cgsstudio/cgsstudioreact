import BreadCrumb from "../components/common/Breadcrumb";
import AutoSlider from "../components/home-one/auto-slider";
import Testimonial from "../components/home-one/testimonial";
import PricingFaq from "../components/pricing/PricingFaq";
import PricingPlan from "../components/pricing/PricingPlan";
import heroBannerImage from "../assets/images/v1/Group 122.webp";
function Pricing() {
	return (
		<>
			<BreadCrumb title="Pricing" image={heroBannerImage} />
			<PricingPlan />
			<Testimonial />
			<AutoSlider />
			<PricingFaq />
		</>
	);
}

export default Pricing;
