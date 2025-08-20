import { Helmet } from "react-helmet";
import BreadCrumb from "../../components/common/Breadcrumb";
import  Shopifydetail from "../../components/service/Shopifydetail";

function Shopify() {
    
  return (
    <>
    <Helmet>
            <title>Shopify development company in Ahmedabad | Shopify development Services India</title>
            <meta name="description" content="Chameleo GFX Studio is a top Shopify development company in Ahmedabad offering custom Shopify store design, development, and support services across India. Scalable and sales-ready." />
			      <meta name="keywords" content="Chameleo GFX Studio, Shopify development, Shopify Ahmedabad, Shopify India, Shopify experts, eCommerce store development, Shopify customization, Shopify designers, Shopify setup, Shopify support" />
            <link 
          rel="canonical" 
          href="/shopify" 
        />
        </Helmet>
      <BreadCrumb title="Shopify" />
      <Shopifydetail />

    </>
  );
}

export default Shopify;
