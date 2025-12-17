// LogoSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import './Carousel.css'
import partner1 from '../../../assets/images/logo/partner-1.png'
import partner2 from '../../../assets/images/logo/partner-2.png'
import partner3 from '../../../assets/images/logo/partner-3.png'
import partner4 from '../../../assets/images/logo/partner-4.png'
import partner5 from '../../../assets/images/logo/partner-5.png'
import partner6 from '../../../assets/images/logo/partner-6.png'
import partner7 from '../../../assets/images/logo/partner-7.png'
import partner8 from '../../../assets/images/logo/partner-8.png'
import partner9 from '../../../assets/images/logo/partner-9.png'
import partner10 from '../../../assets/images/logo/partner-10.png'
import partner11 from '../../../assets/images/logo/partner-11.png'
import partner12 from '../../../assets/images/logo/partner-12.png'
import partner13 from '../../../assets/images/logo/partner-13.png'
import partner14 from '../../../assets/images/logo/partner-14.png'
import partner15 from '../../../assets/images/logo/partner-15.png'
import partner16 from '../../../assets/images/logo/partner-16.png'
import partner17 from '../../../assets/images/logo/Cybervantage-logo.webp'


const LogoSlider = () => {
  const logos = [
    { img: partner1, link: 'https://activeauto.me/' },
    { img: partner2, link: 'https://straticamedical.ca/' },
    { img: partner3, link: 'https://brysa.co.uk/' },
    { img: partner4, link: 'https://cancerkidssos.org/' },
    { img: partner5, link: 'https://islandspacefl.org/' },
    { img: partner6, link: 'https://jagatjit.com/' },
    { img: partner7, link: 'https://www.leconenergetics.com/' },
    { img: partner8, link: 'https://supremeautomobiledrc.com/' },
    { img: partner9, link: 'https://siddhrajdevelopers.com/' },
    { img: partner10, link: 'https://www.bidx.io/en/' },
    { img: partner11, link: 'https://24events.ng/' },
    { img: partner12, link: 'https://fireflies.pro/' },
    { img: partner13, link: 'https://www.hocco.in/' },
    { img: partner14, link: 'https://mrsprinkle.co.uk/' },
    { img: partner15, link: 'https://abscholify.com/' },
    { img: partner16, link: 'https://kaysonlaw.co.uk/' },
    { img: partner17, link: 'https://cybervantage.ai/' },
  ];


  return (
    <>
      <section className="bg-black">
        <div className="container">
          <div className="aximo-section-title py-5">
            <div className="row">
              <div className="col-xl-12">
                <h2 className="text-center text-whitesmoke ">Trusted by Leading Brands</h2>
              </div>
            </div>

          </div>
        </div>
        <div className="logo-slider-container">
          <Swiper
            spaceBetween={20}
            loop={true}
            speed={3500} // Total duration of one slide transition
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
            }}
            navigation={false}
            modules={[Autoplay]}
            breakpoints={{

              1024: {
                slidesPerView: 7,
                spaceBetween: 20,
              },

              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },

              0: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
            }}
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="logo-slide bg-white">
                  <a href={logo.link} target="_blank" rel="noopener noreferrer">
                    <img src={logo.img} alt={`Logo ${index + 1}`} className="logo-image" />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </section>

    </>

  );
};

export default LogoSlider;
