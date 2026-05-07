import { Helmet } from "react-helmet-async";
import ServiceHeroBanner from "../../components/common/ServiceHeroBanner";
import WhiteLabelServicesDetails from "../../components/service/WhiteLabelServicesDetails";

// Responsive hero height: 800px on lg screens, auto on smaller
const heroBannerStyle = {
  minHeight: "450px",
};

function WhiteLabelServices() {
  return (
    <>
      <Helmet>
        <title>White Label Services India | White Label Marketing Agency in Ahmedabad | Chameleo GFX Studio</title>
        <meta
          name="description"
          content="Chameleo GFX Studio is a trusted white label marketing agency in Ahmedabad, India. We offer white label SEO, web development, graphic design, social media, and CRO services to help agencies scale without the growing pains."
        />
        <meta
          name="keywords"
          content="White Label Services India, White Label Marketing Agency India, White Label Services Ahmedabad, White Label SEO, White Label Web Development, White Label Graphic Design, White Label Social Media Marketing, White Label CRO"
        />
        <link
          rel="canonical"
          href="https://chameleogfxstudio.com/services/white-label-marketing-agency-india"
        />
      </Helmet>

      <ServiceHeroBanner
        title="White Label Services"
        breadcrumbTitle="White Label Services"
        subtitle="Scale your agency without the growing pains. Chameleo GFX Studio is your silent delivery partner producing premium work under your brand."
        style={heroBannerStyle}
      />

      <WhiteLabelServicesDetails />
    </>
  );
}

export default WhiteLabelServices;
