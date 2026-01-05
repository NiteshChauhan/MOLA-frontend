import { useEffect, useState } from "react";
import Link from "next/link";
import AdminLayout from "@/components/admin/AdminLayout";
import StatusBadge from "@/components/admin/ui/StatusBadge";
import withAdminAuth from "@/components/auth/withAdminAuth";

function CmsPages() {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    fetch("/api/cms/admin/pages")
      .then((res) => res.json())
      .then((data) => setPages(data.pages || []));
  }, []);

  return (
    <AdminLayout title="CMS Pages">
      {/* ===== PAGE HEADER ===== */}
      <div style={{ marginBottom: 40 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 20,
          }}
        >
          <div>
            <h1
              style={{
                fontSize: 40,
                fontWeight: 800,
                color: "#0f172a",
                marginBottom: 6,
              }}
            >
              CMS Pages
            </h1>
            <p style={{ fontSize: 16, color: "#64748b" }}>
              Create, edit, and manage your website pages.
            </p>
          </div>

          <Link
            href="/admin/cms/create"
            style={{
              background: "#2563eb",
              color: "#fff",
              padding: "10px 18px",
              borderRadius: 10,
              fontWeight: 600,
              fontSize: 14,
              textDecoration: "none",
              boxShadow: "0 6px 16px rgba(37,99,235,.25)",
            }}
          >
            + Add Page
          </Link>
        </div>
      </div>

      {/* ===== TABLE CARD ===== */}
      <div
        style={{
          background: "#fff",
          borderRadius: 14,
          border: "1px solid #e5e7eb",
          boxShadow: "0 10px 30px rgba(0,0,0,.06)",
          overflow: "hidden",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ background: "#f9fafb" }}>
            <tr>
              <th style={thStyle}>Title</th>
              <th style={thStyle}>Slug</th>
              <th style={thStyle}>Status</th>
              <th style={{ ...thStyle, textAlign: "right" }}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {pages.length === 0 && (
              <tr>
                <td
                  colSpan="4"
                  style={{
                    padding: 30,
                    textAlign: "center",
                    color: "#64748b",
                    fontSize: 14,
                  }}
                >
                  No CMS pages found.
                </td>
              </tr>
            )}

            {pages.map((page) => (
              <tr
                key={page.idpage}
                style={{
                  borderTop: "1px solid #e5e7eb",
                }}
              >
                <td style={tdStyle}>
                  <div style={{ fontWeight: 600, color: "#0f172a" }}>
                    {page.page_title}
                  </div>
                </td>

                <td style={{ ...tdStyle, color: "#64748b" }}>
                  /{page.page_slug}
                </td>

                <td style={tdStyle}>
                  <StatusBadge status={page.page_status} />
                </td>

                <td style={{ ...tdStyle, textAlign: "right" }}>
                  <div style={{ display: "inline-flex", gap: 8 }}>
                    <Link
                      href={`/admin/cms/edit/${page.page_uid}`}
                      style={actionBtn}
                    >
                      Edit
                    </Link>

                    <Link
                      href={`/admin/cms/sections/${page.page_uid}`}
                      style={{
                        ...actionBtn,
                        background: "#eff6ff",
                        color: "#2563eb",
                        borderColor: "#bfdbfe",
                      }}
                    >
                      Sections
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

export default withAdminAuth(CmsPages);
/* ===== INLINE STYLES ===== */

const thStyle = {
  padding: "14px 16px",
  fontSize: 12,
  fontWeight: 700,
  color: "#475569",
  textTransform: "uppercase",
  textAlign: "left",
};

const tdStyle = {
  padding: "16px",
  fontSize: 14,
};

const actionBtn = {
  padding: "6px 12px",
  borderRadius: 8,
  border: "1px solid #e5e7eb",
  fontSize: 13,
  fontWeight: 600,
  textDecoration: "none",
  color: "#334155",
  background: "#fff",
};
