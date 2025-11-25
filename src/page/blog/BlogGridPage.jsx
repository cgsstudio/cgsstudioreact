import GridBlog from "../../components/blog/grid-blog";
import BreadCrumb from "../../components/common/Breadcrumb";
import heroBannerImage from "../../assets/images/v1/Group 113.webp";
function BlogGridPage() {
	return (
		<>
			<BreadCrumb title="Blog Grid" image={heroBannerImage} />
			<GridBlog />
		</>
	);
}

export default BlogGridPage;
