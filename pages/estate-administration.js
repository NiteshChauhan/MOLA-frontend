import Layout from "@/components/layout/Layout"
import Link from "next/link"
import React from 'react';

// NOTE FOR NEXT.JS PROJECT: Uncomment these lines below and remove the inline 'Layout' definition
// to use your project's components and Next.js routing:
// import Layout from "@/components/layout/Layout";
// import Link from "next/link";


// --- INLINE LAYOUT COMPONENT ---
// This is acting as the Layout component to ensure compilation in this environment.
// In your Next.js project, this should be removed and the original import above should be used.


// Define the navigation links for the sidebar
const EstateAdminNav = [
    { title: "1. Who can apply to the Public Trustee?", href: "/estate-admin/apply" },
    { title: "2. Common terms", href: "/estate-admin/terms" },
    { title: "3. Intestate Estates", href: "/estate-admin/intestate" },
    { title: "4. Testate Estates", href: "/estate-admin/testate" },
    { title: "5. Partially Intestate", href: "/estate-admin/partial" },
    { title: "6. Minor and Estates", href: "/estate-admin/minors-and-estates" }, // Note: This matches the mega menu path
    { title: "7. Small Estates", href: "/estate-admin/small-estates" },
    { title: "8. Special classes of person", href: "/estate-admin/special-classes" },
    { title: "9. Initiate the Estate Administration process", href: "/estate-admin/initiate-process" },
    { title: "10. FAQ", href: "/estate-admin/faq" },
];

export default function EstateAdminIndex() {
    // Now correctly uses <Layout> tag name
    return (
        <Layout breadcrumbTitle="Estate Administration">
            <div>
                <section className="project-detail-section">
                    {/*===============spacing==============*/}
                    <div className="pd_top_90" />
                    {/*===============spacing==============*/}
                    <div className="container" >
                        <div className="row">
                            
                            {/* MAIN CONTENT COLUMN */}
                            <div className="col-xl-9 col-lg-12 mb-5 mb-lg-5 mb-xl-0">
                                <div className="title_all_box style_one dark_color">
                                    <div className="title_sections left">
                                        <div className="before_title">The Process Of</div>
                                        <h2>Estate Administration</h2>
                                    </div>
                                </div>
                                
                                <div className="pd_bottom_10" />
                                
                                <div className="description_box">
                                    <p>Estate administration is the comprehensive legal process of managing and distributing a deceased person's assets and affairs. This process is overseen by an individual, known as the "personal representative," who is responsible for paying debts and taxes and distributing the remaining assets to beneficiaries. A personal representative in the case of a testate estate (with a will) would be the executor/executrix appointed in the will. If someone dies&nbsp;intestate, the administrator appointed by the court by way of a Grant of Letters of Administration becomes the personal representative of the estate.</p>
                                </div>

                                <div className="pd_bottom_25" />
                                
                                <div className="description_box">
                                    <h3>Key Steps in Administration</h3>
                                    <p>The journey of estate administration can be complex, involving identification of assets, calculation of liabilities, securing grants of representation (like Probate or Letters of Administration), and finally, distribution. The links in the sidebar provide detailed guidance on each specific phase and circumstance you may encounter.</p>
                                </div>
                                
                                <div className="pd_bottom_25" />
                            </div>
                            
                            {/* SIDEBAR NAVIGATION COLUMN */}
                            <div className="col-xl-3 col-lg-12">
                                <div className="project_information sticky-sidebar">
                                    <h2 style={{ fontSize: '20px', borderBottom: '2px solid #007bff', paddingBottom: '5px' }}>Estate Administration Topics</h2>
                                    <div className="project_information_bo">
                                        <ul className="list-group list-group-flush admin-nav" style={{ listStyleType: 'none', padding: 0 }}>
                                            {EstateAdminNav.map((item, index) => (
                                                <li 
                                                    className="list-group-item" 
                                                    key={index} 
                                                    style={{ 
                                                        padding: '10px 0', 
                                                        borderBottom: '1px dashed #ddd',
                                                        transition: 'background-color 0.2s'
                                                    }}
                                                    // On hover simulation using inline JS/CSS for visual feedback
                                                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f9f9f9'}
                                                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                                >
                                                    {/* Using <a> tag as a stand-in for <Link> */}
                                                    <Link href={item.href ? item.href : {}} style={{ textDecoration: 'none', color: '#007bff', display: 'block' }}>
                                                        {item.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="pd_bottom_20" />
                                        
                                        {/* Auxiliary Information */}
                                        {/* <div className="repeat_informtion" style={{ marginTop: '20px', paddingTop: '10px', borderTop: '1px solid #eee' }}>
                                            <h6>Relevant Legislation: </h6>
                                            <p>Estates Administration Act</p>
                                        </div>
                                        <div className="repeat_informtion">
                                            <h6>Next Step: </h6>
                                            
                                            <a href="/estate-admin/initiate" className="theme-btn two" style={{ 
                                                display: 'inline-block', 
                                                padding: '10px 20px', 
                                                backgroundColor: '#28a745', 
                                                color: 'white', 
                                                borderRadius: '5px', 
                                                textDecoration: 'none', 
                                                marginTop: '10px' 
                                            }}>Initiate Process</a>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_70" />
                    {/*===============spacing==============*/}
                </section>
                
                {/* Placeholder for the Newsletter Section (kept for structure) */}
                <section className="newsteller style_one bg_dark_1">
                    {/*===============spacing==============*/}
                    <div className="pd_top_40" />
                    <div className="pd_bottom_40" />
                    {/*===============spacing==============*/}
                </section>
            </div>

        </Layout>
    )
}
