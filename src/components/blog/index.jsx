import React, { useState } from "react";
import BlogCard from "./BlogCard";
import Categories from "./Categories";
import RecentPosts from "./RecentPosts";
import Search from "./Search";
import { BlogData } from "./BlogData";
import Navigation from "./Navigation";

function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Reverse the BlogData array
  const reversedBlogData = [...BlogData].reverse(); // Using spread operator to avoid mutating original array

  // Filter blogs based on selected category
  const filteredBlogs = selectedCategory
    ? reversedBlogData.filter((blog) => blog.category === selectedCategory)
    : reversedBlogData;

  // Calculate the index range for blogs to be displayed on the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

  // Slice the blog data based on the page
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to the first page when category changes
  };

  return (
    <div className="section aximo-section-padding2">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {currentBlogs.length > 0 ? (
              currentBlogs.map((blog) => (
                <BlogCard key={blog.slug} blog={blog} />
              ))
            ) : (
              <p>No blogs found in this category.</p>
            )}
            <Navigation
              currentPage={currentPage}
              totalBlogs={filteredBlogs.length}
              blogsPerPage={blogsPerPage}
              onPageChange={handlePageChange}
            />
          </div>
          <div className="col-lg-4">
            <div className="right-sidebar">
              <Search />
              <Categories
                categories={[...new Set(BlogData.map((blog) => blog.category))]}
                onCategorySelect={handleCategorySelect}
              />
              <RecentPosts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
