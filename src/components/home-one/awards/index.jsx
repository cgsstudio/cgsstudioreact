import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Award1 from "../../../assets/images/Certifications/top-web-design-companies.svg";
import Award2 from "../../../assets/images/Certifications/Trustpilot-Badge.webp";
import Award3 from "../../../assets/images/Certifications/chamaleogfxstudio.png";
import Award4 from "../../../assets/images/Certifications/review-google.png";
import Award5 from "../../../assets/images/Certifications/designrush-new-logo.png";
import "./award.css";

const baseAwards = [
  { id: 1, title: "Top IT Company in 2025", img: Award3, link: "https://clutch.co/profile/chameleo-gfx-studio", bg: "#fff5f5", border: "#f1b8b8ff" },
  { id: 2, title: "Highly Recommended Software Company in 2025", img: Award1, link: "https://www.goodfirms.co/company/chameleo-gfx-studio", bg: "#fffcf5", border: "#f0e1baff" },
  { id: 3, title: "Top Mobile App Development Companies in 2024", img: Award2, link: "https://www.trustpilot.com/review/chameleogfxstudio.com", bg: "#f0fff4", border: "#c3f3e9ff" },
  { id: 4, title: "Top Web Development Companies in 2024", img: Award4, link: "https://g.page/r/CeTVJ5LvBhuzEAE/review", bg: "#e0f7fa", border: "#a9daf3ff" },
  { id: 4, title: "DesignRus", img: Award5, link: "https://www.designrush.com/agency/profile/chameleo-gfx-studio", bg: "#fffcf5", border: "#f0e1baff" },
];

const breakpoints = {
  576: { slidesPerView: 2, spaceBetween: 24 },
  768: { slidesPerView: 3, spaceBetween: 28 },
  1200: { slidesPerView: 4, spaceBetween: 24 },
};

function AwardsSection() {
  // compute max slidesPerView from breakpoints (fallback 1)
  const maxSlidesPerView = useMemo(() => {
    const values = Object.values(breakpoints)
      .map((b) => (b && b.slidesPerView) || 1);
    return Math.max(1, ...values);
  }, []);

  // ensure we have at least (maxSlidesPerView + 1) slides for proper looping
  const slidesForSwiper = useMemo(() => {
    const minNeeded = maxSlidesPerView + 1; // +1 helps loop properly
    if (baseAwards.length >= minNeeded) return baseAwards;

    // clone until we have enough (make unique ids for React keys)
    let out = [...baseAwards];
    let dupIndex = 0;
    while (out.length < minNeeded) {
      const clones = baseAwards.map((s) => ({
        ...s,
        id: `${s.id}-dup-${dupIndex++}-${out.length}`, // unique id
      }));
      out = out.concat(clones);
      // guard: avoid infinite loop (should not happen)
      if (dupIndex > 10) break;
    }
    return out;
  }, [maxSlidesPerView]);

 const swiperSettings = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 2500, // long smooth continuous movement
    autoplay: {
        delay: 0, // super important
        disableOnInteraction: false,
    },
    modules: [Autoplay],
    breakpoints: {
        576: { slidesPerView: 2, spaceBetween: 24 },
        768: { slidesPerView: 3, spaceBetween: 28 },
        1200: { slidesPerView: 4, spaceBetween: 24 }
    },
};


  return (
    <div className="section py-5">
      <div className="container">
        <div className="row align-items-center gy-4">
          <div className="col-lg-3">
            <h3 className="fw-bold mb-3">Our Awards & Recognition</h3>
            <p className="text-muted">Celebrating Excellence: A Legacy of Awards and Recognitions</p>
          </div>

          <div className="col-lg-9">
            <Swiper {...swiperSettings} className="awards-swiper">
              {slidesForSwiper.map((award) => (
                <SwiperSlide key={award.id}>
                  <a
                    href={award.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", display: "block", height: "100%" }}
                  >
                    <div
                      className="award-card rounded-4 text-center d-flex flex-column justify-content-center align-items-center"
                      style={{
                        backgroundColor: award.bg,
                        border: `1px solid ${award.border}`,
                        padding: "18px",
                        minHeight: 150,
                        cursor: "pointer",
                        height: "100%",
                      }}
                    >
                      <div
                        className="rounded-3 d-flex justify-content-center align-items-center"
                        style={{ width: "100%", height: "100px", overflow: "hidden" }}
                      >
                        <img
                          src={award.img}
                          alt={award.title}
                          className="img-fluid"
                          style={{ objectFit: "contain", maxHeight: "100%" }}
                        />
                      </div>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AwardsSection;
