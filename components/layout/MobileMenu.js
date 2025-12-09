import Link from 'next/link'
import { useState } from 'react'
export default function MobileMenu({ handleMobileMenu }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <div className="crt_mobile_menu">
                <div className="menu-backdrop" onClick={handleMobileMenu} />
                <nav className="menu-box">
                    <div className="close-btn" onClick={handleMobileMenu}><i className="icon-close" /></div>
                    <form role="search" method="get" action="#">
                        <input type="search" className="search" placeholder="Search..." name="s" title="Search" />
                        <button type="submit" className="sch_btn"> <i className="icon-search" /></button>
                    </form>
                    <div className="menu-outer">
                        <ul id="myNavbar" className="navbar_nav">
                            <li className="menu-item  nav-item">
                                <Link href="/" className="dropdown-item nav-link">
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li className="menu-item  nav-item">
                                <Link href="/about-us" className="dropdown-item nav-link">
                                    <span>About</span>
                                </Link>
                            </li>
                            <li className="menu-item  nav-item">
                                <Link href="/survey" className="dropdown-item nav-link">
                                    <span>Survey</span>
                                </Link>
                            </li>
                            <li className="menu-item  nav-item">
                                <Link href="/contact" className="dropdown-item nav-link">
                                    <span>Contact</span>
                                </Link>
                            </li>
                            <li className="menu-item  nav-item">
                                <Link href="/funeral-payment" className="dropdown-item nav-link">
                                    <span>Funeral Payment</span>
                                </Link>
                            </li>

                            <li className="menu-item  menu-item-has-children dropdown dropdown_full position-static mega_menu nav-item">
                                <Link href="/estate-administration" className="dropdown-toggle nav-link">
                                    <span>Estate Administration</span>
                                    <span className="fa fa-angle-down" /></Link>
                                <ul className="dropdown-menu width_60_percentage" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                    <li>
                                        <div className="row">
                                            <div className="col-lg-3 m_column">
                                                <div className="list_item_box style_one">
                                                    <ul>
                                                        <li>
                                                            <small className="d-flex align-items-center">
                                                                <i className="icon-home only_icon" />
                                                                <Link className="nav_link" href="/estate-admin/apply">Who can apply?</Link>
                                                            </small>
                                                        </li>
                                                        <li>
                                                            <small className="d-flex align-items-center">
                                                                <i className="icon-home only_icon" />
                                                                <Link className="nav_link" href="/estate-admin/terms">Common Terms</Link>
                                                            </small>
                                                        </li>
                                                        <li>
                                                            <small className="d-flex align-items-center">
                                                                <i className="icon-home only_icon" />
                                                                <Link className="nav_link" href="/estate-admin/intestate">Intestate Estate</Link>
                                                            </small>
                                                        </li>
                                                        <li>
                                                            <small className="d-flex align-items-center">
                                                                <i className="icon-home only_icon" />
                                                                <Link className="nav_link" href="/estate-admin/partial">Partially Intestate</Link>
                                                            </small>
                                                        </li>
                                                        
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 m_column">
                                                <div className="list_item_box style_one">
                                                    <ul>
                                                        <li>
                                                            <small className="d-flex align-items-center">
                                                                <i className="icon-home only_icon" />
                                                                <Link className="nav_link" href="/estate-admin/know-the-law">Know The Law</Link>
                                                            </small>
                                                        </li>
                                                        <li>
                                                            <small className="d-flex align-items-center">
                                                                <i className="icon-home only_icon" />
                                                                <Link className="nav_link" href="/estate-admin/testate">Testate Estates</Link>
                                                            </small>
                                                        </li>
                                                        <li>
                                                            <small className="d-flex align-items-center">
                                                                <i className="icon-home only_icon" />
                                                                <Link className="nav_link" href="/estate-admin/minors-and-estates">Minors and Estates</Link>
                                                            </small>
                                                        </li>
                                                        <li>
                                                            <small className="d-flex align-items-center">
                                                                <i className="icon-home only_icon" />
                                                                <Link className="nav_link" href="/estate-admin/small-estates">Small Estates</Link>
                                                            </small>
                                                        </li>
                                                        <li>
                                                            <small className="d-flex align-items-center">
                                                                <i className="icon-home only_icon" />
                                                                <Link className="nav_link" href="/estate-admin/special-classes">Special Classes Of Person</Link>
                                                            </small>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 m_column">
                                                <div className="list_item_box style_one">
                                                    <ul>
                                                        <li>
                                                            <small className="d-flex align-items-center">
                                                                <i className="icon-home only_icon" />
                                                                <Link className="nav_link" href="/estate-admin/initiate-process">Initiate Process</Link>
                                                            </small>
                                                        </li>
                                                        <li>
                                                            <small className="d-flex align-items-center">
                                                                <i className="icon-home only_icon" />
                                                                <Link className="nav_link" href="/estate-admin/faq">FAQ</Link>
                                                            </small>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="dropdown-btn" onClick={() => handleToggle(1)}><span className="fa fa-angle-down" /></div>
                            </li>
                            <li className="menu-item  nav-item">
                                <Link href="/legislation" className="dropdown-item nav-link">
                                    <span>Legislation</span>
                                </Link>
                            </li>
                            <li className="menu-item  nav-item">
                                <Link href="/media" className="dropdown-item nav-link">
                                    <span>Media</span>
                                </Link>
                            </li>
                            <li className="menu-item  nav-item">
                                <Link href="/services" className="dropdown-item nav-link">
                                    <span>Services</span>
                                </Link>
                            </li>
                            <li className="menu-item  nav-item">
                                <Link href="/downloads" className="dropdown-item nav-link">
                                    <span>Downloads</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}
