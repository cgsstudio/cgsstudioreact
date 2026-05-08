import React from "react";
import "./award.css";

const awardsData = [
  {
    id: 1,
    title: "Trustpilot",
    stars: "★★★★★",
    rating: "Rated 4.8 / 5 | 1000+ Reviews",
    link: "https://www.trustpilot.com/review/chameleogfxstudio.com"
  },
  {
    id: 2,
    title: "GoodFirms",
    stars: "★★★★",
    rating: "Leading Tech B2B | 4.9/5 Rating",
    link: "https://www.goodfirms.co/company/chameleo-gfx-studio"
  },
  {
    id: 3,
    title: "Google Reviews",
    stars: "★★★★",
    rating: "4.7 / 5 | Verifiable Feedback",
    link: "https://g.page/r/CeTVJ5LvBhuzEAE/review"
  },
  {
    id: 4,
    title: "DesignRush",
    stars: "★★★★★",
    rating: "Top 1% of Agencies | 4.9/5",
    link: "https://www.designrush.com/agency/profile/chameleo-gfx-studio"
  }
];

function AwardsSection() {
  return (
    <section className="awards-section-wrapper">
      {/* Sparkle Icon from Reference */}


      <div className="container">
        <div className="row">
          <div className="col-12 text-center pb-5">
            <div className="awards-title-wrapper">
              <p className="awards-title-pill">
                <span className="awards-title-dot"></span>
                Trusted by fast-growing brands across India
              </p>
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
                  <span className="award-title">{award.title}</span>
                  <span className="award-stars">{award.stars}</span>
                </div>
                <div className="award-rating">
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
