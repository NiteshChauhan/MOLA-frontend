import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Blog() {
    return (
        <>
            <Layout breadcrumbTitle="Blog">
                <div className="auto-container">
                    <div className="row default_row">
                        {/* 1. Sidebar removed.
                          2. Main content width changed to col-lg-12 to take full width.
                        */}
                        <div id="primary" className="content-area service col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            {/*===============spacing==============*/}
                            <div className="pd_top_90" />
                            {/*===============spacing==============*/}
                            <main id="main" className="site-main" role="main">
                                <article className="clearfix service type-service status-publish has-post-thumbnail hentry">
                                    <div className="row grid_layout">
                                        {/* 3. Changed column classes to col-lg-4 (3 columns on large screens) 
                                             and col-md-6 (2 columns on medium screens).
                                        */}
                                        {/* <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 grid_box">
                                            <div className="news_box style_one blog_classic has_images">
                                                <div className="image img_hover-1">
                                                    <img width={750} height={420} src="/assets/images/blog/blog-image-9.jpg" className="wp-post-image" alt="img" />
                                                    <Link className="arrow" href="#">
                                                        <i className="fa fa-angle-right" />
                                                    </Link>
                                                </div>
                                                <div className="content_box">
                                                    <div className="date">
                                                        <span className="date_in_number">08</span>
                                                        <span className="date_in_month">Oct</span>
                                                    </div>
                                                    <Link href="#" className="categories"><i className="icon-folder" />Coaching</Link>
                                                    <h2 className="title"><Link href="/" >Why Should Business
                                                        Payroll Outsourcing?</Link></h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 grid_box">
                                            <div className="news_box style_one blog_classic has_images">
                                                <div className="image img_hover-1">
                                                    <img width={750} height={420} src="/assets/images/blog/blog-image-8.jpg" className="wp-post-image" alt="img" />
                                                    <Link className="arrow" href="#">
                                                        <i className="fa fa-angle-right" />
                                                    </Link>
                                                </div>
                                                <div className="content_box">
                                                    <div className="date">
                                                        <span className="date_in_number">08</span>
                                                        <span className="date_in_month">Oct</span>
                                                    </div>
                                                    <Link href="#" className="categories"><i className="icon-folder" />HR Consulting</Link>
                                                    <h2 className="title"><Link href="/" >Most Employees
                                                        Support Measures</Link></h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 grid_box">
                                            <div className="news_box style_one blog_classic has_images">
                                                <div className="image img_hover-1">
                                                    <img width={750} height={420} src="/assets/images/blog/blog-image-7.jpg" className="wp-post-image" alt="img" />
                                                    <Link className="arrow" href="#">
                                                        <i className="fa fa-angle-right" />
                                                    </Link>
                                                </div>
                                                <div className="content_box">
                                                    <div className="date">
                                                        <span className="date_in_number">08</span>
                                                        <span className="date_in_month">Oct</span>
                                                    </div>
                                                    <Link href="#" className="categories"><i className="icon-folder" />Compliance Audits</Link>
                                                    <h2 className="title"><Link href="/" >How to Handle
                                                        Employee</Link></h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 grid_box">
                                            <div className="news_box style_one blog_classic has_images">
                                                <div className="image img_hover-1">
                                                    <img width={750} height={420} src="/assets/images/blog/blog-image-6.jpg" className="wp-post-image" alt="img" />
                                                    <Link className="arrow" href="#">
                                                        <i className="fa fa-angle-right" />
                                                    </Link>
                                                </div>
                                                <div className="content_box">
                                                    <div className="date">
                                                        <span className="date_in_number">08</span>
                                                        <span className="date_in_month">Oct</span>
                                                    </div>
                                                    <Link href="#" className="categories"><i className="icon-folder" />Coaching</Link>
                                                    <h2 className="title"><Link href="/" >Retaining Good
                                                        Employees &amp; Motivated</Link></h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 grid_box">
                                            <div className="news_box style_one blog_classic has_images">
                                                <div className="image img_hover-1">
                                                    <img width={750} height={420} src="/assets/images/blog/blog-image-5.jpg" className="wp-post-image" alt="img" />
                                                    <Link className="arrow" href="#">
                                                        <i className="fa fa-angle-right" />
                                                    </Link>
                                                </div>
                                                <div className="content_box">
                                                    <div className="date">
                                                        <span className="date_in_number">08</span>
                                                        <span className="date_in_month">Oct</span>
                                                    </div>
                                                    <Link href="#" className="categories"><i className="icon-folder" />Compliance Audits</Link>
                                                    <h2 className="title"><Link href="/" >Understanding
                                                        Executive Coaching</Link></h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 grid_box">
                                            <div className="news_box style_one blog_classic has_images">
                                                <div className="image img_hover-1">
                                                    <img width={750} height={420} src="/assets/images/blog/blog-image-4.jpg" className="wp-post-image" alt="img" />
                                                    <Link className="arrow" href="#">
                                                        <i className="fa fa-angle-right" />
                                                    </Link>
                                                </div>
                                                <div className="content_box">
                                                    <div className="date">
                                                        <span className="date_in_number">08</span>
                                                        <span className="date_in_month">Oct</span>
                                                    </div>
                                                    <Link href="#" className="categories"><i className="icon-folder" />Coaching</Link>
                                                    <h2 className="title"><Link href="/" >How to Handle Your
                                                        Good Employee</Link></h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 grid_box">
                                            <div className="news_box style_one blog_classic has_images">
                                                <div className="image img_hover-1">
                                                    <img width={750} height={420} src="/assets/images/blog/blog-image-3.jpg" className="wp-post-image" alt="img" />
                                                    <Link className="arrow" href="#">
                                                        <i className="fa fa-angle-right" />
                                                    </Link>
                                                </div>
                                                <div className="content_box">
                                                    <div className="date">
                                                        <span className="date_in_number">08</span>
                                                        <span className="date_in_month">Oct</span>
                                                    </div>
                                                    <Link href="#" className="categories"><i className="icon-folder" />Employee Relations</Link>
                                                    <h2 className="title"><Link href="/" >Workforce Challenges
                                                        &amp; Opportunities</Link></h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 grid_box">
                                            <div className="news_box style_one blog_classic has_images">
                                                <div className="image img_hover-1">
                                                    <img width={750} height={420} src="/assets/images/blog/blog-image-11.jpg" className="wp-post-image" alt="img" />
                                                    <Link className="arrow" href="#">
                                                        <i className="fa fa-angle-right" />
                                                    </Link>
                                                </div>
                                                <div className="content_box">
                                                    <div className="date">
                                                        <span className="date_in_number">08</span>
                                                        <span className="date_in_month">Oct</span>
                                                    </div>
                                                    <Link href="#" className="categories"><i className="icon-folder" />Coaching</Link>
                                                    <h2 className="title"><Link href="/" >Workplace problems in
                                                        your business?</Link></h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 grid_box">
                                            <div className="news_box style_one blog_classic has_images">
                                                <div className="image img_hover-1">
                                                    <img width={750} height={420} src="/assets/images/blog/blog-image-10.jpg" className="wp-post-image" alt="img" />
                                                    <Link className="arrow" href="#">
                                                        <i className="fa fa-angle-right" />
                                                    </Link>
                                                </div>
                                                <div className="content_box">
                                                    <div className="date">
                                                        <span className="date_in_number">08</span>
                                                        <span className="date_in_month">Oct</span>
                                                    </div>
                                                    <Link href="#" className="categories"><i className="icon-folder" />Employee Relations</Link>
                                                    <h2 className="title"><Link href="/" >Supporting Employees
                                                        Through The Menopause Guidance For Employers</Link></h2>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            {/* <nav aria-label="Page navigation example">
                                                <ul className="pagination text-center">
                                                    <li className="active">
                                                        <Link href="blog-simple">1</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="blog-simple">2</Link>
                                                    </li>
                                                    <li className="next_link">
                                                        <Link href="blog-simple">
                                                            <div className="nav-next"><i className="fas fa-angle-right" /></div>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </nav> */}
                                        </div>
                                    </div>
                                </article>
                            </main>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_90" />
                            {/*===============spacing==============*/}
                        </div>
                        {/* The <aside> element (sidebar) has been completely removed.
                        */}
                    </div>
                </div>
                {/*-newsteller-*/}
                <section className="newsteller style_one bg_dark_1">
                    {/*===============spacing==============*/}
                    <div className="pd_top_40" />
                    {/*===============spacing==============*/}
                    <div className="auto-container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="content">
                                    <h2>Join Our Mailing List</h2>
                                    <p>For receiving our news and updates in your inbox directly. </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="item_scubscribe">
                                    <div className="input_group">
                                        <form className="mc4wp-form" method="post" data-name="Subscibe">
                                            <div className="mc4wp-form-fields">
                                                <input type="email" name="EMAIL" placeholder="Your email address" required />
                                                <input type="submit" defaultValue="Sign up" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_40" />
                    {/*===============spacing==============*/}
                </section>
            </Layout>
        </>
    )
}