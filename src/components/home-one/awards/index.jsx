import React from "react";
import "./award.css";

const awardsData = [
  {
    id: 1,
    title: "Trustpilot",
    stars: "★★★★★",
    link: "https://www.trustpilot.com/review/chameleogfxstudio.com"
  },
  {
    id: 2,
    title: "GoodFirms",
    link: "https://www.goodfirms.co/company/chameleo-gfx-studio"
  },
  {
    id: 3,
    title: "Google Reviews",
    link: "https://g.page/r/CeTVJ5LvBhuzEAE/review"
  },
  {
    id: 4,
    title: "DesignRush",
    link: "https://www.designrush.com/agency/profile/chameleo-gfx-studio"
  }
];

function AwardsSection() {
  return (
    <section className="awards-section-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Reference Title Styling */}
            <p className="awards-title-small">
              Trusted by fast-growing brands across India
            </p>
          </div>
        </div>

        {/* Logos Container with Reference Styling */}
        <div className="awards-logos-container">
          {awardsData.map((award) => (
            <a 
              key={award.id}
              href={award.link}
              className="award-logo-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="award-logo-text">
                {award.title}
                {award.stars && (
                  <span className="award-stars ml-2"> {award.stars}</span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AwardsSection;
