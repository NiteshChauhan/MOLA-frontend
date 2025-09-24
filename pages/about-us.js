import VideoBox from "@/components/elements/VideoBox"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import Head from 'next/head'

export default function AboutUs() {

    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };

    const swiperOptions = {
        // General
        direction: 'horizontal',
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 4,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
        centeredSlides: true,

        // Navigation
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
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
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1350: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        }
    };

    return (
        <>
            <Head>
                <title>About Us</title>
            </Head>

            <Layout breadcrumbTitle="About Us">
                {/* ABOUT US */}
<section className="about-section">
  <div className="pd_top_90" />
  <div className="container">
    <div className="row">
      {/* Left Content */}
      <div className="col-xl-6 col-lg-12">
        <div className="about_content position-relative z_99">
          <div className="title_all_box style_one text-left dark_color">
            <div className="title_sections">
              <h2>ABOUT US</h2>
            </div>
          </div>

          <div className="pd_bottom_20" />

          <div className="description_box">
            <p>
              The Public Trustee of Guyana is a government-established Office with perpetual
              succession that is responsible for the administration of deceased persons Estates.
            </p>
            <h4>The Powers of the Public Trustee are:</h4>
            <ul>
              <li>Act in the administration of the estates of deceased persons</li>
              <li>Act as executor or administrator of a will</li>
              <li>
                Act as guardian or committee, or receiver, of the property of any infant or other
                person under disability
              </li>
              <li>
                Take possession of and administer the estate of any person who is absent from Guyana
                and not fully represented by any attorney in Guyana, and who has left debts unpaid
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right Image/Video */}
      <div className="col-xl-6 col-lg-12">
        <div className="image_boxes style_two">
          <img src="/assets/images/shape-1.png" className="background_image" alt="shape" />
          <div className="image one">
            <img src="/assets/images/about/about-6.png" className="img-fluid" alt="about" />
          </div>
          <div className="image two">
            <img src="/assets/images/about/about-7.png" className="img-fluid" alt="about" />
            <div className="video_box">
              <VideoBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="pd_bottom_70" />
</section>

{/*-service-*/}
                <section className="service-icon-section bg_light_1">
                    {/*===============spacing==============*/}
                    <div className="pd_top_90" />
                    {/*===============spacing==============*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title_all_box style_one text-center dark_color">
                                    <div className="title_sections">
                                        <div className="before_title">MISSION AND VALUES</div>
                                        <h2 className="title">Stand Out From The Rest</h2>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_20" />
                                    {/*===============spacing==============*/}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="simple_image_boxes parallax_cover height_264px">
                                    <img src="/assets/images/icon-img-ab-1.jpg" className="simp_img cover-parallax" alt="image" />
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_20" />
                                {/*===============spacing==============*/}
                                <div className="icon_box_all style_three">
                                    <div className="icon_content ">
                                        <div className="icon">
                                            <span className=" icon-bow-and-arrow" />
                                        </div>
                                        <div className="txt_content">
                                            <h3><Link href="#" >Our Mission</Link></h3>
                                            <p>Providing Equitable and Efficient Estate administration services to Guyanese. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-4 mt-lg-0 mt-xl-0">
                                <div className="icon_box_all style_three">
                                    <div className="icon_content ">
                                        <div className="icon">
                                            <span className=" icon-growth" />
                                        </div>
                                        <div className="txt_content">
                                            <h3><Link href="#" >Our Values</Link></h3>
                                            <p>In seeking to achieve our Mission Statement, the Office of the Public Trustee uphold high legal and professional standards. Our key values are:</p>
                                            <ul>
                                                <li>Integrity</li>
                                                <li>Professionalism </li>
                                                <li>Confidentiality</li>
                                                <li>Transparency</li>
                                                <li>Efficiency and Diligence</li>
                                                <li>Service Excellence</li>
                                            </ul>
                                            <div className="btn_left">
                                                <button onClick={() => {
                                                    window.scrollTo({top: document.querySelector("#valuesTabs").offsetTop, behavior: 'smooth'});
                                                }} className="theme-btn one">Read More</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-4 mt-lg-4 mt-xl-0">
                                <div className="icon_box_all style_three">
                                    <div className="icon_content ">
                                        <div className="icon">
                                            <span className=" icon-binoculars" />
                                        </div>
                                        <div className="txt_content">
                                            <h3><Link href="#" >Our Vision</Link></h3>
                                            <p>Our vision is to be a leading model of Public Trustee excellence in the Region,
                                                providing efficient and effective estate administration services to the people of Guyana.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_20" />
                                {/*===============spacing==============*/}
                                <div className="simple_image_boxes  height_264px">
                                    <img src="/assets/images/icon-img-ab-2.jpg" className="simp_img img-fluid" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_top_90" />
                    {/*===============spacing==============*/}
                </section>
                {/*-service end-*/}

