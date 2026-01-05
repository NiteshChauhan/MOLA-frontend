import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";

export default function WhoCanApplyPage() {
  const [page, setPage] = useState(null);
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/cms/pages/apply")
      .then((res) => res.json())
      .then((data) => {
        setPage(data.page);
        setSections(data.page?.sections || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading || !page) return null;

  return (
    <Layout breadcrumbTitle={page.page_title}>
      <section className="project-detail-section">
        <div className="pd_top_90" />

        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">

              {/* PAGE TITLE */}
              <div className="title_all_box style_one dark_color">
                <div className="title_sections left">
                  <h2>{page.page_title}</h2>
                </div>
              </div>

              <div className="pd_bottom_25" />

              {/* 🔥 CMS SECTIONS */}
              {sections
                .sort((a, b) => a.section_order - b.section_order)
                .map((section) => (
                  <SectionRenderer
                    key={section.idsection}
                    section={section}
                  />
                ))}

              <div className="pd_bottom_70" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

/* ========================================================= */
/* ================= SECTION RENDERER ====================== */
/* ========================================================= */

function SectionRenderer({ section }) {
  switch (section.section_key) {
    case "note":
      return <NoteSection section={section} />;

    case "list":
      return <ListSection section={section} />;

    case "content":
    default:
      return <ContentSection section={section} />;
  }
}

/* ========================================================= */
/* ================= CONTENT SECTION ======================= */
/* ========================================================= */

function ContentSection({ section }) {
  return (
    <div
      style={{
        marginTop: 30,
        padding: 24,
        background: "#ffffff",
        borderRadius: 12,
        boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
      }}
    >
      {section.section_title && (
        <h3
          style={{
            borderBottom: "2px solid #2563eb",
            paddingBottom: 10,
            marginBottom: 16,
            color: "#2563eb",
          }}
        >
          {section.section_title}
        </h3>
      )}

      <div
        className="cms-content"
        dangerouslySetInnerHTML={{
          __html: section.section_content,
        }}
      />
    </div>
  );
}

/* ========================================================= */
/* ================= LIST SECTION ========================== */
/* ========================================================= */

function ListSection({ section }) {
  return (
    <div
      style={{
        marginTop: 30,
        padding: 24,
        background: "#ffffff",
        borderRadius: 12,
        boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
      }}
    >
      {section.section_title && (
        <h3
          style={{
            borderBottom: "2px solid #2563eb",
            paddingBottom: 10,
            marginBottom: 16,
            color: "#2563eb",
          }}
        >
          {section.section_title}
        </h3>
      )}

      <div
        className="cms-list"
        dangerouslySetInnerHTML={{
          __html: section.section_content,
        }}
      />
    </div>
  );
}

/* ========================================================= */
/* ================= NOTE SECTION ========================== */
/* ========================================================= */

function NoteSection({ section }) {
  return (
    <div
      style={{
        marginTop: 30,
        padding: 18,
        borderLeft: "5px solid #ffc107",
        background: "#fff3cd",
        borderRadius: 8,
      }}
    >
      {section.section_title && (
        <p
          style={{
            fontWeight: 800,
            marginBottom: 8,
            color: "#856404",
          }}
        >
          {section.section_title}
        </p>
      )}

      <div
        style={{ color: "#856404" }}
        dangerouslySetInnerHTML={{
          __html: section.section_content,
        }}
      />
    </div>
  );
}
