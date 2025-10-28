import Layout from "@/components/layout/Layout"
import Link from "next/link"
import React, { useState } from 'react';

// NOTE FOR NEXT.JS PROJECT: When using this in your actual Next.js environment,
// you should UNCOMMENT the actual imports and REMOVE the INLINE LAYOUT component definition below.
// import Layout from "@/components/layout/Layout" 
// import Link from "next/link" 

// --- INLINE LAYOUT COMPONENT (Self-Contained Placeholder) ---
// This placeholder component ensures the file compiles in this environment. 

// Helper component for an individual FAQ item (Accordion Item)
const FaqItem = ({ question, answer }) => {
    // State to manage the open/closed status of the answer
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div style={{ marginBottom: '10px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 1px 4px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
            {/* Question Header (Clickable) */}
            <div 
                onClick={toggleOpen} 
                style={{ 
                    padding: '15px 20px', 
                    cursor: 'pointer', 
                    backgroundColor: isOpen ? '#e9f5ff' : '#fff', // Light blue background when open
                    borderBottom: isOpen ? '2px solid #007bff' : 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'background-color 0.3s ease',
                }}
            >
                <h4 style={{ color: isOpen ? '#007bff' : '#333', fontSize: '18px', margin: '0', transition: 'color 0.3s ease' }}>
                    Q: {question}
                </h4>
                {/* Accordion Icon */}
                <span style={{ 
                    fontSize: '24px', 
                    lineHeight: '1', 
                    color: '#007bff',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    fontWeight: 'bold'
                }}>
                    &#9660; {/* Down Arrow */}
                </span>
            </div>
            
            {/* Answer Content (Collapsible) */}
            <div style={{
                // Max-height transition simulates the shutter effect
                maxHeight: isOpen ? '500px' : '0', 
                transition: 'max-height 0.4s ease-in-out',
                overflow: 'hidden',
                // Conditional padding to avoid space when closed
                padding: isOpen ? '15px 20px' : '0 20px',
                borderTop: isOpen ? '1px solid #eee' : 'none'
            }}>
                <p style={{ color: '#555', lineHeight: '1.6', margin: 0 }}>A: {answer}</p>
            </div>
        </div>
    );
};


export default function FaqPage() {

    const faqs = [
        {
            q: "What is an estate?",
            a: "An estate primarily refers to everything a deceased person owned at the time of their death, including assets like money, real estate, and personal property, as well as liabilities like debts. It's the entirety of a person's net worth at death."
        },
        {
            q: "Who can be an executor of a will?",
            a: "You can appoint anyone above 18 years old who you think has the capacity to carry out your wishes after you dies to be the executor."
        },
        {
            q: "Who can apply for letters of Administration?",
            a: "An application for a grant of letters of Administration can be made by the husband or wife or common law spouse or by the children of the deceased if there was no marriage as at the date of death of the deceased. A full list of eligible persons can be found in the rules of intestacy (LINK THIS TO WHO CAN APPLY SEGMENT OF THE WEBSITE)."
        },
        {
            q: "How do I begin administering an estate?",
            a: "After the death of a loved one you may approach the office of the Public Trustee or any qualified Attorney-at-Law with relevant documents such as the death certificate of the deceased together with documents relating to assets owned by the deceased as well as relevant births, marriage and death certificate and the Will (if any) for a consultation and additional information on the process."
        },
        {
            q: "Can I transfer property owned by a deceased person without a grant of Letters of Administration or a grant of Probate?",
            a: "In Guyana, a grant of Letters of Administration is not required in cases where the gross value of the state is less than $750,000 (seven hundred and fifty thousand dollars). If the estate is larger than this sum and also comprises of immovable property you will be required to apply for a Grant of Letters of Administration, Letters of Administration or a grant of Probate in order to transfer any asset from the estate to beneficiaries / heirs."
        },
        {
            q: "When should I apply for letters of Administration?",
            a: "You should commence the process of estate administration as soon as you have the death certificate of the deceased as well as other relevant certificates and documents especially in cases where depreciating assets are included in the estate to ensure that beneficiaries can have use of these assets at the soonest possible time."
        },
        {
            q: "How do I obtain valuations for a property or motor vehicle included in an estate?",
            a: "You can request valuations from the Government Valuation office located on Camp Street or from any certified valuation office for movable and immovable assets. It is important to note that valuations must state both the date of death value as well as the current market value for each asset owned by a deceased person."
        },
        {
            q: "How long does the estate administration process take to be completed?",
            a: "The timeline for the estate administration process varies and may generally take from 3-18 months depending on the complexity of the estate and the availability of required documents."
        },
        {
            q: "Who is a minor?",
            a: "A minor is anyone who is under the age of eighteen (18) years old."
        },
    ];

    return (
        <Layout breadcrumbTitle="FAQ">
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
                                        <div className="before_title">Answers to Common Questions</div>
                                        <h2>Frequently Asked Questions (FAQ)</h2>
                                    </div>
                                </div>
                                
                                <div className="pd_bottom_25" />
                                
                                <div className="faq-list">
                                    {faqs.map((faq, index) => (
                                        // Use the interactive FaqItem component
                                        <FaqItem key={index} question={faq.q} answer={faq.a} />
                                    ))}
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
