import React from 'react';
import BlogHeroBanner from "../common/BlogHeroBanner";

function BlogDetailsPage({ title, breadcrumbs }) {

  return (
    <div className='blog-details-page'>
      {/* Hero Banner */}
      <BlogHeroBanner title={title} breadcrumbs={breadcrumbs} padding="120px 0" />





      {/* Blog Content */}
      <div className="container" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
        <h1>{title}</h1>
        <p>This is the content of the blog post.</p>
        {/* Add more blog content here */}
      </div>
    </div>
  );
}

export default BlogDetailsPage;