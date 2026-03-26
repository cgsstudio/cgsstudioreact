import { Helmet } from "react-helmet-async";
import BreadCrumb from "../../components/common/Breadcrumb";
import SocialMediaDetails from "../../components/service/SocialMediaDetails";

function SocialMedia() {
    
  return (
    <>
 


<Helmet>
            <title>Social Media Marketing Services | Social Media Management</title>
            <meta name="description" content="Chameleo GFX Studio provides expert social media marketing services to help brands engage, influence, and convert their audience across all major platforms." />
			      <meta name="keywords" content="Chameleo GFX Studio, social media marketing, social media management, SMM services, social media marketing agency, online branding, social media strategy" />
            <link 
          rel="canonical" 
          href="https://chameleogfxstudio.com/services/digital-marketing/social-media-marketing" 
        />
        </Helmet>
      <BreadCrumb title="Social Media Marketing" subtitle="Social Media Marketing" />
      <div className="bg-white-smoke">
        <SocialMediaDetails/>

    </div>

    </>
  );
}

export default SocialMedia;
