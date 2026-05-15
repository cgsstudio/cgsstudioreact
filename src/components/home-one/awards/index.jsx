import React from "react";
import "./award.css";
import { SiTrustpilot } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import goodfirmLogo from "../../../assets/images/v1/Goodfirm.jpg";

const DesignRushIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 12l4 4 6-6 6 6 4-4-10-10z" fill="#00a1ff" />
    <path d="M12 8L6 14l4 4 2-2 2 2 4-4-6-6z" fill="#0055ff" />
  </svg>
);

const awardsData = [
  {
    id: 1,
    title: "Trustpilot",
    icon: <SiTrustpilot style={{ color: '#00b67a', fontSize: '24px' }} />,
    stars: "★★★★★",
    rating: "Rated 5",
    link: "https://www.trustpilot.com/review/chameleogfxstudio.com"
  },
  {
    id: 2,
    title: "GoodFirms",
    icon: <img src={goodfirmLogo} alt="GoodFirms" style={{ height: '24px', objectFit: 'contain' }} />,
    stars: "★★★★★",
    rating: "Leading Tech B2B",
    link: "https://www.goodfirms.co/company/chameleo-gfx-studio"
  },
  {
    id: 3,
    title: "Google Reviews",
    icon: <FcGoogle style={{ fontSize: '24px' }} />,
    stars: "★★★★",
    rating: "Verifiable Feedback",
    link: "https://g.page/r/CeTVJ5LvBhuzEAE/review"
  },
  {
    id: 4,
    title: "DesignRush",
    icon: <DesignRushIcon />,
    stars: "★★★★★",
    rating: "Top 1% of Agencies",
    link: "https://www.designrush.com/agency/profile/chameleo-gfx-studio"
  }
];

function AwardsSection() {
  return (
    <section className="awards-section-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center pb-5">
            <div className="awards-title-wrapper">
              <h2 className="awards-title-pill text-uppercase" style={{ textTransform: 'uppercase' }}>
                <span className="awards-title-dot"></span>
                Trusted by fast-growing brands across India
              </h2>
            </div>
          </div>
        </div>

        <div className="awards-grid">
          {awardsData.map((award) => (
            <a
              key={award.id}
              href={award.link}
              className="award-card-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="award-card-content">
                <div className="award-header">
                  <span className="award-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {award.icon}
                    {award.title}
                  </span>
                  <span className="award-stars" style={{ color: 'red', fontSize: '18px', letterSpacing: '2px' }}>{award.stars}</span>
                </div>
                <div className="award-rating" style={{ color: '#888' }}>
                  {award.rating}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AwardsSection;
