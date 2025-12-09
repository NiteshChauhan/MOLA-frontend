import Layout from "@/components/layout/Layout"
import Link from "next/link"
import React from 'react';

// NOTE FOR NEXT.JS PROJECT: When using this in your actual Next.js environment,
// you should UNCOMMENT the actual imports and REMOVE the INLINE LAYOUT component definition below.
// import Layout from "@/components/layout/Layout" 
// import Link from "next/link" 


// --- INLINE LAYOUT COMPONENT (Self-Contained Placeholder) ---
// This placeholder component ensures the file compiles in this environment. 

export default function InitiateProcessPage() {
    return (
        <Layout breadcrumbTitle="Initiate the Estate Administration process">
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
                                        {/* <div className="before_title">Starting the Process</div> */}
                                        <h2>Initiate the Estate Administration process</h2>
                                    </div>
                                </div>
                                
                                <div className="pd_bottom_25" />
                                
                                {/* DOCUMENTATION REQUIREMENTS */}
                                <div className="section-block" style={{ marginBottom: '40px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', borderLeft: '5px solid #007bff', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                    <h3 style={{ color: '#007bff', marginBottom: '15px' }}>Documentation Required</h3>
                                    
                                    <p style={{ color: '#555', marginBottom: '15px' }}>
                                        In order to commence the estate administration process, you will be required to provide a list of documents mentioned in the Estate Requirement Sheet (<a href="/assets/uploads/EstateRequirmentSheet.pdf" target="blank" style={{ color: '#dc3545', textDecoration: 'underline' }}>insert link to sheet here</a>). 
                                    </p>
                                    <p style={{ color: '#555', margin: 0 }}>
                                        If you need further assistance with the required documents you can reach out to us.
                                    </p>
                                </div>

                                {/* FEES AND CHARGES SECTION */}
                                <div className="section-block" style={{ marginBottom: '40px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                    <h3 style={{ borderBottom: '2px solid #007bff', paddingBottom: '10px', color: '#007bff', marginBottom: '15px' }}>Fees and Charges</h3>
                                    
                                    <h4 style={{ color: '#333', marginTop: '20px', marginBottom: '10px' }}>Public Trustee Fees</h4>
                                    <ul style={{ listStyleType: 'none', paddingLeft: '0', color: '#555', borderBottom: '1px dashed #ddd', paddingBottom: '10px', marginBottom: '15px' }}>
                                        <li style={{ marginBottom: '5px' }}>Admin Fee to Begin: G$4000 (four thousand dollars)</li>
                                        <li style={{ marginBottom: '5px' }}>Notarizing fee: G$3000 (Three Thousand Guyana dollars)</li>
                                        <li style={{ marginBottom: '5px' }}>Commission: 8% of the first G$10,000.00 and 5% of the remainder of all money received or realized for the estate.</li>
                                    </ul>
                                    
                                    <h4 style={{ color: '#333', marginTop: '20px', marginBottom: '15px' }}>Fees Charged by Other Organizations</h4>
                                    <p style={{ color: '#555', marginBottom: '10px' }}>
                                        In administrating an Estate, the Public Trustee is required to obtain a bank statement to verify the exact amount in the bank for the deceased. Listed below are the fees for Bank statements:
                                    </p>
                                    
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', maxWidth: '400px', backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '5px' }}>
                                        <strong style={{ borderBottom: '1px solid #ccc', paddingBottom: '5px' }}>Bank</strong>
                                        <strong style={{ borderBottom: '1px solid #ccc', paddingBottom: '5px', gridColumn: 'span 2' }}>Fee</strong>
                                        
                                        <span>Republic Bank</span>
                                        <span style={{ gridColumn: 'span 2' }}>G$5,000.00</span>
                                        
                                        <span>GBTI</span>
                                        <span style={{ gridColumn: 'span 2' }}>G$3,000.00</span>
                                        
                                        <span>NBS</span>
                                        <span style={{ gridColumn: 'span 2' }}>G$3,000.00</span>
                                    </div>
                                    
                                    <h4 style={{ color: '#333', marginTop: '25px', marginBottom: '10px' }}>Government Charges</h4>
                                    <ul style={{ listStyleType: 'none', paddingLeft: '0', color: '#555' }}>
                                        <li style={{ marginBottom: '5px' }}>Compliance Tax at Guyana Revenue Authority – 0.5%</li>
                                        <li style={{ marginTop: '15px', marginBottom: '10px' }}>Application fee at the Supreme Court for Judicature:</li>
                                        <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
                                            <li style={{ marginBottom: '5px' }}>Letters of Administration fee - G$3,500.00</li>
                                            <li style={{ marginBottom: '5px' }}>Probate or Letters of Administration with will annexed - G$4,500.00</li>
                                        </ul>
                                    </ul>
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
