import SingleImg from "../../assets/images/service/seo-1.png";
import Single2Img from "../../assets/images/service/seo-2.png";
import Star2Img from "../../assets/images/v1/star2.png";
import WorkingApproach from "./WorkingApproach";

const services = [
    {
      title: "Digital Marketing",
      items: [
        { text: "Digital Marketing", link: "/digital-marketing" },
        { text: "Search Engine Optimization (SEO)", link: "/search-engine-optimization" },
        { text: "Social Media Marketing", link: "/social-media-marketing" },
        { text: "Email Marketing", link: "/email-marketing" },
        { text: "Google Ads", link: "/google-ads" },
        { text: "Meta Ads", link: "/meta-ads" },
      ],
    },
  ];
function SeoDetails() {
	 return (
		<div className="section aximo-section-padding2">
		  <div className="container">
			<div className="aximo-service-details-wrap">
			  <div className="aximo-service-details-thumb">
				<img src={SingleImg} alt="Web Development" />
			  </div>
			  <div className="row">
				<div className="col-lg-12">
				  <div className="aximo-default-content">
					<h2>
					  <span className="aximo-title-animation">
					  Search Engine Optimization (SEO) – Rank Higher and Increase Organic Traffic
						{/* <span className="aximo-title-icon">
						  <img src={Star2Img} alt="star" />
						</span> */}
					  </span>
					</h2>
					<p>
					If your business isn’t ranking on the first page of Google, you’re missing out on valuable customers. Our SEO services in Ahmedabad are designed to improve your website’s visibility and drive organic traffic. We implement on-page, off-page, and technical SEO strategies to ensure your website ranks higher for relevant keywords. From keyword research and content optimization to backlink building and website audits, we cover every aspect of SEO to help you dominate search results.
					</p>
					<p>
					As a trusted SEO company in Ahmedabad, we understand that search engine algorithms constantly evolve. That’s why we stay ahead of the curve with the latest SEO techniques, ensuring your website maintains high rankings. Our team optimizes meta tags, page speed, mobile responsiveness, and content structure to improve user experience and increase conversions. Whether you need local SEO, eCommerce SEO, or enterprise SEO, we craft tailored strategies to meet your business needs.
					</p>
					<p>
					SEO is a long-term investment that delivers sustainable growth. With our data-driven SEO strategies, businesses see consistent improvements in organic traffic, brand credibility, and search engine rankings. Our goal is to help you stay ahead of competitors and establish a strong digital footprint that attracts high-quality leads and customers.
					</p>
				  </div>
				</div>
			  </div>
	{/* Services List Section */}
	<div className="container pt-5">
	  {services && services.length > 0 ? (
		services.map((service, index) => (
		  <div key={index}>
			<div className="aximo-section-title main center">
			  <h2 className="mb-3 subtitle-heading">
				<span className="aximo-title-animation">
				  {service.title}
				  <span className="aximo-title-icon">
					<img className="shape-color" src={Star2Img} alt="Star2Img" />
				  </span>
				</span>
			  </h2>
			</div>
	
			{/* Loop through items directly */}
			<div className="row">
			  {service.items.map((item, itemIndex) => (
				<div key={itemIndex} className="col-12 col-md-6">
				  <ul className="list-unstyled custom-list">
					<li>
					  <a href={item.link} rel="noopener noreferrer">
						{item.text}
					  </a>
					</li>
				  </ul>
				</div>
			  ))}
			</div>
		  </div>
		))
	  ) : (
		<p>No services available</p>
	  )}
	</div>
	
	
			</div>
		  </div>
		</div>
	  );
	}
	
export default SeoDetails;
