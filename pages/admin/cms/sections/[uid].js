import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import withAdminAuth from "@/components/auth/withAdminAuth";
import AdminLayout from "@/components/admin/AdminLayout";
import CmsSectionForm from "@/components/cms/CmsSectionForm";
import CmsSectionList from "@/components/cms/CmsSectionList";
import EditSectionModal from "@/components/cms/EditSectionModal";
import DeletedSectionsModal from "@/components/cms/DeletedSectionsModal"; // ✅ NEW

function EditCmsSections() {
  const router = useRouter();
  const { uid } = router.query;

  const [page, setPage] = useState(null);
  const [sections, setSections] = useState([]);
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showTrash, setShowTrash] = useState(false); // ✅ NEW

  /* ---------- Load Page + Active Sections ---------- */
  const load = async () => {
    if (!uid) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/cms/admin/pages/${uid}`);
      const data = await res.json();

      setPage(data.page);
      setSections(data.page?.sections || []); // only ACTIVE sections
    } catch (err) {
      console.error("Failed to load sections", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, [uid]);

  /* ---------- Add Section ---------- */
  const addSection = async ({ title, content, section_key }) => {
    await fetch("/api/cms/admin/section", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        page_uid: page.page_uid,
        section_title: title,
        section_content: content,
        section_key,
        section_order: sections.length + 1,
      }),
    });

    load();
  };

  /* ---------- Save Order ---------- */
  const saveOrder = async (updated) => {
    setSections(updated);

    await fetch("/api/cms/admin/section-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sections: updated }),
    });
  };

  if (!page) return null;

  return (
    <AdminLayout title={`Manage Sections - ${page.page_title}`}>
      <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>

        {/* ADD SECTION */}
        <CmsSectionForm onSave={addSection} />

        {/* SECTION LIST */}
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <h3 style={{ fontSize: 22, fontWeight: 800 }}>
              Page Sections
            </h3>

            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  background: "#dbeafe",
                  color: "#1d4ed8",
                  padding: "6px 12px",
                  borderRadius: 999,
                }}
              >
                {sections.length} Sections
              </span>

              {/* 🗑 TRASH BUTTON */}
              <button
                onClick={() => setShowTrash(true)}
                style={{
                  background: "#fee2e2",
                  color: "#b91c1c",
                  border: "1px solid #fecaca",
                  padding: "8px 14px",
                  borderRadius: 8,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                🗑 View Trash
              </button>
            </div>
          </div>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: 16,
              padding: 16,
              border: "1px solid #e5e7eb",
            }}
          >
            {sections.length === 0 && !loading && (
              <div
                style={{
                  textAlign: "center",
                  padding: 40,
                  color: "#6b7280",
                  fontWeight: 600,
                }}
              >
                No sections added yet
              </div>
            )}

            <CmsSectionList
              sections={sections}
              onReorder={saveOrder}
              onEdit={setEditing}
            />
          </div>
        </div>
      </div>

      {/* EDIT MODAL */}
      {editing && (
        <EditSectionModal
          section={editing}
          onClose={() => setEditing(null)}
          onSaved={() => {
            setEditing(null);
            load();
          }}
        />
      )}

      {/* 🗑 TRASH MODAL */}
      {showTrash && (
        <DeletedSectionsModal
          pageUid={page.page_uid}
          onClose={() => setShowTrash(false)}
          onRestored={() => {
            setShowTrash(false);
            load(); // ✅ reload active sections after restore
          }}
        />
      )}
    </AdminLayout>
  );
}


export default withAdminAuth(EditCmsSections);