import Star2Img from "../../../assets/images/v1/star2.png";
import StoryContent from "./StoryContent";
import StoryPhotos from "./StoryPhotos";
function Story() {
	return (
		<div className="section">
			<div className="container">
				<div className="aximo-section-title center title-description">
					<h2>
						<span className="aximo-title-animation">
						We are your trusted 
							<span className="aximo-title-icon about-star-icon">
								<img className="shape-color" src={Star2Img} alt="star" />
							</span>
						</span><br/>
					 digital innovation partner to propel your brand.
					</h2>
					<p>
					Welcome to Chameleo GFX Studio – where creativity meets technology. We are your trusted partner for Graphic Design, Web Development, and Digital Marketing in Ahmedabad, Gujarat, India. Our mission is simple: to bring your ideas to life and help your brand shine online.
					</p>
					<p>We believe every business has a unique story, and we’re here to tell yours in the most creative and powerful way. With a strong focus on quality, passion, and innovation, we design solutions that not only look amazing but also make a real difference.</p>
					<p>From building beautiful websites to creating eye-catching designs and running smart digital campaigns, we’ve carefully crafted our services to help your brand stand out, connect with people, and grow in today’s fast-changing world.</p>
					<p>At Chameleo GFX Studio, we never stop learning and improving. By staying ahead with the latest technology, we make sure your online presence stays strong, relevant, and ready for the future. Together, let’s take your business to the next level and create something truly unforgettable</p>
				</div>

				{/* <div className="row">
					<StoryPhotos />
				</div> */}

				<div className="aximo-story-content">
					<StoryContent />
				</div>
				
			</div>
		</div>
	);
}

export default Story;
