import Blog1Img from "../../assets/images/blog/blog1.png";
import Blog2Img from "../../assets/images/blog/blog2.png";
import Blog3Img from "../../assets/images/blog/blog3.png";
import { Link } from "react-router-dom";
import { BlogData } from "../../components/blog/BlogData";

function RecentPosts() {
  return (
    <div>
    {/* <div className="widget aximo_recent_posts_Widget">
      <h3 className="wp-block-heading">Recent Posts:</h3>

      {BlogData.slice(0, 3).map((post) => (
        <div className="post-item" key={post.id}>
          <div className="post-thumb">
            <Link to="/single-blog">
              <img src={post.img} alt={post.title} />
            </Link>
          </div>
          <div className="post-text">
            <div className="post-date">{post.date}</div>
            <Link className="post-title" to={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div> */}
    </div>
  );
}

export default RecentPosts;
