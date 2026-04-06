
import About from "../../components/home-one/about";
import AutoSlider from "../../components/home-one/auto-slider";
import Hero from "../../components/home-one/hero";
import Projects from "../../components/home-one/projects";
import Services from "../../components/home-one/services";
import AppWebServices from "../../components/home-one/AppWebServices";
import StatsSection from "../../components/home-one/StatsSection";
import AwardsSection from "../../components/home-one/awards";
import MissionVision from "../../components/home-one/MissionVision";
import Teams from "../../components/home-one/teams";
import Testimonial from "../../components/home-one/testimonial";
import WhyChooseUs from "../../components/home-one/why-choose-us";


// Teams images
import Team1Img from "../../assets/images/team/team1.png";
import Team2Img from "../../assets/images/team/team2.png";
import Team3Img from "../../assets/images/team/team3.png";
import Team4Img from "../../assets/images/team/team4.png";
import Logoslider from "../../components/home-one/auto-slider/Logoslider"
import RightSlider from "../../components/home-one/auto-slider/RightSlider";
import { Helmet } from "react-helmet";
import TestimonialSlider from "../../components/home-one/testimonial/TestimonialSlider";
// import ImageSection from "../../components/home-one/ImageSection";
import Websites from "../../components/home-one/projects/Websites";
import IndustriesHomeSection from "../../components/home-one/Industryweserve/IndustriesHomeSection";
import HowWeWork from "../../components/home-one/How-we-work/index";
import CalltoAction from "../../components/home-one/CalltoAction";


const servicesData = [
	// {
	// 	id: crypto.randomUUID(),
	// 	title: "Logo Design",
	// 	description:
	// 		"We craft powerful, memorable logo designs that give your brand a unique identity and help you stand out with confidence in a competitive market.",
	// 	icon: "icon-design-thinking",
	// 	slug: "logo-design-company-ahmedabad"
	// },
	{
		id: crypto.randomUUID(),
		title: "Graphic Design",
		description:
			"Our graphic designs transform creative ideas into captivating visuals that leave a lasting impression on your audience.",
		icon: "icon-branding",
		slug: "graphic-design-company-in-ahmedabad"
	},
	{
		id: crypto.randomUUID(),
		title: "UI/UX Design",
		description:
			"We design intuitive user interfaces that ensure maximum usability, smooth navigation, and enjoyable interactions for every user.",
		icon: "icon-design-tools",
		slug: "ui-ux-design-agency-in-ahmedabad"
	},
	{
		id: crypto.randomUUID(),
		title: "Web Development",
		description:
			"As a leading web development company in Ahmedabad, India, we specialize in building visually stunning, high-performing websites that connect seamlessly with your target audience.",
		icon: "icon-web",
		slug: "services/web-development"
	},
	{
		id: crypto.randomUUID(),
		title: "SEO",
		description:
			"Our team leverages advanced strategies and in-depth keyword analysis to ensure your website ranks high for the searches that matter most.",
		icon: "icon-design-thinking",
		slug: "seo-company-in-ahmedabad"
	},
	// {
	// 	id: crypto.randomUUID(),
	// 	title: "Google Ads Management",
	// 	description:
	// 		" We drive your business growth by reaching the right customers at the right time with expert Google Ads setup, precise keyword targeting, and continuous performance optimization.",
	// 	icon: "icon-design-thinking",
	// 	slug: "google-ads"
	// },


];

const teamsData = [
	{
		id: crypto.randomUUID(),
		name: "Andrew Mark",
		designation: "Creative Director",
		img: Team1Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Jack Taylor",
		designation: "Senior Designer",
		img: Team2Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Martine Joy",
		designation: "Project Manager",
		img: Team3Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Adam Straw",
		designation: "Web Developer",
		img: Team4Img,
	},
];

function HomeOne() {
	return (

		<>
			<Helmet>
				<title>Web Development & Digital Marketing Agency in Ahmedabad - Chameleo GFX Studio </title>
				<meta name="description" content="Chameleo GFX Studio is the best Web Development & Digital Marketing Agency in Ahmedabad. We are delivering innovative websites and result-driven marketing solutions. " />
				<meta name="keywords" content="Chameleo GFX Studio, Web Development Company in Ahmedabad, Digital Marketing Agency in Ahmedabad, Best Web Development Company Ahmedabad, SEO Company in Ahmedabad, Social Media Marketing Ahmedabad, Website Design Company Ahmedabad, PPC Agency Ahmedabad, Online Marketing Services Ahmedabad, Ecommerce Website Development Ahmedabad, Branding Agency Ahmedabad, Web Development Services Ahmedabad, Digital Marketing Services Ahmedabad" />
				<link
					rel="canonical"
					href="https://chameleogfxstudio.com/"
				/>

				{/* Open Graph Meta Tags */}
				<meta property="og:title" content="Web Development & Digital Marketing Agency in Ahmedabad - Chameleo GFX Studio " />
				<meta property="og:description" content="Chameleo GFX Studio is the best Web Development & Digital Marketing Agency in Ahmedabad. We are delivering innovative websites and result-driven marketing solutions. " />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://chameleogfxstudio.com/" />
				<meta property="og:image" content="https://newcgswebsite.netlify.app/assets/images/logo/Cgs_Logo.png" />
				<meta property="og:image:secure_url" content="https://newcgswebsite.netlify.app/assets/images/logo/Cgs_Logo.png" />
				<meta property="og:image:type" content="image/png" />
				<meta property="og:site_name" content="Chameleo GFX Studio" />
				<meta property="og:locale" content="en_US" />

				{/* Optional: Twitter Card */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Web Development & Digital Marketing Agency in Ahmedabad - Chameleo GFX Studio " />
				<meta name="twitter:description" content="Chameleo GFX Studio is the best Web Development & Digital Marketing Agency in Ahmedabad. We are delivering innovative websites and result-driven marketing solutions. " />
				<meta name="twitter:image" content="https://newcgswebsite.netlify.app/assets/images/logo/Cgs_Logo.png" />
			</Helmet>
			<Hero />
			<AutoSlider />
			<AwardsSection />
			{/* <Services services={servicesData} /> */}

			<AppWebServices />
			<Logoslider />
			{/* <Partner/> */}
			<RightSlider />
			<Websites />
			<IndustriesHomeSection />
			<About />
			<CalltoAction
				title="Ready to Get Started?"
				description="Take your business to the next level with our innovative solutions. Contact us today to discuss your project."
				btnText="Get a Quote"
				btnLink="/contact-us"
				centered={false}

			/>
			{/* <ImageSection /> */}
			{/* <Projects /> */}
			<HowWeWork />

			<StatsSection />
			<WhyChooseUs />
			<TestimonialSlider />
			<MissionVision />
			<AutoSlider />
			{/* <Teams teams={teamsData} /> */}
		</>
	);
}

export default HomeOne;
