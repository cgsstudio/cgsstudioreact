import { lazy } from "react";

// Vite's glob import for dynamic components
const components = import.meta.glob("../**/*.jsx");

// Helper function for lazy loading using the glob import
const lazyLoad = (path) => lazy(components[`../${path}`]);
 
// Layouts
export const LayoutOne = lazyLoad("components/layout/LayoutOne.jsx");
export const LayoutTwo = lazyLoad("components/layout/LayoutTwo.jsx");
export const LayoutThree = lazyLoad("components/layout/LayoutThree.jsx");
export const LayoutFour = lazyLoad("components/layout/LayoutFour.jsx");
export const LayoutFive = lazyLoad("components/layout/LayoutFive.jsx");
export const LayoutSix = lazyLoad("components/layout/LayoutSix.jsx");
export const LayoutSeven = lazyLoad("components/layout/LayoutSeven.jsx");
export const LayoutEight = lazyLoad("components/layout/LayoutEight.jsx");

// Pages
const HomeOne = lazyLoad("page/home/HomeOne.jsx");
const AboutUs = lazyLoad("page/AboutUs");
const ContactUs = lazyLoad("page/ContactUs");
const Pricing = lazyLoad("page/Pricing");
const Reset = lazyLoad("page/auth/ResetPassword.jsx");
const SignIn = lazyLoad("page/auth/SignIn");
const SignUp = lazyLoad("page/auth/SignUp");
const BlogGridPage = lazyLoad("page/blog/BlogGridPage.jsx");
const BlogPage = lazyLoad("page/blog/BlogPage.jsx");
const SingleBlogPage = lazyLoad("page/blog/SingleBlog.jsx");
const HomeFive = lazyLoad("page/home/HomeFive.jsx");
const HomeFour = lazyLoad("page/home/HomeFour.jsx");
const HomeSeven = lazyLoad("page/home/HomeSeven.jsx");
const HomeSix = lazyLoad("page/home/HomeSix.jsx");
export const NewHome = lazyLoad("components/New-Home/index.jsx");
const HomeThree = lazyLoad("page/home/HomeThree.jsx");
const HomeTwo = lazyLoad("page/home/HomeTwo.jsx");
const PortfolioOneColumn = lazyLoad("page/portfolio/PortfolioOneColoum");
const PortfolioTwoColumn = lazyLoad("page/portfolio/PortfolioTwoColumn");
const SinglePortfolio = lazyLoad("page/portfolio/SinglePortfolio");
const UiuxDesign = lazyLoad("page/service/UiuxDesign.jsx");
const Team = lazyLoad("page/team");
const SingleTeam = lazyLoad("page/team/SingleTeam.jsx");
const CommingSoon = lazyLoad("page/utility/CommingSoon.jsx");
const Faq = lazyLoad("page/utility/Faq.jsx");
const TestimonialPage = lazyLoad("page/utility/Testimonial.jsx");
const WebDevelopment = lazyLoad("page/service/WebDevelopment.jsx");
const GraphicDesign = lazyLoad("page/service/GraphicDesign.jsx");
const LogoDesign = lazyLoad("page/service/LogoDesign.jsx");
const Seo = lazyLoad("page/service/Seo.jsx");
const SocialMedia = lazyLoad("page/service/SocialMedia.jsx");
const ServicePage = lazyLoad("components/home-one/services/ServicePage.jsx");
const TermsAndConditions = lazyLoad("components/home-one/terms/TermsAndConditions.jsx");
const Privacypolicy = lazyLoad("components/home-one/privacypolicy/privacypolicy.jsx");
const Industryweserve = lazyLoad("components/home-one/Industryweserve/industryserve.jsx");
const FlyerDesign = lazyLoad("page/service/FlyerDesign.jsx");
const HoardingDesign = lazyLoad("page/service/HoardingDesign.jsx");
const NewsletterDesign = lazyLoad("page/service/NewsletterDesign.jsx");
const PresentationDesign = lazyLoad("components/service/PresentationDesign.jsx");
const EventInvitation = lazyLoad("components/service/EventInvitation.jsx");
const CorporateProfile = lazyLoad("components/service/CorporateProfile.jsx");
const TradeShow = lazyLoad("page/service/TradeShow.jsx");
const BrandingIdentity = lazyLoad("page/service/BrandingIdentity.jsx");
const BrochureDesign = lazyLoad("page/service/BrochureDesign.jsx");
const PackagingDesign = lazyLoad("page/service/PackagingDesign.jsx");
const InfographicDesign = lazyLoad("page/service/InfographicDesign.jsx");
const MagazineBooklet = lazyLoad("page/service/MagazineBooklet.jsx");
const Menudesigncard = lazyLoad("page/service/Hotelmenu.jsx");
const AnnualReport = lazyLoad("page/service/AnnualReport.jsx");
const MotionGraphics = lazyLoad("page/service/MotionGraphics.jsx");
const SocialMediaBanner = lazyLoad("page/service/SocialMediaBanner.jsx");
const PosterDesign = lazyLoad("page/service/PosterDesign.jsx");
const AdvertisingDesign = lazyLoad("page/service/AdvertisingDesign.jsx");
const BusinessCard = lazyLoad("page/service/BusinessCard.jsx");
const CustomIllustration = lazyLoad("page/service/CustomIllustration.jsx");
const SignageDesign = lazyLoad("page/service/SignageDesign.jsx");
const DigitalAd = lazyLoad("page/service/DigitalAd.jsx");
const Ebookdesign = lazyLoad("page/service/Ebookdesign.jsx");
const WebsiteUIUXDesign = lazyLoad("page/service/WebsiteUIUXDesign.jsx");
const IOSUIUXDesign = lazyLoad("page/service/IOSUIUXDesign.jsx");
const AndroidUIUXDesign = lazyLoad("page/service/AndroidUIUXDesign.jsx");
const ERPUIUXDesign = lazyLoad("page/service/ERPUIUXDesign.jsx");
const BackendUIUXDesign = lazyLoad("page/service/BackendUIUXDesign.jsx");
const NirajMandaliya = lazyLoad("components/team/NirajMandaliya.jsx");
const DhirajAhuja = lazyLoad("components/team/DhirajAhuja.jsx");
const Webflowthemedevelopment = lazyLoad("page/service/Webflowthemedevelopment.jsx");
const Figmatowebflow = lazyLoad("page/service/Figmatowebflow.jsx");
const Photoshoptowebflow = lazyLoad("page/service/Photoshoptowebflow.jsx");
const Htmltowebflow = lazyLoad("page/service/Htmltowebflow.jsx");
const Webflowintegration = lazyLoad("page/service/Webflowintegration.jsx");
const WordPress = lazyLoad("page/service/WordPress.jsx");
const CustomwordPresswebsite = lazyLoad("page/service/CustomwordPresswebsite.jsx");
const Webflowdevelopment = lazyLoad("page/service/Webflowdevelopment.jsx");
const Customwebflowdevelopment = lazyLoad("page/service/Customwebflowdevelopment.jsx");
const WooCommercedevelopment = lazyLoad("page/service/WooCommercedevelopment.jsx");
const WordPressseooptimization = lazyLoad("page/service/WordPressseooptimization.jsx");
const WordPressmigration = lazyLoad("page/service/WordPressmigration.jsx");
const BuddyBossdesign = lazyLoad("page/service/BuddyBossdesign.jsx");
const LearnDashdesign = lazyLoad("page/service/LearnDashdesign.jsx");
const Dokandesign = lazyLoad("page/service/Dokandesign.jsx");
const Responsivewordpressdesign = lazyLoad("page/service/Responsivewordpressdesign.jsx");
const FigmatowordPress = lazyLoad("page/service/FigmatowordPress.jsx");
const PhotoshoptowordPress = lazyLoad("page/service/PhotoshoptowordPress.jsx");
const HtmltowordPress = lazyLoad("page/service/HtmltowordPress.jsx");
const Themeandplugin = lazyLoad("page/service/Themeandplugin.jsx");
const WooCommercedesign = lazyLoad("page/service/WooCommercedesign.jsx");
const WordPresswebsitemaintenance = lazyLoad("page/service/WordPresswebsitemaintenance.jsx");
const Shopify = lazyLoad("page/service/Shopify.jsx");
const Customshopifystoredesign = lazyLoad("page/service/Customshopifystoredesign.jsx");
const Shopifythemecustomization = lazyLoad("page/service/Shopifythemecustomization.jsx");
const Shopifyseooptimization = lazyLoad("page/service/Shopifyseooptimization.jsx");
const Figmatoshopify = lazyLoad("page/service/Figmatoshopify.jsx");
const Photoshoptoshopify = lazyLoad("page/service/Photoshoptoshopify.jsx");
const Htmltoshopify = lazyLoad("page/service/Htmltoshopify.jsx");
const Shopifyappintegration = lazyLoad("page/service/Shopifyappintegration.jsx");
const Shopifyecommercemanagement = lazyLoad("page/service/Shopifyecommercemanagement.jsx");
const Reactjs = lazyLoad("page/service/Reactjs.jsx");
const Figmatoreact = lazyLoad("page/service/Figmatoreact.jsx");
const Photoshoptoreact = lazyLoad("page/service/Photoshoptoreact.jsx");
const Htmltoreact = lazyLoad("page/service/Htmltoreact.jsx");
const Reactjsperformance = lazyLoad("page/service/Reactjsperformance.jsx");
const Customreactjsweb = lazyLoad("page/service/Customreactjsweb.jsx");
const Reactjscomponentdevelopment = lazyLoad("page/service/Reactjscomponentdevelopment.jsx");
const Reactjsmobileapp = lazyLoad("page/service/Reactjsmobileapp.jsx");
const Reactjswebsitedevelopment = lazyLoad("page/service/Reactjswebsitedevelopment.jsx");
const Reactjsuiuxdesign = lazyLoad("page/service/Reactjsuiuxdesign.jsx");
const Htmlcss = lazyLoad("page/service/Htmlcss.jsx");
const Customhtmlwebsitedesign = lazyLoad("page/service/Customhtmlwebsitedesign.jsx");
const Templatecustomization = lazyLoad("page/service/Templatecustomization.jsx");
const Responsivewebdesign = lazyLoad("page/service/Responsivewebdesign.jsx");
const Crossbrowser = lazyLoad("page/service/Crossbrowser.jsx");
const Websiteredesign = lazyLoad("page/service/Websiteredesign.jsx");
const Digitalmarketing = lazyLoad("page/service/Digitalmarketing.jsx");
const Searchengineoptimization = lazyLoad("page/service/Searchengineoptimization.jsx");
const Socialmediamarketing = lazyLoad("page/service/Socialmediamarketing.jsx");
const Emailmarketing = lazyLoad("page/service/Emailmarketing.jsx");
const Googleads = lazyLoad("page/service/Googleads.jsx");
const Metaads = lazyLoad("page/service/Metaads.jsx");
const Sitemap = lazyLoad("components/home-one/Sitemap/Sitemap.jsx");
const CookiePolicy = lazyLoad("components/home-one/cookie/CookiePolicy.jsx");

