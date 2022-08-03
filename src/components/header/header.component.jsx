import { Fragment } from 'react';
import './header.style.scss';
import HeaderNav from "./__nav/header__nav.component"

const Header = () => {
    return (
        <Fragment>
            <input id="burger__checkbox" type="checkbox" className="burger__checkbox"/>
            <header className="header">
                <HeaderNav />
            </header>
        </Fragment>
    );
}

export default Header;