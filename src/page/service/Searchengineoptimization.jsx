import { Helmet } from "react-helmet";
import BreadCrumb from "../../components/common/Breadcrumb";
import  Searchengineoptimizationdetail from "../../components/service/Searchengineoptimizationdetail";

function Searchengineoptimization() {
    
  return (
    <>
    <Helmet>
            <title>Best SEO Company in India| SEO Services India</title>
            <meta name="description" content="Chameleo GFX Studio is the best SEO company in India, offering expert SEO services to boost rankings, drive traffic, and grow your business online." />
			      <meta name="keywords" content="Chameleo GFX Studio, best SEO company India, SEO services India, top SEO agency India, search engine optimization, SEO experts India, Google ranking services, on-page SEO, off-page SEO, local SEO India" />
            <link 
          rel="canonical" 
          href="/search-engine-optimization" 
        />
        </Helmet>
      <BreadCrumb title="Search Engine Optimization" />
      <Searchengineoptimizationdetail />

    </>
  );
}

export default Searchengineoptimization;
