import { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";

export default function CmsPages() {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    try {
      const token = localStorage.getItem("auth_token");

      const res = await fetch("/api/cms/admin/pages", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      // ✅ Always guard against bad API response
      setPages(Array.isArray(data.pages) ? data.pages : []);
    } catch (err) {
      console.error("Failed to fetch pages:", err);
      setPages([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout title="CMS Pages">
      <div className="page-header">
        <h1>CMS Pages</h1>

        <a href="/admin/cms/create" className="btn-primary">
          + Add Page
        </a>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Slug</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {pages.length === 0 ? (
              <tr>
                <td colSpan="3">No pages found</td>
              </tr>
            ) : (
              pages.map((p) => (
                <tr key={p.page_uid}>
                  <td>{p.page_title}</td>
                  <td>{p.page_slug}</td>
                  <td>{p.page_status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </AdminLayout>
  );
}
