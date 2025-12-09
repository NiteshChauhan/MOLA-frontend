import Link from "next/link"
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Service18() {
    const swiperOptions = {
        modules: [Autoplay],
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            991: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1199: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1350: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    };
    return (
        <>
            <section className="service-section-two pd_left_100 pd_right_100 md_pd_left_15 md_pd_right_15">
                <div className="inner_section bg_light_1 rounded_radius">
                    {/*===============spacing==============*/}
                    <div className="pd_top_80" />
                    {/*===============spacing==============*/}
                    <div className="default-container">
                        <div className="row">
                            <div className="col-lg-6 m-auto">
                                <div className="title_all_box style_one text-center">
                                    <div className="title_sections">
                                        <div className="title">Know the Law</div>
                                        {/* <p>
                                            Our power of choice is untrammelled and when nothing prevents
                                            being able to do what we like best every pleasure.
                                        </p> */}
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_20" />
                                    {/*===============spacing==============*/}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className=" col-xs-12">
                                <div className="service_all_styles carousel owl_new_one">
                                    <Swiper {...swiperOptions} className="owl_nav_none owl_dots_none owl_type_two theme_carousel">
                                        <SwiperSlide className="service_box  type_one clearfix">
                                            <div className="image_box">
                                                <img src="/assets/images/service/IMG-2.jpg" className="img-fluid" alt="img" />
                                                <div className="overlay" />
                                            </div>
                                            <div className="content_box">
                                                <div className="icon_box clearfix">
                                                    {/* <div className="icon_box_inner">
                                                        <i className="icon icon-thumbs-up icon" />
                                                    </div> */}
                                                </div>
                                                <h2 className="entry-title">
                                                    <Link href="#">Lorem ipsum</Link >
                                                </h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt, nunc vitae volutpat faucibus, ante enim mollis mauris, ut pharetra felis mauris quis mi.
                                                </p>
                                                <Link href="/estate-admin/know-the-law" className="read_more type_one">
                                                    <span className="icon-arrow-right" />
                                                    Read More
                                                </Link >
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="service_box  type_one clearfix">
                                            <div className="image_box">
                                                <img src="/assets/images/service/IMG-3.jpg" className="img-fluid" alt="img" />
                                                <div className="overlay" />
                                            </div>
                                            <div className="content_box">
                                                <div className="icon_box clearfix">
                                                    {/* <div className="icon_box_inner">
                                                        <i className="icon icon-thumbs-up icon" />
                                                    </div> */}
                                                </div>
                                                <h2 className="entry-title">
                                                    <Link href="#">Lorem ipsum Benefits
                                                    </Link >
                                                </h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt, nunc vitae volutpat faucibus, ante enim mollis mauris, ut pharetra felis mauris quis mi.</p>
                                                <Link href="/estate-admin/know-the-law" className="read_more type_one">
                                                    <span className="icon-arrow-right" />
                                                    Read More
                                                </Link >
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="service_box  type_one clearfix">
                                            <div className="image_box">
                                                <img src="/assets/images/service/IMG-4.jpg" className="img-fluid" alt="img" />
                                                <div className="overlay" />
                                            </div>
                                            <div className="content_box">
                                                <div className="icon_box clearfix">
                                                    {/* <div className="icon_box_inner">
                                                        <i className="icon icon-thumbs-up icon" />
                                                    </div> */}
                                                </div>
                                                <h2 className="entry-title"><Link href="#">Lorem ipsum</Link ></h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt, nunc vitae volutpat faucibus, ante enim mollis mauris, ut pharetra felis mauris quis mi.</p>
                                                <Link href="/estate-admin/know-the-law" className="read_more type_one">
                                                    <span className="icon-arrow-right" />
                                                    Read More
                                                </Link >
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_60" />
                    {/*===============spacing==============*/}
                </div>
            </section>

        </>
    )
}
