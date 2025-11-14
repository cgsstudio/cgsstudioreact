import BreadCrumb from "../../components/common/Breadcrumb";
import Teams from "../../components/home-one/teams";
// Team member images
import Team1Img from "../../assets/images/team/team1.png";
import Team10Img from "../../assets/images/team/team10.png";
import Team11Img from "../../assets/images/team/team11.png";
import Team12Img from "../../assets/images/team/team12.png";
import Team2Img from "../../assets/images/team/team2.png";
import Team4Img from "../../assets/images/team/team4.png";
import Team5Img from "../../assets/images/team/team5.png";
import Team6Img from "../../assets/images/team/team6.png";
import Team7Img from "../../assets/images/team/team7.png";
import Team8Img from "../../assets/images/team/team8.png";
import Team9Img from "../../assets/images/team/team9.png";

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
		linkedin: "https://www.linkedin.com/in/dhirahuja/",
		img: Team2Img,
	},

];
function Team() {
	return (
		<>
			<BreadCrumb title="Our Team" />
			<Teams teams={teamsData} />
		</>
	);
}

export default Team;
<div>Team</div>;
