import './Home.scss'
import Navbar from '../../components/Navbar/Navbar';
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel';
import Sidenav from '../../components/SideNav/SideNav'
import SideNav from '../../components/SideNav/SideNav';

const Home = () => {

    return (
        <div className='home-wrap'>
        <Navbar/>
        <HomeCarousel/>
        <SideNav/>
        </div>
    );
}

export default Home;
