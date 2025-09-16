import Star2Img from "../../../assets/images/v1/star2.png";
import Project1Img from "../../../assets/images/v1/project1.png";
import Project2Img from "../../../assets/images/v1/project2.png";
import Project3Img from "../../../assets/images/v1/project3.png";
import Project4Img from "../../../assets/images/v1/project4.png";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";

const projectsData = [
	{
		id: crypto.randomUUID(),
		title: "Planning",
		description: "We first create a plan. Our plan will help you determine your website’s goals. ",
		img: Project1Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Design",
		description: "We decide and design the overall look and feel of your website, choosing colors, fonts, etc",
		img: Project2Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Development",
		description: "This stage is all about shaping the raw ideas into functional reality by weaving all the technologies together.",
		img: Project3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Testing & Deployment",
		description: "We make sure that everything is functioning correctly. We only launch once the website passes all tests.",
		img: Project4Img,
	},
	// {
	// 	id: crypto.randomUUID(),
	// 	title: "Product Design",
	// 	description: "Developing the look and feel of physical products, aesthetics, and functionality.",
	// 	img: Project1Img,
	// },
	// {
	// 	id: crypto.randomUUID(),
	// 	title: "Logo and Branding",
	// 	description: "Creating or refreshing a company's logo and developing a cohesive visual identity.",
	// 	img: Project2Img,
	// },
];

const swiperSettings = {
  spaceBetween: 24,
  direction: "horizontal",
  pagination: {
    clickable: true,
  },
  modules: [Pagination, Mousewheel],
  mousewheel: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    900: {
      slidesPerView: 3, // instead of 3
    },
    1280: {
      slidesPerView: 3, // explicitly set 2 slides for 1280-1599
    },
  
  },
};

function Projects() {
	return (
		<div className="section dark-bg aximo-section-padding">
			<div className="container">
				<div className="aximo-section-title center light">
					<h2>
					How we work
						<span className="aximo-title-animation">
						 
							<span className="aximo-title-icon">
								<img className="shape-color" src={Star2Img} alt="Star2Img" />
							</span>
						</span>
					</h2>
				</div>
			</div>
			<div className="swiper aximo-project-slider">
				<Swiper {...swiperSettings}>
					{projectsData.map((project) => (
						<SwiperSlide key={project.id}>
							<ProjectCard project={project} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default Projects;
