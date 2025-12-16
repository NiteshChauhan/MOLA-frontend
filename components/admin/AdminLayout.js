import Sidebar from "../layout/Sidebar";
import Topbar from "../layout/Topbar";
import { useState } from "react";

export default function AdminLayout({ children, title }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-layout">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="dashboard-main">
        <Topbar
          title={title}
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        />

        <div className="dashboard-content">{children}</div>
      </div>
    </div>
  );
}
