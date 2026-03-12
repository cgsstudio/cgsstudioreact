import { Helmet } from "react-helmet-async";
import Blog from "../../components/blog";
import HeroBanner from "../../components/common/BlogHeroBanner";
import heroBannerImage from "../../assets/images/v1/Group 122.webp";

function BlogPage() {
	return (
		<>
		<Helmet>
            <title>Blog - Chameleo GFX Studio</title>
            <meta name="description" content="Stay updated with the latest insights, trends, and tips in UI/UX design, web development, and digital marketing from Chameleo GFX Studio." />
            <link rel="canonical" href="https://www.chameleogfxstudio.com/blog/" />
            <meta name="keywords" content="Chameleo GFX Studio, UI/UX Design Trends, Web Development Tips, Digital Marketing Insights, Graphics Design Blog" />
        </Helmet>
			<HeroBanner
				title="Blog"
				breadcrumbs={[{ label: "Home", link: "/" }, { label: "Blog" }]}
				image={heroBannerImage}
			/>
			<Blog />
		</>
	);
}

export default BlogPage;
