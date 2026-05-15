import Star2Img from "../../../assets/images/v1/star2.png";
import StoryContent from "./StoryContent";
import StoryPhotos from "./StoryPhotos";
function Story() {
	return (
		<div className="section bg-white-smoke pt-5 pt-md-0">
			<div className="container">
				<div className="aximo-section-title center title-description ">
					<h1 className="about-title pb-3" style={{ fontSize: '3rem' }}>
						<span className="aximo-title-animation">
							We are your trusted

						</span><br />
						Digital Marketing & Web Development Agency in Ahmedabad
					</h1>
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
