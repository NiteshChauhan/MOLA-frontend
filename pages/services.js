import Layout from "@/components/layout/Layout";
import Link from "next/link";
import React from "react";

export default function Services() {
  const services = [
    {
      title: "Estate Administration",
      subtitle: "Transfer of Assets",
      description:
        "The Public Trustee facilitates the lawful transfer of assets belonging to a deceased person’s estate to rightful beneficiaries in accordance with the law and any existing testamentary documents.",
      icon: "🏛️",
    },
    {
      title: "Guardianship",
      subtitle: "Minors Accounts",
      description:
        "When assets belong to minors, the Public Trustee may act as a legal guardian for their financial affairs, ensuring that all funds are safely managed until the child attains legal age.",
      icon: "👨‍👧",
    },
    {
      title: "Probate",
      subtitle: "Administration of Wills and Estates",
      description:
        "The Probate service ensures that valid Wills are executed properly and that the distribution of assets follows the deceased person’s intentions and applicable legislation.",
      icon: "📜",
    },
    {
      title: "Insolvency",
      subtitle: "Management of Bankrupt Estates",
      description:
        "The Public Trustee handles insolvent estates by liquidating assets and ensuring creditors are paid in a fair and lawful manner as per insolvency regulations.",
      icon: "⚖️",
    },
  ];

  return (
    <Layout breadcrumbTitle="Services">
      <section className="project-detail-section">
        <div className="pd_top_90" />
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              {/* HEADER */}
              <div className="title_all_box style_one dark_color">
                <div className="title_sections left">
                  <div className="before_title">What We Do</div>
                  <h2>Our Services</h2>
                  <p style={{ color: "#555", marginTop: "10px" }}>
                    The Public Trustee provides a range of essential legal and administrative
                    services designed to safeguard estates, minors, and individuals under
                    guardianship or insolvency proceedings.
                  </p>
                </div>
              </div>

              <div className="pd_bottom_25" />

              {/* SERVICES GRID */}
              <div
                className="services-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "25px",
                  marginTop: "30px",
                }}
              >
                {services.map((srv, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "10px",
                      padding: "25px",
                      boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
                      borderTop: "4px solid #007bff",
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
                    <div style={{ fontSize: "2rem", marginBottom: "10px" }}>{srv.icon}</div>
                    <h4 style={{ color: "#007bff", fontSize: "1.2rem", marginBottom: "5px" }}>
                      {srv.title}
                    </h4>
                    <h6 style={{ color: "#007bff", marginBottom: "10px" }}>{srv.subtitle}</h6>
                    <p style={{ color: "#555", fontSize: "0.95rem" }}>{srv.description}</p>
                  </div>
                ))}
              </div>

              {/* MINORS ACCOUNT SECTION */}
              <div
                className="minors-account-section"
                style={{
                  marginTop: "50px",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "10px",
                  padding: "30px",
                  borderLeft: "6px solid #17a2b8",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                }}
              >
                <h3 style={{ color: "#17a2b8", marginBottom: "15px" }}>Minors Accounts</h3>
                <p style={{ color: "#555", marginBottom: "15px" }}>
                  Minor’s accounts are created by the Public Trustee when monies from an estate
                  administered by the Public Trustee become payable to a minor (anyone under the age
                  of 18 years).
                </p>
                <p style={{ color: "#555", marginBottom: "15px" }}>
                  An interest-bearing account is established at a local commercial bank in the name
                  of the minor, and this account remains in the care of the Public Trustee until the
                  minor attains the age of majority (18 years old).
                </p>
                <p style={{ color: "#555", marginBottom: "15px" }}>
                  Once the minor becomes 18, the account is closed, and the proceeds are paid over
                  in full to the beneficiary.
                </p>
                <p style={{ color: "#555" }}>
                  In cases where funds are required for the maintenance of the minor, the Public
                  Trustee may, at her discretion, authorize a withdrawal and issue a cheque for the
                  specific purpose requested.
                </p>

                <div style={{ marginTop: "20px" }}>
                  <Link href="#">
                    <span
                      style={{
                        backgroundColor: "#17a2b8",
                        color: "#fff",
                        padding: "10px 20px",
                        borderRadius: "6px",
                        textDecoration: "none",
                        fontWeight: "500",
                        transition: "background-color 0.3s ease",
                        cursor: "pointer",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.backgroundColor = "#138496")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.backgroundColor = "#17a2b8")
                      }
                    >
                      Learn More →
                    </span>
                  </Link>
                </div>
              </div>

              <div className="pd_bottom_70" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
