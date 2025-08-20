import { Helmet } from "react-helmet";
import BreadCrumb from "../../components/common/Breadcrumb";
import MenuDesigndetail from "../../components/service/MenuDesigndetail";

function Hotelmenu() {
    
  return (
    <>
    <Helmet>
            <title>Menu Card Design Services Ahmedabad | Menu Card Design India</title>
            <meta name="description" content="Chameleo GFX Studio offers top menu card designing services in Ahmedabad, India. We create stylish, high-quality menus for restaurants, cafés, and hotels." />
			<meta name="keywords" content="Chameleo GFX Studio, Menu Card Design, Menu Design Ahmedabad, Menu Card Design Services in Ahmedabad, Menu Card Design India, Menu Card Design Services, Restaurant Menu Design, Café Menu Design, Hotel Menu Design, Custom Menu Design, Creative Menu Cards, Food Menu Design" />
      <link 
          rel="canonical" 
          href="https://chameleogfxstudio.com/menu-design" 
        />
        </Helmet>
      <BreadCrumb title="Menu Design" />
      <MenuDesigndetail/>

    </>
  );
}

export default Hotelmenu;
