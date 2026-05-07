import { Helmet } from "react-helmet-async";
import BreadCrumb from "../../components/common/Breadcrumb";
import Metaadsdetail from "../../components/service/Metaadsdetail";

function Metaads() {

  return (
    <>
      <Helmet>
        <title>Meta Ads Management Company | Facebook Ads Agency India</title>
        <meta name="description" content="Chameleo GFX Studio is a top Meta Ads agency in Ahmedabad India, offering expert Facebook and Instagram ad services to drive engagement, leads, and brand growth." />
        <meta name="keywords" content="Chameleo GFX Studio, Meta Ads agency India, Facebook Ads agency India, Instagram Ads India, social media ads India, paid social campaigns, Facebook marketing India, Meta advertising services, lead generation ads, FB & IG ad experts" />
        <link
          rel="canonical"
          href="https://chameleogfxstudio.com/services/digital-marketing/meta-ads-management-company"
        />
      </Helmet>
      <BreadCrumb title="Meta Ads Management Company in Ahmedabad, India" subtitle="Meta Ads Management Company in Ahmedabad, India" />
      <div className="bg-white-smoke">
        <Metaadsdetail />

      </div>

    </>
  );
}

export default Metaads;


