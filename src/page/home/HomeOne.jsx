
import About from "../../components/home-one/about";
import AutoSlider from "../../components/home-one/auto-slider";
import Hero from "../../components/home-one/hero";
import Projects from "../../components/home-one/projects";
import Services from "../../components/home-one/services";
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
import TestimonialSlider from "../../components/home-one/testimonial/TestimonialSlider"


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
		slug: "ui-ux-design-company-in-ahmedabad"
	},
	{
		id: crypto.randomUUID(),
		title: "Web Development",
		description:
			"As a leading web development company in Ahmedabad, India, we specialize in building visually stunning, high-performing websites that connect seamlessly with your target audience.",
		icon: "icon-web",
		slug: "web-development-company-in-ahmedabad"
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
            <title>Creative Design, Development & Marketing Agency - Chameleo GFX Studio</title>
            <meta name="description" content="Chameleo GFX Studio is the best Creative Designing Agency in Ahmedabad. We offer innovative design solutions like graphics, logos, branding, web design, UI/UX, & more. Call now." />
			<meta name="keywords" content="Creative Designing Agency in Ahmedabad, Creative Agency in Ahmedabad, Logo Design, Branding, web design, UI/UX" />
			<link 
          rel="canonical" 
          href="https://chameleogfxstudio.com/" 
        />
        </Helmet>
			<Hero />
			<AutoSlider />
			<Services services={servicesData} />
			<Logoslider/>
		    {/* <Partner/> */}
			<RightSlider/>
			<About />
			<Projects />
			<TestimonialSlider />
			<WhyChooseUs />
			<AutoSlider />
			{/* <Teams teams={teamsData} /> */}
		</>
	);
}

export default HomeOne;
