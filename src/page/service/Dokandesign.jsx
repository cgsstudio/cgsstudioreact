import { Helmet } from "react-helmet";
import BreadCrumb from "../../components/common/Breadcrumb";
import  Dokandesigndetail from "../../components/service/Dokandesigndetail";

function Dokandesign() {
    
  return (
    <>
    <Helmet>
            <title>Dokan Design and Development in Ahmedabad and India</title>
            <meta name="description" content="Chameleo GFX Studio offers expert Dokan design and development in Ahmedabad & India. Build custom multi-vendor marketplaces with seamless functionality." />
			      <meta name="keywords" content="Chameleo GFX Studio, Dokan design India, Dokan development Ahmedabad, multi-vendor marketplace India, Dokan customization, WordPress marketplace development, Dokan experts, custom Dokan solutions, eCommerce platform India, Dokan website design" />
            <link 
          rel="canonical" 
          href="/dokan-design-and-development" 
        />
        </Helmet>
      <BreadCrumb title="Dokan Design and Development" />
      <Dokandesigndetail />

    </>
  );
}

export default Dokandesign;
