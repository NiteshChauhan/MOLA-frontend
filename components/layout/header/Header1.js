import Link from "next/link"
import Navbar from "../Navbar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faYoutube , faSkype, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { useRouter } from "next/router"

export default function Header1({ handleSearch, handleContactPopup, handleMobileMenu }) {
     const router = useRouter();
        const currentPath = (router.asPath || "/").split(/[?#]/)[0].replace(/\/+$/, "") || "/";
    
        const isActive = (path) => {
            if (!path) return false;
            const normalized = path.replace(/\/+$/, "") || "/";
            if (normalized === "/") return currentPath === "/";
            return currentPath === normalized || currentPath.startsWith(normalized + "/");
        };

    return (
        <>
            <div className="header_area" id="header_contents">
                <div className="top_bar style_one">
                    <div className="auto-container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="top_inner">
                                    <div className="left_side common_css">
                                       <div className={`contntent address ${isActive("/") ? "active" : ""}`} style={{ margin: "0 5px" }}>
                                        <Link href="/" className="text">
                                            <small>Home</small>
                                        </Link>
                                        </div>

                                        <div className={`contntent email ${isActive("/about-us") ? "active" : ""}`} style={{ margin: "0 5px" }}>
                                        <Link href="/about-us" className="text">
                                            <small>About Us</small>
                                        </Link>
                                        </div>

                                        <div className={`contntent survey ${isActive("/survey") ? "active" : ""}`} style={{ margin: "0 5px" }}>
                                        <i className="fas fa-chart-pie" />
                                        <Link href="/survey" className="text">
                                            <small>Survey</small>
                                        </Link>
                                        </div>

                                        <div className={`contntent survey ${isActive("/contact") ? "active" : ""}`} style={{ margin: "0 5px" }}>
                                        <i className="fas fa-chart-pie" />
                                        <Link href="/contact" className="text">
                                            <small>Contact Us</small>
                                        </Link>
                                        </div>
                                    </div>
                                    <div className="right_side common_css">
                                        <div className="contntent phone">
                                            <i className="icon-phone-call" />
                                            <div className="text">
                                                <small>Phone</small>
                                                <Link href="tel:+592226496">+592 226 496</Link>
                                            </div>
                                        </div>
                                        <div className="contntent media">
                                            {/* <i className="icon-share" /> */}
                                            <div className="text">
                                                {/* <small>Share</small> */}
                                                <Link href="#" >
                                                    <small><FontAwesomeIcon icon={faFacebookF} /></small>
                                                </Link>
                                                <Link href="#" >
                                                    <small><FontAwesomeIcon icon={faInstagram} /></small>
                                                </Link>
                                                <Link href="#" >
                                                    <small><FontAwesomeIcon icon={faYoutube} /></small>
                                                </Link>
                                                <Link href="/" >
                                                    <small>Log In</small>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <header className="header header_default style_one get_sticky_header">
                    <div className="auto-container">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-md-9 col-sm-9 col-xs-9 logo_column">
                                <div className="header_logo_box">
                                    <Link href="/" className="logo navbar-brand">
                                        <img src="/assets/images/logo-default.png" alt="Creote Elementor" className="logo_default" />
                                        <img src="/assets/images/logo-default.png" alt="Creote Elementor" className="logo__sticky" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-10 col-md-3 col-sm-3 col-xs-3 menu_column">
                                <div className="navbar_togglers hamburger_menu" onClick={handleMobileMenu}>
                                    <span className="line" />
                                    <span className="line" />
                                    <span className="line" />
                                </div>
                                <div className="header_content_collapse">
                                    <div className="header_menu_box">
                                        <div className="navigation_menu">
                                            <Navbar />
                                        </div>
                                    </div>
                                    <div className="header_right_content">
                                        <ul>
                                            {/* <li>
                                                <button type="button" className="search-toggler" onClick={handleSearch}><i className="icon-search" /></button>
                                            </li> */}
                                            {/* <li className="header-button">
                                                <Link href="#" className="theme-btn one"> Get In Touch 1
                                                </Link>
                                            </li> */}
                                            <li>
                                                <button type="button" title="Feedback" onClick={handleContactPopup} className="contact-toggler"><i className="icon-bar" /></button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}

