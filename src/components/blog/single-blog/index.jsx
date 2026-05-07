import React from "react";
import { useParams, Navigate } from "react-router-dom";
import BlogDetails from "./BlogDetails";
import PostTags from "./PostTags";
import RecentPosts from "../RecentPosts";
import Search from "../Search";
import { BlogData } from "../BlogData";
import { Helmet } from "react-helmet-async";

function SingleBlog() {
  const { slug } = useParams(); // Get the 'slug' from the URL

  // Find the blog post that matches the 'slug' from the URL (handle trailing slashes)
  const normalizedSlug = slug.endsWith("/") ? slug.slice(0, -1) : slug;
  const blog = BlogData.find((blog) => blog.slug === normalizedSlug);

  if (!blog) {
    // Redirect to 404 page when blog slug is not found
    return <Navigate to="/404-not-found" replace />;
  }

  return (
    <div className="section post-details-page aximo-section-padding2 bg-white-smoke">
      <Helmet>
        <title>{blog.seot}</title>
        <meta name="description" content={blog.seod} />
        <link rel="canonical" href={`https://chameleogfxstudio.com/blog/${slug}/`} />
        <meta name="keywords" content={blog.keywords.join(", ")} />
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <BlogDetails blog={blog} />
          </div>
          <div className="col-lg-4">
            <div className="right-sidebar tag_sidebar">
              <PostTags tags={blog.keywords} />
              {/* <Search />
              <RecentPosts /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
