import { Helmet } from "react-helmet-async";
import BreadCrumb from "../../components/common/Breadcrumb";
import MagazineBookletdetail from "../../components/service/MagazineBookletdetail";

function MagazineBooklet() {

  return (
    <>
      <Helmet>
        <title>Magazine and Booklet Design Services in Ahmedabad | India</title>
        <meta name="description" content="Chameleo GFX Studio is the best magazine and booklet design services in Ahmedabad, India. We create visually appealing designs that capture attention effectively." />
        <meta name="keywords" content="Chameleo GFX Studio, Magazine Design, Booklet Design, Graphic Design Ahmedabad, Publication Design, Brochure Design, Professional Booklet Design, Creative Magazine Layout, Print Design Services, Custom Booklet Design" />
        <link
          rel="canonical"
          href="https://chameleogfxstudio.com/services/graphic-design/magazine-and-booklet-design-company"
        />
      </Helmet>
      <BreadCrumb title="Magazine and Booklet Design Services Company in Ahmedabad, India" breadcrumbTitle="Magazine and Booklet Design Services Company in Ahmedabad, India" />
      <div className="bg-white-smoke">
        <MagazineBookletdetail />

      </div>

    </>
  );
}

export default MagazineBooklet;
