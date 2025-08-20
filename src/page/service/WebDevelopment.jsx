import { Helmet } from "react-helmet";
import BreadCrumb from "../../components/common/Breadcrumb";
import WebDevelopmentDetails from "../../components/service/WebDevelopmentDetails";

function WebDevelopment() {
  return (
    <>
      <Helmet>
        <title>Web Development Company in Ahmedabad</title>
        <meta 
          name="description" 
          content="Chameleo GFX Studio is the Best Website Development Company in Ahmedabad. We offer professional website development services that help businesses build a strong digital presence." 
        />
        <meta 
          name="keywords" 
          content="Web development company in Ahmedabad, Best Web Development Company in Ahmedabad, Website Development Company in Ahmedabad, best website development company in Ahmedabad, Web Development Agency in Ahmedabad" 
        />
        <link 
          rel="canonical" 
          href="https://chameleogfxstudio.com/web-development-company-in-ahmedabad" 
        />
      </Helmet>
      <BreadCrumb title="Web Development" />
      <WebDevelopmentDetails />
    </>
  );
}

export default WebDevelopment;
