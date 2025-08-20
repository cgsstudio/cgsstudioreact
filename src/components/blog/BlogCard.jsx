import React from "react";
import { Link } from "react-router-dom";
import ArrowRight from "../../assets/images/icon/arrow-right.svg";

function BlogCard({ blog: { title, category, content, date, img, slug } }) {
  return (
    <div className="single-post-item">
      <div className="post-thumbnail">
        <img src={img} alt={title} />
      </div>
      <div className="post-content">
        <div className="post-meta">
          <div className="post-category">
            <Link to="/">{category}</Link>
          </div>
          <div className="post-date">{date}</div>
        </div>
        <Link to={`/blog/${slug}`}>
          <h3 className="entry-id">{title}</h3>
        </Link>
        <p>{content}...</p>
        <Link className="post-read-more" to={`/blog/${slug}`}>
          read more <img src={ArrowRight} alt="Arrow Right" />
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
