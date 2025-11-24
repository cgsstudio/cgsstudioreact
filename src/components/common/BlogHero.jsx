import { Link } from "react-router-dom";

function BlogHero({ title }) {
  return (
    <div className="aximo-breadcrumb blog-hero-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="aximo-breadcrumb-content text-center">
              <h1 className="aximo-breadcrumb-title text-white">{title}</h1>
              <nav className="breadcrumbs">
                <ul>
                  <li ><Link to="/">Home</Link></li>
                  <li>{title}</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogHero;
