import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import CmsSectionForm from "@/components/cms/CmsSectionForm";
import CmsSectionList from "@/components/cms/CmsSectionList";
import withAuth from "@/utils/withAuth";

function EditCmsPage() {
  const router = useRouter();
  const { slug } = router.query;

  const [page, setPage] = useState(null);
  const [sections, setSections] = useState([]);

  /* 🔹 Load page + sections */
  useEffect(() => {
    if (!slug) return;

    fetch(`/api/cms/page/${slug}`)
      .then(res => res.json())
      .then(data => {
        setPage(data.page);
        setSections(data.sections || []);
      });
  }, [slug]);

  /* 🔹 Save new section */
  const addSection = async ({ title, content }) => {
    await fetch("/api/cms/admin/section", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        page_uid: page.page_uid,
        title,
        content,
        order: sections.length + 1
      })
    });

    location.reload();
  };

  /* 🔹 Save order */
  const saveOrder = async (updated) => {
    setSections(updated);

    await fetch("/api/cms/admin/section-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sections: updated })
    });
  };

  if (!page) return null;

  return (
    <DashboardLayout>
      <h2>Edit Page: {page.page_title}</h2>

      <h3>Add New Section</h3>
      <CmsSectionForm onSave={addSection} />

      <h3 style={{ marginTop: 40 }}>Reorder Sections</h3>
      <CmsSectionList
        sections={sections}
        onReorder={saveOrder}
      />
    </DashboardLayout>
  );
}

export default withAuth(EditCmsPage);
