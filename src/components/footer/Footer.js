import './style.css';

import vk from './../../img/icons/vk.svg';
import instagram from './../../img/icons/instagram.svg';
import twitter from './../../img/icons/twitter.svg';
import linkedIn from './../../img/icons/linkedIn.svg';
import gitHub from './../../img/icons/gitHub.svg';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="https://vk.com/daurenswrld" target="blank"><img src={vk} alt="Link" /></a></li>
                        <li className="social__item"><a href="https://www.instagram.com/daurenswrld/" target='blank'><img src={instagram} alt="Link" /></a></li>
                        <li className="social__item"><a href="https://twitter.com/daurenswrld" target='blank'><img src={twitter} alt="Link" /></a></li>
                        <li className="social__item"><a href="https://github.com/daurenswrld" target='blank'><img src={gitHub} alt="Link" /></a></li>
                        <li className="social__item"><a href="https://www.linkedin.com/in/dauren-bekuzaov-44a7a624b/" target='blank'><img src={linkedIn} alt="Link" /></a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2023 Dauren Bekuzakov</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;