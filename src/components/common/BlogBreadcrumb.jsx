import { Link } from "react-router-dom";
import { ChevronRight } from 'lucide-react';

function BreadCrumb({ title, title2 }) {
  return (
    <div className="aximo-breadcrumb">
      <div className="container">
        <h2 className="post__title">{title2}</h2>
        <nav className="breadcrumbs">

          <span><Link to="/">Home</Link><span><ChevronRight color="#fdfde1" /></span><span className="bread_crumb_link">{title}</span></span>
        </nav>
      </div>
    </div>
  );
}

export default BreadCrumb;
