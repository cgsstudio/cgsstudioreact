import { Helmet } from "react-helmet";
import BreadCrumb from "../../components/common/Breadcrumb";
import MagazineBookletdetail from "../../components/service/MagazineBookletdetail";

function MagazineBooklet() {
    
  return (
    <>
    <Helmet>
            <title>Magazine and Booklet Design Company in Ahmedabad India</title>
            <meta name="description" content="Chameleo GFX Studio is the best magazine and booklet design company in Ahmedabad, India. We create visually appealing designs that capture attention effectively." />
			      <meta name="keywords" content="Chameleo GFX Studio, Magazine Design, Booklet Design, Graphic Design Ahmedabad, Publication Design, Brochure Design, Professional Booklet Design, Creative Magazine Layout, Print Design Services, Custom Booklet Design" />
      <link 
          rel="canonical" 
          href="https://chameleogfxstudio.com/magazine-and-booklet-design" 
        />
        </Helmet>
      <BreadCrumb title="Magazine and Booklet Design" />
      <MagazineBookletdetail />

    </>
  );
}

export default MagazineBooklet;
