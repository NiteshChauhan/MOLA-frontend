import { useState } from "react";
import withAdminAuth from "@/components/auth/withAdminAuth";
import AdminLayout from "@/components/admin/AdminLayout";
import DownloadForm from "@/components/cms/DownloadForm";
import DownloadList from "@/components/cms/DownloadList";
import TrashDownloadList from "@/components/cms/TrashDownloadList";

function DownloadsPage() {
  const [tab, setTab] = useState("active");
  const [refreshKey, setRefreshKey] = useState(0);
  return (
    <AdminLayout title="Downloads">
      <div className="admin-grid">
        {/* ===== LEFT: FORM ===== */}
        <div className="admin-grid-left">
          <DownloadForm onAdded={() => setRefreshKey((k) => k + 1)} />
        </div>

        {/* ===== RIGHT: LIST + TABS ===== */}
        <div className="admin-grid-right">
          {/* TABS */}
          <div style={tabsWrap}>
            <button
              onClick={() => setTab("active")}
              style={{
                ...tabBtn,
                ...(tab === "active" ? activeTab : {}),
              }}
            >
              Active Downloads
            </button>

            <button
              onClick={() => setTab("trash")}
              style={{
                ...tabBtn,
                ...(tab === "trash" ? activeTab : {}),
              }}
            >
              Trash
            </button>
          </div>

          {/* TAB CONTENT */}
          <div style={{ marginTop: 16 }}>
            {tab === "active" && <DownloadList refreshKey={refreshKey} />}
            {tab === "trash" && <TrashDownloadList />}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default withAdminAuth(DownloadsPage);

const tabsWrap = {
  display: "flex",
  gap: 8,
  borderBottom: "1px solid #e5e7eb",
  paddingBottom: 8,
};

const tabBtn = {
  background: "none",
  border: "none",
  padding: "8px 14px",
  cursor: "pointer",
  fontWeight: 600,
  color: "#6b7280",
};

const activeTab = {
  color: "#2563eb",
  borderBottom: "2px solid #2563eb",
};
