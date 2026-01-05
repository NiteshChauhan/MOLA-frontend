import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";

export default function CmsDynamicPage() {
  const router = useRouter();
  const { slug } = router.query;

  const [page, setPage] = useState(null);
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    setNotFound(false);

    fetch(`/api/cms/pages/${slug}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Page not found");
        }
        return res.json();
      })
      .then((data) => {
        if (!data?.page) {
          setNotFound(true);
          return;
        }

        setPage(data.page);

        const orderedSections = (data.page.sections || [])
          .slice()
          .sort((a, b) => a.section_order - b.section_order);

        setSections(orderedSections);
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return null;

  if (notFound) {
    return <Cms404Page />;
  }

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

                  {/* SHORT TITLE (OPTIONAL) */}
                  {page.page_short_title && (
                    <div className="before_title">
                      {page.page_short_title}
                    </div>
                  )}

                  {/* MAIN TITLE */}
                  <h2>{page.page_title}</h2>
                </div>
              </div>

              <div className="pd_bottom_25" />

              {/* CMS SECTIONS */}
              {sections.map((section) => (
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
    case "definition":
      return <DefinitionSection section={section} />;
    default:
      return <ContentSection section={section} />;
  }
}

function ContentSection({ section }) {
  return (
    <div style={cardStyle}>
      {section.section_title && (
        <h3 style={titleStyle}>{section.section_title}</h3>
      )}
      <div dangerouslySetInnerHTML={{ __html: section.section_content }} />
    </div>
  );
}

function DefinitionSection({ section }) {
  return (
    // <div style={cardStyle}>
    //   {section.section_title && (
    //     <h3 style={titleStyle}>{section.section_title}</h3>
    //   )}
    //   <div dangerouslySetInnerHTML={{ __html: section.section_content }} />
    // </div>

     
    <div className="definition-section" style={{ padding: '20px', backgroundColor: '#e9f7ff', borderRadius: '8px', borderLeft: '4px solid #007bff' }}>
         {section.section_title && (
        <p style={{ margin: 0, fontSize: '1.1rem', color: '#007bff' }}>
            {section.section_title}
        </p>
        )}
        <p style={{ marginTop: '10px', color: '#555' }}>
           <div dangerouslySetInnerHTML={{ __html: section.section_content }} />
        </p>
    </div>
  );
}

function NoteSection({ section }) {
  return (
    <div
      style={{
        marginTop: 30,
        padding: 18,
        borderLeft: "5px solid #f59e0b",
        background: "#fff3cd",
        borderRadius: 8,
      }}
    >
      {section.section_title && (
        <strong style={{ color: "#856404" }}>
          {section.section_title}
        </strong>
      )}
      <div
        style={{ color: "#856404", marginTop: 6 }}
        dangerouslySetInnerHTML={{ __html: section.section_content }}
      />
    </div>
  );
}

/* ========================================================= */
/* ================= PROFESSIONAL 404 ====================== */
/* ========================================================= */

function Cms404Page() {
  const router = useRouter();

  return (
    <Layout breadcrumbTitle="Page Not Found">
      <section className="project-detail-section">
        <div className="pd_top_90" />

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10 text-center">

              <h1 style={{ fontSize: 80, fontWeight: 900, color: "#e5e7eb" }}>
                404
              </h1>

              <h2 style={{ fontWeight: 800, marginBottom: 10 }}>
                Page Not Found
              </h2>

              <p style={{ color: "#6b7280", fontSize: 16 }}>
                The page you are looking for doesn’t exist, was removed,
                or is temporarily unavailable.
              </p>

              <button
                onClick={() => router.push("/")}
                style={{
                  marginTop: 30,
                  padding: "14px 30px",
                  borderRadius: 12,
                  background: "#2563eb",
                  color: "#fff",
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Go to Homepage
              </button>

            </div>
          </div>
        </div>

        <div className="pd_bottom_70" />
      </section>
    </Layout>
  );
}

/* ========================================================= */

const cardStyle = {
  marginTop: 30,
  padding: 24,
  background: "#ffffff",
  borderRadius: 12,
  boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
};

const titleStyle = {
  borderBottom: "2px solid #2563eb",
  paddingBottom: 10,
  marginBottom: 16,
  color: "#2563eb",
};
