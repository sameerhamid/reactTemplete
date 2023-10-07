import { useState } from "react"
import "./navbarSec.css"

const NavbarSec = () => {

    const navLinks = [
        {
            id: 1, label: 'Home', link: '/',
        },
        {
            id: 2, label: 'Editor Pick', link: '#banner',
        },
        {
            id: 3, label: 'Author', link: '#author',
        },
        {
            id: 4, label: 'Top Trending', link: '#trending',
        },
        {
            id: 5, label: 'Explor latest article', link: '#explore',
        },
        {
            id: 6, label: 'Articles', link: '#article',
        },
        {
            id: 6, label: 'Exploer Videos', link: '#exploreVideos',
        },
    ];

    const [showNavbar, setShowNavbar] = useState(false)
    const [toggleImage, setToggleImage] = useState(true);
    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
        setToggleImage(!toggleImage)
    }

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <img src='/assets/images/logo.png' alt='Logo' />
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    {toggleImage ? (
                        <img src='/assets/images/hamburgMenu.png' alt='' />
                    ) : (
                        <img src='/assets/images/cross-23-16.png' alt='' style={{ width: '26px', height: '26px', objectFit: 'cover' }} />
                    )}
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        {navLinks.map(link => <li><a href={link.link} onClick={handleShowNavbar}>{link.label}</a></li>)}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavbarSec
