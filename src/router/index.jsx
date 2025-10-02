import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import LayoutEight from "../components/layout/LayoutEight.jsx";
import LayoutFive from "../components/layout/LayoutFive.jsx";
import LayoutFour from "../components/layout/LayoutFour.jsx";
import LayoutOne from "../components/layout/LayoutOne.jsx";
import LayoutSeven from "../components/layout/LayoutSeven.jsx";
import LayoutSix from "../components/layout/LayoutSix.jsx";
import LayoutThree from "../components/layout/LayoutThree.jsx";
import LayoutTwo from "../components/layout/LayoutTwo.jsx";
import Layout from "../components/layout/index.jsx";
import ErrorPage from "../error-page";
import AboutUs from "../page/AboutUs";
import ContactUs from "../page/ContactUs";
import Pricing from "../page/Pricing";
import Reset from "../page/auth/ResetPassword.jsx";
import SignIn from "../page/auth/SignIn";
import SignUp from "../page/auth/SignUp";
import BlogGridPage from "../page/blog/BlogGridPage.jsx";
import BlogPage from "../page/blog/BlogPage.jsx";
import SingleBlogPage from "../page/blog/SingleBlog.jsx";
import HomeFive from "../page/home/HomeFive.jsx";
import HomeFour from "../page/home/HomeFour.jsx";
import HomeOne from "../page/home/HomeOne.jsx";
import HomeSeven from "../page/home/HomeSeven.jsx";
import HomeSix from "../page/home/HomeSix.jsx";
import HomeThree from "../page/home/HomeThree.jsx";
import HomeTwo from "../page/home/HomeTwo.jsx";
import PortfolioOneColumn from "../page/portfolio/PortfolioOneColoum";
import PortfolioTwoColumn from "../page/portfolio/PortfolioTwoColumn";
import SinglePortfolio from "../page/portfolio/SinglePortfolio";
import Service from "../page/service";
import UiuxDesign from "../page/service/UiuxDesign.jsx";
import Team from "../page/team";
import SingleTeam from "../page/team/SingleTeam.jsx";
import CommingSoon from "../page/utility/CommingSoon.jsx";
import Faq from "../page/utility/Faq.jsx";
import TestimonialPage from "../page/utility/Testimonial.jsx";
import WebDevelopment from "../page/service/WebDevelopment.jsx"
import GraphicDesign from "../page/service/GraphicDesign.jsx"
import LogoDesign from "../page/service/LogoDesign.jsx"
import Seo from "../page/service/Seo.jsx"
import SocialMedia from "../page/service/SocialMedia.jsx"
import ServicePage from "../components/home-one/services/ServicePage.jsx"
import TermsAndConditions from "../components/home-one/terms/TermsAndConditions.jsx"
import Privacypolicy from "../components/home-one/privacypolicy/privacypolicy.jsx"
import Industryweserve from "../components/home-one/Industryweserve/industryserve.jsx";
import FlyerDesign from "../page/service/FlyerDesign.jsx";
import HoardingDesign from "../page/service/HoardingDesign.jsx";
import NewsletterDesign from "../page/service/NewsletterDesign.jsx";
import PresentationDesign from "../components/service/PresentationDesign.jsx";
import EventInvitation from "../components/service/EventInvitation.jsx";
import CorporateProfile from "../components/service/CorporateProfile.jsx";
import TradeShow from "../page/service/TradeShow.jsx";
import BrandingIdentity from "../page/service/BrandingIdentity.jsx";
import BrochureDesign from "../page/service/BrochureDesign.jsx";
import PackagingDesign from "../page/service/PackagingDesign.jsx";
import InfographicDesign from "../page/service/InfographicDesign.jsx";
import MagazineBooklet from "../page/service/MagazineBooklet.jsx";
import Menudesigncard from "../page/service/Hotelmenu.jsx"
import AnnualReport from "../page/service/AnnualReport.jsx";
import MotionGraphics from "../page/service/MotionGraphics.jsx";
import SocialMediaBanner from "../page/service/SocialMediaBanner.jsx";
import PosterDesign from "../page/service/PosterDesign.jsx";
import AdvertisingDesign from "../page/service/AdvertisingDesign.jsx";
import BusinessCard from "../page/service/BusinessCard.jsx";
import CustomIllustration from "../page/service/CustomIllustration.jsx";
import SignageDesign from "../page/service/SignageDesign.jsx";
import DigitalAd from "../page/service/DigitalAd.jsx";
import Ebookdesign from "../page/service/Ebookdesign.jsx";
import WebsiteUIUXDesign from "../page/service/WebsiteUIUXDesign.jsx";
import IOSUIUXDesign from "../page/service/IOSUIUXDesign.jsx";
import AndroidUIUXDesign from "../page/service/AndroidUIUXDesign.jsx";
import ERPUIUXDesign from "../page/service/ERPUIUXDesign.jsx";
import BackendUIUXDesign from "../page/service/BackendUIUXDesign.jsx";
import NirajMandaliya from "../components/team/NirajMandaliya.jsx";
import DhirajAhuja from "../components/team/DhirajAhuja.jsx";
import Webflowthemedevelopment from "../page/service/Webflowthemedevelopment.jsx";
import Figmatowebflow from "../page/service/Figmatowebflow.jsx";
import Photoshoptowebflow from "../page/service/Photoshoptowebflow.jsx";
import Htmltowebflow from "../page/service/Htmltowebflow.jsx";
import Webflowintegration from "../page/service/Webflowintegration.jsx";
import WordPress from "../page/service/WordPress.jsx";
import CustomwordPresswebsite from "../page/service/CustomwordPresswebsite.jsx";
import Webflowdevelopment from "../page/service/Webflowdevelopment.jsx";
import Customwebflowdevelopment from "../page/service/Customwebflowdevelopment.jsx";
import WooCommercedevelopment from "../page/service/WooCommercedevelopment.jsx";
import WordPressseooptimization from "../page/service/WordPressseooptimization.jsx";
import WordPressmigration from "../page/service/WordPressmigration.jsx";
import BuddyBossdesign from "../page/service/BuddyBossdesign.jsx";
import LearnDashdesign from "../page/service/LearnDashdesign.jsx";
import Dokandesign from "../page/service/Dokandesign.jsx";
import Responsivewordpressdesign from "../page/service/Responsivewordpressdesign.jsx";
import FigmatowordPress from "../page/service/FigmatowordPress.jsx";
import PhotoshoptowordPress from "../page/service/PhotoshoptowordPress.jsx";
import Htmltowebflowdetail from "../components/service/Htmltowebflowdetail.jsx";
import HtmltowordPress from "../page/service/HtmltowordPress.jsx";
import Themeandplugin from "../page/service/Themeandplugin.jsx";
import WooCommercedesign from "../page/service/WooCommercedesign.jsx";
import WordPresswebsitemaintenancedetail from "../components/service/WordPresswebsitemaintenancedetail.jsx";
import WordPresswebsitemaintenance from "../page/service/WordPresswebsitemaintenance.jsx";
import Shopify from "../page/service/Shopify.jsx";
import Customshopifystoredesign from "../page/service/Customshopifystoredesign.jsx";
import Shopifythemecustomization from "../page/service/Shopifythemecustomization.jsx";
import Shopifyseooptimization from "../page/service/Shopifyseooptimization.jsx";
import Figmatoshopify from "../page/service/Figmatoshopify.jsx";
import Photoshoptoshopify from "../page/service/Photoshoptoshopify.jsx";
import Htmltoshopify from "../page/service/Htmltoshopify.jsx";
import Shopifyappintegration from "../page/service/Shopifyappintegration.jsx";
import Shopifyecommercemanagement from "../page/service/Shopifyecommercemanagement.jsx";
import Reactjs from "../page/service/Reactjs.jsx";
import Figmatoreact from "../page/service/Figmatoreact.jsx";
import Photoshoptoreact from "../page/service/Photoshoptoreact.jsx";
import Htmltoreact from "../page/service/Htmltoreact.jsx";
import Reactjsperformance from "../page/service/Reactjsperformance.jsx";
import Customreactjswebdetail from "../components/service/Customreactjswebdetail.jsx";
import Customreactjsweb from "../page/service/Customreactjsweb.jsx";
import Reactjscomponentdevelopmentdetail from "../components/service/Reactjscomponentdevelopmentdetail.jsx";
import Reactjscomponentdevelopment from "../page/service/Reactjscomponentdevelopment.jsx";
import Reactjsmobileappdetail from "../components/service/Reactjsmobileappdetail.jsx";
import Reactjsmobileapp from "../page/service/Reactjsmobileapp.jsx";
import Reactjswebsitedevelopment from "../page/service/Reactjswebsitedevelopment.jsx";
import Reactjsuiuxdesign from "../page/service/Reactjsuiuxdesign.jsx";
import Htmlcss from "../page/service/Htmlcss.jsx";
import Customhtmlwebsitedesigndetail from "../components/service/Customhtmlwebsitedesigndetail.jsx";
import Customhtmlwebsitedesign from "../page/service/Customhtmlwebsitedesign.jsx";
import Templatecustomization from "../page/service/Templatecustomization.jsx";
import Responsivewebdesign from "../page/service/Responsivewebdesign.jsx";
import Crossbrowser from "../page/service/Crossbrowser.jsx";
import Websiteredesign from "../page/service/Websiteredesign.jsx";
import Digitalmarketing from "../page/service/Digitalmarketing.jsx";
import Searchengineoptimization from "../page/service/Searchengineoptimization.jsx";
import Socialmediamarketing from "../page/service/Socialmediamarketing.jsx";
import Emailmarketing from "../page/service/Emailmarketing.jsx";
import Googleads from "../page/service/Googleads.jsx";
import Metaads from "../page/service/Metaads.jsx";
import Sitemap from "../components/home-one/Sitemap/Sitemap.jsx";
import CookiePolicy from "../components/home-one/cookie/CookiePolicy.jsx";










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
						element: <Metaads/>,
					},
					{
						path: "/sitemap",
						element: <Sitemap/>,
					},
					{
						path: "/google-ads",
						element: <Googleads/>,
					},
					{
						path: "/email-marketing",
						element: <Emailmarketing/>,
					},
					{
						path: "/social-media-marketing",
						element: <Socialmediamarketing/>,
					},
					{
						path: "/search-engine-optimization",
						element: <Searchengineoptimization/>,
					},
					{
						path: "/digital-marketing",
						element: <Digitalmarketing/>,
					},
					{
						path: "/website-redesign-and-revamp",
						element: <Websiteredesign/>,
					},
					{
						path: "/cross-browser-compatibility-testing",
						element: <Crossbrowser/>,
					},
					{
						path: "/responsive-web-design",
						element: <Responsivewebdesign/>,
					},
					{
						path: "/template-customization",
						element: <Templatecustomization/>,
					},
					{
						path: "/custom-html-website-design",
						element: <Customhtmlwebsitedesign/>,
					},
					{
						path: "/html-css",
						element: <Htmlcss/>,
					},
					{
						path: "/reactjs-ui-ux-design-and-development",
						element: <Reactjsuiuxdesign/>,
					},
					{
						path: "/reactjs-ssr-website-development",
						element: <Reactjswebsitedevelopment/>,
					},
					{
						path: "/reactjs-mobile-app-development",
						element: <Reactjsmobileapp/>,
					},
					{
						path: "/reactjs-component-development-and-integration",
						element: <Reactjscomponentdevelopment/>,
					},
					{
						path: "/custom-reactjs-web-application-development",
						element: <Customreactjsweb/>,
					},
					{
						path: "/reactjs-performance-optimization",
						element: <Reactjsperformance/>,
					},
					{
						path: "/photoshop-to-react",
						element: <Photoshoptoreact/>,
					},
					{
						path: "/html-to-react",
						element: <Htmltoreact/>,
					},
					{
						path: "/figma-to-react",
						element: <Figmatoreact/>,
					},
					{
						path: "/react-js",
						element: <Reactjs/>,
					},
					{
						path: "/shopify-ecommerce-management-and-support",
						element: <Shopifyecommercemanagement/>,
					},
					{
						path: "/shopify-app-integration-and-development",
						element: <Shopifyappintegration/>,
					},
					{
						path: "/html-to-shopify",
						element: <Htmltoshopify/>,
					},
					{
						path: "/photoshop-to-shopify",
						element: <Photoshoptoshopify/>,
					},
					{
						path: "/figma-to-shopify",
						element: <Figmatoshopify/>,
					},
					{
						path: "/shopify-seo-optimization",
						element: <Shopifyseooptimization/>,
					},
					{
						path: "/shopify-theme-customization",
						element: <Shopifythemecustomization/>,
					},
					{
						path: "/custom-shopify-store-design",
						element: <Customshopifystoredesign/>,
					},
					{
						path: "/shopify",
						element: <Shopify/>,
					},
					{
						path: "/wordpress-website-maintenance-and-support",
						element: <WordPresswebsitemaintenance/>,
					},
					{
						path: "/woocommerce-design-and-development",
						element: <WooCommercedesign/>,
					},
					{
						path: "/theme-and-plugin-customization",
						element: <Themeandplugin/>,
					},
					{
						path: "/html-to-wordpress",
						element: <HtmltowordPress/>,
					},
					{
						path: "/photoshop-to-wordpress",
						element: <PhotoshoptowordPress/>,
					},
					{
						path: "/figma-to-wordpress",
						element: <FigmatowordPress/>,
					},
					{
						path: "/responsive-wordpress-design",
						element: <Responsivewordpressdesign/>,
					},
					{
						path: "/dokan-design-and-development",
						element: <Dokandesign/>,
					},
					{
						path: "/learndash-design-and-development",
						element: <LearnDashdesign/>,
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
						path: "/ui-ux-design-company-in-ahmedabad",
						element: <UiuxDesign />,

					},
					{
						path: "/web-development-company-in-ahmedabad",
						element: <WebDevelopment />,
						
					},
					{
						path: "/graphic-design-company-in-ahmedabad",
						element: <GraphicDesign />,
						
					},
					{
						path: "/Flyer-Design",
						element: <FlyerDesign />,
						
					},
					{
						path: "/Hoarding-Design",
						element: <HoardingDesign/>,
						
					},
					{
						path: "/Newsletter-Design",
						element: <NewsletterDesign/>,
						
					},
					{
						path: "/presentation-design",
						element: <PresentationDesign/>,
						
					},
					{
						path: "/event-invitation-design",
						element: <EventInvitation/>,
						
					},
					{
						path: "/advertising-design",
						element: <AdvertisingDesign/>,
						
					},
					{
						path: "/corporate-profile-design",
						element: <CorporateProfile/>,
						
					},
					{
						path: "/trade-show-booth-design",
						element: <TradeShow/>,
						
					},
					{
						path: "/branding-and-identity-design",
						element: <BrandingIdentity/>,
						
					},
					{
						path: "/brochure-design",
						element: <BrochureDesign/>,
						
					},
					{
						path: "/packaging-design",
						element: <PackagingDesign/>,
						
					},
					{
						path: "/infographic-design",
						element: <InfographicDesign/>,
						
					},
					{
						path: "/magazine-and-booklet-design",
						element: <MagazineBooklet/>,
						
					},
					{
						path: "/menu-design",
						element: <Menudesigncard/>,
						
					},
					{
						path: "/annual-report-design",
						element: <AnnualReport/>,
						
					},
					{
						path: "/motion-graphics-design",
						element: <MotionGraphics/>,
						
					},
					{
						path: "/social-media-banner-design",
						element: <SocialMediaBanner/>,
						
					},
					{
						path: "/business-card-design",
						element: <BusinessCard/>,
						
					},
					{
						path: "/custom-illustration-design",
						element: <CustomIllustration/>,
						
					},
					{
						path: "/signage-design",
						element: <SignageDesign/>,
						
					},
					{
						path: "/digital-ad-design",
						element: <DigitalAd/>,
						
					},
					{
						path: "/e-book-design",
						element: <Ebookdesign/>,
						
					},
					{
						path: "/poster-design",
						element: <PosterDesign/>,
						
					},
					{
						path: "/logo-design-company-ahmedabad",
						element: <LogoDesign />,
						
					},
					{
						path: "/website-ui-ux-design",
						element: <WebsiteUIUXDesign/>,
						
					},
					{
						path: "/ios-ui-ux-design",
						element: <IOSUIUXDesign/>,
						
					},
					{
						path: "/android-ui-ux-design",
						element: <AndroidUIUXDesign/>,
						
					},
					{
						path: "/erp-ui-ux-design",
						element: <ERPUIUXDesign/>,
						
					},
					{
						path: "/backend-ui-ux-design",
						element: <BackendUIUXDesign/>,
						
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
						path: "*",
						element: <ErrorPage />,
					},
					{
						path: "/service",
						element: <ServicePage/>,
					},
					{
						path: "/terms-and-conditions",
						element: <TermsAndConditions/>,
					},
					{
						path: "/privacy-policy",
						element: <Privacypolicy/>,
					},
					{
						path: "/cookie-policy",
						element: <CookiePolicy/>,
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
]);
