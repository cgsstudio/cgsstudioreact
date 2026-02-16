import { Link } from "react-router-dom";
import { ChevronRight } from 'lucide-react';

function BlogHero({ title, breadcrumbTitle }) {
  // Removed background image usage to keep hero banner plain
  return (
    <div className="aximo-breadcrumb blog-hero-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="aximo-breadcrumb-content text-center">
              <h2 className="aximo-breadcrumb-title text-white mb-3">{title}</h2>
              <nav className="breadcrumbs">
                <span><Link to="/">Home</Link><span><ChevronRight color="#fdfde1" /></span><span className="bread_crumb_link">{breadcrumbTitle || title}</span></span>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogHero; 
