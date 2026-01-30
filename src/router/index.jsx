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
						path: "/ui-ux-design-company-in-ahmedabad",
						element: <Navigate to="/ui-ux-design-agency-in-ahmedabad" replace />,
					},
					{
						path: "/web-development-company-in-ahmedabad",
						element: <Navigate to="/website-development-company-ahmedabad" replace />,
					},
					{
						path: "/digital-marketing",
						element: <Navigate to="/digital-marketing-agency-india" replace />,
					},
					{
						path: "/branding-and-identity-design",
						element: <Navigate to="/branding-and-identity-design-agency-ahmedabad" replace />,
					},
					{
						path: "/social-media-banner-design",
						element: <Navigate to="/social-media-banner-design-ahmedabad" replace />,
					},
					{
						path: "/flyer-design",
						element: <Navigate to="/flyer-design-services-ahmedabad" replace />,
					},
					{
						path: "/brochure-design",
						element: <Navigate to="/brochure-design-company-ahmedabad/" replace />,
					},
					{
						path: "/poster-design",
						element: <Navigate to="/poster-design-services-ahmedabad" replace />,
					},
					{
						path: "/hoarding-design",
						element: <Navigate to="/hoarding-design-services-ahmedabad" replace />,
					},
					{
						path: "/packaging-design",
						element: <Navigate to="/packaging-design-agency-ahmedabad" replace />,
					},
					{
						path: "/advertising-design",
						element: <Navigate to="/advertising-design-agency-ahmedabad" replace />,
					},
					{
						path: "/newsletter-design",
						element: <Navigate to="/newsletter-design-service-ahmedabad" replace />,
					},
					{
						path: "/infographic-design",
						element: <Navigate to="/infographic-design-services-ahmedabad" replace />,
					},
					{
						path: "/business-card-design",
						element: <Navigate to="/visiting-card-design-service-ahmedabad" replace />,
					},
					{
						path: "/presentation-design",
						element: <Navigate to="/presentation-design-services-ahmedabad" replace />,
					},
					{
						path: "/magazine-and-booklet-design",
						element: <Navigate to="/magazine-and-booklet-design-ahmedabad" replace />,
					},
					{
						path: "/event-invitation-design",
						element: <Navigate to="/event-invitation-design-ahmedabad" replace />,
					},
					{
						path: "/menu-design",
						element: <Navigate to="/menu-design-service-ahmedabad" replace />,
					},
					{
						path: "/signage-design",
						element: <Navigate to="/signage-design-service-ahmedabad" replace />,
					},
					{
						path: "/corporate-profile-design",
						element: <Navigate to="/corporate-profile-design-ahmedabad" replace />,
					},
					{
						path: "/annual-report-design",
						element: <Navigate to="/annual-report-design-agency-ahmedabad" replace />,
					},
					{
						path: "/digital-ad-design",
						element: <Navigate to="/digital-ad-design-agency-ahmedabad" replace />,
					},
					{
						path: "/trade-show-booth-design",
						element: <Navigate to="/exhibition-booth-design-ahmedabad/" replace />,
					},
					{
						path: "/motion-graphics-design",
						element: <Navigate to="/motion-graphics-design-agency-ahmedabad" replace />,
					},
					{
						path: "/e-book-design",
						element: <Navigate to="/e-book-design-service-ahmedabad" replace />,
					},
					{
						path: "/",
						element: <HomeOne />,
					},
					{
						path: "/about-us",
						element: <AboutUs />,
					},
					{
						path: "/contact-us",
						element: <ContactUs />,
					},
					{
						path: "/industries-we-serve",
						element: <Industryweserve />,
					},
					{
						path: "/faq",
						element: <Faq />,
					},

					{
						path: "/testimonial",
						element: <TestimonialPage />,
					},

					{
						path: "/pricing",
						element: <Pricing />,
					},
					{
						path: "/blogs",
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
						path: "/meta-ads",
						element: <Metaads />,
					},
					{
						path: "/sitemap",
						element: <Sitemap />,
					},
					{
						path: "/google-ads",
						element: <Googleads />,
					},
					{
						path: "/email-marketing",
						element: <Emailmarketing />,
					},
					{
						path: "/social-media-marketing",
						element: <Socialmediamarketing />,
					},
					{
						path: "/search-engine-optimization",
						element: <Searchengineoptimization />,
					},
					{
						path: "/digital-marketing-agency-india",
						element: <Digitalmarketing />,
					},
					{
						path: "/website-redesign-and-revamp",
						element: <Websiteredesign />,
					},
					{
						path: "/cross-browser-compatibility-testing",
						element: <Crossbrowser />,
					},
					{
						path: "/responsive-web-design",
						element: <Responsivewebdesign />,
					},
					{
						path: "/template-customization",
						element: <Templatecustomization />,
					},
					{
						path: "/custom-html-website-design",
						element: <Customhtmlwebsitedesign />,
					},
					{
						path: "/html-css",
						element: <Htmlcss />,
					},
					{
						path: "/reactjs-ui-ux-design-and-development",
						element: <Reactjsuiuxdesign />,
					},
					{
						path: "/reactjs-ssr-website-development",
						element: <Reactjswebsitedevelopment />,
					},
					{
						path: "/reactjs-mobile-app-development",
						element: <Reactjsmobileapp />,
					},
					{
						path: "/reactjs-component-development-and-integration",
						element: <Reactjscomponentdevelopment />,
					},
					{
						path: "/custom-reactjs-web-application-development",
						element: <Customreactjsweb />,
					},
					{
						path: "/reactjs-performance-optimization",
						element: <Reactjsperformance />,
					},
					{
						path: "/photoshop-to-react",
						element: <Photoshoptoreact />,
					},
					{
						path: "/html-to-react",
						element: <Htmltoreact />,
					},
					{
						path: "/figma-to-react",
						element: <Figmatoreact />,
					},
					{
						path: "/react-js",
						element: <Reactjs />,
					},
					{
						path: "/shopify-ecommerce-management-and-support",
						element: <Shopifyecommercemanagement />,
					},
					{
						path: "/shopify-app-integration-and-development",
						element: <Shopifyappintegration />,
					},
					{
						path: "/html-to-shopify",
						element: <Htmltoshopify />,
					},
					{
						path: "/photoshop-to-shopify",
						element: <Photoshoptoshopify />,
					},
					{
						path: "/figma-to-shopify",
						element: <Figmatoshopify />,
					},
					{
						path: "/shopify-seo-optimization",
						element: <Shopifyseooptimization />,
					},
					{
						path: "/shopify-theme-customization",
						element: <Shopifythemecustomization />,
					},
					{
						path: "/custom-shopify-store-design",
						element: <Customshopifystoredesign />,
					},
					{
						path: "/shopify",
						element: <Shopify />,
					},
					{
						path: "/wordpress-website-maintenance-and-support",
						element: <WordPresswebsitemaintenance />,
					},
					{
						path: "/woocommerce-design-and-development",
						element: <WooCommercedesign />,
					},
					{
						path: "/theme-and-plugin-customization",
						element: <Themeandplugin />,
					},
					{
						path: "/html-to-wordpress",
						element: <HtmltowordPress />,
					},
					{
						path: "/photoshop-to-wordpress",
						element: <PhotoshoptowordPress />,
					},
					{
						path: "/figma-to-wordpress",
						element: <FigmatowordPress />,
					},
					{
						path: "/responsive-wordpress-design",
						element: <Responsivewordpressdesign />,
					},
					{
						path: "/dokan-design-and-development",
						element: <Dokandesign />,
					},
					{
						path: "/learndash-design-and-development",
						element: <LearnDashdesign />,
					},
					{
						path: "/buddyboss-design-and-development",
						element: <BuddyBossdesign />,
					},
					{
						path: "/wordpress-migration-and-upgrades",
						element: <WordPressmigration />,
					},
					{
						path: "/wordpress-seo-optimization",
						element: <WordPressseooptimization />,
					},
					{
						path: "/woocommerce-development",
						element: <WooCommercedevelopment />,
					},
					{
						path: "/custom-webflow-development",
						element: <Customwebflowdevelopment />,

					},
					{
						path: "/webflow",
						element: <Webflowdevelopment />,

					},

					{
						path: "/custom-wordpress-website-design",
						element: <CustomwordPresswebsite />,

					},
					{
						path: "/wordpress",
						element: <WordPress />,

					},
					{
						path: "/webflow-integration",
						element: <Webflowintegration />,

					},
					{
						path: "/html-to-webflow",
						element: <Htmltowebflow />,

					},
					{
						path: "/photoshop-to-webflow",
						element: <Photoshoptowebflow />,

					},
					{
						path: "/figma-to-webflow",
						element: <Figmatowebflow />,

					},
					{
						path: "/webflow-theme-development",
						element: <Webflowthemedevelopment />,

					},
					{
						path: "/ui-ux-design-agency-in-ahmedabad",
						element: <UiuxDesign />,

					},
					{
						path: "/website-development-company-ahmedabad",
						element: <WebDevelopment />,

					},
					{
						path: "/graphic-design-company-in-ahmedabad",
						element: <GraphicDesign />,

					},
					{
						path: "/flyer-design-services-ahmedabad",
						element: <FlyerDesign />,

					},
					{
						path: "/hoarding-design-services-ahmedabad",
						element: <HoardingDesign />,

					},
					{
						path: "/newsletter-design-service-ahmedabad",
						element: <NewsletterDesign />,

					},
					{
						path: "/presentation-design-services-ahmedabad",
						element: <PresentationDesign />,

					},
					{
						path: "/event-invitation-design-ahmedabad",
						element: <EventInvitation />,

					},
					{
						path: "/advertising-design-agency-ahmedabad",
						element: <AdvertisingDesign />,

					},
					{
						path: "/corporate-profile-design-ahmedabad",
						element: <CorporateProfile />,

					},
					{
						path: "/exhibition-booth-design-ahmedabad/",
						element: <TradeShow />,

					},
					{
						path: "/branding-and-identity-design-agency-ahmedabad",
						element: <BrandingIdentity />,

					},
					{
						path: "/brochure-design-company-ahmedabad/",
						element: <BrochureDesign />,

					},
					{
						path: "/packaging-design-agency-ahmedabad",
						element: <PackagingDesign />,

					},
					{
						path: "/infographic-design-services-ahmedabad",
						element: <InfographicDesign />,

					},
					{
						path: "/magazine-and-booklet-design-ahmedabad",
						element: <MagazineBooklet />,

					},
					{
						path: "/menu-design-service-ahmedabad",
						element: <Menudesigncard />,

					},
					{
						path: "/annual-report-design-agency-ahmedabad",
						element: <AnnualReport />,

					},
					{
						path: "/motion-graphics-design-agency-ahmedabad",
						element: <MotionGraphics />,

					},
					{
						path: "/social-media-banner-design-ahmedabad",
						element: <SocialMediaBanner />,

					},
					{
						path: "/visiting-card-design-service-ahmedabad",
						element: <BusinessCard />,

					},
					{
						path: "/custom-illustration-design",
						element: <CustomIllustration />,

					},
					{
						path: "/signage-design-service-ahmedabad",
						element: <SignageDesign />,

					},
					{
						path: "/digital-ad-design-agency-ahmedabad",
						element: <DigitalAd />,

					},
					{
						path: "/e-book-design-service-ahmedabad",
						element: <Ebookdesign />,

					},
					{
						path: "/poster-design-services-ahmedabad",
						element: <PosterDesign />,

					},
					{
						path: "/logo-design-company-ahmedabad",
						element: <LogoDesign />,

					},
					{
						path: "/website-ui-ux-design",
						element: <WebsiteUIUXDesign />,

					},
					{
						path: "/ios-ui-ux-design",
						element: <IOSUIUXDesign />,

					},
					{
						path: "/android-ui-ux-design",
						element: <AndroidUIUXDesign />,

					},
					{
						path: "/erp-ui-ux-design",
						element: <ERPUIUXDesign />,

					},
					{
						path: "/backend-ui-ux-design",
						element: <BackendUIUXDesign />,

					},
					{
						path: "/seo-company-in-ahmedabad",
						element: <Seo />,

					},
					{
						path: "/social-media-marketing-agency-ahmedabad",
						element: <SocialMedia />,

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
						path: "/portfolio-one",
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
						element: <ServicePage />,
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
		element: <Navigate to="/ui-ux-design-agency-in-ahmedabad" replace />,
	},
	{
		path: "/web-development-company-in-ahmedabad",
		element: <Navigate to="/website-development-company-ahmedabad" replace />,
	},
	{
		path: "/digital-marketing",
		element: <Navigate to="/digital-marketing-agency-india" replace />,
	},
	{
		path: "/branding-and-identity-design",
		element: <Navigate to="/branding-and-identity-design-agency-ahmedabad" replace />,
	},
	{
		path: "/social-media-banner-design",
		element: <Navigate to="/social-media-banner-design-ahmedabad" replace />,
	},
	{
		path: "/flyer-design",
		element: <Navigate to="/flyer-design-services-ahmedabad" replace />,
	},
	{
		path: "/brochure-design",
		element: <Navigate to="/brochure-design-company-ahmedabad/" replace />,
	},
	{
		path: "/poster-design",
		element: <Navigate to="/poster-design-services-ahmedabad" replace />,
	},
	{
		path: "/hoarding-design",
		element: <Navigate to="/hoarding-design-services-ahmedabad" replace />,
	},
	{
		path: "/packaging-design",
		element: <Navigate to="/packaging-design-agency-ahmedabad" replace />,
	},
	{
		path: "/advertising-design",
		element: <Navigate to="/advertising-design-agency-ahmedabad" replace />,
	},
	{
		path: "/newsletter-design",
		element: <Navigate to="/newsletter-design-service-ahmedabad" replace />,
	},
	{
		path: "/infographic-design",
		element: <Navigate to="/infographic-design-services-ahmedabad" replace />,
	},
	{
		path: "/business-card-design",
		element: <Navigate to="/visiting-card-design-service-ahmedabad" replace />,
	},
	{
		path: "/presentation-design",
		element: <Navigate to="/presentation-design-services-ahmedabad" replace />,
	},
]);
