import { Helmet } from "react-helmet-async";
import BreadCrumb from "../../components/common/Breadcrumb";
import Emailmarketingdetail from "../../components/service/Emailmarketingdetail";

function Emailmarketing() {

  return (
    <>
      <Helmet>
        <title>Email Marketing Company | Email Marketing Services India</title>
        <meta name="description" content="Chameleo GFX Studio offers result-driven email marketing services in Ahmedabad India to boost engagement, drive sales, and build lasting customer relationships." />
        <meta name="keywords" content="Chameleo GFX Studio, email marketing India, email marketing company India, email campaign services, email automation India, bulk email marketing, lead nurturing emails, newsletter design India, email marketing agency, targeted email campaigns" />
        <link
          rel="canonical"
          href="https://chameleogfxstudio.com/services/digital-marketing/email-marketing-company"
        />
      </Helmet>
      <BreadCrumb title="Email Marketing Company in Ahmedabad, India" subtitle="Email Marketing Company in Ahmedabad, India" />
      <div className="bg-white-smoke">
        <Emailmarketingdetail />

      </div>

    </>
  );
}

export default Emailmarketing;


