import "./BlogCard.scss";
import { BsFillCircleFill } from "react-icons/bs";

const BlogCard = ({ info }) => {
  return (
    <div className="blog-card">

      <div class="img-wrap">
        <img src={info.image} />
        <div className="tag">INTERIOR</div>
      </div>

      <div class="date">
        <span>{info.date}</span>
        <i><BsFillCircleFill size={4} color="black"/></i>
        <i><BsFillCircleFill size={4} color="black"/></i>
        <span>{info.writer}</span>
      </div>

      <h4>{info.title}</h4>
      <p>{info.description}</p>

    </div>
  );
};

export default BlogCard;
