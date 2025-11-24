import React from 'react';
import { Link } from 'react-router-dom';

function NewBlogHero() {
  return (
    <div className="new-blog-hero-banner">
      <div className="container">
        <h1 className="new-blog-hero-title text-white">Blog</h1>
        <nav className="new-blog-breadcrumbs">
          <Link to="/">Home</Link> › <span>Blog</span>
        </nav>
      </div>
    </div>
  );
}

export default NewBlogHero;
