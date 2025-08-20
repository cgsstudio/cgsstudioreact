import { Helmet } from "react-helmet";
import BreadCrumb from "../../components/common/Breadcrumb";
import  Emailmarketingdetail from "../../components/service/Emailmarketingdetail";

function Emailmarketing() {
    
  return (
    <>
    <Helmet>
            <title>Email Marketing Company in Ahmedabad | Email Marketing Services India</title>
            <meta name="description" content="Chameleo GFX Studio offers result-driven email marketing services in India to boost engagement, drive sales, and build lasting customer relationships." />
		    	  <meta name="keywords" content="Chameleo GFX Studio, email marketing India, email marketing company India, email campaign services, email automation India, bulk email marketing, lead nurturing emails, newsletter design India, email marketing agency, targeted email campaigns" />
            <link 
          rel="canonical" 
          href="/email-marketing" 
        />
        </Helmet>
      <BreadCrumb title="Email Marketing" />
      <Emailmarketingdetail />

    </>
  );
}

export default Emailmarketing;


