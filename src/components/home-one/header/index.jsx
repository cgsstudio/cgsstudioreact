import React from "react";
import useMenu from "../../../hooks/useMenu";
import Navbar from "../../common/menu/Navbar";
import HeaderButton from "./HeaderButton";
import HeaderLogo from "./HeaderLogo";
import { Helmet } from "react-helmet";

function Header() {
	const {
		toggleMenu,
		mobileSubMenu,
		mobileSubMenuSub,
		handleSubMenu,
		handleSubMenuSub,
		handleGoBack,
		handleMenu,
		menuTitle,
		setToggleMenu,
	} = useMenu();

	return (
		<>
			<Helmet>
				{/* Google Tag Manager */}
				<script async src="https://www.googletagmanager.com/gtag/js?id=G-DL5PNFG08R"></script>
				<script>
					{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-DL5PNFG08R');
        `}
				</script>

				{/* Organization Schema */}
				<script type="application/ld+json">
					{JSON.stringify({
						"@context": "http://schema.org",
						"@type": "Organization",
						"name": "Chameleo GFX Studio",
						"legalName": "Chameleo GFX Studio",
						"url": "https://chameleogfxstudio.com/",
						"logo": "https://chameleogfxstudio.com/logo.png", // Make sure this path is correct
						"sameAs": [
							"https://www.facebook.com/chameleogfxstudio",
							"https://www.instagram.com/chameleogfxstudio/",
							"https://www.linkedin.com/company/chameleogfxstudio/"
						],
						"address": {
							"@type": "PostalAddress",
							"streetAddress": "F Block, PNTC, F - 1001, Times Of India Press Rd, Rajmani Society, Satellite, Shyamal",
							"addressLocality": "Ahmedabad",
							"addressRegion": "Gujarat",
							"postalCode": "380015",
							"addressCountry": "India"
						},
						"contactPoint": {
							"@type": "ContactPoint",
							"telephone": "+91-97374-72636",
							"contactType": "Customer Service"
						}
					})}
				</script>

				{/* LocalBusiness Schema */}
				<script type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "LocalBusiness",
						"name": "Chameleo GFX Studio",
						"@id": "https://chameleogfxstudio.com/",
						"url": "https://chameleogfxstudio.com/",
						"telephone": "+91-97374-72636",
						"address": {
							"@type": "PostalAddress",
							"streetAddress": "F Block, PNTC, F - 1001, Times Of India Press Rd, Rajmani Society, Satellite, Shyamal",
							"addressLocality": "Ahmedabad",
							"addressRegion": "Gujarat",
							"postalCode": "380015",
							"addressCountry": "India"
						},
						"openingHoursSpecification": {
							"@type": "OpeningHoursSpecification",
							"dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
							"opens": "09:00",
							"closes": "20:00"
						}
					})}
				</script>
			</Helmet>


			<header className="site-header aximo-header-section aximo-header1 dark-bg" id="sticky-menu">
				<div className="container">
					<nav className="navbar site-navbar d-flex align-items-center justify-content-between w-100 ">
						<HeaderLogo />
						<div className="menu-block-wrapper">
							<div className={`menu-overlay ${toggleMenu ? "active" : ""}`} onClick={handleMenu}></div>
							<Navbar
								toggleMenu={toggleMenu}
								handleMenu={handleMenu}
								handleGoBack={handleGoBack}
								mobileSubMenu={mobileSubMenu}
								handleSubMenu={handleSubMenu}
								mobileSubMenuSub={mobileSubMenuSub}
								handleSubMenuSub={handleSubMenuSub}
								menuTitle={menuTitle}
							/>
						</div>
						<HeaderButton />
						<div className="mobile-menu-trigger light" onClick={() => setToggleMenu(true)}>
							<span></span>
						</div>
					</nav>
				</div>
			</header>
		</>
	);
}

export default Header;
