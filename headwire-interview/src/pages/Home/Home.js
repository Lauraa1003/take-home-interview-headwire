import './Home.scss'
import Navbar from '../../components/Navbar/Navbar';
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel';
import Sidenav from '../../components/SideNav/SideNav';
import SideNav from '../../components/SideNav/SideNav';
import Quote from '../../components/Quote/Quote';

const Home = () => {

    return (
        <div className='home-wrap'>
        <Navbar/>
        <HomeCarousel/>
        <SideNav/>
        <Quote/>
        </div>
    );
}

export default Home;
