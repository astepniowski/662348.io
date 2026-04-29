import BlogEntryOne from "../components/BlogEntries/BlogEntryOne";
import { Link } from "react-router-dom";
import "../styles/Blog.css";

function Blog() {
  return (
    <div>
      <Link to="/" className="redirect-home">
        home
      </Link>

      <div className="blog-entry-list-container">
        <BlogEntryOne />
      </div>
    </div>
  );
}

export default Blog;