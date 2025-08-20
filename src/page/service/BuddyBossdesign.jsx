import { Helmet } from "react-helmet";
import BreadCrumb from "../../components/common/Breadcrumb";
import  BuddyBossdesigndetail from "../../components/service/BuddyBossdesigndetail";

function BuddyBossdesign() {
    
  return (
    <>
    <Helmet>
            <title>BuddyBoss, LearnDash, and Dokan Design & Development in Ahmedabad and India</title>
            <meta name="description" content="Chameleo GFX Studio offers BuddyBoss, LearnDash & Dokan design and development in Ahmedabad & India. Build powerful eLearning & marketplace platforms." />
			      <meta name="keywords" content="Chameleo GFX Studio, BuddyBoss development India, LearnDash experts Ahmedabad, Dokan design India, eLearning platform development, LMS design India, marketplace website India, WordPress LMS solutions, BuddyBoss customization, Dokan multivendor development" />
            <link 
          rel="canonical" 
          href="/buddyboss-design-and-development" 
        />
        </Helmet>
      <BreadCrumb title="BuddyBoss, LearnDash, and Dokan Design & Development" />
      <BuddyBossdesigndetail />

    </>
  );
}

export default BuddyBossdesign;
