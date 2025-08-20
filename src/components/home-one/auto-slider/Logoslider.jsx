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
   partner1,
   partner2,
   partner3,
   partner4,
   partner5,
   partner6,
   partner7,
   partner8,
   partner9,
   partner10,
   partner11,
   partner12,
   partner13,
   partner14,
   partner15,
   partner16,
   partner17

   ];
  

  return (
    <>
    <div className="container">
      <div className="aximo-section-title">
        <div className="row">
          <div className="col-xl-12">
            <h2 className="text-center">Trusted by Leading Brands</h2>
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
              <img src={logo} alt={`Logo ${index + 1}`} className="logo-image" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
    
  );
};

export default LogoSlider;
