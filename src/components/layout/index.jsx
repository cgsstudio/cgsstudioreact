import { Outlet } from "react-router-dom";
import useScrollTop from "../../hooks/useScrollTop";
import Preloader from "../common/Preloader";
import ScrollToTop from "../common/ScrollToTop";
import WhatsAppWidget from '../WhatsappWidget/WhatsAppWidget'

function Layout() {
	useScrollTop();
	return (
		<>
			<Preloader />
			<Outlet />
			<ScrollToTop />
			<WhatsAppWidget />
		</>
	);
}

export default Layout;
