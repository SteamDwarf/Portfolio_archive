import { Fragment } from 'react';
import './header__nav.style.scss';

const HeaderNav = () => {
    return (
        <Fragment>
            <div className="header__nav-wrapper app-container">
                <label htmlFor="burger__checkbox" className="burger__btn">
                    <div className="burger__btn-content"></div>
                </label>
                <nav className='header__nav'>
                    <a href="#about" className="header__nav-link">About me</a>
                    <a href="#skills" className="header__nav-link">Skills</a>
                    <a href="#projects" className="header__nav-link">Projects</a>
                    <a href="#contacts" className="header__nav-link">Contacts</a>
                </nav>
            </div>
        </Fragment>
    );
}

export default HeaderNav;