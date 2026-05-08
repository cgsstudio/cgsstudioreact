import Star3Img from "../../../assets/images/v1/star3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

const sliderData = [
	{
		id: crypto.randomUUID(),
		title: "Logo Design",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Branding Design",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Promotion Design",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Graphic Design",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Web Design & Development",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "SEO",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Logo Design",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Branding Design",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Promotion Design",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Graphic Design",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Web Design & Development",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "SEO",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Logo Design",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Branding Design",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Promotion Design",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Graphic Design",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Web Design & Development",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "SEO",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Google Ads",
		img: Star3Img,
	},
	
];

const swiperSettings = {
	centeredSlides: true,
	speed: 5000,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
	},
	loop: true,
	slidesPerView: "auto",
	allowTouchMove: false,
	freeMode: true,
	modules: [Autoplay, FreeMode],
};

function AutoSlider() {
	return (
		<div className="aximo-auto-slider-section">
			<div className="swiper aximo-auto-slider">
				{
					<Swiper {...swiperSettings}>
						{sliderData.map((item) => (
							<SwiperSlide key={item.id}>
								<div className="aximo-auto-slider-item">
									<h3>{item.title}</h3>
									<img src={item.img} alt={item.title} />
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				}
			</div>
		</div>
	);
}

export default AutoSlider;