{/* OUR VALUES (Tabs) */}
<section
id="valuesTabs"
  className="tab-section bg_op_1"
  style={{ backgroundImage: "url(/assets/images/tab-sec-bg.jpg)" }}
>
  <div className="pd_top_100" />
  <div className="container">
    <div className="row">
      <div className="tabs_all_box tabs_all_box_start type_one">
        <div className="tab_over_all_box">
          {/* Tabs Header */}
          <div className="tabs_header clearfix">
            <ul className="showcase_tabs_btns nav-pills nav clearfix">
              <li className="nav-item">
                <a
                  className={
                    activeIndex === 1
                      ? "s_tab_btn nav-link active"
                      : "s_tab_btn nav-link"
                  }
                  onClick={() => handleOnClick(1)}
                >
                  01. Integrity
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    activeIndex === 2
                      ? "s_tab_btn nav-link active"
                      : "s_tab_btn nav-link"
                  }
                  onClick={() => handleOnClick(2)}
                >
                  02. Professionalism
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    activeIndex === 3
                      ? "s_tab_btn nav-link active"
                      : "s_tab_btn nav-link"
                  }
                  onClick={() => handleOnClick(3)}
                >
                  03. Confidentiality
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    activeIndex === 4
                      ? "s_tab_btn nav-link active"
                      : "s_tab_btn nav-link"
                  }
                  onClick={() => handleOnClick(4)}
                >
                  04. Transparency
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    activeIndex === 5
                      ? "s_tab_btn nav-link active"
                      : "s_tab_btn nav-link"
                  }
                  onClick={() => handleOnClick(5)}
                >
                  05. Efficiency & Diligence
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    activeIndex === 6
                      ? "s_tab_btn nav-link active"
                      : "s_tab_btn nav-link"
                  }
                  onClick={() => handleOnClick(6)}
                >
                  06. Service Excellence
                </a>
              </li>
            </ul>
          </div>

          {/* Tabs Content */}
          <div className="s_tab_wrapper">
            <div className="s_tabs_content">
              {/* Integrity */}
              <div
                className={
                  activeIndex === 1 ? "s_tab fade active-tab show" : "s_tab fade"
                }
              >
                <div
                  className="tab_content one"
                  style={{ backgroundImage: "url(/assets/images/tab-image.jpg)" }}
                >
                  <div className="content_image">
                    <h2>Integrity</h2>
                    <p>Acting honestly, ethically and transparently in all dealings.</p>
                  </div>
                </div>
              </div>

              {/* Professionalism */}
              <div
                className={
                  activeIndex === 2 ? "s_tab fade active-tab show" : "s_tab fade"
                }
              >
                <div
                  className="tab_content one"
                  style={{
                    backgroundImage: "url(/assets/images/blog/blog-image-8.jpg)",
                  }}
                >
                  <div className="content_image">
                    <h2>Professionalism</h2>
                    <p>
                      Demonstrating competence, diligence, and skill in all services.
                    </p>
                  </div>
                </div>
              </div>

              {/* Confidentiality */}
              <div
                className={
                  activeIndex === 3 ? "s_tab fade active-tab show" : "s_tab fade"
                }
              >
                <div
                  className="tab_content one"
                  style={{
                    backgroundImage: "url(/assets/images/banner-five-bg.jpg)",
                  }}
                >
                  <div className="content_image">
                    <h2>Confidentiality</h2>
                    <p>
                      Protecting the privacy and sensitive information of clients at all times.
                    </p>
                  </div>
                </div>
              </div>

              {/* Transparency */}
              <div
                className={
                  activeIndex === 4 ? "s_tab fade active-tab show" : "s_tab fade"
                }
              >
                <div
                  className="tab_content one"
                  style={{
                    backgroundImage: "url(/assets/images/home-4-about-1.jpg)",
                  }}
                >
                  <div className="content_image">
                    <h2>Transparency</h2>
                    <p>
                      Ensuring that processes, fees, and decisions are clear and accessible to clients
                      and their families.
                    </p>
                  </div>
                </div>
              </div>

              {/* Efficiency */}
              <div
                className={
                  activeIndex === 5 ? "s_tab fade active-tab show" : "s_tab fade"
                }
              >
                <div
                  className="tab_content one"
                  style={{
                    backgroundImage: "url(/assets/images/image-about-ls.jpg)",
                  }}
                >
                  <div className="content_image">
                    <h2>Efficiency and Diligence</h2>
                    <p>
                      Managing estates and affairs in a timely and cost-effective manner.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Excellence */}
              <div
                className={
                  activeIndex === 6 ? "s_tab fade active-tab show" : "s_tab fade"
                }
              >
                <div
                  className="tab_content one"
                  style={{
                    backgroundImage: "url(/assets/images/tab-sec-bg.jpg)",
                  }}
                >
                  <div className="content_image">
                    <h2>Service Excellence</h2>
                    <p>
                      Striving to improve services continuously, listening to feedback, and making
                      client-focused improvements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Tabs Content */}
        </div>
      </div>
    </div>
  </div>
  <div className="pd_bottom_90" />
