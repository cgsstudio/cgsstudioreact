import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import BlogDetails from "./BlogDetails";
import PostTags from "./PostTags";
import RecentPosts from "../RecentPosts";
import Search from "../Search";
import { BlogData } from "../BlogData";
import { Helmet } from "react-helmet-async";

function SingleBlog() {
  const { slug } = useParams(); // Get the 'slug' from the URL

  // Find the blog post that matches the 'slug' from the URL
  const blog = BlogData.find((blog) => blog.slug === slug);

  if (!blog) {
    // Return null to allow the router to trigger the 404 route
    return null;
  }

  return (
    <div className="section post-details-page aximo-section-padding2 bg-white-smoke">
      <Helmet>
        <title>{blog.seot}</title>
        <meta name="description" content={blog.seod} />
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
