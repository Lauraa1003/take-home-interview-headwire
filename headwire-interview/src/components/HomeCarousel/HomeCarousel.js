import "./HomeCarousel.scss";
import { useState, useEffect } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import img1 from "../../assets/imgs/slider1-home1.jpeg";
import img2 from "../../assets/imgs/slider2-home1.jpeg";
import img3 from "../../assets/imgs/slider3-home1.jpeg";

const HomeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3];

  const previous = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const next = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="carousel-wrapper">
      <img src={images[currentIndex]} alt="background" />

      <div className="carousel-text">
        <div class="background-text">
          <h1>STUDIO</h1>
          <h3>Best Furniture and Decor</h3>
          <p>
            We pride ourselves on being builders - creating architectural and
            creative solutions to help <br />
            people realize their vision and make them a reality. Wanna work with
            us?
          </p>
          <button>VIEW PROJECTS</button>
        </div>
      </div>

      <div class="arrow-btns">
        <button onClick={previous}>
          <BsArrowLeft color="white" size={20} />
        </button>

        <button onClick={next}>
          <BsArrowRight color="white" size={20} />
        </button>
      </div>

      <hr className="right-line" />
      <hr className="bottom-line" />

    </div>
  );
};

export default HomeCarousel;
