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
              The Public Trustee of Guyana is a corporate body established by statute and an Office with perpetual succession that acts in the administration of deceased persons estates where no one else is available or willing to act.
            </p>
            <h4>The powers of the Public Trustee includes, but not limited to, the following:</h4>
            <ul>
              <li>Act in the administration of the estates of deceased persons;</li>
              <li>Act as executor or administrator of a will;</li>
              <li>
                Act as guardian or committee, or receiver, of the property of any infant or other person under disability, as the case may be and;
              </li>
              <li>
                Take possession of and administer the estate of any person who is absent from Guyana and who is not fully represented by any attorney in Guyana, and who has left debts unpaid.;
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
            <img src="/assets/images/about/about-13.jpg" className="img-fluid" alt="about" />
          </div>
          {/* <div className="image two">
            <img src="/assets/images/about/about-7.png" className="img-fluid" alt="about" />
            <div className="video_box">
              <VideoBox />
            </div>
          </div> */}
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
                            <div className="col-xl-6 col-lg-9 col-md-18 col-sm-18 col-xs-18">
                                {/* <div className="simple_image_boxes parallax_cover height_264px">
                                    <img src="/assets/images/default.jpg" className="simp_img cover-parallax" alt="image" />
                                </div> */}
                                {/*===============spacing==============*/}
                                {/* <div className="pd_bottom_20" /> */}
                                {/*===============spacing==============*/}
                                <div className="icon_box_all style_three">
                                    <div className="icon_content ">
                                        <div className="icon">
                                            <img src="/assets/images/our-mission1.jpeg" className="img-fluid" alt="our-mission" />
                                        </div>
                                        <div className="txt_content">
                                            <h3><Link href="#" >Our Mission</Link></h3>
                                            <p>Providing equitable and efficient estate administration services to Guyanese. </p>
                                        </div>
                                    </div>
                                    <div className="pd_bottom_110" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-9 col-md-18 col-sm-18 col-xs-18 mt-4 mt-lg-0 mt-xl-0">
                                <div className="icon_box_all style_three">
                                    <div className="icon_content ">
                                        <div className="icon">
                                            <span className=" icon-growth" />
                                        </div>
                                        <div className="txt_content">
                                            <h3><Link href="#" >Our Values</Link></h3>
                                            <p>In seeking to achieve our Mission Statement, the Office of the Public Trustee uphold high legal and professional standards. Our key values are:</p>
                                            {/* <ul>
                                                <li>Integrity</li>
                                                <li>Professionalism </li>
                                                <li>Confidentiality</li>
                                                <li>Transparency</li>
                                                <li>Efficiency and Diligence</li>
                                                <li>Service Excellence</li>
                                            </ul> */}
                                            <div className="btn_left">
                                                <button onClick={() => {
                                                    window.scrollTo({top: document.querySelector("#valuesTabs").offsetTop, behavior: 'smooth'});
                                                }} className="theme-btn one">Read More</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_top_90"  id="valuesTabs" />
                    {/*===============spacing==============*/}
                </section>
                {/*-service end-*/}
 {/*===============spacing==============*/}
                            <div className="pd_bottom_30"  />
                            {/*===============spacing==============*/}
{/* OUR VALUES (Tabs) */}
<section className="values-section">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="title-box">
          <h2>Our Values</h2>
          <p>We are committed to upholding the highest standards of integrity, professionalism, and excellence in all our services.</p>
        </div>
         {/*===============spacing==============*/}
        <div className="pd_bottom_30" />
        {/*===============spacing==============*/}
        <div className="values-list">
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="value-box">
                <div className="icon">
                  <i className="fa fa-shield" aria-hidden="true"></i>
                </div>
                <div className="value-content">
                  <h3>Integrity</h3>
                  <p>Acting honestly, ethically and transparently in all dealings.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="value-box">
                <div className="icon">
                  <i className="fa fa-briefcase" aria-hidden="true"></i>
                </div>
                <div className="value-content">
                  <h3>Professionalism</h3>
                  <p>Demonstrating competence, diligence, and skill in all services.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="value-box">
                <div className="icon">
                  <i className="fa fa-lock" aria-hidden="true"></i>
                </div>
                <div className="value-content">
                  <h3>Confidentiality</h3>
                  <p>Protecting the privacy and sensitive information of clients at all times.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="value-box">
                <div className="icon">
                  <i className="fa fa-eye" aria-hidden="true"></i>
                </div>
                <div className="value-content">
                  <h3>Transparency</h3>
                  <p>Ensuring that processes, fees, and decisions are clear and accessible to clients and their families.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="value-box">
                <div className="icon">
                  <i className="fa fa-clock-o" aria-hidden="true"></i>
                </div>
                <div className="value-content">
                  <h3>Efficiency and Diligence</h3>
                  <p>Managing estates and affairs in a timely and cost-effective manner.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="value-box">
                <div className="icon">
                  <i className="fa fa-star" aria-hidden="true"></i>
                </div>
                <div className="value-content">
                  <h3>Service Excellence</h3>
                  <p>Striving to improve services continuously, listening to feedback and making client-focused improvements.</p>
                </div>
              </div>
            </div>
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
                            <div className="col-xl-6 col-lg-12">
                                <div className="why_choose_content position-relative z_99">
                                    <div className="title_all_box style_one text-left  dark_color">
                                        <div className="title_sections">
                                            <div className="before_title">Why choose the Public Trustee? </div>
                                            {/* <h2 className="title">The Public Trustee?</h2> */}
                                            <p>
                                                <span className="text_highlight">Appointing the Public Trustee to administer your Estate</span> can be seen as a practical choice, for the following reasons listed below
                                            </p>
                                        </div>
                                    </div>
                                    <div className="why_choose_list">
                                        <ul>
                                            <li>
                                                <p>
                                                    The Public Trustee is accountable to the government and operates under a statutory duty so there is less risk of fraud and mismanagement.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Our services cater for low and middle-income families needing estate services but lacking resources.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Provides safeguards for assets and interests of minors.
                                                </p>
                                            </li>
                                            <li>
                                              <p>
                                                Where no one is available or willing to administer the estate of a deceased person.
                                              </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12 text-right">
                                <img src="/assets/images/default.jpg" alt="Why Choose The Public Trustee?" className="img-fluid" />
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
                                            <h3 className="title" style={{fontSize: '1.1rem'}}>The Public Trustee operates with a commitment to safeguarding clients' privacy while balancing the need for transparency and accountability in public service.</h3>
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
                                                    Information provided by an individual during the administration of estates, or guardianships is treated as confidential and is only shared with authorized parties, such as:
                                                </p>
                                                <ul className="sub_list">
                                                    <li>
                                                        <p>Beneficiaries of the Estates.</p>
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
                                                        <p>Companies such as Banks, a Trust Company and an Insurance Company. Information are limited only to what is requested from these financial institutions.</p>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <p>
                                                    When using the services of the Public Trustee in Guyana, clients can expect privacy and confidentiality regarding their personal, financial, and legal information- take out a reasonable degree  
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
                                <img src="/assets/images/projects/default.jpg" alt="How can I find out what information is held about me?" className="img-fluid" />
                            </div>
                            <div className="col-xl-6 col-lg-12 text-right">
                                <div className="why_choose_content position-relative z_99">
                                    <div className="title_all_box style_one text-left  dark_color">
                                        <div className="title_sections">
                                            <div className="before_title">How can I find out what information is held about me?</div>
                                            {/* <h2 className="title"> what information is held about me?</h2> */}
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