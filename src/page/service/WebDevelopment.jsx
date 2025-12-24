import { Helmet } from "react-helmet-async";
import ServiceHeroBanner from "../../components/common/ServiceHeroBanner";
import WebDevelopmentDetails from "../../components/service/WebDevelopmentDetails";
import heroBannerImage from "../../assets/images/v1/Group 112.webp";

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
      <ServiceHeroBanner 
        title="Web Development Services" 
        subtitle="A website is like the virtual home of a company."
        image={heroBannerImage}
      />
      <WebDevelopmentDetails />
    </>
  );
}

export default WebDevelopment;
