import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';

export default function ModalPopup({ isContactPopup, handleContactPopup }) {
  const [formData, setFormData] = useState({
    feedback_type: "",
    feedback_service: "",
    estate_name: "",
    name: "",
    email: "",
    has_matter_been_raised_before: "",
    feedback_subject: "",
    feedback: "",
    outcome: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post("/api/feedback", formData);
      toast.success("Feedback submitted successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setFormData({
        feedback_type: "",
        feedback_service: "",
        estate_name: "",
        name: "",
        email: "",
        has_matter_been_raised_before: "",
        feedback_subject: "",
        feedback: "",
        outcome: "",
      });
      handleContactPopup(); // close modal
    } catch (error) {
      toast.error("Error submitting feedback.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`modal_popup one ${isContactPopup ? "contact-popup-visible" : ""}`}>
      <div className="modal-popup-inner">
        <div className="close-modal" onClick={handleContactPopup}>
          <i className="fa fa-times" />
        </div>
        <div className="modal_box">
          <div className="row">
            <div className="col-lg-5 col-md-12 form_inner">
              <div className="form_content">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <p>
                    <label>Feedback type<br />
                      <select
                        name="feedback_type"
                        className="form-control"
                        value={formData.feedback_type}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Complaint">Complaint</option>
                      </select>
                    </label>
                  </p>
                  <p>
                    <label>Kindly select the service<br />
                      <select
                        name="feedback_service"
                        className="form-control"
                        value={formData.feedback_service}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select</option>
                        <option value="State Administration">State Administration</option>
                        <option value="Probate">Probate</option>
                        <option value="Insolvency">Insolvency</option>
                        <option value="Minors account">Minors account</option>
                        <option value="Property Transfer">Property Transfer</option>
                      </select>
                    </label>
                  </p>
                  <p>
                    <label>Estate Name<br />
                      <input
                        type="text"
                        name="estate_name"
                        value={formData.estate_name}
                        onChange={handleChange}
                        placeholder="Enter Your Estate Name"
                      />
                    </label>
                  </p>
                  <p>
                    <label>Your Name<br />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter Your Name"
                      />
                    </label>
                  </p>
                  <p>
                    <label>Your Email<br />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter Your Email"
                      />
                    </label>
                  </p>
                  <p>
                    <label>Has this matter been raised before?<br />
                      <select
                        name="has_matter_been_raised_before"
                        className="form-control"
                        value={formData.has_matter_been_raised_before}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </label>
                  </p>
                  <p>
                    <label>Subject<br />
                      <input
                        type="text"
                        name="feedback_subject"
                        value={formData.feedback_subject}
                        onChange={handleChange}
                        placeholder="Enter Subject"
                      />
                    </label>
                  </p>
                  <p>
                    <label>Please tell us your feedback<br />
                      <textarea
                        name="feedback"
                        value={formData.feedback}
                        onChange={handleChange}
                        required
                        placeholder="Enter Your Feedback"
                      />
                    </label>
                  </p>
                  <p>
                    <label>What outcome are you hoping for?<br />
                      <input
                        type="text"
                        name="outcome"
                        value={formData.outcome}
                        onChange={handleChange}
                        placeholder="Please Enter Your Outcome"
                      />
                    </label>
                  </p>
                  <p>
                    {isSubmitting ? (
                      <button type="submit" disabled>
                        <div className="spinner-border text-primary" role="status" aria-live="assertive" aria-os="true">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </button>
                    ) : (
                      <button type="submit">Submit</button>
                    )}
                  </p>
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
                    {/* <div className="post_contet_modal">
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
                    </div> */}
                </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

