import SingleImg from "../../assets/images/service/Social_01.png";
import Single2Img from "../../assets/images/service/Social_02.png";
import Star2Img from "../../assets/images/v1/star2.png";


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
  
function SocialMediaDetails() {
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
					  Social Media Marketing – Engage, Influence, and Convert Your Audience
						{/* <span className="aximo-title-icon">
						  <img src={Star2Img} alt="star" />
						</span> */}
					  </span>
					</h2>
					<p>
					Social media is more than just posting content—it's about building relationships, driving engagement, and converting followers into loyal customers. At Chameleo GFX Studio, our social media marketing services in Ahmedabad help brands establish a strong presence on platforms like Facebook, Instagram, LinkedIn, and Twitter. We create customized social media strategies that align with your brand identity and business goals, ensuring that every post, ad, and campaign delivers results.
					</p>
					<p>
					Our team focuses on content creation, audience engagement, and performance tracking to maximize reach and impact. Whether you need organic growth strategies, paid advertising, or influencer collaborations, we tailor campaigns that drive brand awareness and customer interaction. Our expert social media marketers in Ahmedabad use creative visuals, compelling copy, and data-driven insights to craft campaigns that capture attention and drive action.
					</p>
					<p>
					With the right social media strategy, businesses can increase brand loyalty, improve customer engagement, and boost sales. We continuously analyze campaign performance, adjust targeting strategies, and optimize content to ensure you get the best results from your social media efforts. Let us help you turn likes and shares into meaningful business growth.
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
				<div key={itemIndex} className="col-12 col-md-4">
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
	
export default SocialMediaDetails;
