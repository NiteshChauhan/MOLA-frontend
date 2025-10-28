import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function ProjectDetails() {
    return (
        <>
            <Layout breadcrumbTitle="Funeral Payment">
                <div>
                    <section className="project-detail-section">
                        {/*===============spacing==============*/}
                        <div className="pd_top_90" />
                        {/*===============spacing==============*/}
                        <div className="container" >
                            <div className="row">
                                <div className="col-xl-9 col-lg-12 mb-5 mb-lg-5 mb-xl-0">
                                    <div className="title_all_box style_one dark_color">
                                        <div className="title_sections left">
                                            <div className="before_title">What do</div>
                                            <h2>I do after the death of a loved one?</h2>
                                        </div>
                                    </div>
                                   
                                    <div className="pd_bottom_10" />
                                   
                                    <div className="description_box">
                                        <p>You may approach the Office of the Public Trustee to access the accounts of a deceased person held with a local commercial bank to help cover funeral expenses less than $750,000. In order to utilize this service, you must present the following documents.</p>
                                    </div>
                                   
                                    <div className="pd_bottom_15" />
                                   
                                    <div className="description_box">
                                        <ul>
                                            <li>
                                                Death Registration / Death Registration of the deceased 
                                            </li>
                                            <li>	
                                                Itemized Quotation from a funeral home.
                                            </li>
                                            <li>	
                                                Bank Statement or Deposit slip showing bank account number
                                             </li>
                                            <li>
                                                	Birth Certificate of deceased 
                                            </li>
                                            <li>
                                                	Identification for the deceased and the applicant. 
                                            </li>

                                        </ul>
                                        <p>Denounce with righteous indignation and dislike men who are so beguiled and demoralized.</p>
                                    </div>
                                   
                                    <div className="pd_bottom_15" />
                                   
                                    <div className="description_box">
                                        <p>If you are unable to cover the cost of the funeral for a loved one and they were an eligible contributor to the National Insurance Scheme, you may be able to access a sum of money from the NIS to help with the funeral expenses.</p>
                                    </div>
                                   
                                    <div className="pd_bottom_15" />
                                   
                                    <div className="description_box">
                                        <p>Individuals can also access financial assistance through the National Insurance Scheme (NIS)'s Funeral Benefits of up to $25,000 for insured persons, or through private funeral insurance plans from private insurance companies.</p>
                                    </div>
                                   
                                    <div className="pd_bottom_25" />
                                    
                                </div>
                                {/* <div className="col-xl-3 col-lg-12">
                                    <div className="project_information">
                                        <h2>Project Information</h2>
                                        <div className="project_information_bo">
                                            <div className="repeat_informtion">
                                                <h6>Client: </h6>
                                                <p>The Sixmothers Group</p>
                                            </div>
                                            <div className="repeat_informtion">
                                                <h6>Location: </h6>
                                                <p>Philadelphia, United States</p>
                                            </div>
                                            <div className="repeat_informtion">
                                                <h6>Date: </h6>
                                                <p> February 14, {new Date().getFullYear()}</p>
                                            </div>
                                            <div className="repeat_informtion">
                                                <h6>Website: </h6>
                                                <p>www.clientwebsite.com</p>
                                            </div>
                                            <div className="social_medias">
                                                <Link href="#">
                                                    <span className="fa fa-facebook" />
                                                </Link>
                                                <Link href="#">
                                                    <span className="fa fa-twitter" />
                                                </Link>
                                                <Link href="#">
                                                    <span className="fa fa-skype" />
                                                </Link>
                                                <Link href="#">
                                                    <span className="fa fa-instagram" />
                                                </Link>
                                            </div>
                                            <Link href="#" className="theme-btn two">Interested</Link>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_70" />
                        {/*===============spacing==============*/}
                    </section>
                    {/*-newsteller-*/}
                    <section className="newsteller style_one bg_dark_1">
                        {/*===============spacing==============*/}
                        <div className="pd_top_40" />
                        {/*===============spacing==============*/}
                        {/* <div className="auto-container">
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
                        </div> */}
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_40" />
                        {/*===============spacing==============*/}
                    </section>
                </div>

            </Layout>
        </>
    )
}