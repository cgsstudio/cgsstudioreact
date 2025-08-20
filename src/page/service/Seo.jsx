import { Helmet } from "react-helmet";
import BreadCrumb from "../../components/common/Breadcrumb";
import SeoDetails from "../../components/service/SeoDetails";

function Seo() {
    
  return (
    <>
    <Helmet>
            <title>SEO Company in Ahmedabad - Chameleo GFX Studio</title>
            <meta name="description" content="Chameleo GFX Studio is the Best SEO Company in Ahmedabad. We provide best SEO services to local & global businesses that help increase the website rankings." />
			      <meta name="keywords" content="SEO Company in Ahmedabad, Best SEO Company in Ahmedabad, SEO Services in Ahmedabad, SEO Agency in Ahmedabad" />
            <link 
          rel="canonical" 
          href="https://chameleogfxstudio.com/seo-company-in-ahmedabad" 
        />
    </Helmet>
      <BreadCrumb title="SEO" />
      <SeoDetails />

    </>
  );
}

export default Seo;
