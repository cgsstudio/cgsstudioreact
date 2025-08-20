import { Helmet } from "react-helmet";
import Blog from "../../components/blog";
import BreadCrumb from "../../components/common/Breadcrumb";
function BlogPage() {
	return (
		<>
		<Helmet>
            <title>Blog - Chameleo GFX Studio</title>
            <meta name="description" content="" />
			<meta name="keywords" content="Chameleo GFX Studio, SEO For Dubai Tourism, Online Visibility Dubai Hospitality, SEO Strategies For Hotels Dubai, Dubai Tourism SEO Tips, Hospitality SEO Dubai, Travel Industry SEO Dubai, SEO Benefits For Hospitality Dubai" />
        </Helmet>
			<BreadCrumb title="Blog" />
			<Blog />
		</>
	);
}

export default BlogPage;
