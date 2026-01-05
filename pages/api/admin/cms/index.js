import { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import Link from "next/link"

export default function CmsPages() {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    fetch("/api/cms/admin/pages")
      .then(res => res.json())
      .then(data => setPages(data.pages || []));
  }, []);

  return (
    <AdminLayout title="CMS Pages">
      <Link href="/admin/cms/create" className="btn-primary">+ Add Page</Link>

      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Slug</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {pages.map(p => (
            <tr key={p.page_uid}>
              <td>{p.page_title}</td>
              <td>{p.page_slug}</td>
              <td>{p.page_status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}
