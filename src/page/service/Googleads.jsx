import { Helmet } from "react-helmet";
import BreadCrumb from "../../components/common/Breadcrumb";
import  Googleadsdetail from "../../components/service/Googleadsdetail";

function Googleads() {
    
  return (
    <>
    <Helmet>
            <title>Google Ads agency in Ahmedabad, India | Google Ads Services India </title>
            <meta name="description" content="Chameleo GFX Studio is a trusted Google Ads agency in Ahmedabad, India, offering ROI-focused PPC campaigns to boost traffic, leads, and online sales." />
			      <meta name="keywords" content="Chameleo GFX Studio, Google Ads agency Ahmedabad, PPC services India, Google Ads management, pay-per-click India, SEM agency India, PPC experts Ahmedabad, Google advertising India, paid search services, Google Ads India" />
            <link 
          rel="canonical" 
          href="/google-ads" 
        />
        </Helmet>
      <BreadCrumb title="Google Ads" />
      <Googleadsdetail />

    </>
  );
}

export default Googleads;


