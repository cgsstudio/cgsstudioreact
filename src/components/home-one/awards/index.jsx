import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Award1 from "../../../assets/images/Certifications/Frame-3.webp";
import Award2 from "../../../assets/images/Certifications/Frame-4.webp";
import Award3 from "../../../assets/images/Certifications/chamaleogfxstudio.png";
import Award4 from "../../../assets/images/Certifications/review-google.png";

const awardsData = [
    {
        id: 1,
        title: "Top IT Company in 2025",
        img: Award3,
        bg: "#fff5f5", // Pinkish
        border: "#f1b8b8ff"
    },
    {
        id: 2,
        title: "Highly Recommended Software Company in 2025",
        img: Award1,
        bg: "#fffcf5", // Cream/Yellowish
        border: "#f0e1baff"
    },
    {
        id: 3,
        title: "Top Mobile App Development Companies in 2024",
        img: Award2,
        bg: "#f0fff4", // Light green
        border: "#c3f3e9ff"
    },
    {
        id: 4,
        title: "Top Web Development Companies in 2024",
        img: Award4,
        bg: "#e0f7fa", // Light cyan
        border: "#a9daf3ff"
    },
    // Infinite loop duplicates
    {
        id: 5,
        title: "Top IT Company in 2025",
        img: Award3,
        bg: "#fff5f5",
        border: "#f3c9c9ff"
    },
];

const swiperSettings = {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    speed: 3000,
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
    },
    modules: [Autoplay],
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 50
        },
        1600: {
            slidesPerView: 4,
            spaceBetween: 60
        }
    },
};

function AwardsSection() {
    return (
        <div className="section py-5">
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Column: Text */}
                    <div className="col-lg-3 mb-4 mb-lg-0">
                        <div className="aximo-section-title text-start">
                            <h3 className="fw-bold mb-3">Our Awards & Recognization</h3>
                            <p className="text-muted">
                                Celebrating Excellence: A Legacy of Awards and Recognitions
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Slider */}
                    <div className="col-lg-8">
                        <Swiper {...swiperSettings} className="awards-swiper p-2">
                            {awardsData.map((award) => (
                                <SwiperSlide key={award.id} style={{ height: "auto" }}>
                                    <div
                                        className="award-card text-center rounded-4  d-flex flex-column align-items-center justify-content-center p-4 award-card-square"
                                        style={{
                                            backgroundColor: award.bg,
                                            border: `1px solid ${award.border}`,
                                        }}
                                    >
                                        <div className="mb-4 d-flex align-items-center justify-content-center bg-white rounded-3 award-img-container">
                                            <img
                                                src={award.img}
                                                alt={award.title}
                                                className="img-fluid w-100 p-5 object-fit-contain"
                                            />
                                        </div>
                                        <p className="fw-bold text-dark mb-0 lh-sm px-2" style={{ fontSize: "0.85rem" }}>
                                            {award.title}
                                        </p>
                                    </div>
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
