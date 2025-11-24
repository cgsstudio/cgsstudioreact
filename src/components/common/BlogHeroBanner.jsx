import React from 'react';
import { Link } from 'react-router-dom';

function BlogHeroBanner({ title, breadcrumbs }) {
  return (
    <div className="aximo-breadcrumb blog-hero-banner pt-5 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="aximo-breadcrumb-content text-center">
              <h1 className="aximo-breadcrumb-title">{title}</h1>
              <nav className="breadcrumbs">
                <ul>
                  {breadcrumbs.map((crumb, index) => (
                    <li key={index}>{crumb.link ? <Link to={crumb.link}>{crumb.label}</Link> : crumb.label}</li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogHeroBanner;