import { useState } from "react";
import { useRouter } from "next/router";
import AdminLayout from "@/components/admin/AdminLayout";
import withAdminAuth from "@/components/auth/withAdminAuth";

/* ===== Inline Styles (Professional + Compact) ===== */
const card = {
  background: "#fff",
  borderRadius: 16,
  padding: 32,
  maxWidth: 700,
  margin: "0 auto",
  boxShadow: "0 10px 30px rgba(0,0,0,.06)",
};

const labelStyle = {
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: 1,
  textTransform: "uppercase",
  color: "#64748b",
  marginBottom: 8,
  display: "block",
};

const input = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: 10,
  border: "1px solid #e2e8f0",
  fontSize: 15,
  fontWeight: 500,
  outline: "none",
};

const actions = {
  display: "flex",
  justifyContent: "flex-end",
  gap: 12,
  marginTop: 32,
};

const btnPrimary = {
  background: "#2563eb",
  color: "#fff",
  padding: "12px 22px",
  borderRadius: 10,
  border: "none",
  fontWeight: 700,
  cursor: "pointer",
};

const btnGhost = {
  background: "#f1f5f9",
  color: "#334155",
  padding: "12px 22px",
  borderRadius: 10,
  border: "none",
  fontWeight: 600,
  cursor: "pointer",
};

/* ===== Component ===== */
function CreatePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    page_title: "",
    page_slug: "",
    page_status: "draft",
    page_short_title: "",
  });

  /* Auto-slug from title */
  const updateField = (key, value) => {
    if (key === "page_title") {
      const slug = value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

      setForm({
        ...form,
        page_title: value,
        page_slug: slug,
        page_short_title: value,
      });
    } else {
      setForm({ ...form, [key]: value });
    }
  };

  const submit = async () => {
    if (!form.page_title || !form.page_slug) return;

    setLoading(true);

    await fetch("/api/cms/admin/pages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    router.push("/admin/cms"); // ✅ NO reload
  };

  return (
    <AdminLayout title="Create Page">
      <div style={card}>
        <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 24 }}>
          Create New Page
        </h1>

        {/* TITLE */}
        <div style={{ marginBottom: 28 }}>
          <label style={labelStyle}>Page Title</label>
          <input
            value={form.page_title}
            onChange={(e) => updateField("page_title", e.target.value)}
            placeholder="e.g. About Us"
            style={input}
          />
        </div>

        {/* SHORT TITLE */}
        <div style={{ marginBottom: 28 }}>
          <label style={labelStyle}>Page Short Title</label>
          <input
            value={form.page_short_title}
            onChange={(e) => updateField("page_short_title", e.target.value)}
            placeholder="e.g. Glossary"
            style={input}
          />
        </div>

        {/* SLUG */}
        <div style={{ marginBottom: 28 }}>
          <label style={labelStyle}>Page Slug</label>
          <input
            value={form.page_slug}
            onChange={(e) => updateField("page_slug", e.target.value)}
            placeholder="about-us"
            style={input}
          />
        </div>

        {/* STATUS */}
        <div style={{ marginBottom: 28 }}>
          <label style={labelStyle}>Status</label>
          <select
            value={form.page_status}
            onChange={(e) => updateField("page_status", e.target.value)}
            style={input}
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>

        {/* ACTIONS */}
        <div style={actions}>
          <button style={btnGhost} onClick={() => router.push("/admin/cms")}>
            Cancel
          </button>

          <button
            style={btnPrimary}
            disabled={loading}
            onClick={submit}
          >
            {loading ? "Saving..." : "Save Page"}
          </button>
        </div>
      </div>
    </AdminLayout>
  );
}

export default withAdminAuth(CreatePage);