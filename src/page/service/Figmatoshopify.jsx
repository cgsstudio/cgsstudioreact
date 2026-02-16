import { Helmet } from "react-helmet-async";
import BreadCrumb from "../../components/common/Breadcrumb";
import  Figmatoshopifydetail from "../../components/service/Figmatoshopifydetail";

function Figmatoshopify() {
    
  return (
    <>
    <Helmet>
            <title>Figma to Shopify Conversion Service in Ahmedabad, India</title>
            <meta name="description" content="Chameleo GFX Studio offers the best Figma to Shopify conversion service in Ahmedabad, India. Pixel-perfect, responsive, and SEO-friendly Shopify stores built from your Figma designs." />
			      <meta name="keywords" content="Chameleo GFX Studio, Figma to Shopify, Shopify conversion Ahmedabad, Figma to Shopify India, Shopify development, responsive Shopify store, Shopify designers, eCommerce design, Shopify experts, Shopify customization" />
            <link 
          rel="canonical" 
          href="/figma-to-shopify" 
        />
        </Helmet>
      <BreadCrumb title="Figma to Shopify Conversion" />
      <div className="bg-white-smoke">
        <Figmatoshopifydetail />

    </div>

    </>
  );
}

export default Figmatoshopify;
