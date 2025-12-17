import HeroThumbImg from "../../../assets/images/v1/hero-thumb.png";

function HeroThumbs() {
	return (
		<div
			className="aximo-hero-thumb jos text-center text-md-start"
			data-jos_animation="fade-right"
		>
			<img
				src={HeroThumbImg}
				alt="Hero thumb"
				rel="preload"
				fetchpriority="high"
				decoding="async"
				className="img-fluid"
			/>
		</div>
	);
}

export default HeroThumbs;
