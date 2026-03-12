import React, { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
const LayoutEight = lazy(() => import("../components/layout/LayoutEight.jsx"));
const LayoutFive = lazy(() => import("../components/layout/LayoutFive.jsx"));
const LayoutFour = lazy(() => import("../components/layout/LayoutFour.jsx"));
const LayoutOne = lazy(() => import("../components/layout/LayoutOne.jsx"));
const LayoutSeven = lazy(() => import("../components/layout/LayoutSeven.jsx"));
const LayoutSix = lazy(() => import("../components/layout/LayoutSix.jsx"));
const LayoutThree = lazy(() => import("../components/layout/LayoutThree.jsx"));
const LayoutTwo = lazy(() => import("../components/layout/LayoutTwo.jsx"));
const Layout = lazy(() => import("../components/layout/index.jsx"));
const ErrorPage = lazy(() => import("../error-page"));
const AboutUs = lazy(() => import("../page/AboutUs"));
const ContactUs = lazy(() => import("../page/ContactUs"));
const Pricing = lazy(() => import("../page/Pricing"));
const Reset = lazy(() => import("../page/auth/ResetPassword.jsx"));
const SignIn = lazy(() => import("../page/auth/SignIn"));
const SignUp = lazy(() => import("../page/auth/SignUp"));
const BlogGridPage = lazy(() => import("../page/blog/BlogGridPage.jsx"));
const BlogPage = lazy(() => import("../page/blog/BlogPage.jsx"));
const SingleBlogPage = lazy(() => import("../page/blog/SingleBlog.jsx"));
const HomeFive = lazy(() => import("../page/home/HomeFive.jsx"));
const HomeFour = lazy(() => import("../page/home/HomeFour.jsx"));
const HomeOne = lazy(() => import("../page/home/HomeOne.jsx"));
const HomeSeven = lazy(() => import("../page/home/HomeSeven.jsx"));
const HomeSix = lazy(() => import("../page/home/HomeSix.jsx"));
const HomeThree = lazy(() => import("../page/home/HomeThree.jsx"));
const HomeTwo = lazy(() => import("../page/home/HomeTwo.jsx"));
const PortfolioOneColumn = lazy(() => import("../page/portfolio/PortfolioOneColoum"));
const PortfolioTwoColumn = lazy(() => import("../page/portfolio/PortfolioTwoColumn"));
const SinglePortfolio = lazy(() => import("../page/portfolio/SinglePortfolio"));
const Service = lazy(() => import("../page/service"));
const UiuxDesign = lazy(() => import("../page/service/UiuxDesign.jsx"));
const Team = lazy(() => import("../page/team"));
const SingleTeam = lazy(() => import("../page/team/SingleTeam.jsx"));
const CommingSoon = lazy(() => import("../page/utility/CommingSoon.jsx"));
const Faq = lazy(() => import("../page/utility/Faq.jsx"));
const TestimonialPage = lazy(() => import("../page/utility/Testimonial.jsx"));
const WebDevelopment = lazy(() => import("../page/service/WebDevelopment.jsx"));
const GraphicDesign = lazy(() => import("../page/service/GraphicDesign.jsx"));
const LogoDesign = lazy(() => import("../page/service/LogoDesign.jsx"));
const Seo = lazy(() => import("../page/service/Seo.jsx"));
const SocialMedia = lazy(() => import("../page/service/SocialMedia.jsx"));
const ServicePage = lazy(() => import("../components/home-one/services/ServicePage.jsx"));
const TermsAndConditions = lazy(() => import("../components/home-one/terms/TermsAndConditions.jsx"));
const Privacypolicy = lazy(() => import("../components/home-one/privacypolicy/privacypolicy.jsx"));
const Industryweserve = lazy(() => import("../components/home-one/Industryweserve/industryserve.jsx"));
const FlyerDesign = lazy(() => import("../page/service/FlyerDesign.jsx"));
const HoardingDesign = lazy(() => import("../page/service/HoardingDesign.jsx"));
const NewsletterDesign = lazy(() => import("../page/service/NewsletterDesign.jsx"));
const PresentationDesign = lazy(() => import("../components/service/PresentationDesign.jsx"));
const EventInvitation = lazy(() => import("../components/service/EventInvitation.jsx"));
const CorporateProfile = lazy(() => import("../components/service/CorporateProfile.jsx"));
const TradeShow = lazy(() => import("../page/service/TradeShow.jsx"));
const BrandingIdentity = lazy(() => import("../page/service/BrandingIdentity.jsx"));
const BrochureDesign = lazy(() => import("../page/service/BrochureDesign.jsx"));
const PackagingDesign = lazy(() => import("../page/service/PackagingDesign.jsx"));
const InfographicDesign = lazy(() => import("../page/service/InfographicDesign.jsx"));
const MagazineBooklet = lazy(() => import("../page/service/MagazineBooklet.jsx"));
const Menudesigncard = lazy(() => import("../page/service/Hotelmenu.jsx"));
const AnnualReport = lazy(() => import("../page/service/AnnualReport.jsx"));
const MotionGraphics = lazy(() => import("../page/service/MotionGraphics.jsx"));
const SocialMediaBanner = lazy(() => import("../page/service/SocialMediaBanner.jsx"));
const PosterDesign = lazy(() => import("../page/service/PosterDesign.jsx"));
const AdvertisingDesign = lazy(() => import("../page/service/AdvertisingDesign.jsx"));
const BusinessCard = lazy(() => import("../page/service/BusinessCard.jsx"));
const CustomIllustration = lazy(() => import("../page/service/CustomIllustration.jsx"));
const SignageDesign = lazy(() => import("../page/service/SignageDesign.jsx"));
const DigitalAd = lazy(() => import("../page/service/DigitalAd.jsx"));
const Ebookdesign = lazy(() => import("../page/service/Ebookdesign.jsx"));
const WebsiteUIUXDesign = lazy(() => import("../page/service/WebsiteUIUXDesign.jsx"));
const IOSUIUXDesign = lazy(() => import("../page/service/IOSUIUXDesign.jsx"));
const AndroidUIUXDesign = lazy(() => import("../page/service/AndroidUIUXDesign.jsx"));
const ERPUIUXDesign = lazy(() => import("../page/service/ERPUIUXDesign.jsx"));
const BackendUIUXDesign = lazy(() => import("../page/service/BackendUIUXDesign.jsx"));
const NirajMandaliya = lazy(() => import("../components/team/NirajMandaliya.jsx"));
const DhirajAhuja = lazy(() => import("../components/team/DhirajAhuja.jsx"));
const Webflowthemedevelopment = lazy(() => import("../page/service/Webflowthemedevelopment.jsx"));
const Figmatowebflow = lazy(() => import("../page/service/Figmatowebflow.jsx"));
const Photoshoptowebflow = lazy(() => import("../page/service/Photoshoptowebflow.jsx"));
const Htmltowebflow = lazy(() => import("../page/service/Htmltowebflow.jsx"));
const Webflowintegration = lazy(() => import("../page/service/Webflowintegration.jsx"));
const WordPress = lazy(() => import("../page/service/WordPress.jsx"));
const CustomwordPresswebsite = lazy(() => import("../page/service/CustomwordPresswebsite.jsx"));
const Webflowdevelopment = lazy(() => import("../page/service/Webflowdevelopment.jsx"));
const Customwebflowdevelopment = lazy(() => import("../page/service/Customwebflowdevelopment.jsx"));
const WooCommercedevelopment = lazy(() => import("../page/service/WooCommercedevelopment.jsx"));
const WordPressseooptimization = lazy(() => import("../page/service/WordPressseooptimization.jsx"));
const WordPressmigration = lazy(() => import("../page/service/WordPressmigration.jsx"));
const BuddyBossdesign = lazy(() => import("../page/service/BuddyBossdesign.jsx"));
const LearnDashdesign = lazy(() => import("../page/service/LearnDashdesign.jsx"));
const Dokandesign = lazy(() => import("../page/service/Dokandesign.jsx"));
const Responsivewordpressdesign = lazy(() => import("../page/service/Responsivewordpressdesign.jsx"));
const FigmatowordPress = lazy(() => import("../page/service/FigmatowordPress.jsx"));
const PhotoshoptowordPress = lazy(() => import("../page/service/PhotoshoptowordPress.jsx"));
const Htmltowebflowdetail = lazy(() => import("../components/service/Htmltowebflowdetail.jsx"));
const HtmltowordPress = lazy(() => import("../page/service/HtmltowordPress.jsx"));
const Themeandplugin = lazy(() => import("../page/service/Themeandplugin.jsx"));
const WooCommercedesign = lazy(() => import("../page/service/WooCommercedesign.jsx"));
const WordPresswebsitemaintenancedetail = lazy(() => import("../components/service/WordPresswebsitemaintenancedetail.jsx"));
const WordPresswebsitemaintenance = lazy(() => import("../page/service/WordPresswebsitemaintenance.jsx"));
const Shopify = lazy(() => import("../page/service/Shopify.jsx"));
const Customshopifystoredesign = lazy(() => import("../page/service/Customshopifystoredesign.jsx"));
const Shopifythemecustomization = lazy(() => import("../page/service/Shopifythemecustomization.jsx"));
const Shopifyseooptimization = lazy(() => import("../page/service/Shopifyseooptimization.jsx"));
const Figmatoshopify = lazy(() => import("../page/service/Figmatoshopify.jsx"));
const Photoshoptoshopify = lazy(() => import("../page/service/Photoshoptoshopify.jsx"));
const Htmltoshopify = lazy(() => import("../page/service/Htmltoshopify.jsx"));
const Shopifyappintegration = lazy(() => import("../page/service/Shopifyappintegration.jsx"));
const Shopifyecommercemanagement = lazy(() => import("../page/service/Shopifyecommercemanagement.jsx"));
const Reactjs = lazy(() => import("../page/service/Reactjs.jsx"));
const Figmatoreact = lazy(() => import("../page/service/Figmatoreact.jsx"));
const Photoshoptoreact = lazy(() => import("../page/service/Photoshoptoreact.jsx"));
const Htmltoreact = lazy(() => import("../page/service/Htmltoreact.jsx"));
const Reactjsperformance = lazy(() => import("../page/service/Reactjsperformance.jsx"));
const Customreactjswebdetail = lazy(() => import("../components/service/Customreactjswebdetail.jsx"));
const Customreactjsweb = lazy(() => import("../page/service/Customreactjsweb.jsx"));
const Reactjscomponentdevelopmentdetail = lazy(() => import("../components/service/Reactjscomponentdevelopmentdetail.jsx"));
const Reactjscomponentdevelopment = lazy(() => import("../page/service/Reactjscomponentdevelopment.jsx"));
const Reactjsmobileappdetail = lazy(() => import("../components/service/Reactjsmobileappdetail.jsx"));
const Reactjsmobileapp = lazy(() => import("../page/service/Reactjsmobileapp.jsx"));
const Reactjswebsitedevelopment = lazy(() => import("../page/service/Reactjswebsitedevelopment.jsx"));
const Reactjsuiuxdesign = lazy(() => import("../page/service/Reactjsuiuxdesign.jsx"));
const Htmlcss = lazy(() => import("../page/service/Htmlcss.jsx"));
const Customhtmlwebsitedesigndetail = lazy(() => import("../components/service/Customhtmlwebsitedesigndetail.jsx"));
const Customhtmlwebsitedesign = lazy(() => import("../page/service/Customhtmlwebsitedesign.jsx"));
const Templatecustomization = lazy(() => import("../page/service/Templatecustomization.jsx"));
const Responsivewebdesign = lazy(() => import("../page/service/Responsivewebdesign.jsx"));
const Crossbrowser = lazy(() => import("../page/service/Crossbrowser.jsx"));
const Websiteredesign = lazy(() => import("../page/service/Websiteredesign.jsx"));
const Digitalmarketing = lazy(() => import("../page/service/Digitalmarketing.jsx"));
const Searchengineoptimization = lazy(() => import("../page/service/Searchengineoptimization.jsx"));
const Socialmediamarketing = lazy(() => import("../page/service/Socialmediamarketing.jsx"));
const Emailmarketing = lazy(() => import("../page/service/Emailmarketing.jsx"));
const Googleads = lazy(() => import("../page/service/Googleads.jsx"));
const Metaads = lazy(() => import("../page/service/Metaads.jsx"));
const Sitemap = lazy(() => import("../components/home-one/Sitemap/Sitemap.jsx"));
const CookiePolicy = lazy(() => import("../components/home-one/cookie/CookiePolicy.jsx"));

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <LayoutOne />,
				children: [
					{
						path: "/",
						element: <HomeOne />,
					},
					{
						path: "/about-us/",
						element: <AboutUs />,
					},
					{
						path: "/contact-us/",
						element: <ContactUs />,
					},
					{
						path: "/industries-we-serve/",
						element: <Industryweserve />,
					},
					{
						path: "/faq/",
						element: <Faq />,
					},
					{
						path: "/testimonial/",
						element: <TestimonialPage />,
					},
					{
						path: "/pricing/",
						element: <Pricing />,
					},
					{
						path: "/blog/",
						element: <BlogPage />,
					},
					{
						path: "/blog/:slug",
						element: <SingleBlogPage />,
					},
					{
						path: "/blog-grid",
						element: <BlogGridPage />,
					},
					{
						path: "/services/",
						children: [
							{
								index: true,
								element: <ServicePage />,
							},
							{
								path: "ui-ux-design",
								children: [
									{ index: true, element: <UiuxDesign /> },
									{ path: "website-ui-ux-design", element: <WebsiteUIUXDesign /> },
									{ path: "ios-ui-ux-design", element: <IOSUIUXDesign /> },
									{ path: "android-ui-ux-design", element: <AndroidUIUXDesign /> },
									{ path: "erp-ui-ux-design", element: <ERPUIUXDesign /> },
									{ path: "backend-ui-ux-design", element: <BackendUIUXDesign /> },
								],
							},
							{
								path: "digital-marketing",
								children: [
									{ index: true, element: <Digitalmarketing /> },
									{ path: "search-engine-optimization", element: <Searchengineoptimization /> },
									{ path: "social-media-marketing", element: <Socialmediamarketing /> },
									{ path: "email-marketing", element: <Emailmarketing /> },
									{ path: "google-ads", element: <Googleads /> },
									{ path: "meta-ads", element: <Metaads /> },
								],
							},
							{
								path: "web-development",
								children: [
									{ index: true, element: <WebDevelopment /> },
									{ path: "wordpress-development", element: <WordPress /> },
									{ path: "custom-wordpress-website-design", element: <CustomwordPresswebsite /> },
									{ path: "woocommerce-development", element: <WooCommercedevelopment /> },
									{ path: "wordpress-seo-optimization", element: <WordPressseooptimization /> },
									{ path: "wordpress-migration-and-upgrades", element: <WordPressmigration /> },
									{ path: "buddyboss-design-and-development", element: <BuddyBossdesign /> },
									{ path: "webflow-development", element: <Webflowdevelopment /> },
									{ path: "custom-webflow-development", element: <Customwebflowdevelopment /> },
									{ path: "webflow-theme-development", element: <Webflowthemedevelopment /> },
									{ path: "figma-to-webflow", element: <Figmatowebflow /> },
									{ path: "photoshop-to-webflow", element: <Photoshoptowebflow /> },
									{ path: "html-to-webflow", element: <Htmltowebflow /> },
									{ path: "webflow-integration", element: <Webflowintegration /> },
									{ path: "shopify-development", element: <Shopify /> },
									{ path: "custom-shopify-store-design", element: <Customshopifystoredesign /> },
									{ path: "shopify-theme-customization", element: <Shopifythemecustomization /> },
									{ path: "shopify-seo-optimization", element: <Shopifyseooptimization /> },
									{ path: "figma-to-shopify", element: <Figmatoshopify /> },
									{ path: "photoshop-to-shopify", element: <Photoshoptoshopify /> },
									{ path: "html-to-shopify", element: <Htmltoshopify /> },
									{ path: "shopify-app-integration-and-development", element: <Shopifyappintegration /> },
									{ path: "shopify-ecommerce-management-and-support", element: <Shopifyecommercemanagement /> },
									{ path: "react-js-development", element: <Reactjs /> },
									{ path: "figma-to-react", element: <Figmatoreact /> },
									{ path: "photoshop-to-react", element: <Photoshoptoreact /> },
									{ path: "html-to-react", element: <Htmltoreact /> },
									{ path: "reactjs-performance-optimization", element: <Reactjsperformance /> },
									{ path: "custom-reactjs-web-application-development", element: <Customreactjsweb /> },
									{ path: "reactjs-component-development-and-integration", element: <Reactjscomponentdevelopment /> },
									{ path: "reactjs-mobile-app-development", element: <Reactjsmobileapp /> },
									{ path: "reactjs-ssr-website-development", element: <Reactjswebsitedevelopment /> },
									{ path: "reactjs-ui-ux-design-and-development", element: <Reactjsuiuxdesign /> },
									{ path: "html-css-development", element: <Htmlcss /> },
									{ path: "custom-html-website-design", element: <Customhtmlwebsitedesign /> },
									{ path: "template-customization", element: <Templatecustomization /> },
									{ path: "responsive-web-design", element: <Responsivewebdesign /> },
									{ path: "cross-browser-compatibility-testing", element: <Crossbrowser /> },
									{ path: "website-redesign-and-revamp", element: <Websiteredesign /> },
								],
							},
							{
								path: "graphic-design",
								children: [
									{ index: true, element: <GraphicDesign /> },
									{ path: "logo-design-company", element: <LogoDesign /> },
									{ path: "branding-and-identity-design-agency", element: <BrandingIdentity /> },
									{ path: "social-media-banner-design", element: <SocialMediaBanner /> },
									{ path: "flyer-design-services", element: <FlyerDesign /> },
									{ path: "brochure-design-company", element: <BrochureDesign /> },
									{ path: "poster-design-services", element: <PosterDesign /> },
									{ path: "hoarding-design-services", element: <HoardingDesign /> },
									{ path: "packaging-design-agency", element: <PackagingDesign /> },
									{ path: "advertising-design-agency", element: <AdvertisingDesign /> },
									{ path: "newsletter-design-service", element: <NewsletterDesign /> },
									{ path: "infographic-design-services", element: <InfographicDesign /> },
									{ path: "visiting-card-design-service", element: <BusinessCard /> },
									{ path: "presentation-design-services", element: <PresentationDesign /> },
									{ path: "magazine-and-booklet-design", element: <MagazineBooklet /> },
									{ path: "custom-illustration-design", element: <CustomIllustration /> },
									{ path: "event-invitation-design", element: <EventInvitation /> },
									{ path: "menu-design-service", element: <Menudesigncard /> },
									{ path: "signage-design-service", element: <SignageDesign /> },
									{ path: "corporate-profile-design", element: <CorporateProfile /> },
									{ path: "annual-report-design-agency", element: <AnnualReport /> },
									{ path: "digital-ad-design-agency", element: <DigitalAd /> },
									{ path: "exhibition-booth-design", element: <TradeShow /> },
									{ path: "motion-graphics-design-agency", element: <MotionGraphics /> },
									{ path: "e-book-design-service", element: <Ebookdesign /> },
								],
							},
						],
					},
					{
						path: "/sitemap",
						element: <Sitemap />,
					},
					{
						path: "/team",
						element: <Team />,
					},
					{
						path: "/singleteam",
						element: <SingleTeam />,
					},
					{
						path: "/niraj-mandaliya",
						element: <NirajMandaliya />,
					},
					{
						path: "/dhiraj-ahuja",
						element: <DhirajAhuja />,
					},
					{
						path: "/case-studies/",
						element: <PortfolioOneColumn />,
					},
					{
						path: "/portfolio-two",
						element: <PortfolioTwoColumn />,
					},
					{
						path: "/single-portfolio",
						element: <SinglePortfolio />,
					},
					{
						path: "/service",
						element: <Navigate to="/services" replace />,
					},
					{
						path: "/terms-and-conditions",
						element: <TermsAndConditions />,
					},
					{
						path: "/privacy-policy",
						element: <Privacypolicy />,
					},
					{
						path: "/cookie-policy",
						element: <CookiePolicy />,
					},
					{
						path: "*",
						element: <ErrorPage />,
					},
				],
			},
			{
				path: "/",
				element: <LayoutTwo />,
				children: [
					{
						path: "/home-two",
						element: <HomeTwo />,
					},
				],
			},
			{
				path: "/",
				element: <LayoutThree />,
				children: [
					{
						path: "/home-three",
						element: <HomeThree />,
					},
				],
			},
			{
				path: "/",
				element: <LayoutFour />,
				children: [
					{
						path: "/home-four",
						element: <HomeFour />,
					},
				],
			},
			{
				path: "/",
				element: <LayoutFive />,
				children: [
					{
						path: "/home-five",
						element: <HomeFive />,
					},
				],
			},
			{
				path: "/",
				element: <LayoutSix />,
				children: [
					{
						path: "/home-six",
						element: <HomeSix />,
					},
				],
			},
			{
				path: "/",
				element: <LayoutSeven />,
				children: [
					{
						path: "/home-seven",
						element: <HomeSeven />,
					},
				],
			},
			{
				path: "/",
				element: <LayoutEight />,
				children: [
					{
						path: "/coming-soon",
						element: <CommingSoon />,
					},
					{
						path: "/reset-password",
						element: <Reset />,
					},
					{
						path: "/sign-up",
						element: <SignUp />,
					},
					{
						path: "/sign-in",
						element: <SignIn />,
					},
				],
			},
		],
	},
	{
		path: "/ui-ux-design-company-in-ahmedabad",
		element: <Navigate to="/services/ui-ux-design" replace />,
	},
	{
		path: "/web-development-company-in-ahmedabad",
		element: <Navigate to="/services/web-development" replace />,
	},
	{
		path: "/digital-marketing",
		element: <Navigate to="/services/digital-marketing" replace />,
	},
	{
		path: "/ui-ux-design-agency-in-ahmedabad",
		element: <Navigate to="/services/ui-ux-design" replace />,
	},
	{
		path: "/website-development-company-ahmedabad",
		element: <Navigate to="/services/web-development" replace />,
	},
	{
		path: "/graphic-design-company-in-ahmedabad",
		element: <Navigate to="/services/graphic-design" replace />,
	},
	{
		path: "/digital-marketing-agency-india",
		element: <Navigate to="/services/digital-marketing" replace />,
	},
	{
		path: "/branding-and-identity-design",
		element: <Navigate to="/services/graphic-design/branding-and-identity-design-agency" replace />,
	},
	{
		path: "/social-media-banner-design",
		element: <Navigate to="/services/graphic-design/social-media-banner-design" replace />,
	},
	{
		path: "/flyer-design",
		element: <Navigate to="/services/graphic-design/flyer-design-services" replace />,
	},
	{
		path: "/brochure-design",
		element: <Navigate to="/services/graphic-design/brochure-design-company" replace />,
	},
	{
		path: "/poster-design",
		element: <Navigate to="/services/graphic-design/poster-design-services" replace />,
	},
	{
		path: "/hoarding-design",
		element: <Navigate to="/services/graphic-design/hoarding-design-services" replace />,
	},
	{
		path: "/packaging-design",
		element: <Navigate to="/services/graphic-design/packaging-design-agency" replace />,
	},
	{
		path: "/advertising-design",
		element: <Navigate to="/services/graphic-design/advertising-design-agency" replace />,
	},
	{
		path: "/newsletter-design",
		element: <Navigate to="/services/graphic-design/newsletter-design-service" replace />,
	},
	{
		path: "/infographic-design",
		element: <Navigate to="/services/graphic-design/infographic-design-services" replace />,
	},
	{
		path: "/business-card-design",
		element: <Navigate to="/services/graphic-design/visiting-card-design-service" replace />,
	},
	{
		path: "/presentation-design",
		element: <Navigate to="/services/graphic-design/presentation-design-services" replace />,
	},
	{
		path: "/logo-design-company-ahmedabad",
		element: <Navigate to="/services/graphic-design/logo-design-company" replace />,
	},
	{
		path: "/magazine-and-booklet-design",
		element: <Navigate to="/services/graphic-design/magazine-and-booklet-design" replace />,
	},
	{
		path: "/custom-illustration-design",
		element: <Navigate to="/services/graphic-design/custom-illustration-design" replace />,
	},
	{
		path: "/event-invitation-design",
		element: <Navigate to="/services/graphic-design/event-invitation-design" replace />,
	},
	{
		path: "/menu-design",
		element: <Navigate to="/services/graphic-design/menu-design-service" replace />,
	},
	{
		path: "/signage-design",
		element: <Navigate to="/services/graphic-design/signage-design-service" replace />,
	},
	{
		path: "/corporate-profile-design",
		element: <Navigate to="/services/graphic-design/corporate-profile-design" replace />,
	},
	{
		path: "/annual-report-design",
		element: <Navigate to="/services/graphic-design/annual-report-design-agency" replace />,
	},
	{
		path: "/digital-ad-design",
		element: <Navigate to="/services/graphic-design/digital-ad-design-agency" replace />,
	},
	{
		path: "/trade-show-booth-design",
		element: <Navigate to="/services/graphic-design/exhibition-booth-design" replace />,
	},
	{
		path: "/motion-graphics-design",
		element: <Navigate to="/services/graphic-design/motion-graphics-design-agency" replace />,
	},
	{
		path: "/e-book-design",
		element: <Navigate to="/services/graphic-design/e-book-design-service" replace />,
	},
	{
		path: "/website-ui-ux-design",
		element: <Navigate to="/services/ui-ux-design/website-ui-ux-design" replace />,
	},
	{
		path: "/ios-ui-ux-design",
		element: <Navigate to="/services/ui-ux-design/ios-ui-ux-design" replace />,
	},
	{
		path: "/android-ui-ux-design",
		element: <Navigate to="/services/ui-ux-design/android-ui-ux-design" replace />,
	},
	{
		path: "/backend-ui-ux-design",
		element: <Navigate to="/services/ui-ux-design/backend-ui-ux-design" replace />,
	},
	{
		path: "/erp-ui-ux-design",
		element: <Navigate to="/services/ui-ux-design/erp-ui-ux-design" replace />,
	},
	{
		path: "/search-engine-optimization",
		element: <Navigate to="/services/digital-marketing/search-engine-optimization" replace />,
	},
	{
		path: "/social-media-marketing",
		element: <Navigate to="/services/digital-marketing/social-media-marketing" replace />,
	},
	{
		path: "/email-marketing",
		element: <Navigate to="/services/digital-marketing/email-marketing" replace />,
	},
	{
		path: "/google-ads",
		element: <Navigate to="/services/digital-marketing/google-ads" replace />,
	},
	{
		path: "/meta-ads",
		element: <Navigate to="/services/digital-marketing/meta-ads" replace />,
	},
	 {
		path: "/wordpress",
		element: <Navigate to="/services/web-development" replace />,
	},
	{
		path: "/shopify",
		element: <Navigate to="/services/web-development" replace />,
	},
	{
		path: "/webflow",
		element: <Navigate to="/services/web-development" replace />,
	},
	{
		path: "/react-js",
		element: <Navigate to="/services/web-development" replace />,
	},
	{
		path: "/html-css",
		element: <Navigate to="/services/web-development" replace />,
	},
	{
		path: "/services/web-development/html-css-development/custom-html-website-design",
		element: <Navigate to="/services/web-development/custom-html-website-design" replace />,
	},
	{
		path: "/services/web-development/html-css-development/template-customization",
		element: <Navigate to="/services/web-development/template-customization" replace />,
	},
	{
		path: "/services/web-development/html-css-development/responsive-web-design",
		element: <Navigate to="/services/web-development/responsive-web-design" replace />,
	},
	{
		path: "/services/web-development/html-css-development/cross-browser-compatibility-testing",
		element: <Navigate to="/services/web-development/cross-browser-compatibility-testing" replace />,
	},
	{
		path: "/services/web-development/html-css-development/website-redesign-and-revamp",
		element: <Navigate to="/services/web-development/website-redesign-and-revamp" replace />,
	},
	{
		path: "/services/web-development/webflow-development/custom-webflow-development",
		element: <Navigate to="/services/web-development/custom-webflow-development" replace />,
	},
	{
		path: "/services/web-development/webflow-development/webflow-theme-development",
		element: <Navigate to="/services/web-development/webflow-theme-development" replace />,
	},
	{
		path: "/services/web-development/webflow-development/figma-to-webflow",
		element: <Navigate to="/services/web-development/figma-to-webflow" replace />,
	},
	{
		path: "/services/web-development/webflow-development/photoshop-to-webflow",
		element: <Navigate to="/services/web-development/photoshop-to-webflow" replace />,
	},
	{
		path: "/services/web-development/webflow-development/html-to-webflow",
		element: <Navigate to="/services/web-development/html-to-webflow" replace />,
	},
	{
		path: "/services/web-development/webflow-development/webflow-integration",
		element: <Navigate to="/services/web-development/webflow-integration" replace />,
	},
	{
		path: "/services/web-development/wordpress-development/custom-wordpress-website-design",
		element: <Navigate to="/services/web-development/custom-wordpress-website-design" replace />,
	},
	{
		path: "/services/web-development/wordpress-development/woocommerce-development",
		element: <Navigate to="/services/web-development/woocommerce-development" replace />,
	},
	{
		path: "/services/web-development/wordpress-development/wordpress-seo-optimization",
		element: <Navigate to="/services/web-development/wordpress-seo-optimization" replace />,
	},
	{
		path: "/services/web-development/wordpress-development/wordpress-migration-and-upgrades",
		element: <Navigate to="/services/web-development/wordpress-migration-and-upgrades" replace />,
	},
	{
		path: "/services/web-development/wordpress-development/buddyboss-design-and-development",
		element: <Navigate to="/services/web-development/buddyboss-design-and-development" replace />,
	},
	{
		path: "/services/web-development/wordpress-development/learndash-design-and-development",
		element: <Navigate to="/services/web-development/wordpress-development" replace />,
	},
	{
		path: "/services/web-development/wordpress-development/dokan-design-and-development",
		element: <Navigate to="/services/web-development/wordpress-development" replace />,
	},
	{
		path: "/services/web-development/wordpress-development/responsive-wordpress-design",
		element: <Navigate to="/services/web-development/wordpress-development" replace />,
	},
	{
		path: "/services/web-development/wordpress-development/figma-to-wordpress",
		element: <Navigate to="/services/web-development/wordpress-development" replace />,
	},
	{
		path: "/services/web-development/wordpress-development/photoshop-to-wordpress",
		element: <Navigate to="/services/web-development/wordpress-development" replace />,
	},
	{
		path: "/services/web-development/wordpress-development/html-to-wordpress",
		element: <Navigate to="/services/web-development/wordpress-development" replace />,
	},
	{
		path: "/services/web-development/wordpress-development/theme-and-plugin-customization",
		element: <Navigate to="/services/web-development/wordpress-development" replace />,
	},
	{
		path: "/services/web-development/wordpress-development/woocommerce-design-and-development",
		element: <Navigate to="/services/web-development/wordpress-development" replace />,
	},
	{
		path: "/services/web-development/wordpress-development/wordpress-website-maintenance-and-support",
		element: <Navigate to="/services/web-development/wordpress-development" replace />,
	},
	{
		path: "/services/web-development/shopify-development/custom-shopify-store-design",
		element: <Navigate to="/services/web-development/custom-shopify-store-design" replace />,
	},
	{
		path: "/services/web-development/shopify-development/shopify-theme-customization",
		element: <Navigate to="/services/web-development/shopify-theme-customization" replace />,
	},
	{
		path: "/services/web-development/shopify-development/shopify-seo-optimization",
		element: <Navigate to="/services/web-development/shopify-seo-optimization" replace />,
	},
	{
		path: "/services/web-development/shopify-development/figma-to-shopify",
		element: <Navigate to="/services/web-development/figma-to-shopify" replace />,
	},
	{
		path: "/services/web-development/shopify-development/photoshop-to-shopify",
		element: <Navigate to="/services/web-development/photoshop-to-shopify" replace />,
	},
	{
		path: "/services/web-development/shopify-development/html-to-shopify",
		element: <Navigate to="/services/web-development/html-to-shopify" replace />,
	},
	{
		path: "/services/web-development/shopify-development/shopify-app-integration-and-development",
		element: <Navigate to="/services/web-development/shopify-app-integration-and-development" replace />,
	},
	{
		path: "/services/web-development/shopify-development/shopify-ecommerce-management-and-support",
		element: <Navigate to="/services/web-development/shopify-ecommerce-management-and-support" replace />,
	},
	{
		path: "/services/web-development/react-js-development/figma-to-react",
		element: <Navigate to="/services/web-development/figma-to-react" replace />,
	},
	{
		path: "/services/web-development/react-js-development/photoshop-to-react",
		element: <Navigate to="/services/web-development/photoshop-to-react" replace />,
	},
	{
		path: "/services/web-development/react-js-development/html-to-react",
		element: <Navigate to="/services/web-development/html-to-react" replace />,
	},
	{
		path: "/services/web-development/react-js-development/reactjs-performance-optimization",
		element: <Navigate to="/services/web-development/reactjs-performance-optimization" replace />,
	},
	{
		path: "/services/web-development/react-js-development/custom-reactjs-web-application-development",
		element: <Navigate to="/services/web-development/custom-reactjs-web-application-development" replace />,
	},
	{
		path: "/services/web-development/react-js-development/reactjs-component-development-and-integration",
		element: <Navigate to="/services/web-development/reactjs-component-development-and-integration" replace />,
	},
	{
		path: "/services/web-development/react-js-development/reactjs-mobile-app-development",
		element: <Navigate to="/services/web-development/reactjs-mobile-app-development" replace />,
	},
	{
		path: "/services/web-development/react-js-development/reactjs-ssr-website-development",
		element: <Navigate to="/services/web-development/reactjs-ssr-website-development" replace />,
	},
	{
		path: "/services/web-development/react-js-development/reactjs-ui-ux-design-and-development",
		element: <Navigate to="/services/web-development/reactjs-ui-ux-design-and-development" replace />,
	},
	{
		path: '/custom-html-website-design',
		element: <Navigate to='/services/web-development/custom-html-website-design' replace />,
	},
	{
		path: '/template-customization',
		element: <Navigate to='/services/web-development/template-customization' replace />,
	},
	{
		path: '/responsive-web-design',
		element: <Navigate to='/services/web-development/responsive-web-design' replace />,
	},
	{
		path: '/cross-browser-compatibility-testing',
		element: <Navigate to='/services/web-development/cross-browser-compatibility-testing' replace />,
	},
	{
		path: '/website-redesign-and-revamp',
		element: <Navigate to='/services/web-development/website-redesign-and-revamp' replace />,
	},
	{
		path: '/custom-webflow-development',
		element: <Navigate to='/services/web-development/custom-webflow-development' replace />,
	},
	{
		path: '/webflow-theme-development',
		element: <Navigate to='/services/web-development/webflow-theme-development' replace />,
	},
	{
		path: '/figma-to-webflow',
		element: <Navigate to='/services/web-development/figma-to-webflow' replace />,
	},
	{
		path: '/photoshop-to-webflow',
		element: <Navigate to='/services/web-development/photoshop-to-webflow' replace />,
	},
	{
		path: '/html-to-webflow',
		element: <Navigate to='/services/web-development/html-to-webflow' replace />,
	},
	{
		path: '/webflow-integration',
		element: <Navigate to='/services/web-development/webflow-integration' replace />,
	},
	{
		path: '/custom-wordpress-website-design',
		element: <Navigate to='/services/web-development/custom-wordpress-website-design' replace />,
	},
	{
		path: '/woocommerce-development',
		element: <Navigate to='/services/web-development/woocommerce-development' replace />,
	},
	{
		path: '/wordpress-seo-optimization',
		element: <Navigate to='/services/web-development/wordpress-seo-optimization' replace />,
	},
	{
		path: '/wordpress-migration-and-upgrades',
		element: <Navigate to='/services/web-development/wordpress-migration-and-upgrades' replace />,
	},
	{
		path: '/buddyboss-design-and-development',
		element: <Navigate to='/services/web-development/buddyboss-design-and-development' replace />,
	},
	{
		path: '/custom-shopify-store-design',
		element: <Navigate to='/services/web-development/custom-shopify-store-design' replace />,
	},
	{
		path: '/shopify-theme-customization',
		element: <Navigate to='/services/web-development/shopify-theme-customization' replace />,
	},
	{
		path: '/shopify-seo-optimization',
		element: <Navigate to='/services/web-development/shopify-seo-optimization' replace />,
	},
	{
		path: '/figma-to-shopify',
		element: <Navigate to='/services/web-development/figma-to-shopify' replace />,
	},
	{
		path: '/photoshop-to-shopify',
		element: <Navigate to='/services/web-development/photoshop-to-shopify' replace />,
	},
	{
		path: '/html-to-shopify',
		element: <Navigate to='/services/web-development/html-to-shopify' replace />,
	},
	{
		path: '/shopify-app-integration-and-development',
		element: <Navigate to='/services/web-development/shopify-app-integration-and-development' replace />,
	},
	{
		path: '/shopify-ecommerce-management-and-support',
		element: <Navigate to='/services/web-development/shopify-ecommerce-management-and-support' replace />,
	},
	{
		path: '/figma-to-react',
		element: <Navigate to='/services/web-development/figma-to-react' replace />,
	},
	{
		path: '/photoshop-to-react',
		element: <Navigate to='/services/web-development/photoshop-to-react' replace />,
	},
	{
		path: '/html-to-react',
		element: <Navigate to='/services/web-development/html-to-react' replace />,
	},
	{
		path: '/reactjs-performance-optimization',
		element: <Navigate to='/services/web-development/reactjs-performance-optimization' replace />,
	},
	{
		path: '/custom-reactjs-web-application-development',
		element: <Navigate to='/services/web-development/custom-reactjs-web-application-development' replace />,
	},
	{
		path: '/reactjs-component-development-and-integration',
		element: <Navigate to='/services/web-development/reactjs-component-development-and-integration' replace />,
	},
	{
		path: '/reactjs-mobile-app-development',
		element: <Navigate to='/services/web-development/reactjs-mobile-app-development' replace />,
	},
	{
		path: '/reactjs-ssr-website-development',
		element: <Navigate to='/services/web-development/reactjs-ssr-website-development' replace />,
	},
	{
		path: '/reactjs-ui-ux-design-and-development',
		element: <Navigate to='/services/web-development/reactjs-ui-ux-design-and-development' replace />,
	},
	{
		path: '/learndash-design-and-development',
		element: <Navigate to='/services/web-development/wordpress-development' replace />,
	},
	{
		path: '/dokan-design-and-development',
		element: <Navigate to='/services/web-development/wordpress-development' replace />,
	},
	{
		path: '/responsive-wordpress-design',
		element: <Navigate to='/services/web-development/wordpress-development' replace />,
	},
	{
		path: '/figma-to-wordpress',
		element: <Navigate to='/services/web-development/wordpress-development' replace />,
	},
	{
		path: '/photoshop-to-wordpress',
		element: <Navigate to='/services/web-development/wordpress-development' replace />,
	},
	{
		path: '/html-to-wordpress',
		element: <Navigate to='/services/web-development/wordpress-development' replace />,
	},
	{
		path: '/theme-and-plugin-customization',
		element: <Navigate to='/services/web-development/wordpress-development' replace />,
	},
	{
		path: '/woocommerce-design-and-development',
		element: <Navigate to='/services/web-development/wordpress-development' replace />,
	},
	{
		path: '/wordpress-website-maintenance-and-support',
		element: <Navigate to='/services/web-development/wordpress-development' replace />,
	},
]);
