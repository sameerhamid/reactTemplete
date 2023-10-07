import React, { useState } from 'react';
import './navbar.css';
import { BsSearch } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { GoPerson } from 'react-icons/go';
import Wrapper from './Wrapper';

const Navbar = () => {
    const navLinks = [
        {
            id: 1, label: 'Home', link: '/',
        },
        {
            id: 2, label: 'Single', link: '/',
        },
        {
            id: 3, label: 'Beauty', link: '/',
        },
        {
            id: 4, label: 'Sport', link: '/',
        },
        {
            id: 5, label: 'Templates', link: '/',
        },
        {
            id: 6, label: 'Explore', link: '/',
        },
    ];

    // const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    // const [toggleImage, setToggleImage] = useState(true);

    // const toggleMobileMenu = () => {
    //     setMobileMenuOpen(!isMobileMenuOpen);
    //     setToggleImage(!toggleImage);
    // };

    // return (
    //     <div className='nav_wrapper'>
    //         <Wrapper>
    //             <div className='nav_container'>
    //                 <div className='nav_logo'>
    //                     <img src='/assets/images/logo.png' alt='Logo' />
    //                 </div>
    //                 <div
    //                     className='mobile_menu_toggle'
    //                     onClick={toggleMobileMenu}
    //                 >
    //                     {toggleImage ? (
    //                         <img src='/assets/images/hamburgMenu.png' alt='' />
    //                     ) : (
    //                         <img src='/assets/images/cross-23-16.png' alt='' />
    //                     )}
    //                 </div>

    //                 <div className={`links ${isMobileMenuOpen ? 'mobile_menu_open' : ''}`}>
    //                     {navLinks.map((link) => (
    //                         <div key={link.id} className='link'>
    //                             {link.label}
    //                         </div>
    //                     ))}
    //                 </div>
    //                 <div className='icons'>
    //                     <div className='icon'>
    //                         <BsSearch />
    //                     </div>
    //                     <div className='icon'>
    //                         <RiNotification3Line />
    //                     </div>
    //                     <div className='icon'>
    //                         <GoPerson />
    //                     </div>
    //                 </div>
    //             </div>
    //         </Wrapper>
    //     </div>
    // );

    return <>
        <section class="top-nav">
            <div className='logo'>
                <img src='/assets/images/logo.png' alt='Logo' />
            </div>
            <input id="menu-toggle" type="checkbox" />
            <label class='menu-button-container' for="menu-toggle">
                <div class='menu-button'></div>
            </label>
            <div class="menu">
                {navLinks.map((link) => (
                    <div key={link.id} className='link'>
                        {link.label}
                    </div>
                ))}
            </div>

        </section>
    </>
};

export default Navbar;
