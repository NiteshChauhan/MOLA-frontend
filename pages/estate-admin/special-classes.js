import Layout from "@/components/layout/Layout"
import Link from "next/link"
import React from 'react';

// NOTE FOR NEXT.JS PROJECT: When using this in your actual Next.js environment,
// you should UNCOMMENT the actual imports and REMOVE the INLINE LAYOUT component definition below.
// import Layout from "@/components/layout/Layout" 
// import Link from "next/link" 


// --- INLINE LAYOUT COMPONENT (Self-Contained Placeholder) ---
// This placeholder component ensures the file compiles in this environment. 

export default function SpecialClassesPage() {
    return (
        <Layout breadcrumbTitle="Special classes of person">
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
                                        <div className="before_title">Intestate Succession Rights</div>
                                        <h2>Special Classes of Person</h2>
                                    </div>
                                </div>
                                
                                <div className="pd_bottom_25" />
                                
                                {/* COMMON LAW UNION SECTION */}
                                <div className="section-block" style={{ marginBottom: '40px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                    <h3 style={{ borderBottom: '2px solid #007bff', paddingBottom: '10px', color: '#007bff', marginBottom: '15px' }}>Common Law Union Spouses</h3>
                                    
                                    <p style={{ color: '#555', marginBottom: '15px' }}>
                                        Despite not being a legally recognizable union under the Matrimonial Causes Act (as amended by Act no. 13 of 2024), the law nonetheless makes provision for persons living in a common law union to the extent of intestate succession. The law allows a spouse of a common law union the same rights as a married person where one of the spouses dies intestate.
                                    </p>
                                    
                                    <h4 style={{ color: '#333', marginTop: '20px' }}>However, it must be established:</h4>
                                    <ol style={{ listStyleType: 'decimal', paddingLeft: '20px', color: '#555' }}>
                                        <li style={{ marginBottom: '10px' }}>that both the deceased and the surviving spouse were a single man and a single woman;</li>
                                        <li style={{ marginBottom: '10px' }}>living together for not less than five (5) years;</li>
                                        <li style={{ marginBottom: '10px' }}>that the said relationship subsisted at the time of death, and;</li>
                                        <li style={{ marginBottom: '10px' }}>that the deceased died intestate.</li>
                                    </ol>
                                </div>

                                {/* ILLEGITIMATE CHILD SECTION */}
                                <div className="section-block" style={{ marginBottom: '40px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                    <h3 style={{ borderBottom: '2px solid #007bff', paddingBottom: '10px', color: '#007bff', marginBottom: '15px' }}>Illegitimate Child / Child Born Out of Wedlock</h3>
                                    
                                    <p style={{ color: '#555', marginBottom: '15px' }}>
                                        Pursuant to the Civil Law of Guyana Act, Chapter 6:01 (as amended by the Children Born out of Wedlock Act), in determining relationship for the purpose of the rule of intestacy, no regard should be had as to whether any person is born in or out of wedlock. A person born out of wedlock shall have the same rights has a person born in wedlock for the purposes of the rules of intestacy.
                                    </p>

                                    <p style={{ color: '#555', marginBottom: '20px' }}>
                                        With regard to a Will or any testamentary instrument, any reference to a child therein shall include a child born out of wedlock unless there is a contrary intention.
                                    </p>

                                    <h4 style={{ color: '#dc3545', marginTop: '20px' }}>Father of a child born out of wedlock</h4>
                                    <p style={{ color: '#555', marginBottom: '10px' }}>
                                        A man shall not, as father of a child born out of wedlock and dying intestate, be entitled to take any interest in the estate of the child unless, before the death of the child—
                                    </p>
                                    <ul style={{ listStyleType: 'disc', paddingLeft: '30px', color: '#555' }}>
                                        <li style={{ marginBottom: '5px' }}>(i) he had been declared to be the father of the child by a court of law; or</li>
                                        <li style={{ marginBottom: '5px' }}>(ii) he had acknowledged the child to be his own and had contributed towards the maintenance of the child.</li>
                                    </ul>
                                </div>
                                
                                {/* ADOPTED CHILD SECTION */}
                                <div className="section-block" style={{ marginBottom: '40px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                    <h3 style={{ borderBottom: '2px solid #ffc107', paddingBottom: '10px', color: '#856404', marginBottom: '15px' }}>Adopted Child</h3>
                                    
                                    <p style={{ color: '#555' }}>
                                        Where, after an Adoption Order is made, the adopter, the adopted child or any other person dies intestate (without a Will), the adopted child shall be treated as if he were the biological child of the adopter.
                                    </p>
                                    <p style={{ color: '#555' }}>
                                        Additionally, where a Will is made after the Adoption Order, any reference to a child shall include the adopted child, unless a contrary intention appears. (see the Adoption of Children Act, Chapter 46:04).
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
