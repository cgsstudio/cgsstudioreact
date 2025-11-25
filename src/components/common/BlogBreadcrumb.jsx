import { Link } from "react-router-dom";

function BreadCrumb({ title, title2 }) {
  return (
    <div className="aximo-breadcrumb">
      <div className="container">
        <h2 className="post__title">{title2}</h2>
        <nav className="breadcrumbs">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>{title}</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default BreadCrumb;
