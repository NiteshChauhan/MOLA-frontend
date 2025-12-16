import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DashboardLayout from "../../../../components/layout/DashboardLayout";
import withAuth from "../../../../utils/withAuth";
import CmsPageForm from "../../../../components/cms/CmsPageForm";
import CmsSectionList from "../../../../components/cms/CmsSectionList";

function EditCmsPage() {
  const router = useRouter();
  const { id } = router.query;

  const [page, setPage] = useState(null);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    if (!id) return;

    fetch(`/api/cms/admin/page/${id}`)
      .then(res => res.json())
      .then(data => {
        setPage(data.page);
        setSections(data.sections);
      });
  }, [id]);

  if (!page) return null;

  return (
    <DashboardLayout>
      <h2>Edit Page</h2>

      <CmsPageForm
        initialData={page}
        onSubmit={(formData) => {
          fetch(`/api/cms/admin/page/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
          });
        }}
      />

      <hr />

      <CmsSectionList
        sections={sections}
        pageUid={page.page_uid}
        onRefresh={() => router.replace(router.asPath)}
      />
    </DashboardLayout>
  );
}

export default withAuth(EditCmsPage);
