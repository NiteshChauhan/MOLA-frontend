import Layout from "@/components/layout/Layout"
import Link from "next/link"
import React from 'react';

// NOTE FOR NEXT.JS PROJECT: When using this in your actual Next.js environment,
// you should UNCOMMENT the actual imports and REMOVE the INLINE LAYOUT component definition below.
// import Layout from "@/components/layout/Layout" 
// import Link from "next/link" 


// --- INLINE LAYOUT COMPONENT (Self-Contained Placeholder) ---
// This placeholder component ensures the file compiles in this environment. 

export default function SmallEstatesPage() {
    return (
        <Layout breadcrumbTitle="Small Estates">
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
                                        <div className="before_title">Simplified Administration</div>
                                        <h2>Small Estates</h2>
                                    </div>
                                </div>
                                
                                <div className="pd_bottom_25" />
                                
                                <div className="grant-needed-section" style={{ padding: '25px', backgroundColor: '#e9f7ff', borderRadius: '10px', borderLeft: '5px solid #007bff', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                                    <h3 style={{ margin: '0 0 15px 0', color: '#007bff', fontSize: '1.4rem' }}>Is a Grant of Representation always needed?</h3>
                                    <p style={{ margin: 0, fontSize: '1.1rem', lineHeight: '1.6', color: '#333', fontWeight: 'bold' }}>
                                        No, a grant is not required if the assets of the deceased are transferable without one.
                                    </p>
                                </div>
                                 <div className="pd_bottom_25" />   
                                {/* SECTION: MONETARY EXEMPTION */}
                                    
                                <h3 style={{ margin: '0 0 15px 0', color: '#007bff', fontSize: '1.4rem' }}>Assets Not Exceeding G$750,000.00</h3>
                                <div className="exemption-section" style={{ marginTop: '30px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                    {/* <h4 style={{ borderBottom: '2px solid #ffc107', paddingBottom: '10px', color: '#856404', marginBottom: '15px' }}>Assets Not Exceeding G$750,000.00</h4>
                                     */}
                                    <p style={{ color: '#555', marginBottom: '15px' }}>
                                        Moreover, where the assets of the deceased are money in the bank which does not exceed seven hundred and fifty thousand dollars ($\G$750,000.00$), Probate or Letters of Administration is also not required. In such a case, the executor, surviving spouse or heir to the estate may apply in writing to the bank for a disbursement of such sum of money.
                                    </p>
                                </div>
                                
                                {/* SECTION: PUBLIC TRUSTEE POWER */}
                                <div className="pt-power-section" style={{ marginTop: '30px', padding: '15px', borderLeft: '5px solid #007bff', backgroundColor: '#f0f9f0', borderRadius: '5px' }}>
                                    <p style={{ margin: 0, color: '#155724', fontWeight: 'bold' }}>
                                        The Public Trustee is also now empowered to administer an estate of a deceased person without a Grant of Letters of Administration where the value of the estate does not exceed seven hundred and fifty thousand dollars ($\G$750,000.00$).
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
