import { Helmet } from "react-helmet-async";
import ServiceHeroBanner from "../../components/common/ServiceHeroBanner";
import ServiceDetails from "../../components/service/ServiceDetails";
import heroBannerImage from "../../assets/images/v1/Group 113.webp";
function UiuxDesign() {
	return (
		<>
		<Helmet>
            <title>UI UX Design Company in Ahmedabad - Chameleo GFX Studio</title>
            <meta name="description" content="Chameleo GFX Studio is the best UI UX Design Company in Ahmedabad. We have expert UI/UX designer in Ahmedabad that enhance the ui/ux experience. Contact us now." />
			      <meta name="keywords" content="UI UX Design Company in Ahmedabad, Best UI UX Design Company in Ahmedabad, UI UX designer in Ahmedabad" />
            <link 
          rel="canonical" 
          href="https://chameleogfxstudio.com/ui-ux-design-company-in-ahmedabad" 
        />
    </Helmet>
			<ServiceHeroBanner
        title="UI/UX Design Services"
        subtitle="Graphic design is the creative process of combining text, images, shapes, and colors to convey ideas in a clear and visually appealing manner."
        image={heroBannerImage}
      />
			<ServiceDetails />
		</>
	);
}

export default UiuxDesign;
