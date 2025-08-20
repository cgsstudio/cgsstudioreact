import Story from "../components/about/story";
import BreadCrumb from "../components/common/Breadcrumb";
import About from "../components/home-one/about";
import AutoSlider from "../components/home-one/auto-slider";
import TwoColumnFaq from "../components/contact/TwoColumnFaq";
import Teams from "../components/home-one/teams";
// Teams images
import Team1Img from "../assets/images/team/team1.png";
import Team2Img from "../assets/images/team/team2.png";
import Team4Img from "../assets/images/team/team4.png";

import { Helmet } from "react-helmet";


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
			designation: "Co-Founder & Chairman ",
			linkedin: "https://www.linkedin.com/in/dhirajahuja/",
			img: Team2Img,
		},
	
];

function AboutUs() {
	return (
		<>
		<Helmet>
            <title>About Chameleo GFX Studio-Best Graphic & Branding Agency</title>
            <meta name="description" content="Chameleo GFX Studio is a well-known Graphic & Branding Agency Company based in Ahmedabad, India. We have dedicated team of Graphic, Branding, UI/UX and Logo Design Experts; they are always ready to give complete support." />
			<meta name="keywords" content="About Chameleo GFX Studio. About Graphic Company in Ahmedabad, About best Branding company in Ahmedabad, Logo design company, UI UX Design Company, Web development company, social media marketing agency, SEO Company" />
			<link 
          rel="canonical" 
          href="https://chameleogfxstudio.com/About-us" 
        />
        </Helmet>
			<BreadCrumb title="About Us" />
			<Story />
			<About />
			<AutoSlider />
			<Teams teams={teamsData} />
			<TwoColumnFaq />
			
		</>
	);
}

export default AboutUs;
