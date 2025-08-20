import { Helmet } from "react-helmet";
import BreadCrumb from "../../components/common/Breadcrumb";
import  Metaadsdetail from "../../components/service/Metaadsdetail";

function Metaads() {
    
  return (
    <>
    <Helmet>
            <title>Meta Ads agency in India | Facebook Ads Agency India</title>
            <meta name="description" content="Chameleo GFX Studio is a top Meta Ads agency in India, offering expert Facebook and Instagram ad services to drive engagement, leads, and brand growth." />
			      <meta name="keywords" content="Chameleo GFX Studio, Meta Ads agency India, Facebook Ads agency India, Instagram Ads India, social media ads India, paid social campaigns, Facebook marketing India, Meta advertising services, lead generation ads, FB & IG ad experts" />
            <link 
          rel="canonical" 
          href="/meta-ads" 
        />
        </Helmet>
      <BreadCrumb title="Meta Ads" />
      <Metaadsdetail />

    </>
  );
}

export default Metaads;


