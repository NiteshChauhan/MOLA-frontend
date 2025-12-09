import Layout from "@/components/layout/Layout";
import Link from "next/link";
import React from "react";

export default function Downloads() {
  const downloads = [
    {
      title: "Estate Requirements Sheet",
      description:
        "A detailed checklist outlining documents and steps required for estate administration.",
      pdf: "/assets/uploads/EstateRequirmentSheet.pdf",
      icon: "📄",
    },
    {
      title: "Funeral Requirement Sheet",
      description:
        "Guidelines and documentation required for funeral-related estate claims and processes.",
      pdf: "/assets/uploads/FuneralPaymentRequirementSheet.pdf",
      icon: "⚰️",
    },
    {
      title: "Client / Estate Information Sheet",
      subtitle: "(formerly 'Client Interview Records')",
      description:
        "An updated form for clients and estates providing key details for Public Trustee administration.",
      pdf: "#",
      icon: "🧾",
    },
    {
      title: "Wills Brochure",
      description:
        "An informational brochure providing guidance on drafting and managing wills.",
      pdf: "#",
      icon: "📘",
    },
    {
      title: "Public Trustee Information Brochure",
      description:
        "A general brochure outlining the roles, services, and responsibilities of the Public Trustee.",
      pdf: "#",
      icon: "🏛️",
    },
  ];

  return (
    <Layout breadcrumbTitle="Downloads">
      <section className="project-detail-section">
        <div className="pd_top_90" />
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              {/* HEADER */}
              <div className="title_all_box style_one dark_color">
                <div className="title_sections left">
                  <div className="before_title">Resources</div>
                  <h2>Downloads</h2>
                  <p style={{ color: "#555", marginTop: "10px" }}>
                    Below are key forms and informational brochures available for download.
                    These documents are provided in PDF format for your convenience.
                  </p>
                </div>
              </div>

              <div className="pd_bottom_25" />

              {/* DOWNLOADS GRID */}
              <div
                className="downloads-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "25px",
                  marginTop: "30px",
                }}
              >
                {downloads.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "10px",
                      padding: "25px",
                      boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
                      borderLeft: "5px solid #007bff",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.12)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 3px 10px rgba(0,0,0,0.08)";
                    }}
                  >
                    <div style={{ fontSize: "2rem", marginBottom: "10px" }}>{item.icon}</div>
                    <h4 style={{ color: "#007bff", fontSize: "1.1rem", marginBottom: "5px" }}>
                      {item.title}
                    </h4>
                    {item.subtitle && (
                      <small style={{ color: "#777", fontStyle: "italic" }}>
                        {item.subtitle}
                      </small>
                    )}
                    <p style={{ color: "#555", fontSize: "0.95rem", marginTop: "10px" }}>
                      {item.description}
                    </p>
                    <div style={{ marginTop: "15px" }}>
                      <Link href={item.pdf} target="_blank">
                        <span
                          style={{
                            color: "#007bff",
                            fontWeight: "600",
                            cursor: "pointer",
                            textDecoration: "none",
                          }}
                        >
                          📥 Download PDF
                        </span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* DISCLAIMER SECTION */}
              <div
                className="disclaimer-section"
                style={{
                  marginTop: "50px",
                  backgroundColor: "#fff3cd",
                  borderLeft: "6px solid #ffc107",
                  borderRadius: "8px",
                  padding: "20px",
                  color: "#856404",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                }}
              >
                <h5 style={{ marginBottom: "10px" }}>Disclaimer</h5>
                <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: "1.6" }}>
                  <strong>
                    The information contained herein is not intended to be a substitute for
                    Legal Representation or advice, can change without notice, and is for
                    information purposes only.
                  </strong>
                </p>
              </div>

              <div className="pd_bottom_70" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
