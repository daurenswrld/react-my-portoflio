import './style.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hi, my name is <em>Dauren</em></strong><br />
                    a frontend developer
                </h1>
                <div className="header__text">
                    <p>with passion for learning and creating.</p>
                </div>
                <Link to="/files/cv.pdf" target="_blank" download className="btn">Download CV</Link>
            </div>
        </header>
    );
}

export default Header;