</section>


                {/* Why Choose The Public Trustee? */}
                <section className="why_choose_section">
                    {/*===============spacing==============*/}
                    <div className="pd_top_90" />
                    {/*===============spacing==============*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-12">
                                <div className="why_choose_content position-relative z_99">
                                    <div className="title_all_box style_one text-left  dark_color">
                                        <div className="title_sections">
                                            <div className="before_title">Why Choose</div>
                                            <h2 className="title">The Public Trustee?</h2>
                                            <p>
                                                <span className="text_highlight">Appointing the Public Trustee to administer your Estate</span> can be seen as a practical choice, for the following reasons listed below
                                            </p>
                                        </div>
                                    </div>
                                    <div className="why_choose_list">
                                        <ul>
                                            <li>
                                                <p>
                                                    The Public Trustee is accountable to the government and operates under statutory duty so there is less risk of fraud and mismanagement;
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Our services are cheaper than private lawyers or executors because the fees are government-regulated, which can be very helpful for low and or middle-income families needing estate services but lacking resources.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Provides safeguards for assets and interest of minors.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12 text-right">
                                <img src="/assets/images/blog/blog-image-8.jpg" alt="Why Choose The Public Trustee?" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* INFORMATION AND PRIVACY */}
                <section className="information_privacy_section">
                    {/*===============spacing==============*/}
                    <div className="pd_top_90" />
                    {/*===============spacing==============*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                                <div className="information_privacy_content position-relative z_99">
                                    <div className="title_all_box style_one text-left  dark_color">
                                        <div className="title_sections">
                                            <div className="before_title">Information and Privacy</div>
                                            <h3 className="title" style={{fontSize: '1.5rem'}}>The Public Trustee operates with a commitment to safeguarding clients' privacy while balancing the need for transparency and accountability in public service.</h3>
                                        </div>
                                    </div>
                                    <div className="information_privacy_list">
                                        <ul>
                                            <li>
                                                <p>
                                                    As a government-appointed officer, the Public Trustee is bound by legal, ethical, and professional obligations to protect sensitive data.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Information provided by an individual during the administration of estates, or guardianships is treated as confidential and is only shared with authorized parties, such as;
                                                </p>
                                                <ul className="sub_list">
                                                    <li>
                                                        <p>Beneficiaries of the Estates</p>
                                                    </li>
                                                    <li>
                                                        <p>Government agencies, such as Guyana Revenue Authority (GRA) or the courts, where legally required.</p>
                                                    </li>
                                                    <li>
                                                    <p>
                                                        While certain aspects of estate administration—such as public notices for probate—must be disclosed under law, these are limited and follow established legal procedures.
                                                    </p>
                                                    </li>
                                                    <li>
                                                        <p>Companies - Banks, Trust Company and Insurance Company. Information are limited only to what is requested from these institutions.</p>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <p>
                                                    When using the services of the Public Trustee in Guyana, clients can expect a reasonable degree of privacy and confidentiality regarding their personal, financial, and legal information.  
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

               {/* Why Choose The Public Trustee? */}
                <section className="why_choose_section">
                    {/*===============spacing==============*/}
                    <div className="pd_top_90" />
                    {/*===============spacing==============*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-12 text-left">
                                <img src="/assets/images/projects/project-5-img.jpg" alt="How can I find out what information is held about me?" className="img-fluid" />
                            </div>
                            <div className="col-xl-6 col-lg-12 text-right">
                                <div className="why_choose_content position-relative z_99">
                                    <div className="title_all_box style_one text-left  dark_color">
                                        <div className="title_sections">
                                            <div className="before_title">How can I find out</div>
                                            <h2 className="title"> what information is held about me?</h2>
                                        </div>
                                    </div>
                                    <div className="why_choose_list">
                                        <ul>
                                            <li>
                                                <p>
                                                    You may request to access personal information the Public Trustee holds about you.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    You can look at that information and if it is not correct, you can ask us to change it.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_90" />
                    {/*===============spacing==============*/}
                </section>
               
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
                {/*-newsteller end-*/}

            </Layout>
        </>
    )
}