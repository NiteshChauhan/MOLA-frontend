import { useEffect, useState } from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import withAuth from "../../../utils/withAuth";
import Link from "next/link";

function CmsList() {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    fetch("/api/cms/admin/pages")
      .then(res => res.json())
      .then(data => setPages(data.pages || []));
  }, []);

  return (
    <DashboardLayout>
      <div className="cms-header">
        <h2>CMS Pages</h2>
        <Link href="/dashboard/cms/add" className="btn-primary">
          + Add Page
        </Link>
      </div>

      <table className="cms-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Slug</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {pages.map(page => (
            <tr key={page.page_uid}>
              <td>{page.page_title}</td>
              <td>{page.page_slug}</td>
              <td>{page.page_status}</td>
              <td>
                <Link href={`/dashboard/cms/edit/${page.page_uid}`}>
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardLayout>
  );
}

export default withAuth(CmsList);
