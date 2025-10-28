import Layout from "@/components/layout/Layout"
import Link from "next/link"
import React from 'react';
// NOTE FOR NEXT.JS PROJECT: When using this in your actual Next.js environment,
// you should UNCOMMENT the actual imports and REMOVE the INLINE LAYOUT component definition below.
// import Layout from "@/components/layout/Layout" 
// import Link from "next/link" 


// --- INLINE LAYOUT COMPONENT (Self-Contained Placeholder) ---
// This placeholder component ensures the file compiles in this environment. 
export default function MinorAndEstatesPage() {
    return (
        <Layout breadcrumbTitle="Minor and Estates">
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
                                        <div className="before_title">Beneficiaries Under 18</div>
                                        <h2>Minor and Estates</h2>
                                    </div>
                                </div>
                                
                                <div className="pd_bottom_25" />
                                
                                {/* SECTION: WHO IS A MINOR */}
                                <div className="definition-section" style={{ padding: '25px', backgroundColor: '#e9f7ff', borderRadius: '10px', borderLeft: '5px solid #007bff', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                                    <h3 style={{ margin: '0 0 15px 0', color: '#007bff', fontSize: '1.4rem' }}>Who is a Minor?</h3>
                                    <p style={{ margin: 0, fontSize: '1.1rem', lineHeight: '1.6', color: '#333' }}>
                                        A minor is anyone who is under the age of eighteen (18) years old.
                                    </p>
                                </div>

                                {/* SECTION: MINOR'S INVOLVEMENT IN ESTATES */}
                                <div className="involvement-section" style={{ marginTop: '30px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                    <h3 style={{ borderBottom: '2px solid #28a745', paddingBottom: '10px', color: '#28a745', marginBottom: '20px' }}>Receiving Assets</h3>
                                    
                                    <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                                        <li style={{ marginBottom: '15px', padding: '10px', borderLeft: '3px solid #dc3545', backgroundColor: '#fdf3f5' }}>
                                            <strong style={{ color: '#dc3545' }}>Restriction:</strong> If a minor is involved in an estate, they cannot sign as receiving assets of any form (movable and immovable property).
                                        </li>
                                        <li style={{ marginBottom: '15px', padding: '10px', borderLeft: '3px solid #28a745', backgroundColor: '#f0f9f0' }}>
                                            <strong style={{ color: '#155724' }}>Solution:</strong> If a minor has to receive a share of an estate (either from a will or under intestacy rules), the legal guardian of that minor may sign on the behalf of the minor to receive and hold assets on the behalf of the minor until their 18th birthday.
                                        </li>
                                    </ul>
                                </div>
                                
                                {/* SECTION: TIMING NOTE */}
                                <div className="timing-note" style={{ marginTop: '30px', padding: '15px', borderLeft: '5px solid #ffc107', backgroundColor: '#fff8e1', borderRadius: '5px' }}>
                                    <p style={{ fontWeight: 'bold', margin: '0 0 5px 0', color: '#856404' }}>Administration Timeline Note:</p>
                                    <p style={{ margin: 0, color: '#856404' }}>
                                        Because the estate administration process takes time to conclude, someone can be a minor at the beginning of the administration process but become an adult by the time the assets can be transferred and can therefore sign on their own as receiving assets.
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
