import { useState, useRef, useEffect } from "react";
import "./Navbar.scss";
import logo from "../../assets/imgs/logo.svg";
import { BsChevronDown, BsBag, BsSearch, BsList, BsTriangleFill } from "react-icons/bs";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navWrap">
      
      <div className="left-side">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </div>

      <div className="center-side">
        <button className="navBtn" onClick={() => setDropdownOpen(!isDropdownOpen)}>
          <p>HOME</p>
          <BsChevronDown />
          <div className="active">
            <i><BsTriangleFill size={8}/></i>
          </div>
        </button>

        <div ref={dropdownRef}>
          {isDropdownOpen && (
            <div className="menuItems">
              <a href="/">Main Home</a>
              <a href="/">Interior Design</a>
              <a href="/">Studio Home</a>
              <a href="/">Architecture Agency</a>
              <a href="/">Design Company</a>
              <a href="/">Home Video</a>
              <a href="/">Home Full Screen</a>
              <a href="/">Home One Page</a>
              <a href="/">Home with Side Menu</a>
            </div>
          )}
        </div>

        <button className="navBtn">
          <p>PAGES</p>
          <BsChevronDown />
          <i><BsTriangleFill size={8}/></i>
        </button>

        <button className="navBtn">
          <p>SERVICES</p>
          <BsChevronDown />
          <i><BsTriangleFill size={8}/></i>
        </button>

        <button className="navBtn">
          <p>PORTFOLIO</p>
          <BsChevronDown />
          <i><BsTriangleFill size={8}/></i>
        </button>

        <button className="navBtn">
          <p>BLOG</p>
          <BsChevronDown />
          <i><BsTriangleFill size={8}/></i>
        </button>

        {/* onclick brings you to footer contact info */}
        <a href="#footer" className="navBtn link">
          <p>CONTACTS</p>
          <i><BsTriangleFill size={8}/></i>
        </a>

      </div>

      <div className="right-side">
        <button className="bag-icon">
          <BsBag color="white" size={20}/>
        </button>

        <button className="search-icon">
          <BsSearch color="white" size={20}/>
        </button>

        <button className="menu-icon">
          <BsList color="white" size={30}/>
        </button>
      </div>

    </nav>
  );
};

export default Navbar;
