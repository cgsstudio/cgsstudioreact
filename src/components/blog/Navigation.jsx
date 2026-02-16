import React from "react";
import ArrowRightImg from "../../assets/images/icon/arrow-right8.svg";

const Navigation = ({ currentPage, totalBlogs, blogsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalBlogs / blogsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const getPageNumbers = () => {
    const pages = [];
    const showMax = 5; // Number of page buttons to show (excluding ellipses and first/last)

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    // Always include first page
    pages.push(1);

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    if (start > 2) pages.push("...");

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages - 1) pages.push("...");

    // Always include last page
    pages.push(totalPages);

    return pages;
  };

  return (
    <div className="aximo-navigation">
      <nav className="navigation pagination" aria-label="Posts">
        <div className="nav-links">
          <button
            className="prev page-numbers"
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            <img src={ArrowRightImg} alt="Arrow Left" style={{ transform: "rotate(180deg)" }} />
          </button>

          {getPageNumbers().map((page, index) => (
            page === "..." ? (
              <span key={`ellipsis-${index}`} className="page-numbers dots">
                {page}
              </span>
            ) : (
              <button
                key={page}
                onClick={() => handlePageClick(page)}
                className={`page-numbers ${currentPage === page ? "current" : ""}`}
              >
                {page}
              </button>
            )
          ))}

          <button
            className="next page-numbers"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            <img src={ArrowRightImg} alt="Arrow Right" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
