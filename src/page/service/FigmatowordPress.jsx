import { Helmet } from "react-helmet";
import BreadCrumb from "../../components/common/Breadcrumb";
import  FigmatowordPressdetail from "../../components/service/FigmatowordPressdetail";

function FigmatowordPress() {
    
  return (
    <>
    <Helmet>
            <title>Figma to WordPress Service in Ahmedabad and India</title>
            <meta name="description" content="Chameleo GFX Studio offers Figma to WordPress Service in Ahmedabad and India. Fast, pixel-perfect, and SEO-friendly service in Ahmedabad & India." />
			      <meta name="keywords" content="Chameleo GFX Studio, Figma to WordPress, WordPress development Ahmedabad, Figma design conversion, responsive WordPress India, UI to WordPress, web development Ahmedabad" />
            <link 
          rel="canonical" 
          href="/figma-to-wordpress" 
        />
        </Helmet>
      <BreadCrumb title="Figma to WordPress" />
      <FigmatowordPressdetail />

    </>
  );
}

export default FigmatowordPress;
