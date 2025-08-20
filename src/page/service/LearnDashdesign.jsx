import { Helmet } from "react-helmet";
import BreadCrumb from "../../components/common/Breadcrumb";
import  LearnDashdesigndetail from "../../components/service/LearnDashdesigndetail";

function LearnDashdesign() {
    
  return (
    <>
    <Helmet>
            <title>LearnDash Design and Development in Ahmedabad and India</title>
            <meta name="description" content="Chameleo GFX Studio specializes in LearnDash design and development in Ahmedabad & India. Create customized eLearning solutions with expert support." />
			      <meta name="keywords" content="Chameleo GFX Studio, LearnDash design India, LearnDash development Ahmedabad, eLearning solutions India, LearnDash customization, WordPress LMS development, LearnDash experts, online course platform, LearnDash website design, custom LearnDash development" />
            <link 
          rel="canonical" 
          href="/learndash-design-and-development" 
        />
        </Helmet>
      <BreadCrumb title="LearnDash Design and Development" />
      <LearnDashdesigndetail />

    </>
  );
}

export default LearnDashdesign;
