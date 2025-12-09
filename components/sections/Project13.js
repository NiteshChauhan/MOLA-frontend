import Link from "next/link"
export default function Project13() {
    return (
        <>
            <section className="project-section pd_left_100 pd_right_100 md_pd_left_15 md_pd_right_15 mr_bottom_minus_90 z_99 position-relative">
                <div className="inner_section rounded_radius bg_light_1">
                    {/*===============spacing==============*/}
                    <div className="pd_top_75" />
                    {/*===============spacing==============*/}
                    <div className="default-container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title_all_box style_one text-center">
                                    <div className="title_sections">
                                        {/* <div className="before_title">
                                            Incredibly
                                        </div> */}
                                        <div className="title">Our Services</div>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_30" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="project_all_styles">
                            <div className="row">
                                <div className="col-xl-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="project_post style_eight">
                                        <div className="image_box ">
                                            <img src="/assets/images/projects/default.jpg" className="img-fluid height_350px" alt="img" />
                                            <Link data-fancybox="gallery" href="/assets/images/projects/default.jpg">
                                                <span className="icon-plus zoom_icon" />
                                            </Link >
                                            <div className="gradient" />
                                        </div>
                                        <div className="content_box ">
                                            <h2 className="entry-title">
                                                <Link href="/services">The Public Trustee facilitates the lawful ...</Link ></h2>
                                            <p> <Link href="/services" className="cat">
                                            Estate Administration</Link > </p>
                                            <Link href="/services" className="arrow_btn ">
                                                <span className="icon-right-arrow-long" />
                                            </Link >
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="project_post style_eight">
                                        <div className="image_box ">
                                            <img src="/assets/images/projects/default.jpg" className="img-fluid height_350px" alt="img" />
                                            <Link data-fancybox="gallery" href="/assets/images/projects/default.jpg">
                                                <span className="icon-plus zoom_icon" />
                                            </Link >
                                            <div className="gradient" />
                                        </div>
                                        <div className="content_box ">
                                            <h2 className="entry-title"><Link href="/services">When assets belong to minors, the Public...</Link >
                                            </h2>
                                            <p> <Link href="/services" className="cat">Guardianship</Link ></p>
                                            <Link href="/services" className="arrow_btn ">
                                                <span className="icon-right-arrow-long" />
                                            </Link >
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="project_post style_eight">
                                        <div className="image_box ">
                                            <img src="/assets/images/projects/default.jpg" className="img-fluid height_350px" alt="img" />
                                            <Link data-fancybox="gallery" href="/assets/images/projects/default.jpg">
                                                <span className="icon-plus zoom_icon" />
                                            </Link >
                                            <div className="gradient" />
                                        </div>
                                        <div className="content_box ">
                                            <h2 className="entry-title"><Link href="/services">The Probate service ensures that valid ...</Link ></h2>
                                            <p>
                                                <Link href="/services" className="cat">Probate</Link >
                                            </p>
                                            <Link href="/services" className="arrow_btn">
                                                <span className="icon-right-arrow-long" />
                                            </Link >
                                        </div>
                                    </div>
                                </div>
                               </div> 
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_30" />
                            {/*===============spacing==============*/}
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <div className="theme_btn_all color_one">
                                        <Link href="/services" className="theme-btn one">
                                            View More Services
                                        </Link >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_80" />
                    {/*===============spacing==============*/}
                </div>
            </section>

        </>
    )
}
