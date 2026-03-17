import { Helmet } from "react-helmet-async";
import ServiceHeroBanner from "../../components/common/ServiceHeroBanner";
import Digitalmarketingdetail from "../../components/service/Digitalmarketingdetail";
import heroBannerImage from "../../assets/images/v1/Group 122.webp";

function Digitalmarketing() {

  return (
    <>
      <Helmet>
        <title>Digital Marketing Agency</title>
        <meta name="description" content="Chameleo GFX Studio is a top digital marketing agency in India offering SEO, social media, branding, and web design services to grow your online presence." />
        <meta name="keywords" content="Chameleo GFX Studio, Digital Marketing India, SEO Services India, Social Media Marketing, Branding Agency India, Web Design India, PPC India, Online Marketing, Content Marketing India, Creative Agency India" />
        <link
          rel="canonical"
          href="https://chameleogfxstudio.com/services/digital-marketing"
        />
      </Helmet>
      <ServiceHeroBanner
        title="Digital Marketing"
        breadcrumbTitle="Digital Marketing"
        subtitle="A website is like the virtual home of a company."
        image={heroBannerImage}
      />
      <div className="bg-white-smoke">
        <Digitalmarketingdetail />

    </div>

    </>
  );
}

export default Digitalmarketing;
