import { Helmet } from "react-helmet";
import BreadCrumb from "../../components/common/Breadcrumb";
import TwoColumnFaq from "../../components/contact/TwoColumnFaq";
import AutoSlider from "../../components/home-one/auto-slider";
import Services from "../../components/home-one/services";
import WhyChooseUs from "../../components/home-one/why-choose-us";

const services = [
	{
		id: crypto.randomUUID(),
		title: "Web Development",
		description:
			"At our core, we want us to be capable of growing together with you and achieving customer satisfaction. As your internal advertising team, we promise to assist in creating an online presence that successfully presents your company. We perform the best possible research, offer guidance, and develop the greatest website while considering your future growth.",
		icon: "icon-design-thinking",
		slug: "web-development"
	},
	{
		id: crypto.randomUUID(),
		title: "UI/UX Design",
		description:
			"We bring your vision to life. We are the best UI/UX Design company in Ahmedabad, Gujarat, India. Our passion involves creating smooth and engaging digital experiences that attract people and deliver real results. Our skilled team of UX experts and designers will transform your concepts into a user-centric design that engages visitors and helps you meet your business goals.",
		icon: "icon-web",
		slug: "single-service"
	},
	{
		id: crypto.randomUUID(),
		title: "Graphic Design",
		description:
			"Our talented design team is capable of creating aesthetically attractive designs in a short period. Being the top graphic design company in Ahmedabad, Gujarat, India, we are aware of how to engage your target audience and boost your revenue with attractive websites, videos, social media posts, and other content.",
		icon: "icon-branding",
		slug: "graphic-design"
	},
	{
		id: crypto.randomUUID(),
		title: "Logo Design",
		description:
			"We combine creativity with an ambition for unmatched outcomes which make us the best in the industry. We Build brand identity using creative & custom logo designs as we are the top logo design company in Ahmedabad, Gujarat, India. We design and you get the right impact.",
		icon: "icon-design-tools",
		slug: "logo-design"
	},


	{
		id: crypto.randomUUID(),
		title: "SEO",
		description:
			"With the best SEO services in Ahmedabad, Gujarat, India, we assist you in realizing the full potential of your online presence. Developing unique SEO strategies that align with your target market and business goals is our team’s area of experience. Your website will appear higher on search engine results pages because of our comprehensive website research, on-page and off-page optimization strategies, and open reporting.",
		icon: "icon-rating-stars-1",
		slug: "seo"
	},
	{
		id: crypto.randomUUID(),
		title: "Social Media Marketing",
		description:
			"With our specialized methods and knowledgeable guidance, we’ll take your company to new heights of social media success. Our experienced team of marketers builds personalized social media strategies that accomplish your particular company objectives. We can assist you meet your goals by improving conversions, driving traffic to your website, and increasing brand exposure.",
		icon: "icon-layers",
		slug: "social-media"
	},

];

function ServicePage() {
	return (
		<>
		<Helmet>
            <title>Our Services - Chameleo GFX Studio</title>
            <meta name="description" content="" />
			<meta name="keywords" content="" />
        </Helmet>
			<BreadCrumb title="Service" />
			<Services services={services} />
			<AutoSlider />
			<WhyChooseUs />
			<TwoColumnFaq />
		</>
	);
}

export default ServicePage;
