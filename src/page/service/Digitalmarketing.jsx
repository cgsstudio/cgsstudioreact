import { Helmet } from "react-helmet";
import BreadCrumb from "../../components/common/Breadcrumb";
import  Digitalmarketingdetail from "../../components/service/Digitalmarketingdetail";

function Digitalmarketing() {
    
  return (
    <>
    <Helmet>
            <title>Digital Marketing Agency in India | Digital Marketing Services in India</title>
            <meta name="description" content="Chameleo GFX Studio is a top digital marketing agency in India offering SEO, social media, branding, and web design services to grow your online presence." />
			      <meta name="keywords" content="Chameleo GFX Studio, Digital Marketing India, SEO Services India, Social Media Marketing, Branding Agency India, Web Design India, PPC India, Online Marketing, Content Marketing India, Creative Agency India" />
            <link 
          rel="canonical" 
          href="/digital-marketing" 
        />
        </Helmet>
      <BreadCrumb title="Digital Marketing" />
      <Digitalmarketingdetail />

    </>
  );
}

export default Digitalmarketing;
