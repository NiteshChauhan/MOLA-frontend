import Layout from "@/components/layout/Layout"
import Link from "next/link"
import React from 'react';

// NOTE FOR NEXT.JS PROJECT: When using this in your actual Next.js environment,
// you should UNCOMMENT the actual imports and REMOVE the INLINE LAYOUT component definition below.
// import Layout from "@/components/layout/Layout" 
// import Link from "next/link" 


// --- INLINE LAYOUT COMPONENT (Self-Contained Placeholder) ---
// This placeholder component ensures the file compiles in this environment. 

export default function TestateEstatesPage() {
    return (
        <Layout breadcrumbTitle="Testate Estates">
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
                                        <div className="before_title">With a Will</div>
                                        <h2>Testate Estates</h2>
                                    </div>
                                </div>
                                
                                <div className="pd_bottom_25" />
                                
                                {/* SECTION: DEFINITION & EXECUTOR ROLE */}
                                <div className="definition-role-section" style={{ padding: '20px', backgroundColor: '#e9f7ff', borderRadius: '8px', borderLeft: '4px solid #007bff' }}>
                                    <p style={{ margin: 0, fontSize: '1.1rem', color: '#007bff' }}>
                                        A person is deemed to have died testate if they made a will while they were alive and in that will they named an executor or executrix as well as beneficiaries who they wish to inherit the assets belonging to the estate.
                                    </p>
                                    <p style={{ marginTop: '15px', color: '#555', fontWeight: 'bold' }}>
                                        Role of the Executor/Executrix
                                    </p>
                                    <p style={{ color: '#555' }}>
                                        Upon the death of the deceased, the executor/executrix has the power to probate the will in the High Court or make an application to the Public Trustee of Guyana to apply for a Grant of Letters of Administration with Will annexed.
                                    </p>
                                    <p style={{ color: '#555' }}>
                                        The grant of probate or Letters of Administration with Will annexed gives legal authority to an executor/executrix to transfer assets from an estate and to carry out the wishes of the deceased as recorded in the will.
                                    </p>
                                </div>

                                {/* SUB HEADING: VALIDITY OF WILL */}
                                <div className="validity-section" style={{ marginTop: '30px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                    <h3 style={{ borderBottom: '2px solid #28a745', paddingBottom: '10px', color: '#28a745', marginBottom: '20px' }}>Validity of Will</h3>
                                    
                                    <h4 style={{ color: '#333', marginTop: '0', marginBottom: '10px' }}>What is a valid will?</h4>
                                    <p style={{ color: '#555' }}>
                                        A Will is a document that sets out what you want to happen to your property/assets, called your ESTATE, after you die. You do not have to make a will, but if you die without having made one, then the law and not you will determine what happens to your estate (i.e., you will die INTESTATE and the rules of INTESTACY will apply to the distribution of your estate).
                                    </p>
                                    
                                    <h4 style={{ color: '#333', marginTop: '25px', marginBottom: '10px' }}>Validity of a Will in Guyana</h4>
                                    <p style={{ color: '#555' }}>
                                        In Guyana, for a Will to be legally valid, the following mandatory conditions must be met:
                                    </p>
                                    
                                    <ul style={{ listStyleType: 'disc', paddingLeft: '40px', color: '#555' }}>
                                        <li style={{ marginBottom: '10px' }}>You must have the capacity to make a will (at least 18 years old, of sound mind, and without any undue influence).</li>
                                        <li style={{ marginBottom: '10px' }}>A will must be revocable (you should be able to change or cancel your will at any time).</li>
                                        <li style={{ marginBottom: '10px' }}>A will must be in writing (typewritten or handwritten).</li>
                                        <li style={{ marginBottom: '10px' }}>The will must be signed or acknowledged by you or in your presence and upon your instructions. If you are unable to sign then a thumb print may be used, and this must be witnessed by a Justice of Peace.</li>
                                        <li style={{ marginBottom: '10px' }}>Two witnesses must sign the will in the presence of each other and the Testator/Testatrix. Important: A witness to a will cannot benefit from any asset in the estate; therefore, a person who is mentioned in a will as a beneficiary should not be a witness to the same will.</li>
                                        <li style={{ marginBottom: '10px' }}>The signature should be the last thing on the will as anything beneath the signature would not form part of the will.</li>
                                    </ul>

                                    <div className="executor-option-note" style={{ marginTop: '30px', padding: '15px', borderLeft: '3px solid #007bff', backgroundColor: '#f0f8ff', borderRadius: '4px' }}>
                                        <p style={{ margin: 0, color: '#007bff' }}>
                                            If you are appointed as an executor or executrix in a will, you may approach the Office of the Public Trustee to administer the estate if you do not wish to act or are unable to act.
                                        </p>
                                    </div>
                                </div>
                                
                                {/* SECTION: PROBATING AT PUBLIC TRUSTEE */}
                                <div className="probating-pt-section" style={{ marginTop: '30px', padding: '20px', border: '1px solid #ffc107', backgroundColor: '#fffde7', borderRadius: '8px' }}>
                                    <h3 style={{ borderBottom: '2px solid #ffc107', paddingBottom: '10px', color: '#856404', marginBottom: '15px' }}>Probating a Will at the Office of the Public Trustee</h3>
                                    <p style={{ color: '#856404' }}>
                                        If you wish to request that the Public Trustee administers the estate of a deceased person, you would be required to provide the following documents during your initial consultation with us:
                                    </p>
                                    <ul style={{ listStyleType: 'disc', paddingLeft: '40px', color: '#856404' }}>
                                        <li>The Original Will.</li>
                                        <li>Death Certificate of the deceased.</li>
                                        <li>Ownership documents for listed assets.</li>
                                        <li>Other documents, which would be determined based on the particular case.</li>
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
