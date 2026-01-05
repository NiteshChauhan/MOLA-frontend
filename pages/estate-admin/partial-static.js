import Layout from "@/components/layout/Layout"
import Link from "next/link"
import React from 'react';
// NOTE FOR NEXT.JS PROJECT: When using this in your actual Next.js environment,
// you should UNCOMMENT the actual imports and REMOVE the INLINE LAYOUT component definition below.
// import Layout from "@/components/layout/Layout" 
// import Link from "next/link" 


// --- INLINE LAYOUT COMPONENT (Self-Contained Placeholder) ---
// This placeholder component ensures the file compiles in this environment. 

export default function PartiallyIntestatePage() {
    return (
        <Layout breadcrumbTitle="Partially Intestate Estates">
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
                                        <div className="before_title">The Hybrid Estate</div>
                                        <h2>Partially Intestate Estates</h2>
                                    </div>
                                </div>
                                
                                <div className="pd_bottom_25" />
                                
                                {/* SECTION: DEFINITION */}
                                <div className="definition-section" style={{ padding: '25px', backgroundColor: '#f0f8ff', borderRadius: '10px', borderLeft: '5px solid #007bff', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                                    <h3 style={{ margin: '0 0 15px 0', color: '#007bff', fontSize: '1.4rem' }}>What is Partial Intestacy?</h3>
                                    <p style={{ margin: 0, fontSize: '1.1rem', lineHeight: '1.6', color: '#333' }}>
                                        A Partially Intestate Estate occurs when a person dies with a valid will that does not dispose of all their assets. , meaning the remaining portion of their estate is distributed according to the rules of intestacy. This typically happens when a will fails to name substitute beneficiaries for gifts that lapse (e.g., if a beneficiary dies before the testator) or when the will simply doesn't address all of the deceased's assets, such as not having a residuary clause to cover everything not specifically mentioned.
                                    </p>
                                    
                                </div>

                                {/* SECTION: WHY IT HAPPENS */}
                                
                                
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
