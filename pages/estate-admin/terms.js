import Layout from "@/components/layout/Layout"
import Link from "next/link"
import React from 'react';

// NOTE FOR NEXT.JS PROJECT: When using this in your actual Next.js environment,
// you should UNCOMMENT the actual imports and REMOVE the INLINE LAYOUT component definition below.
// import Layout from "@/components/layout/Layout" 
// import Link from "next/link" 


// --- INLINE LAYOUT COMPONENT (Self-Contained Placeholder) ---
// This placeholder component ensures the file compiles in this environment. 

export default function CommonTermsPage() {
    return (
        <Layout breadcrumbTitle="Common terms">
            <div>
                <section className="project-detail-section">
                    {/*===============spacing==============*/}
                    <div className="pd_top_90" />
                    {/*===============spacing==============*/}
                    <div className="container" >
                        <div className="row">
                            
                            {/* MAIN CONTENT COLUMN */}
                            <div className="col-xl-12 col-lg-12">
                                <div className="title_all_box style_one dark_color">
                                    <div className="title_sections left">
                                        <div className="before_title">Glossary</div>
                                        <h2>Common Terms in Estate Administration</h2>
                                    </div>
                                </div>
                                
                                <div className="pd_bottom_25" />
                                
                                {/* SECTION: KEY TERMINOLOGY */}
                                <div className="definitions-section" style={{ marginTop: '30px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                    <h3 style={{ borderBottom: '2px solid #007bff', paddingBottom: '10px', color: '#007bff', marginBottom: '20px' }}>Key Terminology</h3>
                                    
                                    <dl style={{ margin: 0 }}>
                                        <dt style={{ fontWeight: 'bold', marginTop: '15px', color: '#333' }}>Will</dt>
                                        <dd style={{ marginLeft: '0', paddingLeft: '15px', borderLeft: '3px solid #eee', marginBottom: '15px', color: '#555' }}>In simple terms, a Will is a document that expresses what is to happen with a person's property upon their death.</dd>

                                        <dt style={{ fontWeight: 'bold', marginTop: '15px', color: '#333' }}>Estate</dt>
                                        <dd style={{ marginLeft: '0', paddingLeft: '15px', borderLeft: '3px solid #eee', marginBottom: '15px', color: '#555' }}>The term Estate is commonly used to refer to all the property (including money) and all the debts of a person upon their death.</dd>

                                        <dt style={{ fontWeight: 'bold', marginTop: '15px', color: '#333' }}>Testator / Testatrix</dt>
                                        <dd style={{ marginLeft: '0', paddingLeft: '15px', borderLeft: '3px solid #eee', marginBottom: '15px', color: '#555' }}>Who is generally someone who makes a Will Whereas. The term Testatrix is used to specifically refer to a woman who makes a Will. When a person dies leaving a Will, he is said to have died Testate.</dd>
                                        
                                        <dt style={{ fontWeight: 'bold', marginTop: '15px', color: '#333' }}>Executor</dt>
                                        <dd style={{ marginLeft: '0', paddingLeft: '15px', borderLeft: '3px solid #eee', marginBottom: '15px', color: '#555' }}>Who is someone who is named or appointed in a Will to deal with or administer the estate of a deceased person.</dd>

                                        <dt style={{ fontWeight: 'bold', marginTop: '15px', color: '#333' }}>Administrator</dt>
                                        <dd style={{ marginLeft: '0', paddingLeft: '15px', borderLeft: '3px solid #eee', marginBottom: '15px', color: '#555' }}>Who is someone who is appointed to deal with or administer the estate of a deceased person where he dies intestate (without a valid Will), or where he dies leaving a valid Will but appoints no executor, or the appointed executor is unable or unwilling to act.</dd>

                                        <dt style={{ fontWeight: 'bold', marginTop: '15px', color: '#333' }}>Beneficiary</dt>
                                        <dd style={{ marginLeft: '0', paddingLeft: '15px', borderLeft: '3px solid #eee', marginBottom: '15px', color: '#555' }}>Who is someone who is to receive a gift or property under a Will.</dd>

                                        <dt style={{ fontWeight: 'bold', marginTop: '15px', color: '#333' }}>Heir</dt>
                                        <dd style={{ marginLeft: '0', paddingLeft: '15px', borderLeft: '3px solid #eee', marginBottom: '15px', color: '#555' }}>Who is a person who is entitled to receive property from a person who dies intestate (without a Will).</dd>
                                    </dl>
                                </div>
                                
                                {/* SECTION: ESTATE PROCESS */}
                                <div className="process-section" style={{ marginTop: '30px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                    <h3 style={{ borderBottom: '2px solid #007bff', paddingBottom: '10px', color: '#007bff', marginBottom: '20px' }}>The Estate Administration Process</h3>
                                    <p>The estate administration process involves a series of actions that must be taken by an administrator or executor/executrix in order to successfully complete the distribution of assets. To make things simple, it is important to outline four broad categories:</p>
                                    
                                    <ol style={{ paddingLeft: '20px', color: '#555' }}>
                                        <li style={{ marginBottom: '15px' }}>Calling in the estate: This involves requesting valuations and statements of account, shares, or asset values, as at the date of death of a deceased person.</li>
                                        <li style={{ marginBottom: '15px' }}>Declaring the estate to the Guyana Revenue Authority (GRA): This includes the preparation of oaths and affidavits, statements of assets and liabilities, and filing with GRA.</li>
                                        <li style={{ marginBottom: '15px' }}>Making the Application to the Supreme Court: This step is necessary to obtain a grant of Letters of Administration, Letters of Administration with Will annexed, or a Grant of Probate.</li>
                                        <li style={{ marginBottom: '15px' }}>Distribution of assets: The final step of the process is the distribution of assets to the persons entitled according to the Will or intestacy laws.</li>
                                    </ol>
                                </div>

                                {/* SECTION: SMALL ESTATES EXCEPTION NOTE */}
                                <div className="note-section" style={{ marginTop: '30px', padding: '15px', borderLeft: '5px solid #ffc107', backgroundColor: '#fff3cd', borderRadius: '5px' }}>
                                    <p style={{ fontWeight: 'bold', margin: '0 0 5px 0', color: '#856404' }}>Small Estates Exception:</p>
                                    <p style={{ margin: 0, color: '#856404' }}>
                                        In Guyana, small estates (involving movable assets valued at less than G$750,000.00 as at the date of death) can be distributed without having to apply to the High Court pursuant to Section 25(1) B of the Deceased Persons Estates Administration Act, Chapter 12:01, as amended by the{' '}
                                        {/* Using <a> tag as a stand-in for <Link> */}
                                        <a href="/estate-admin/amendment-act-2024" style={{ color: '#856404', textDecoration: 'underline', fontWeight: 'bold' }}>
                                            Deceased Persons Estates Administration (Amendment) Acts, No. 30 of 2021 and No. 17 of 2024.
                                        </a>
                                    </p>
                                </div>
                                
                                <div className="pd_bottom_25" />
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_70" />
                    {/*===============spacing==============*/}
                </section>
            </div>
        </Layout>
    )
}