export const layoutOneRoutes = [
    { index: true, element: <HomeOne /> },
    { path: "about-us", element: <AboutUs /> },
    { path: "contact-us", element: <ContactUs /> },
    { path: "industries-we-serve", element: <Industryweserve /> },
    { path: "faq", element: <Faq /> },
    { path: "testimonial", element: <TestimonialPage /> },
    { path: "pricing", element: <Pricing /> },
    { path: "blogs", element: <BlogPage /> },
    { path: "blog/:slug", element: <SingleBlogPage /> },
    { path: "blog-grid", element: <BlogGridPage /> },
    { path: "team", element: <Team /> },
    { path: "singleteam", element: <SingleTeam /> },
    { path: "niraj-mandaliya", element: <NirajMandaliya /> },
    { path: "dhiraj-ahuja", element: <DhirajAhuja /> },
    { path: "portfolio-one", element: <PortfolioOneColumn /> },
    { path: "portfolio-two", element: <PortfolioTwoColumn /> },
    { path: "single-portfolio", element: <SinglePortfolio /> },
    { path: "service", element: <ServicePage /> },
    { path: "terms-and-conditions", element: <TermsAndConditions /> },
    { path: "privacy-policy", element: <Privacypolicy /> },
    { path: "cookie-policy", element: <CookiePolicy /> },
    { path: "sitemap", element: <Sitemap /> },
    // Add all other 100+ service and marketing routes here...
    // Example:
    { path: "meta-ads", element: <Metaads/> },
    { path: "google-ads", element: <Googleads/> },
    // ... and so on for all your routes
];

export const otherRoutes = [
    { path: "/home-two", layout: LayoutTwo, element: <HomeTwo /> },
    { path: "/home-three", layout: LayoutThree, element: <HomeThree /> },
    { path: "/home-four", layout: LayoutFour, element: <HomeFour /> },
    { path: "/home-five", layout: LayoutFive, element: <HomeFive /> },
    { path: "/home-six", layout: LayoutSix, element: <HomeSix /> },
    { path: "home-seven", layout: LayoutSeven, element: <HomeSeven /> },
    { path: "/coming-soon", layout: LayoutEight, element: <CommingSoon /> },
    { path: "/reset-password", layout: LayoutEight, element: <Reset /> },
    { path: "/sign-up", layout: LayoutEight, element: <SignUp /> },
    { path: "/sign-in", layout: LayoutEight, element: <SignIn /> },
];