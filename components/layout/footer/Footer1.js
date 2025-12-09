import Link from "next/link"
import { useRouter } from "next/router"

export default function Footer1({ }) {
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
            <div className="footer_area" id="footer_contents">
                <div className="footer_widgets_wrap bg_dark_2">
                    {/*===============spacing==============*/}
                    <div className="pd_top_80" />
                    {/*===============spacing==============*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="footer_widgets about_company light_color">
                                    <div className="about_company_inner">
                                        <div className="footer_logo">
                                            <Link href="#" >
                                                <img src="/assets/images/logo-white.png" className="img-fluid" alt="logo" />
                                            </Link>
                                            {/*===============spacing==============*/}
                                            <div className="pd_bottom_30" />
                                            {/*===============spacing==============*/}
                                        </div>
                                        <div className="content_box">
                                            <p>
                                                Providing equitable and efficient estate administration services to Guyanese.
                                            </p>
                                            <div className="consulting">
                                                <div className="image">
                                                    <img src="/assets/images/authour-image.png" alt="need help" />
                                                </div>
                                                <div className="help_con">
                                                    <h6>Need Help?</h6>
                                                    <h2>
                                                        <Link href="#" > Free Consultation</Link>
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="footer_widgets wid_tit style_one">
                                    <div className="fo_wid_title">
                                        <h2>Get In Touch</h2>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_25" />
                                {/*===============spacing==============*/}
                                <div className="footer_widgets get_in_touch_foo light_color">
                                    <div className="get_intouch_inrfo">
                                        <div className="foo_cont_inner">
                                            <div className="top">
                                                <h6> Location</h6>
                                                <p>
                                                    91 Middle Street, South Cummingsburg,
                                                    Georgetown, Guyana
                                                </p>
                                            </div>
                                            <div className="bottom">
                                                <h6> Contact</h6>
                                                <div className="con_content">
                                                    <h5> Phone :</h5>
                                                    <Link href="/tel:+592226496"> +592 226 496</Link>
                                                </div>
                                                <div className="con_content">
                                                    <h5> Mail Us :</h5>
                                                    <Link href="/tel:sendmail@creote.com"> sendmail@creote.com</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12">
                                <div className="footer_widgets wid_tit style_one">
                                    <div className="fo_wid_title">
                                        <h2>Quick Links</h2>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_25" />
                                {/*===============spacing==============*/}
                                <div className="footer_widgets clearfix navigation_foo light_color style_one">
                                    <div className="navigation_foo_box">
                                        <div className="navigation_foo_inner">
                                            <ul className="menu">
                                                <li className={`footer-menu-item ${isActive("/") ? "active" : ""}`}><Link href="/">Home</Link></li>
                                                <li className={`footer-menu-item ${isActive("/about-us") ? "active" : ""}`}><Link href="/about-us">About Us</Link></li>
                                                <li className={`footer-menu-item ${isActive("/contact") ? "active" : ""}`}><Link href="/contact">Contact Us</Link></li>
                                                <li className={`footer-menu-item ${isActive("/survey") ? "active" : ""}`}><Link href="#">Survey</Link></li>
                                                <li className={`footer-menu-item ${isActive("/services") ? "active" : ""}`}><Link href="#">Services</Link></li>
                                                <li className={`footer-menu-item ${isActive("/funeral-payment") ? "active" : ""}`}><Link href="#">Funeral Payment</Link></li>
                                                <li className={`footer-menu-item ${isActive("/estate-administration") ? "active" : ""}`}><Link href="/estate-administration">Estate Administration</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12">
                                <div className="footer_widgets wid_tit style_one">
                                    <div className="fo_wid_title">
                                        <h2>Estate & Trust Services</h2>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_25" />
                                {/*===============spacing==============*/}
                                <div className="footer_widgets clearfix navigation_foo light_color style_one">
                                    <div className="navigation_foo_box">
                                        <div className="navigation_foo_box">
                                            <div className="navigation_foo_inner">
                                                <ul className="menu">
                                                    
                                                    <li className={`footer-menu-item ${isActive("/estate-admin/apply") ? "active" : ""}`}><Link href="/estate-admin/apply">Who Can Apply?</Link></li>
                                                    <li className={`footer-menu-item ${isActive("/estate-admin/terms") ? "active" : ""}`}><Link href="/estate-admin/terms">Common Terms</Link></li>
                                                    <li className={`footer-menu-item ${isActive("/estate-admin/intestate") ? "active" : ""}`}><Link href="/estate-admin/intestate">Intestate Estates</Link></li>
                                                    <li className={`footer-menu-item ${isActive("/estate-admin/testate") ? "active" : ""}`}><Link href="/estate-admin/testate">Testate Estates</Link></li>
                                                    <li className={`footer-menu-item ${isActive("/estate-admin/partial") ? "active" : ""}`}><Link href="/estate-admin/partial">Partially Intestate</Link></li>
                                                    <li className={`footer-menu-item ${isActive("/estate-admin/minors-and-estates") ? "active" : ""}`}><Link href="/estate-admin/minors-and-estates">Minor and Estates</Link></li>
                                                    <li className={`footer-menu-item ${isActive("/estate-admin/small-estates") ? "active" : ""}`}><Link href="/estate-admin/small-estates">Small Estates</Link></li>
                                                    <li className={`footer-menu-item ${isActive("/estate-admin/special-classes") ? "active" : ""}`}><Link href="/estate-admin/special-classes">Special Classes of Person</Link></li>
                                                    <li className={`footer-menu-item ${isActive("/estate-admin/initiate-process") ? "active" : ""}`}><Link href="/estate-admin/initiate-process">Initiate the Process</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12">
                                <div className="footer_widgets wid_tit style_one">
                                    <div className="fo_wid_title">
                                        <h2>Resources & Information</h2>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_25" />
                                {/*===============spacing==============*/}
                                <div className="footer_widgets clearfix navigation_foo light_color style_one">
                                    <div className="navigation_foo_box">
                                        <div className="navigation_foo_inner">
                                            <ul className="menu">
                                                <li className={`footer-menu-item ${isActive("/estate-admin/faq") ? "active" : ""}`}><Link href="/estate-admin/faq">FAQ</Link></li>
                                                <li className={`footer-menu-item ${isActive("/legislation") ? "active" : ""}`}><Link href="/legislation">Legislation</Link></li>
                                                <li className={`footer-menu-item ${isActive("/media") ? "active" : ""}`}><Link href="/media">Media / News</Link></li>
                                                <li className={`footer-menu-item ${isActive("/downloads") ? "active" : ""}`}><Link href="/downloads">Downloads</Link></li>
                                                {/* <li className={`footer-menu-item ${isActive("/terms-of-use") ? "active" : ""}`}><Link href="/terms-of-use">Terms of Use</Link></li>
                                                <li className={`footer-menu-item ${isActive("/sitemap") ? "active" : ""}`}><Link href="/sitemap">Sitemap</Link></li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_50" />
                    {/*===============spacing==============*/}
                </div>
                <div className="creote-footer-copyright bg_dark_3">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                {/*===============spacing==============*/}
                                <div className="pd_top_10" />
                                {/*===============spacing==============*/}
                                <div className="footer_copy_content color_white">
                                    © {new Date().getFullYear()} <Link href="/"> Ministry of Legal Affairs.</Link> All Rights Reserved.
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_10" />
                                {/*===============spacing==============*/}
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 text-md-end">
                                {/*===============spacing==============*/}
                                <div className="pd_top_10" />
                                {/*===============spacing==============*/}
                                <div className="footer_copy_content_right">
                                    <div className="social_media_v_one">
                                        <ul>
                                            <li>
                                                <Link target="blank" href="https://www.facebook.com/profile.php?id=100094381023483">
                                                    <span className="fa fa-facebook" />
                                                    <small>facebook</small>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link target="blank" href="https://www.instagram.com/publictrusteeofficialreceiver/">
                                                    <span className="fa fa-instagram" />
                                                    <small>instagram</small>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link target="blank" href="#">
                                                    <span className="fa fa-youtube" />
                                                    <small>youtube</small>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_10" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
