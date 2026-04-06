import BlogHero from "../../components/common/BlogHero";
import FaqAccordion from "../../components/faq/FaqAccordion";
import { Helmet } from "react-helmet-async";

function Faq() {
	return (
		<>
			<Helmet>
				<title>FAQs | Chameleo GFX Studio – Web Design & Digital Marketing Company</title>
				<meta name="description" content="Find answers to common questions about Chameleo GFX Studio's web design, development, SEO, and digital marketing services. Learn how we help businesses grow with innovative and result-driven solutions." />
				<meta name="keywords" content="Chameleo GFX Studio FAQs, web design questions, SEO services FAQ, digital marketing FAQ, website development queries, Ahmedabad digital agency, marketing services FAQ" />
				<link rel="canonical" href="https://chameleogfxstudio.com/faq/" />
			</Helmet>
			<BlogHero title="Faq" breadcrumbTitle="Faq" />
			<FaqAccordion />
		</>
	);
}

export default Faq;
