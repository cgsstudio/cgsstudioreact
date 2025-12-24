import { Helmet } from "react-helmet-async";
import Blog from "../../components/blog";
import HeroBanner from "../../components/common/BlogHeroBanner";
import heroBannerImage from "../../assets/images/v1/Group 122.webp";

function BlogPage() {
	return (
		<>
		<Helmet>
            <title>Blog - Chameleo GFX Studio</title>
            <meta name="description" content="" />
			<meta name="keywords" content="Chameleo GFX Studio, SEO For Dubai Tourism, Online Visibility Dubai Hospitality, SEO Strategies For Hotels Dubai, Dubai Tourism SEO Tips, Hospitality SEO Dubai, Travel Industry SEO Dubai, SEO Benefits For Hospitality Dubai" /> {/* */}
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
