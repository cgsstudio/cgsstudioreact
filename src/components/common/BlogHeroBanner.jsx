import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

function BlogHeroBanner({ title, breadcrumbs }) {
  return (
    <div className="aximo-breadcrumb blog-hero-banner pt-5 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="aximo-breadcrumb-content text-center">
              <h2 className="aximo-breadcrumb-title mb-3">{title}</h2>
              <nav className="breadcrumbs">
                <span>
                  {breadcrumbs.map((crumb, index) => (
                    <React.Fragment key={index}>
                      {crumb.link ? <Link to={crumb.link}>{crumb.label}</Link> : <span className="bread_crumb_link">{crumb.label}</span>}
                      {index < breadcrumbs.length - 1 && (
                        <span><ChevronRight color="#fdfde1" /></span>
                      )}
                    </React.Fragment>
                  ))}
                </span>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogHeroBanner;