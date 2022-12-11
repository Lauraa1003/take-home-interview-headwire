import "./Home.scss";
import Navbar from "../../components/Navbar/Navbar";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import SideNav from "../../components/SideNav/SideNav";
import Quote from "../../components/Quote/Quote";
import Services from "../../components/Services/Services";
import Professionals from "../../components/Professionals/Professionals";
import Blog from "../../components/Blog/Blog";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home-wrap">
      <Navbar />
      <HomeCarousel />
      <SideNav />
      <Quote />
      <Services />
      <Professionals />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
