import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

/* =========================
   ESTATE ADMIN STATIC SIDEBAR
========================= */
const EstateAdminNav = [
  { title: "1. Who can apply to the Public Trustee?", slug: "apply" },
  { title: "2. Common terms", slug: "terms" },
  { title: "3. Intestate Estates", slug: "intestate" },
  { title: "4. Testate Estates", slug: "testate" },
  { title: "5. Partially Intestate", slug: "partial" },
  { title: "6. Minor and Estates", slug: "minors-and-estates" },
  { title: "7. Small Estates", slug: "small-estates" },
  { title: "8. Special classes of person", slug: "special-classes" },
  { title: "9. Initiate the Estate Administration process", slug: "initiate-process" },
  { title: "10. FAQ", slug: "faq" },
];

export default function CmsDynamicPage() {
  const router = useRouter();
  const { slug } = router.query;

  const [page, setPage] = useState(null);
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  /* 🔥 NEW: CMS DOWNLOADS */
  const [downloads, setDownloads] = useState([]);
  const [loadingDownloads, setLoadingDownloads] = useState(false);

  const isEstateAdmin = slug === "estate-administration";
  const isDownloadsPage = slug === "downloads";
  const isLegislationPage = slug === "legislation";

  /* ================= CMS PAGE LOAD ================= */
  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    setNotFound(false);

    fetch(`/api/cms/pages/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data) => {
        if (!data?.page) {
          setNotFound(true);
          return;
        }

        setPage(data.page);

        const ordered = (data.page.sections || [])
          .slice()
          .sort((a, b) => a.section_order - b.section_order);

        setSections(ordered);
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [slug]);

  /* ================= CMS DOWNLOADS LOAD ================= */
  useEffect(() => {
    if (!slug) return;

    let category = null;
    if (isDownloadsPage) category = "forms";
    if (isLegislationPage) category = "legislation";
    if (!category) return;

    setLoadingDownloads(true);

    fetch(`/api/public/downloads?category=${category}`)
      .then((res) => res.json())
      .then((data) => setDownloads(data.downloads || []))
      .catch(console.error)
      .finally(() => setLoadingDownloads(false));
  }, [slug, isDownloadsPage, isLegislationPage]);

  if (loading) return null;
  if (notFound) return <Cms404Page />;

  return (
    <Layout breadcrumbTitle={page.page_title}>
      <section className="project-detail-section">
        <div className="pd_top_90" />

        <div className="container">
          <div className="row">

            {/* ================= LEFT CONTENT ================= */}
            <div className={isEstateAdmin ? "col-xl-9 col-lg-12" : "col-xl-12 col-lg-12"}>

              {/* PAGE HEADER */}
              <div className="title_all_box style_one dark_color">
                <div className="title_sections left">
                  {page.page_short_title && (
                    <div className="before_title">
                      {page.page_short_title}
                    </div>
                  )}
                </div>
              </div>

              <div className="pd_bottom_10" />

              {/* CMS SECTIONS */}
              {sections.map((section) => (
                <SectionRenderer
                  key={section.idsection}
                  section={section}
                />
              ))}

              {/* ================= DOWNLOADS GRID ================= */}
              {isDownloadsPage && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: 25,
                    marginTop: 30,
                  }}
                >
                  {downloads.map((item) => (
                    <div
                      key={item.iddownload}
                      style={{
                        background: "#fff",
                        borderRadius: 10,
                        padding: 25,
                        boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
                        borderLeft: "5px solid #007bff",
                      }}
                    >
                      <h4 style={{ color: "#007bff" }}>{item.title}</h4>

                      {item.short_description && (
                        <p style={{ color: "#555", marginTop: 10 }}>
                          {item.short_description}
                        </p>
                      )}

                      <Link href={item.file_path} target="_blank">
                        <span style={{ color: "#007bff", fontWeight: 600 }}>
                          📥 Download PDF
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              )}

              {/* ================= LEGISLATION LIST ================= */}
              {isLegislationPage && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: 25,
                    marginTop: 30,
                  }}
                >
                  {downloads.map((item) => (
                    <div
                      key={item.iddownload}
                      style={{
                        background: "#fff",
                        borderRadius: 10,
                        padding: 25,
                        boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
                        borderLeft: "5px solid #007bff",
                      }}
                    >
                      <h4 style={{ color: "#007bff" }}>{item.title}</h4>

                      {item.short_description && (
                        <p style={{ color: "#555", marginTop: 10 }}>
                          {item.short_description}
                        </p>
                      )}

                      <Link href={item.file_path} target="_blank">
                        <span style={{ color: "#007bff", fontWeight: 600 }}>
                          📥 Download PDF
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              )}

              <div className="pd_bottom_25" />
            </div>

            {/* ================= ESTATE ADMIN SIDEBAR ================= */}
            {isEstateAdmin && (
              <div className="col-xl-3 col-lg-12">
                <div className="project_information sticky-sidebar">
                  <h2
                    style={{
                      fontSize: 18,
                      borderBottom: "2px solid #007bff",
                      paddingBottom: 6,
                    }}
                  >
                    Estate Administration Topics
                  </h2>

                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {EstateAdminNav.map((item, index) => (
                      <li
                        key={index}
                        style={{
                          padding: "10px 0",
                          borderBottom: "1px dashed #ddd",
                        }}
                      >
                        <Link
                          href={`/estate-admin/${item.slug}`}
                          style={{ color: "#007bff", textDecoration: "none" }}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

          </div>
        </div>

        <div className="pd_bottom_70" />
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
    <>
      {section.section_title && (
        <div className="title_all_box style_one dark_color">
          <div className="title_sections left">
            <div className="before_title">{section.section_title}</div>
          </div>
        </div>
      )}

      <div className="description_box">
        <div dangerouslySetInnerHTML={{ __html: section.section_content }} />
      </div>
    </>
  );
}

function DefinitionSection({ section }) {
  return (
    <div style={{ padding: 20, background: "#e9f7ff", borderRadius: 8 }}>
      <strong style={{ color: "#007bff" }}>{section.section_title}</strong>
      <div dangerouslySetInnerHTML={{ __html: section.section_content }} />
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
        <strong style={{ color: "#0c0c0be5" }}>
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

/* ================= 404 ================= */
function Cms404Page() {
  const router = useRouter();

  return (
    <Layout breadcrumbTitle="Page Not Found">
      <div style={{ textAlign: "center", padding: 80 }}>
        <h1>404</h1>
        <button onClick={() => router.push("/")}>Go Home</button>
      </div>
    </Layout>
  );
}
