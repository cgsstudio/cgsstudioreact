import { Helmet } from "react-helmet";
import BreadCrumb from "../../components/common/Breadcrumb";
import  Templatecustomizationdetail from "../../components/service/Templatecustomizationdetail";

function Templatecustomization() {
    
  return (
    <>
    <Helmet>
            <title>Template Customization in Ahmedabad| Template Customization Service in India</title>
            <meta name="description" content="Chameleo GFX Studio offers expert template customization services in Ahmedabad, India. Get personalized website designs and templates tailored to your needs." />
			      <meta name="keywords" content="Chameleo GFX Studio, Template Customization in Ahmedabad, Custom Website Templates, Website Design, Professional Template Services Ahmedabad, Template Design India" />
            <link 
          rel="canonical" 
          href="/template-customization" 
        />
        </Helmet>
      <BreadCrumb title="Template Customization" />
      <Templatecustomizationdetail />

    </>
  );
}

export default Templatecustomization;
