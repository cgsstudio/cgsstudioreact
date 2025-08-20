import { Helmet } from "react-helmet";
import BreadCrumb from "../../components/common/Breadcrumb";
import SocialMediaDetails from "../../components/service/SocialMediaDetails";

function SocialMedia() {
    
  return (
    <>
 


<Helmet>
            <title>Social Media Banner Design Company | Social Media Design Services</title>
            <meta name="description" content="Chameleo GFX Studio is the best Social Media Banner Design Company in Ahmedabad. Our expert design company creates stunning visuals for all platforms." />
			      <meta name="keywords" content="Chameleo GFX Studio, Social Media Banner Design Company, Social Media Design Services, Social Media Banner Design Company Ahmedabad, Social Media Design Services Ahmedabad, Social Media Banner Design Agency" />
            <link 
          rel="canonical" 
          href="https://chameleogfxstudio.com/social-media-banner-design" 
        />
        </Helmet>
      <BreadCrumb title="Social Media" />
      <SocialMediaDetails/>

    </>
  );
}

export default SocialMedia;
