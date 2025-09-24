import Link from "next/link"

export default function ModalPopup({ isContactPopup, handleContactPopup }) {
    return (
        <>
            <div className={`modal_popup one ${isContactPopup ? "contact-popup-visible" : ""}`}>
                <div className="modal-popup-inner">
                    <div className="close-modal" onClick={handleContactPopup}><i className="fa fa-times" /></div>
                    <div className="modal_box">
                        <div className="row">
                            <div className="col-lg-5 col-md-12 form_inner">
                                <div className="form_content">
                                    <form className="contact-form">
                                        <p>
                                            <label>Feedback type<br />
                                            <select name="feedback_type" className="form-control">
                                                <option value="">Select</option>
                                                <option value="Feedback">Feedback</option>
                                                <option value="Complaint">Complaint</option>
                                            </select>
                                            <br />
                                            <i className="fa fa-comment" /><br />
                                            </label>
                                        </p>
                                        <p>
                                            <label> Kindly select the service (s) your feedback or complaint is about?<br />
                                                <select name="feedback_service" className="form-control">
                                                    <option value="">Select</option>
                                                    <option value="State Administration">State Administration</option>
                                                    <option value="Probate">Probate</option>
                                                    <option value="Insolvency">Insolvency</option>
                                                    <option value="Minors account">Minors account</option>
                                                    <option value="Property Transfer">Property Transfer</option>
                                                </select>
                                                <br />
                                                <i className="fa fa-question-circle" /><br />
                                            </label>
                                        </p>
                                        <p>
                                            <label> Estate Name<br />
                                                <input type="text" name="estate_name" size={40} aria-required="true" aria-invalid="false" placeholder="Enter Your Estate Name" />
                                                <br />
                                                <i className="fa fa-home" /><br />
                                            </label>
                                        </p>    
                                        <p>
                                            <label> Your name<br />
                                                <input type="text" name="name" size={40} aria-required="true" aria-invalid="false" placeholder="Enter Your Name" />
                                                <br />
                                                <i className="fa fa-user" /><br />
                                            </label>
                                        </p>
                                        <p><label> Your email<br />
                                            <input type="email" name="email" size={40} aria-required="true" aria-invalid="false" placeholder="Enter Your Email" />
                                            <br />
                                            <i className="fa fa-envelope" /><br />
                                        </label>
                                        </p>
                                        <p>
                                            <label> Has this matter been raised before?<br />
                                                <select name="has_matter_been_raised_before" className="form-control">
                                                    <option value="">Select</option>
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                </select>
                                                <br />
                                                <i className="fa fa-question-circle" /><br />
                                            </label>
                                        </p>
                                        <p>
                                            <label> Subject<br />
                                                <input type="text" name="subject" size={40} aria-required="true" aria-invalid="false" placeholder="Enter Your Subject" />
                                                <br />
                                                <i className="fa fa-folder" /><br />
                                            </label>
                                        </p>
                                        <p>
                                            <label> Please tell us your feedback<br />
                                                <textarea name="feedback" cols={40} rows={10} className="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Enter Your Feedback" defaultValue={""} />
                                                <br />
                                                <i className="fa fa-comments" /><br />
                                            </label>
                                        </p>
                                        <p>
                                            <label> What outcome are you hoping for (e.g. apology)?<br />
                                                <input type="text" name="outcome" size={40} aria-required="true" aria-invalid="false" placeholder="Please Enter Your Outcome" />
                                                <br />
                                                <i className="fa fa-mobile" /><br />
                                            </label>
                                        </p>
                                        <p><input type="submit" defaultValue="Submit" /></p>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12 about_company_inner">
                                <div className="abt_content">
                                    <div className="logo">
                                        <img src="/assets/images/logo-default.png" alt="img" className="company_logo_modal" />
                                    </div>
                                    <div className="text">
                                        <p>We value your feedback whether positive or negative because it helps us to monitor, evaluate, and continuously improve the services we provide to meet your needs. </p>
                                        {/* <Link href="#">Read More</Link> */}
                                    </div>
                                    <div className="post_contet_modal">
                                        <h2> Latest Blogs</h2>
                                        <div className="post_enable">
                                            <div className="modal_post_grid">
                                                <Link href="/blog-single">
                                                    <img width={852} height={812} src="/assets/images/blog/blog-image-9.jpg" className="main_img wp-post-image" alt="img" />
                                                </Link>
                                            </div>
                                            <div className="modal_post_grid">
                                                <Link href="/blog-single">
                                                    <img width={852} height={812} src="/assets/images/blog/blog-image-8.jpg" className="main_img wp-post-image" alt="img" />
                                                </Link>
                                            </div>
                                            <div className="modal_post_grid">
                                                <Link href="/blog-single">
                                                    <img width={852} height={812} src="/assets/images/blog/blog-image-7.jpg" className="main_img wp-post-image" alt="img" />
                                                </Link>
                                            </div>
                                            <div className="modal_post_grid">
                                                <Link href="/blog-single">
                                                    <img width={852} height={812} src="/assets/images/blog/blog-image-6.jpg" className="main_img wp-post-image" alt="img" />
                                                </Link>
                                            </div>
                                            <div className="modal_post_grid">
                                                <Link href="/blog-single">
                                                    <img width={852} height={812} src="/assets/images/blog/blog-image-5.jpg" className="main_img wp-post-image" alt="img" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="copright">
                                        © {new Date().getFullYear()} Creote. All Rights Reserved.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
