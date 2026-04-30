import { Link } from "react-router-dom";
import "../styles/Blog.css";

import BlogEntryTwo from "../components/BlogEntries/BlogEntryTwo";
import BlogEntryOne from "../components/BlogEntries/BlogEntryOne";

function Blog() {
  return (
    <div>
      <Link to="/" className="redirect-home">
        home
      </Link>

      <div className="blog-entry-list-container">
        <BlogEntryTwo  />
        <BlogEntryOne  />
      </div>
    </div>
  );
}

export default Blog;