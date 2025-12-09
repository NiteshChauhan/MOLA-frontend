import Link from "next/link"
export default function Service17() {
    return (
        <>
            <section className="service-section-one">
                {/*===============spacing==============*/}
                <div className="pd_top_90" />
                {/*===============spacing==============*/}
                <div className="default-container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="title_all_box style_one  dark_color">
                                <div className="title_sections left">
                                    <div className="title"> About Us</div>
                                    <p> The Public Trustee of Guyana is a corporate body established by statute and an Office with perpetual succession that acts in the administration of deceased persons estates where no one else is available or willing to act... <Link href="/about-us" className="read_more type_one">
                                        <span className="icon-arrow-right" />
                                        Read More
                                    </Link >
                                     </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_top_10" />
                    {/*===============spacing==============*/}
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                            <div className="icon_box_all  style_eight">
                                <div className="icon_content">
                                    <div className="icon">
                                        <span className=" icon-audit-2" />
                                    </div>
                                    <div className="text_box">
                                        <h2>
                                            <Link href="/estate-admin/terms">
                                                Will
                                            </Link >
                                        </h2>
                                        <p>
                                           In simple terms, a will is a document that expresses what is to happen with a person's property upon their death.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_20" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                            <div className="icon_box_all  style_eight">
                                <div className="icon_content">
                                    <div className="icon">
                                        <span className=" icon-united" />
                                    </div>
                                    <div className="text_box">
                                        <h2>
                                            <Link href="/estate-admin/terms">
                                               Estate
                                            </Link >
                                        </h2>
                                        <p>
                                            The term "estate" is commonly used to refer to all the property (including money) and all the debts of a person upon their death.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_20" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                            <div className="icon_box_all  style_eight">
                                <div className="icon_content">
                                    <div className="icon">
                                        <span className=" icon-solution" />
                                    </div>
                                    <div className="text_box">
                                        <h2>
                                            <Link href="/estate-admin/terms">
                                                Estate Process
                                            </Link >
                                        </h2>
                                        <p> The estate administration process involves a series of actions that must be taken by an administrator or executor/executrix.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_20" />
                            {/*===============spacing==============*/}
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_70" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
