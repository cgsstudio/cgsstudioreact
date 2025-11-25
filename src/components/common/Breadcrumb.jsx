import BlogHero from "./BlogHero";

function BreadCrumb({ title, subtitle, image }) {
  // Reuse BlogHero so all pages that import BreadCrumb get the same hero style
  return <BlogHero title={title} image={image} />;
}

export default BreadCrumb;
