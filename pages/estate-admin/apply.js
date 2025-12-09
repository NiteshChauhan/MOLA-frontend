import Layout from "@/components/layout/Layout"
import Link from "next/link"
import React from 'react';


// NOTE FOR NEXT.JS PROJECT: When using this in your actual Next.js environment,
// you should UNCOMMENT the actual imports and REMOVE the INLINE LAYOUT component definition below.
// import Layout from "@/components/layout/Layout" 
// import Link from "next/link" 


// --- INLINE LAYOUT COMPONENT (Self-Contained Placeholder) ---
// This placeholder component ensures the file compiles in this environment. 

export default function WhoCanApplyPage() {
    return (
        <Layout breadcrumbTitle="Who can apply to the Public Trustee?">
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
                                        <div className="before_title">Take out eligibility</div>
                                        <h2>Who can apply to the Public Trustee to administer the estate of a deceased person?</h2>
                                    </div>
                                </div>
                                
                                <div className="pd_bottom_25" />
                                
                                {/* <div className="description_box">
                                    <p>The following categories outline the individuals who may apply to the Public Trustee for the administration of an estate, depending on whether a valid Will exists.</p>
                                </div> */}

                                {/* SECTION: WHERE THERE IS A WILL */}
                                <div className="will-section" style={{ marginTop: '30px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                    <h3 style={{ borderBottom: '2px solid #007bff', paddingBottom: '10px', color: '#007bff' }}>Where there is a WILL</h3>
                                    <ol style={{ listStyleType: 'decimal', paddingLeft: '40px' }}>
                                        <li style={{ marginBottom: '10px' }}> The Executor named in the Will;</li>
                                        <li style={{ marginBottom: '10px' }}> Any beneficiary holding in trust for any other person;</li>
                                        <li style={{ marginBottom: '10px' }}> Any beneficiary for life;</li>
                                        <li style={{ marginBottom: '10px' }}> The ultimate beneficiary or, where the residue is not wholly disposed of by the will, any person entitled to share in the residue not so disposed of, or the personal representative of any such person;</li>
                                        <li style={{ marginBottom: '10px' }}>  Any specific beneficiary or any creditor or the personal representative of any such person. Person or,where the estate is not wholly disposed of by the will, any person who, notwithstanding that the amount of the estate is such that he has no immediate beneficial interest therein, may have a beneficial interest in the event of an accretion thereto;</li>
                                        <li style={{ marginBottom: '10px' }}> Any beneficiary, whether residuary or specific, entitled on the happening of any contingency, or any person having no interest under the will of the deceased who would have been entitled to a grant if the deceased had died wholly intestate;</li>
                                    </ol>
                                </div>
                                
                                {/* SECTION: WHERE THERE IS NO WILL (INTESTATE) */}
                                <div className="intestate-section" style={{ marginTop: '30px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                    <h3 style={{ borderBottom: '2px solid #007bff', paddingBottom: '10px', color: '#007bff' }}>Where there is NO WILL (Intestate)</h3>
                                    <p style={{ marginBottom: '15px' }}>In cases of intestacy, applicants are typically considered in the following order of priority based on relationship to the deceased:</p>
                                    <ol style={{ listStyleType: 'decimal', paddingLeft: '40px' }}>
                                        <li style={{ marginBottom: '10px' }}>Surviving Spouse (including common law spouse);</li>
                                        <li style={{ marginBottom: '10px' }}>Children of the deceased, (whether in/out of wedlock), or the children of any such child who has died during the lifetime of the deceased;</li>
                                        <li style={{ marginBottom: '10px' }}>Father or mother of the deceased;</li>
                                        <li style={{ marginBottom: '10px' }}>Brothers and sisters, or the children of any deceased brother or sister who has died during the lifetime of the deceased;</li>
                                        <li style={{ marginBottom: '10px' }}>Grandparents;</li>
                                        <li style={{ marginBottom: '10px' }}>Uncles and aunts of the whole blood, or the children of any deceased uncle or aunt of whole blood who has died during the lifetime of the deceased;</li>
                                        <li style={{ marginBottom: '10px' }}>Uncles and aunts of the half blood, or the children of any deceased uncle or aunt of half-blood who has died during the lifetime of the deceased;</li>
                                        <li style={{ marginBottom: '10px' }}>The Public Trustee;</li>
                                    </ol>
                                </div>

                                {/* NOTE SECTION */}
                                <div className="note-section" style={{ marginTop: '30px', padding: '15px', borderLeft: '5px solid #ffc107', backgroundColor: '#fff3cd', borderRadius: '5px' }}>
                                    <p style={{ fontWeight: 'bold', margin: '0 0 5px 0', color: '#856404' }}>Note on Order of Priority:</p>
                                    <p style={{ margin: 0, color: '#856404' }}>
                                        There is an order of priority of the person who would be entitled to apply. Thus, persons with a superior/prior right must be cleared off by showing that they have renounced their right or have been cited and did not appear. Further, persons who are ranked in the same class may consent to one or more persons of the same class applying for a grant of probate or administration.
                                    </p>
                                    <p style={{ marginTop: '10px', margin: 0, color: '#856404' }}>
                                        The Public Trustee shall administer the estate at the request of the above-mentioned categories of persons, unless he/she sees good reason for refusing to do so.
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
