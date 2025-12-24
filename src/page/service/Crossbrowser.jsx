import { Helmet } from "react-helmet-async";
import BreadCrumb from "../../components/common/Breadcrumb";
import  Crossbrowserdetail from "../../components/service/Crossbrowserdetail";

function Crossbrowser() {
    
  return (
    <>
    <Helmet>
            <title>Cross-Browser Compatibility Testing Service</title>
            <meta name="description" content="Ensure seamless user experience with Chameleo GFX Studio’s cross-browser compatibility testing services. Optimize your website for all major browsers." />
			      <meta name="keywords" content="Chameleo GFX Studio, Cross-Browser Testing, Browser Compatibility, Website Testing, Web Design, Responsive Design, Browser Support, UI Testing" />
            <link 
          rel="canonical"   
          href="/cross-browser-compatibility-testing" 
        />
        </Helmet>
      <BreadCrumb title="Cross-Browser Compatibility Testing" />
      <Crossbrowserdetail />

    </>
  );
}

export default Crossbrowser;
