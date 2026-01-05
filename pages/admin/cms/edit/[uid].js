import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import Toast from "@/components/admin/ui/Toast";
import withAdminAuth from "@/components/auth/withAdminAuth";


function EditPage() {
  const router = useRouter();
  const { uid } = router.query;

  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);

  useEffect(() => {
    if (!uid) return;
    fetch(`/api/cms/admin/pages/${uid}`)
      .then(res => res.json())
      .then(data => setForm(data.page));
  }, [uid]);

  const update = async () => {
    setLoading(true);

    await fetch(`/api/cms/admin/pages/${uid}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);
    setToast(true);

    setTimeout(() => {
      router.push("/admin/cms");
    }, 1500);
  };

  if (!form) return null;

  return (
    <AdminLayout title="Edit Page">
      <Toast
        show={toast}
        message="Page updated successfully"
        onClose={() => setToast(false)}
      />

      <div style={card}>
        <h1 style={title}>Edit Page</h1>

        <label style={label}>Page Title</label>
        <input
          value={form.page_title}
          onChange={(e) => setForm({ ...form, page_title: e.target.value })}
          style={input}
        />

        <label style={label}>Short Title (Optional)</label>
          <input
            value={form.page_short_title || ""}
            onChange={(e) =>
              setForm({ ...form, page_short_title: e.target.value })
            }
            style={input}
            placeholder="Example: Glossary"
          />


        <label style={label}>Page Slug</label>
        <input
          value={form.page_slug}
          onChange={(e) => setForm({ ...form, page_slug: e.target.value })}
          style={input}
        />

        <label style={label}>Status</label>
        <select
          value={form.page_status}
          onChange={(e) => setForm({ ...form, page_status: e.target.value })}
          style={input}
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>

        <div style={actions}>
          <button onClick={() => router.back()} style={ghostBtn}>
            Cancel
          </button>
          <button onClick={update} disabled={loading} style={primaryBtn}>
            {loading ? "Saving..." : "Update Page"}
          </button>
        </div>
      </div>
    </AdminLayout>
  );
}

export default withAdminAuth(EditPage);

/* ===== STYLES ===== */
const card = {
  background: "#fff",
  borderRadius: 16,
  padding: 32,
  maxWidth: 700,
  margin: "0 auto",
  boxShadow: "0 10px 30px rgba(0,0,0,.06)",
};

const title = { fontSize: 28, fontWeight: 800, marginBottom: 24 };

const label = {
  fontSize: 12,
  fontWeight: 700,
  color: "#64748b",
  marginBottom: 6,
  marginTop: 18,
  display: "block",
};

const input = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 10,
  border: "1px solid #e2e8f0",
};

const actions = {
  display: "flex",
  justifyContent: "flex-end",
  gap: 12,
  marginTop: 32,
};

const primaryBtn = {
  background: "#2563eb",
  color: "#fff",
  padding: "12px 22px",
  borderRadius: 10,
  border: "none",
  fontWeight: 700,
};

const ghostBtn = {
  background: "#f1f5f9",
  padding: "12px 22px",
  borderRadius: 10,
  border: "none",
  fontWeight: 600,
};
