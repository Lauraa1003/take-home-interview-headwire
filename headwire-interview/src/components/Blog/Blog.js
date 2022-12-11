import "./Blog.scss";
import BlogCard from "../BlogCard/BlogCard";
import BlogData from "./BlogData";

const Blog = () => {
  return (
    <div className="blog-section">
        
      <div className="blog-wrap">

        <div className="header-wrap">
          <div class="head-text2">
            <span>[ OUR BLOG ]</span>
            <h3>Read Our Latest News</h3>
            <div className="underline"></div>
          </div>
          <button>VIEW ALL</button>
        </div>

        <div class="blog-items">
          {BlogData.map((data, index) => (
            <BlogCard info={data} key={index} />
          ))}
        </div>  

      </div>

      <hr className="right-line1" />
      <hr className="center-line1" />
      <hr className="left-line1" />

    </div>
  );
};

export default Blog;
