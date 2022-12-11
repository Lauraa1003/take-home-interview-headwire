import './Footer.scss'
import { BsTwitter, BsFacebook, BsLinkedin, BsInstagram, BsGeoAlt, BsEnvelopeOpen, BsTelephone, BsCursor} from "react-icons/bs";
import logo from '../../assets/imgs/logo-footer.svg';

const Footer = () => {
    return (
        <footer class="footer" id="footer">

            <div class="footer-column">
                <img className='footer-logo' src={logo} alt="logo" />
                <span className='column1-text'>We provides a full range of interior design. architectural design.</span>
                <div class="footer-icons">
                    <a href="https://www.facebook.com">
                    <i><BsFacebook size={13} /></i>
                    </a>
                    <a href="https://www.twitter.com">
                    <i><BsTwitter size={13} /></i>
                    </a>
                    <a href="https://www.linkedin.com">
                    <i><BsLinkedin size={13} /></i>
                    </a>
                    <a href="https://www.instagram.com">
                    <i><BsInstagram size={13}  /></i>
                    </a>
                </div>
            </div>

            <div class="footer-column">
                <h3>Contacts</h3>
                <span><i><BsGeoAlt/></i> 411 University St. Seattle. USA</span>
                <span><i><BsEnvelopeOpen/></i> theratio_interior@mail.com</span>
                <span><i><BsTelephone/></i> +1 800 456 789 123</span>
            </div>

            <div class="footer-column">
                <h3>Latest Projects</h3>
                <a href="#">Stylish Family Appartment</a>
                <a href="#">Modern Villa in Belgium</a>
                <a href="#">Private House in Spain</a>
            </div>

            <div class="footer-column">
                <h3>Subscribe</h3>
                <div class="email-wrap">
                    <input type="email" placeholder="YOUR EMAIL"/>
                    <i><BsCursor/></i>
                </div>
                <span>Follow our newsletter to stay updated about agency.</span>
            </div>

            <div class="footer-copyright">
                <div>
                    Copyright © 2021 Theratio by <strong>ThemeModern</strong> All Rights Reserved.
                </div>

                <div className='footer-terms'>
                    Terms of use  <span> | </span>Privacy Environmental Policy
                </div>
            </div>
            
        </footer>
    );
};

export default Footer; 