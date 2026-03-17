import { Helmet } from "react-helmet-async";
import BreadCrumb from "../../components/common/Breadcrumb";
import WordPressdetail from "../../components/service/WordPressdetail";

function WordPress() {

  return (
    <>
      <Helmet>
        <title>WordPress Development Services</title>
        <meta name="description" content="Chameleo GFX Studio offers the best WordPress Development Services in Ahmedabad, India. Custom websites, themes, plugins & SEO-friendly solutions." />
        <meta name="keywords" content="Chameleo GFX Studio, WordPress development Ahmedabad, WordPress development India, custom WordPress services, WordPress design Ahmedabad, WordPress experts India, website development Ahmedabad, WordPress theme development, SEO-friendly WordPress, WordPress plugin development" />
        <link
          rel="canonical"
          href="https://chameleogfxstudio.com/services/web-development/wordpress-development-company"
        />
      </Helmet>
      <BreadCrumb title="WordPress Development Company" breadcrumbTitle="WordPress Development Company" />
      <div className="bg-white-smoke">
        <WordPressdetail />

    </div>

    </>
  );
}

export default WordPress;
