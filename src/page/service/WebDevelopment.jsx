import { Helmet } from "react-helmet-async";
import ServiceHeroBanner from "../../components/common/ServiceHeroBanner";
import WebDevelopmentDetails from "../../components/service/WebDevelopmentDetails";
import heroBannerImage from "../../assets/images/v1/Group 112.webp";

function WebDevelopment() {
  return (
    <>
      <Helmet>
        <title>Website Development Company</title>
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
          href="https://chameleogfxstudio.com/website-development-company-ahmedabad"
        />
      </Helmet>
      <ServiceHeroBanner
        title="Website Development Company"
        breadcrumbTitle="Website Development Company in Ahmedabad"
        subtitle="A website is like the virtual home of a company."
        image={heroBannerImage}
      />
      <div className="bg-white-smoke">
        <WebDevelopmentDetails />
    </div>
    </>
  );
}

export default WebDevelopment;
