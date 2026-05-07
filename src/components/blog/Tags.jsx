import React from "react";

function Tags({ tags, onTagSelect }) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="widget">
      <h3 className="wp-block-heading">Tags:</h3>
      <div className="wp-block-tag-cloud">
        {tags.map((tag) => (
          <button 
            key={tag} 
            onClick={() => onTagSelect(tag)}
            style={{ 
              background: "none", 
              border: "1px solid #ddd", 
              borderRadius: "5px", 
              padding: "5px 15px", 
              margin: "5px",
              cursor: "pointer",
              fontSize: "14px",
              color: "#333",
              transition: "all 0.3s ease"
            }}
            onMouseOver={(e) => { e.target.style.backgroundColor = "#ed1d24"; e.target.style.color = "#fff"; e.target.style.borderColor = "#ed1d24"; }}
            onMouseOut={(e) => { e.target.style.backgroundColor = "transparent"; e.target.style.color = "#333"; e.target.style.borderColor = "#ddd"; }}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Tags;
