import Layout from "@/components/layout/Layout"
import Link from "next/link"
import React from 'react';
// NOTE FOR NEXT.JS PROJECT: When using this in your actual Next.js environment,
// you should UNCOMMENT the actual imports and REMOVE the INLINE LAYOUT component definition below.
// import Layout from "@/components/layout/Layout" 
// import Link from "next/link" 


// --- INLINE LAYOUT COMPONENT (Self-Contained Placeholder) ---
// This placeholder component ensures the file compiles in this environment. 
// const Layout = ({ children, breadcrumbTitle }) => (
//     <div className="layout-wrapper" style={{ minHeight: '100vh', padding: '0 10px', backgroundColor: '#f5f5f5' }}>
//         {/* Placeholder Header (mimics breadcrumb area) */}
//         <header style={{ 
//             padding: '30px 0', 
//             backgroundColor: '#fff', 
//             borderBottom: '4px solid #007bff', 
//             marginBottom: '20px', 
//             boxShadow: '0 2px 4px rgba(0,0,0,0.05)' 
//         }}>
//             <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
//                 <h1 style={{ fontSize: '28px', margin: '0 0 5px 0', color: '#333' }}>{breadcrumbTitle}</h1>
//                 <p style={{ fontSize: '14px', color: '#777' }}>Home &gt; Estate Administration &gt; {breadcrumbTitle}</p>
//             </div>
//         </header>
//         <main style={{ minHeight: '60vh', maxWidth: '1200px', margin: '0 auto' }}>
//             {children}
//         </main>
//         {/* Placeholder Footer */}
//         <footer style={{ 
//             padding: '20px 0', 
//             marginTop: '40px', 
//             borderTop: '1px solid #ddd', 
//             textAlign: 'center', 
//             color: '#777',
//             backgroundColor: '#fff'
//         }}>
//             © {new Date().getFullYear()} Public Trustee Footer Placeholder.
//         </footer>
//     </div>
// );


export default function IntestateEstatesPage() {
    return (
        <Layout breadcrumbTitle="Intestate Estates">
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
                                        <div className="before_title">No Will</div>
                                        <h2>Intestate Estates</h2>
                                    </div>
                                </div>
                                
                                <div className="pd_bottom_25" />
                                
                                {/* SECTION: DEFINITION */}
                                <div className="definition-section" style={{ padding: '20px', backgroundColor: '#e9f7ff', borderRadius: '8px', borderLeft: '4px solid #007bff' }}>
                                    <p style={{ margin: 0, fontSize: '1.1rem', color: '#007bff' }}>
                                        When someone dies **without leaving a valid Will**, they are deemed to have died **Intestate**.
                                    </p>
                                    <p style={{ marginTop: '10px', color: '#555' }}>
                                        In intestate estates, the assets are distributed strictly according to the **rules of intestacy** as defined by law.
                                    </p>
                                </div>

                                {/* SECTION: DISTRIBUTION RULES */}
                                <div className="distribution-section" style={{ marginTop: '30px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                    <h3 style={{ borderBottom: '2px solid #28a745', paddingBottom: '10px', color: '#28a745', marginBottom: '20px' }}>Distribution of Assets (Order of Priority)</h3>
                                    
                                    <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                                        
                                        <li style={{ marginBottom: '25px', padding: '10px', border: '1px solid #d4edda', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
                                            <strong style={{ color: '#28a745' }}>1. If there is a Surviving Spouse and Children:</strong>
                                            <p style={{ margin: '5px 0 0 0', paddingLeft: '15px' }}>
                                                The **surviving spouse** (husband or wife of the deceased, including common law spouse) shall receive **one third (1/3)** of the whole estate, and the **surviving children** of the deceased shall receive the remaining **two thirds (2/3)** of the whole estate, shared equally among them.
                                            </p>
                                        </li>

                                        <li style={{ marginBottom: '25px', padding: '10px', border: '1px solid #d4edda', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
                                            <strong style={{ color: '#28a745' }}>2. If there are Children but No Spouse:</strong>
                                            <p style={{ margin: '5px 0 0 0', paddingLeft: '15px' }}>
                                                If the deceased was never legally married nor had a common law spouse but had children at the time of death, the assets of the estate shall be distributed **equally among the children** of the estate.
                                            </p>
                                        </li>

                                        <li style={{ marginBottom: '25px', padding: '10px', border: '1px solid #d4edda', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
                                            <strong style={{ color: '#28a745' }}>3. If there is a Spouse but No Children:</strong>
                                            <p style={{ margin: '5px 0 0 0', paddingLeft: '15px' }}>
                                                If the deceased died leaving a spouse but had no children, then the **surviving spouse** (widow/widower) shall take the **whole of the estate**.
                                            </p>
                                        </li>

                                        <li style={{ marginBottom: '25px', padding: '10px', border: '1px solid #d4edda', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
                                            <strong style={{ color: '#28a745' }}>4. If there is No Spouse and No Children (but Parents survive):</strong>
                                            <p style={{ margin: '5px 0 0 0', paddingLeft: '15px' }}>
                                                If the deceased had no surviving spouse or children, then the assets of the estate shall be given in **equal shares to the parents** of the deceased.
                                            </p>
                                        </li>
                                        
                                        <li style={{ marginBottom: '25px', padding: '10px', border: '1px solid #d4edda', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
                                            <strong style={{ color: '#28a745' }}>5. If there is No Spouse, Children, or Parents (but Siblings survive):</strong>
                                            <p style={{ margin: '5px 0 0 0', paddingLeft: '15px' }}>
                                                If the deceased had no surviving spouse, children, nor parents, then the estate shall be divided **equally amongst the siblings** of the deceased.
                                            </p>
                                        </li>

                                    </ul>
                                </div>
                                
                                {/* SECTION: APPLICATION NOTE */}
                                <div className="application-note" style={{ marginTop: '30px', padding: '15px', borderLeft: '5px solid #ffc107', backgroundColor: '#fff3cd', borderRadius: '5px' }}>
                                    <p style={{ fontWeight: 'bold', margin: '0 0 5px 0', color: '#856404' }}>Application Requirement:</p>
                                    <p style={{ margin: 0, color: '#856404' }}>
                                        In an intestate estate, the **heirs MUST each give consent** to one heir to make an application to the Public Trustee to administer the estate of a deceased person.
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
