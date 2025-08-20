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
							<span className="aximo-title-icon">
								<img className="shape-color" src={Star2Img} alt="star" />
							</span>
						</span>
					digital innovation partner to propel your brand.
					</h2>
					<p>
					Welcome to Chameleo GFX Studio. We are your premium destination for unparalleled IT solutions. Graphic Design, Web Development & Digital Marketing Company in Ahmedabad, Gujarat, India. We are an ideal partner to help you realize your vision for your website. We are dedicated to quality and have an intense passion for creativity. We have carefully designed our complete array of services to take your brand to the next level in the digital space, where it will stand out and flourish in today’s cutthroat market. Our constant commitment to staying on the cutting edge of technological advancements guarantees that your online presence will continue to be powerful and relevant, helping your company’s success and long-term growth
					</p>
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
