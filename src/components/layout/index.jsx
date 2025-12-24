import { Outlet } from "react-router-dom";
import useScrollTop from "../../hooks/useScrollTop";
import Preloader from "../common/Preloader";
import ScrollToTop from "../common/ScrollToTop";
import WhatsAppWidget from '../WhatsappWidget/WhatsAppWidget'
import ProductSchema from '../ProductSchema';

function Layout() {
	useScrollTop();
	return (
		<>
			<ProductSchema />
			<Outlet />
			<ScrollToTop />
			<WhatsAppWidget />
		</>
	);
}

export default Layout;
