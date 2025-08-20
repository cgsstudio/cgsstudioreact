import { Helmet } from "react-helmet";
import BreadCrumb from "../../components/common/Breadcrumb";
import  Htmlcssdetail from "../../components/service/Htmlcssdetail";

function Htmlcss() {
    
  return (
    <>
    <Helmet>
            <title>HTML & CSS Development Company Ahmedabad | HTML & CSS Development India</title>
            <meta name="description" content="Chameleo GFX Studio is the best Website UI/UX Design Company in Ahmedabad. We offer Fast, responsive, and clean-coded websites tailored to your needs." />
			      <meta name="keywords" content="Chameleo GFX Studio, HTML Development Ahmedabad, CSS Development India, HTML CSS Company Ahmedabad, Front-End Development India, Responsive Web Design" />
            <link 
          rel="canonical" 
          href="/html-css" 
        />
        </Helmet>
      <BreadCrumb title="HTML/CSS Development" />
      <Htmlcssdetail />

    </>
  );
}

export default Htmlcss;
