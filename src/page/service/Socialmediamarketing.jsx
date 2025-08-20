import { Helmet } from "react-helmet";
import BreadCrumb from "../../components/common/Breadcrumb";
import  Socialmediamarketingdetail from "../../components/service/Socialmediamarketingdetail";

function Socialmediamarketing() {
    
  return (
    <>
    <Helmet>
            <title>Social Media Marketing Agency in India | Social Media Marketing Services</title>
            <meta name="description" content="Chameleo GFX Studio is a leading social media marketing agency in India, helping brands grow with creative strategies across all major social platforms." />
			      <meta name="keywords" content="Chameleo GFX Studio, social media marketing India, SMM agency India, Instagram marketing India, Facebook ads India, digital marketing agency, social media experts India, content creation India, online branding India, social media strategy" />
            <link 
          rel="canonical" 
          href="/social-media-marketing" 
        />
        </Helmet>
      <BreadCrumb title="Social Media Marketing" />
      <Socialmediamarketingdetail />

    </>
  );
}

export default Socialmediamarketing;


