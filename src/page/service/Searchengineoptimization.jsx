import { Helmet } from "react-helmet-async";
import BreadCrumb from "../../components/common/Breadcrumb";
import Searchengineoptimizationdetail from "../../components/service/Searchengineoptimizationdetail";

function Searchengineoptimization() {

  return (
    <>
      <Helmet>
        <title>Best SEO Agency | SEO Services India</title>
        <meta name="description" content="Chameleo GFX Studio is the best SEO company in Ahmedabad India, offering expert SEO services to boost rankings, drive traffic, and grow your business online." />
        <meta name="keywords" content="Chameleo GFX Studio, best SEO company India, SEO services India, top SEO agency India, search engine optimization, SEO experts India, Google ranking services, on-page SEO, off-page SEO, local SEO India" />
        <link
          rel="canonical"
          href="https://chameleogfxstudio.com/services/digital-marketing/seo-agency"
        />
      </Helmet>
      <BreadCrumb title="SEO Agency in Ahmedabad India" breadcrumbTitle="SEO Agency in Ahmedabad India" />
      <div className="bg-white-smoke">
        <Searchengineoptimizationdetail />

      </div>

    </>
  );
}

export default Searchengineoptimization;
