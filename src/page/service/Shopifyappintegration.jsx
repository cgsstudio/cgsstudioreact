import { Helmet } from "react-helmet";
import BreadCrumb from "../../components/common/Breadcrumb";
import  Shopifyappintegrationdetail from "../../components/service/Shopifyappintegrationdetail";

function Shopifyappintegration() {
    
  return (
    <>
    <Helmet>
            <title>Shopify App Integration and Development in Ahmedabad, India</title>
            <meta name="description" content="Chameleo GFX Studio offers expert Shopify app integration and development in Ahmedabad, India. Enhance your store's functionality with custom app solutions tailored to your business needs." />
			      <meta name="keywords" content="Chameleo GFX Studio, Shopify app development, Shopify integration, Shopify experts India, Shopify Ahmedabad, custom Shopify apps, Shopify API, eCommerce apps, app integration service, Shopify developers" />
            <link 
          rel="canonical" 
          href="/shopify-app-integration-and-development" 
        />
        </Helmet>
      <BreadCrumb title="Shopify App Integration and Development" />
      <Shopifyappintegrationdetail />

    </>
  );
}

export default Shopifyappintegration;
