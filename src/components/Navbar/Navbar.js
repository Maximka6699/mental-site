import LogoWhoIsMD from "./../../img/svg/logo whois 1.svg";
import burger from "./../../img/svg/burger menu.svg";
import React, { useState, useEffect } from 'react';
import '../Navbar/navstyle.css'

function Navbar () {

    const [isHeaderVisible, setHeaderVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        const isScrollingDown = currentScrollPos > prevScrollPos;

        if (currentScrollPos > 240) {
            setHeaderVisible(!isScrollingDown);
        }

        setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
        }, [prevScrollPos]);

    return (
        <header className={`header ${isHeaderVisible ? 'visible' : 'hidden'}`}>
            <div className="wrapperHH">

                <div className="header_wrapper">
                    <div className="header_logo">
                        <a href="/" className="header_logo-link">
                            <img src={LogoWhoIsMD} alt="who is" className="header_logo pic"/>
                        </a>
                    </div>
                    <nav className="header_nav">
                        <ul className="header_list">
                            <li className="header_item">
                                <a href="#!" className="header_link">каталог</a>
                            </li>
                            <li className="header_item">
                                <a href="#!" className="header_link">для покупателя</a>
                            </li>
                            <li className="header_item">
                                <a href="#!" className="header_link">корзина</a>
                            </li>
                            <li className="header_item">
                                <a href="#!" className="header_link">новый дроп</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="header_burger header_item">
                        <a href="/" className="header_burger-link">
                            <img src={burger} alt="who is" className="header-burger pic"/>
                        </a>
                    </div>
                </div>
            </div>
        </header>
        );
}

export default Navbar;