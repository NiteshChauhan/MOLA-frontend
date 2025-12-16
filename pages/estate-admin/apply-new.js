import Layout from "@/components/layout/Layout";
import { useEffect, useState } from "react";

export default function ApplyPage() {
  const [page, setPage] = useState(null);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetch("/api/cms/page/apply")
      .then(res => res.json())
      .then(data => {
        setPage(data.page);
        setSections(data.sections);
      });
  }, []);

  if (!page) return null;

  return (
    <Layout breadcrumbTitle={page.page_title}>
      <section className="project-detail-section">
        <div className="container">
          {sections.map(s => (
            <div key={s.section_uid} className="cms-section">
              {s.section_title && <h3>{s.section_title}</h3>}
              <div
                dangerouslySetInnerHTML={{
                  __html: s.section_content
                }}
              />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
