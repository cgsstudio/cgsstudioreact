import Star2Img from "../../../assets/images/v1/star2.png";
import Thumb1Img from "../../../assets/images/v1/t_thumb1.png";
import Thumb2Img from "../../../assets/images/v1/t_thumb2.png";
import Thumb3Img from "../../../assets/images/v1/t_thumb3.png";
import Thumb4Img from "../../../assets/images/v1/t_thumb4.png";
import TestimonialSlider from "./TestimonialSlider";

const testimonialsData = [
	{
		id: crypto.randomUUID(),
		rating: 5,
		title: "Super customer service!",
		description:
			"Excellent from start to finish! Niraj is very knowledgeable. He was able to figure out exactly what I and my business needed from start to finish. Niraj built my webpage from scratch with all the plug-ins, add-ons etc. He then helped me maintain and promote my website. He's a one stop shop for all your digital needs. Recommend him highly!!",
		author: "Philip Smith",
		designation: "Founder@XYZ",
		img: Thumb1Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 4,
		title: "Exceptional creativity and vision",
		description:
			"I couldn't be happier with the results we got from working with CGS Team. The team was awesome and super easy to work with! They helped build our website and do our SEO. We have seen a significant increase in inquiries and enrolments. They provided regular updates and were always available to answer any questions we had. Thank you CGS Team for your exceptional work in helping our business grow! ",
		author: "Matthew Misner",
		designation: "Businessman",
		img: Thumb2Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		title: "Innovative and professional",
		description:
			"Absolutely fantastic to work with Niraj and his team. Not only do they actively listen to my needs, but they were able to put a solution together for me, and able to exceed my expectations. Seeing thier portfolio of clients they worked with in the past and seeing how they attentive and critical on all details allowed me to have full trust. They were also flexible with payment options which was important for me. 5 stars I would highly recommend!",
		author: "Brody Shelton",
		designation: "Milano Joe",
		img: Thumb3Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 4,
		title: "Transformed our brand",
		description:
			"Chameleo GFX Studio did an amazing job for me. They designed my logo, business cards, promotion coupon, and built a website for me. I had no idea what I wanted, I just told Niraj make it look professional and that's exactly what he did. I would definitely recommend CGS Team to anyone looking for quality and professional work. Nothing but the best! ",
		author: "Brooke Fullerton",
		designation: "Marketing Director",
		img: Thumb4Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 4,
		title: "Transformed our brand",
		description:
			"CGS is a fanstastic company. They are reliable and offer outstanding quality. I really enjoy dealing with Niraj and would recommend them to anyone who is looking to step up their adverstising game and website design. ",
		author: "Georgiana Anderson",
		designation: "Marketing Director",
		img: Thumb4Img,
	},
];

function Testimonial() {
  return (
    <div className="section">
      <div className="container">
        <div className="aximo-section-title center">
          <h2>
            What Clients Say Us
            <span className="aximo-title-animation">
              <span className="aximo-title-icon">
                <img src={Star2Img} alt="Star2Img" />
              </span>
            </span>
          </h2>
        </div>
        <div className="testimonial-swiper swiper-container">
          <div className="swiper-wrapper">
            {testimonialsData.map((testimonial) => (
              <div className="swiper-slide" key={testimonial.id}>
                <TestimonialSlider testimonial={testimonial} />
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
