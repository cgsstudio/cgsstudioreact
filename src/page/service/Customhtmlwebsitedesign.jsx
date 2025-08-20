import { Helmet } from "react-helmet";
import BreadCrumb from "../../components/common/Breadcrumb";
import  Customhtmlwebsitedesigndetail from "../../components/service/Customhtmlwebsitedesigndetail";

function Customhtmlwebsitedesign() {
    
  return (
    <>
    <Helmet>
            <title>Custom HTML Website Design Company in Ahmedabad | Custom HTML Website Design India</title>
              <meta name="description" content="Chameleo GFX Studio offers custom HTML website design services in Ahmedabad. We build fast, SEO-friendly, and fully responsive websites tailored to your needs." />
			        <meta name="keywords" content="Chameleo GFX Studio, Custom HTML Website Ahmedabad, HTML Design Company Ahmedabad, Responsive Website Design, Custom Web Design India, Front-End Development" />
            <link 
          rel="canonical" 
          href="/custom-html-website-design" 
        />
        </Helmet>
      <BreadCrumb title="Custom HTML Website Design" />
      <Customhtmlwebsitedesigndetail />

    </>
  );
}

export default Customhtmlwebsitedesign;
