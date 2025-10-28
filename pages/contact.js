import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter , faSkype, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Head from 'next/head'
import { useState } from "react";
import axios from "axios";

export default function Contact() {
    const [formData, setFormData] = useState({
    name: "",
    contact_details: "",
    brief_description: "",
    date_of_appointment: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post("/api/appointment", formData);
      if (response.data.success) {
        setMessage("Appointment submitted successfully!");
        setTimeout(() => {
          setMessage("");   
        }, 3000);
      } else {
        setMessage("Failed to submit appointment. Please try again.");
        setTimeout(() => {
          setMessage("");
        },3000);
        setFormData({
          name: "",
          contact_details: "",
          brief_description: "",
          date_of_appointment: "",
        });
      }
    } catch (err) {
      console.error(err);
      setMessage("Failed to submit appointment. Please try again.");
    } finally {
      setLoading(false);
    }
  };
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <Layout breadcrumbTitle="Contact">
                <div>
                    <section className="contact-section">
                        {/*===============spacing==============*/}
                        <div className="pd_top_90" />
                        {/*===============spacing==============*/}
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-6 mb-5 mb-lg-5 mb-xl-0">
                                    <div className="contact_form_box_all type_one">
                                        <div className="contact_form_box_inner">
                                            <div className="contact_form_shortcode">
                                                <form id="contact-form"  onSubmit={handleSubmit}>
                                                    <div className="messages" />
                                                    <div className="controls">
                                                        <div className="row">
                                                            <div className="col-sm-12">
                                                                <div className="form-group">
                                                                    <label> Your Name<br /></label>
                                                                    <input type="text" name="name" placeholder="Your Name *" 
                                                                    value={formData.name}
                                                                    onChange={handleChange}
                                                                    required="required" data-error="Enter Your Name" />
                                                                    <div className="help-block with-errors" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <div className="form-group">
                                                                    <label> Contact Details<br /></label>
                                                                    <textarea name="contact_details" required="required" 
                                                                    value={formData.contact_details}
                                                                    onChange={handleChange} 
                                                                    placeholder="Contact Details" rows={5} />
                                                                    <div className="help-block with-errors" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <div className="form-group">
                                                                    <label> Brief Description of what services you require <br /></label>
                                                                    <textarea name="brief_description" placeholder="Brief Description of what services you require" rows={3} required="required" 
                                                                    value={formData.brief_description}
                                                                    onChange={handleChange}
                                                                    data-error="Please, enter a brief description of what services you require." />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <div className="form-group">
                                                                    <label> Date of Appointment <br /></label>
                                                                    <input type="date" name="date_of_appointment" placeholder="Date of Appointment" required="required" 
                                                                    value={formData.date_of_appointment}
                                                                    onChange={handleChange}
                                                                    data-error="Please, select a date of appointment." min={new Date().toISOString().split('T')[0]} />
                                                                    <div className="help-block with-errors" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <div className="form-group mg_top apbtn">
                                                                    <button className="theme_btn" type="submit" disabled={loading}> {loading ? "Submitting..." : "Submit Appointment"}</button>
                                                                    {message && <p className="text-success">{message}</p>}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 pd_left_30">
                                    <div className="title_all_box style_one dark_color">
                                        <div className="title_sections left">
                                            <div className="before_title">Contact Info to</div>
                                            <h2>MAKE AN APPOINTMENT </h2>
                                            <p>If you would like to make an appointment with the Office of the Public Trustee, you can fill out the form and one of our Legal Clerk will call you to arrange an appointment.
                                            </p>
                                            <p>    
                                                Alternatively, you can contact us directly on 226-4946
                                            </p>
                                        </div>
                                    </div>
                                    <div className="contact_box_content style_one">
                                        <div className="contact_box_inner icon_yes">
                                            <div className="icon_bx">
                                                <span className=" icon-placeholder" />
                                            </div>
                                            <div className="contnet">
                                                <h3> Visit Us in person </h3>
                                                <p>
                                                    91 Middle Street, South Cummingsburg, Georgetown, Guyana
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_15" />
                                    {/*===============spacing==============*/}
                                    <div className="contact_box_content style_one">
                                        <div className="contact_box_inner icon_yes">
                                            <div className="icon_bx">
                                                <span className="icon-phone-call" />
                                            </div>
                                            <div className="contnet">
                                                <h3> General Enquires </h3>
                                                <p>
                                                    Phone: 226-4946
                                                 </p>
                                                 <p>   
                                                   Phone: 231-7388
                                                    </p>
                                                    <p>
                                                    Email: admin.publictrustee@mola.gov.gy
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_15" />
                                    {/*===============spacing==============*/}
                                    <div className="contact_box_content style_one">
                                        <div className="contact_box_inner icon_yes">
                                            <div className="icon_bx">
                                                <span className="fa fa-clock-o" />
                                            </div>
                                            <div className="contnet">
                                                <h3>Our Office Hours </h3>
                                                <p>
                                                    Mon-Fri:  8:00am to 04.30pm (Saturday & Sunday: Closed)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_40" />
                                    {/*===============spacing==============*/}
                                    <div className="social_media_v_one style_two">
                                        <ul>
                                            <li>
                                                <Link href="#" className="social_link">
                                                    <FontAwesomeIcon icon={faFacebookF} />
                                                    <small>facebook</small>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="social_link">
                                                    <FontAwesomeIcon icon={faInstagram} />
                                                    <small>instagram</small>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="social_link">
                                                    <FontAwesomeIcon icon={faYoutube} />
                                                    <small>youtube</small>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_top_70" />
                        {/*===============spacing==============*/}
                    </section>
                    <section className="contact-map-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <section className="map-section">
                                        {/*Map Outer*/}
                                        <div className="map-outer">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan%20Rafael%2C%20California%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={570} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_top_90" />
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
                </div>

            </Layout>
        </>
    )
}