import React from 'react';
import BlogHeroBanner from "../common/BlogHeroBanner";
import Blog from "./index";

function BlogPage() {
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Blog' }
  ];
  const title = "Our Blog";

  return (
    <div className='blog-page'>
      <BlogHeroBanner title={title} breadcrumbs={breadcrumbs} padding="120px 0" />
      <Blog />

    </div>
  );
}

export default BlogPage;