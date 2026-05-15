import Story from "../components/about/story";
import BlogHero from "../components/common/BlogHero";
import About from "../components/home-one/about";
import AutoSlider from "../components/home-one/auto-slider";
import TwoColumnFaq from "../components/contact/TwoColumnFaq";
import Teams from "../components/home-one/teams";
import heroBannerImage from "../assets/images/v1/Group 113.webp";
// Teams images
import Team1Img from "../assets/images/team/team1.png";
import Team2Img from "../assets/images/team/team2.png";
import Team4Img from "../assets/images/team/team4.png";

import { Helmet } from "react-helmet-async";


const teamsData = [
	{
		id: crypto.randomUUID(),
		name: "Niraj Mandaliya",
		designation: "Co-Founder & CEO",
		linkedin: "https://www.linkedin.com/in/nirajmandaliya/",
		img: Team1Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Dhiraj Ahuja",
		designation: "Co-Founder & CFO ",
		linkedin: "https://www.linkedin.com/in/dhirahuja/",
		img: Team2Img,
	},

];

function AboutUs() {
	return (
		<>
			<Helmet>
				<title>About Chameleo GFX Studio | Digital Marketing Agency</title>
				<meta name="description" content="Chameleo GFX Studio is a leading digital marketing and web development agency in Ahmedabad, offering SEO, branding, web design, and growth-driven solutions." />
				<meta name="keywords" content="About Chameleo GFX Studio. About Graphic Company in Ahmedabad, About best Branding company in Ahmedabad, Logo design company, UI UX Design Company, Web development company, social media marketing agency, SEO Company" />
				<link
					rel="canonical"
					href="https://chameleogfxstudio.com/about-us/"
				/>
			</Helmet>
			<BlogHero title="About Us" breadcrumbTitle="About Us" image={heroBannerImage} />
			<Story />
			<About />
			<AutoSlider />
			<Teams teams={teamsData} />
			<TwoColumnFaq />

		</>
	);
}

export default AboutUs;
