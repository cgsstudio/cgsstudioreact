import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet } from "react-helmet";  // Importing Helmet
import PostMeta from "./PostMeta";
import PostTags from "./PostTags";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

function BlogDetails({ blog }) {
  // Assuming `blog.slug` is available and represents the unique identifier for the blog
  const canonicalUrl = `https://chameleogfxstudio.com/blog/${blog.slug}`; // Replace with your actual blog base URL

  return (
    <>
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <div className="post-thumbnail">
        <LazyLoadImage
          src={blog.img}
          
          alt={blog.alt || blog.title}
          effect="blur"
        />
      </div>

      <div className="single-post-content-wrap">
        <PostMeta date={blog.date} />
        <div className="entry-content">
          <h1 className="blog-h1 mb-3">{blog.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: blog.fullContent }} />
          <PostTags />
        </div>
        {/* <CommentForm /> */}
        {/* <CommentList /> */}
      </div>
    </>
  );
}

export default BlogDetails;
