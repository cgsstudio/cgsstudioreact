import { Helmet } from "react-helmet";
import BreadCrumb from "../../components/common/Breadcrumb";
import  Shopifyseooptimizationdetail from "../../components/service/Shopifyseooptimizationdetail";

function Shopifyseooptimization() {
    
  return (
    <>
    <Helmet>
            <title>Shopify SEO Company in Ahmedabad, India</title>
            <meta name="description" content="Chameleo GFX Studio is a leading Shopify SEO company in Ahmedabad, India. Boost your online store’s traffic and sales with expert Shopify SEO strategies and optimization services." />
			      <meta name="keywords" content="Chameleo GFX Studio, Shopify SEO, Shopify SEO Ahmedabad, Shopify SEO India, eCommerce SEO, Shopify optimization, online store SEO, SEO experts, Shopify marketing, SEO services India" />
            <link 
          rel="canonical" 
          href="/shopify-seo-optimization" 
        />
        </Helmet>
      <BreadCrumb title="Shopify SEO Optimization" />
      <Shopifyseooptimizationdetail />

    </>
  );
}

export default Shopifyseooptimization;
