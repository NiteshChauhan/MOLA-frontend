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
      <div style={{ marginBottom: 30 }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: 36,
                fontWeight: 800,
                color: "#0f172a",
                marginBottom: 6,
              }}
            >
              CMS Pages
            </h1>
            <p style={{ fontSize: 15, color: "#64748b" }}>
              Create, edit, and manage your website pages.
            </p>
          </div>

          <Link
            href="/admin/cms/create"
            style={{
              background: "#2563eb",
              color: "#fff",
              padding: "12px 20px",
              borderRadius: 10,
              fontWeight: 600,
              fontSize: 14,
              textDecoration: "none",
              boxShadow: "0 6px 16px rgba(37,99,235,.25)",
              whiteSpace: "nowrap",
            }}
          >
            + Add Page
          </Link>
        </div>
      </div>

      {/* ===== DESKTOP TABLE ===== */}
      <div
        style={{
          background: "#fff",
          borderRadius: 14,
          border: "1px solid #e5e7eb",
          boxShadow: "0 10px 30px rgba(0,0,0,.06)",
          overflowX: "auto",
          display: "none",
        }}
        className="cms-table"
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
            {pages.map((page) => (
              <tr key={page.idpage} style={{ borderTop: "1px solid #e5e7eb" }}>
                <td style={tdStyle}>
                  <strong>{page.page_title}</strong>
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

      {/* ===== MOBILE CARDS ===== */}
      <div
        style={{
          display: "grid",
          gap: 16,
        }}
        className="cms-cards"
      >
        {pages.length === 0 && (
          <div
            style={{
              padding: 20,
              textAlign: "center",
              color: "#64748b",
              fontSize: 14,
            }}
          >
            No CMS pages found.
          </div>
        )}

        {pages.map((page) => (
          <div
            key={page.idpage}
            style={{
              background: "#ffffff",
              borderRadius: 14,
              border: "1px solid #e5e7eb",
              padding: 16,
              boxShadow: "0 6px 14px rgba(0,0,0,0.06)",
            }}
          >
            <div style={{ fontWeight: 700, fontSize: 16 }}>
              {page.page_title}
            </div>

            <div style={{ color: "#64748b", fontSize: 13, marginTop: 4 }}>
              /{page.page_slug}
            </div>

            <div style={{ marginTop: 10 }}>
              <StatusBadge status={page.page_status} />
            </div>

            <div
              style={{
                display: "flex",
                gap: 10,
                marginTop: 14,
              }}
            >
              <Link
                href={`/admin/cms/edit/${page.page_uid}`}
                style={{ ...actionBtn, flex: 1, textAlign: "center" }}
              >
                Edit
              </Link>

              <Link
                href={`/admin/cms/sections/${page.page_uid}`}
                style={{
                  ...actionBtn,
                  flex: 1,
                  textAlign: "center",
                  background: "#eff6ff",
                  color: "#2563eb",
                  borderColor: "#bfdbfe",
                }}
              >
                Sections
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* ===== RESPONSIVE SWITCH ===== */}
      <style jsx>{`
        @media (min-width: 768px) {
          .cms-table {
            display: block;
          }
          .cms-cards {
            display: none;
          }
        }
      `}</style>
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
  padding: "8px 12px",
  borderRadius: 8,
  border: "1px solid #e5e7eb",
  fontSize: 13,
  fontWeight: 600,
  textDecoration: "none",
  color: "#334155",
  background: "#fff",
};
