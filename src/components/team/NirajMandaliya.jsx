// NirajMandaliya.jsx
import Team1Img from "../../assets/images/team/team1.png";
import Star2Img from "../../assets/images/v1/star2.png";
import { Helmet } from 'react-helmet-async';

function NirajMandaliya() {
  return (
    <div>
      <Helmet>
        <title>Niraj Mandaliya - Co-Founder & CEO | Chameleo GFX Studio</title>
        <meta name="description" content="Niraj Mandaliya is an Entrepreneur and the Co-Founder & CEO of Chameleo GFX Studio, a dynamic leader shaping the future of design, technology, UI/UX, and high-impact digital solutions." />
        <link rel="canonical" href="https://chameleogfxstudio.com/niraj-mandaliya" />
        <script type="application/ld+json">
          {JSON.stringify({
             "@context": "https://schema.org",
             "@type": "Person",
             "name": "Niraj Mandaliya",
             "jobTitle": "Co-Founder & CEO",
             "image": "https://chameleogfxstudio.com/assets/team1-B7vTv1YE.png",
             "url": "https://chameleogfxstudio.com/niraj-mandaliya",
             "worksFor": {
               "@type": "Organization",
               "name": "Chameleo GFX Studio",
               "url": "https://chameleogfxstudio.com/"
             },
             "sameAs": [
               "https://www.linkedin.com/in/niraj-mandaliya"
             ],
             "description": "Niraj Mandaliya is an Entrepreneur and the Co-Founder & CEO of Chameleo GFX Studio, a dynamic leader shaping the future of design, technology, UI/UX, and high-impact digital solutions."
           })}</script>
      </Helmet>
      <div className="section aximo-section-padding2 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="aximo-team-details-thumb">
                <img src={Team1Img} alt="Niraj Mandaliya" />
              </div>
            </div>
            <div className="col-lg-7 d-flex align-items-center">
              <div className="aximo-default-content m-left-gap">
                <h2 class="mb-3">
                  <span className="aximo-title-animation">
                    Niraj Mandaliya
                    <span className="aximo-title-icon">
                      <img src={Star2Img} alt="Star" />
                    </span>
                  </span>
                </h2>
                
                <div className="aximo-social-icon aximo-btn-wrap d-flex justify-center items-center mb-2 mt-0 teamcontent-main">
                  <p className="m-0"><strong>Co-Founder & CEO</strong>   |</p>
                  
                  <ul>
                    <li>
                      <a href="https://www.linkedin.com/in/nirajmandaliya/" target="_blank">
                        <i className="icon-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <p>
                
                </p>
                <p>
                As Co-Founder & CEO, Niraj focuses on high-level decision-making, business expansion, and brand building. With extensive experience in graphics, cutting-edge technology, and UI/UX innovation, he has successfully worked across various industries, including technology, eCommerce, healthcare, real estate, fashion, and finance, gaining deep insights into market trends, consumer behavior, and digital transformation. His expertise has positioned Chameleo GFX Studio as a trusted partner for businesses seeking a powerful digital presence.
                </p>
                <p>
                He fosters a culture of creativity and innovation, mentoring his team, enhancing sales strategies, and delivering high-quality, result-driven solutions tailored to industry-specific needs. His leadership is rooted in collaboration, excellence, and strategic execution.
                </p>
                <p>
                With a vision for global brand success, Niraj continues to lead Chameleo GFX Studio, setting new benchmarks in branding, design, UI/UX technology, and digital innovation to help businesses thrive in the 
    evolving digital era.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NirajMandaliya;
