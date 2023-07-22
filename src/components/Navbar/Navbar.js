import LogoWhoIsMD from "./../../img/svg/logo whois 1.svg";
import IconBag from "./../../img/svg/icon-bag.svg";
import IconHeart from "./../../img/svg/icon-heart.svg";

import burger from "./../../img/svg/burger menu.svg";
import React, { useState, useEffect } from 'react';
import Dropdown from 'react-dropdown';
import '../Navbar/navstyle.css'
import Popup from "../popup/Popup";
import { NavLink } from "react-router-dom";

function Navbar () {

    const activeLink = 'header_link_active'
    const pasiveLink = 'header_link'


    const [isHeaderVisible, setHeaderVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        const isScrollingDown = currentScrollPos > prevScrollPos;

        if (currentScrollPos > 300) {
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
                    {/* лого начало */}
                    <div className="header_logo">
                        <NavLink to='/' className="header_link">
                            <img src={LogoWhoIsMD} alt="who is" className=""/>
                        </NavLink>
                        {/* <a href="/" className="header_logo-link">
                            <img src={LogoWhoIsMD} alt="who is" className="header_logo pic"/>
                        </a> */}
                    </div>
                    {/* лого конец */}
                    <nav className="header_nav">
                        <ul className="header_list">
                            <li className="header_item">
                                <NavLink to='/collections' className={({isActive})=> isActive ? activeLink: pasiveLink}>коллекции</NavLink>
                                {/* <a href="#!" className="header_link">коллекции</a> */}
                            </li>
                            <li className="header_item">
                                <NavLink to='/about' className={({isActive})=> isActive ? activeLink: pasiveLink}>о бренде</NavLink>  
                                {/* <a href="#!" className="header_link">о бренде</a> */}
                                {/* <Popup/> */}
                            </li>
                            <li className="header_item">
                                <NavLink to='/shop' className={({isActive})=> isActive ? activeLink: pasiveLink}>каталог</NavLink>  
                            </li>
                            <li className="header_item">
                                <NavLink to='/delivery' className={({isActive})=> isActive ? activeLink: pasiveLink}>доставка</NavLink>  
                                {/* <a href="#!" className="header_link">доставка</a> */}
                            </li>
                            
                        </ul>
                    </nav>

                    <div className="header_list">
                        <NavLink to='/favorites' className={({isActive})=> isActive ? activeLink: pasiveLink}>
                            <img src={IconHeart} alt="shopping cart" className=""/>                                   
                        </NavLink>

                        <NavLink to='/' className={({isActive})=> isActive ? activeLink: pasiveLink}>
                            <img src={IconBag} alt="shopping cart" className=""/>                                   
                        </NavLink>
                    </div>

                    {/* <div className="header_burger header_item">
                        <a href="/" className="header_burger-link">
                            <img src={burger} alt="who is" className="header-burger pic"/>
                        </a>
                    </div> */}
                </div>
            </div>
        </header>
        );
}

export default Navbar;