import BlogHero from "./BlogHero";

function BreadCrumb({ title, breadcrumbTitle, subtitle, image }) {
  // Reuse BlogHero so all pages that import BreadCrumb get the same hero style
  // breadcrumbTitle is optional - if not provided, title is used for both
  return <BlogHero title={title} breadcrumbTitle={breadcrumbTitle || title} image={image} />;
}

export default BreadCrumb;
