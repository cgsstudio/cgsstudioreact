import HeroThumbImg from "../../../assets/images/v1/hero-thumb.png";
function HeroThumbs() {
	return (
		<div className="aximo-hero-thumb jos" data-jos_animation="fade-right">
			<img src={HeroThumbImg} alt="Hero thumb"  rel="preload" fetchpriority="high" decoding="async" />
		</div>
	);
}

export default HeroThumbs;
