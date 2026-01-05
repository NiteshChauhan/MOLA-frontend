import Layout from "@/components/layout/Layout";
import Link from "next/link";
import React from "react";

export default function LegislationDocs() {
  const legislationList = [
    { title: "ACT NO. 12 of 1983", subtitle: "CHILDREN BORN OUT OF WEDLOCK (REMOVAL OF DISCRIMINATION)", pdf: "#" },
    { title: "ADOPTION OF CHILDREN ACT CHAPTER 46:04", subtitle: "Act 18 of 2009 AMENDED BY 10 OF 2011", pdf: "#" },
    { title: "ACT No. 10 of 2012", subtitle: "CIVIL LAW (RIGHTS OF PERSONS IN COMMON LAW UNION) ACT 2012", pdf: "#" },
    { title: "ACT NO. 12 OF 2021", subtitle: "CIVIL LAW OF GUYANA (AMENDMENT) ACT 2021", pdf: "#" },
    { title: "CIVIL LAW OF GUYANA ACT", subtitle: "CHAPTER 6:01", pdf: "#" },
    { title: "ACT NO. 3 OF 2021", subtitle: "DECEASED PERSONS ESTATES’ ADMINISTRATION (AMENDMENT) ACT 2021", pdf: "#" },
    { title: "ACT NO. 17 OF 2024", subtitle: "DECEASED PERSONS ESTATES ADMINISTRATION (AMENDMENT) ACT 2024", pdf: "#" },
    { title: "DECEASED PERSONS ESTATES’ ADMINISTRATION ACT", subtitle: "CHAPTER 12:01", pdf: "#" },
    { title: "FAMILY AND DEPENDANTS PROVISION ACT", subtitle: "CHAPTER 12:24 ACT 22 OF 1990 AMENDED BY 10 OF 2012", pdf: "#" },
    { title: "LEGITIMACY ACT", subtitle: "CHAPTER 46:02", pdf: "#" },
    { title: "NON-CONTENTIOUS PROBATE RULES", subtitle: "1954", pdf: "#" },
    { title: "PUBLIC TRUSTEE ACT", subtitle: "CHAPTER 13:01 ACT NO. 15 OF 1910", pdf: "#" },
    { title: "ACT NO. 21 OF 2024", subtitle: "WILLS (AMENDMENT) ACT 2024", pdf: "#" },
    { title: "WILLS ACT", subtitle: "CHAPTER 12:02 ACT NO. 12 OF 1906", pdf: "#" },
  ];

  return (
    <Layout breadcrumbTitle="Legislation">
      <section className="project-detail-section">
        <div className="pd_top_90" />
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              {/* HEADER */}
              <div className="title_all_box style_one dark_color">
                <div className="title_sections left">
                  <div className="before_title">Legal Documents</div>
                  <h2>Legislation and Acts</h2>
                  <p style={{ color: "#555", marginTop: "10px" }}>
                    Below is a list of key Acts and legal instruments related to estate administration and civil law. 
                    You can click each item to view or download the corresponding document (PDF).
                  </p>
                </div>
              </div>

              <div className="pd_bottom_25" />

              {/* ACT LIST SECTION */}
              <div
                className="legislation-list"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: "20px",
                  marginTop: "30px",
                }}
              >
                {legislationList.map((act, index) => (
                  <div
                    key={index}
                    className="legislation-card"
                    style={{
                      background: "#ffffff",
                      borderRadius: "10px",
                      padding: "20px",
                      boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
                      borderLeft: "5px solid #007bff",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.12)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 3px 10px rgba(0,0,0,0.08)";
                    }}
                  >
                    <h4 style={{ color: "#007bff", fontSize: "1.1rem", marginBottom: "5px" }}>
                      {act.title}
                    </h4>
                    <p style={{ color: "#555", fontSize: "0.95rem", marginBottom: "10px" }}>
                      {act.subtitle}
                    </p>
                    <Link href={act.pdf} target="_blank">
                      <span
                        style={{
                          color: "#007bff",
                          fontWeight: "600",
                          textDecoration: "none",
                          cursor: "pointer",
                        }}
                      >
                        View / Download PDF →
                      </span>
                    </Link>
                  </div>
                ))}
              </div>

              {/* FOOTNOTE */}
              <div
                className="note-section"
                style={{
                  marginTop: "40px",
                  backgroundColor: "#f1f9ff",
                  borderLeft: "5px solid #17a2b8",
                  padding: "15px 20px",
                  borderRadius: "6px",
                  color: "#0c5460",
                }}
              >
                <strong>Note:</strong> These documents are for informational purposes. 
                Always refer to the most recent version of the law published by the Government of Guyana.
              </div>

              <div className="pd_bottom_70" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
