import React, { useState, useEffect } from "react";
import "./ScrollTopBtn.scss";
import { BsArrowUpShort } from "react-icons/bs";

const ScrollTopBtn = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Handle the onScroll event to update the scroll position
  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-wrap">
      {/* Show the button if the scroll position is greater than 100 */}
      {scrollPosition > 100 && (
        <button onClick={handleClick}>
          <BsArrowUpShort size={40} color="white" />
        </button>
      )}
    </div>
  );
};

export default ScrollTopBtn;
