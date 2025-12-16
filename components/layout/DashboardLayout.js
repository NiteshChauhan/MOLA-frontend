import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { getAuthUser, logout } from "@/utils/authClient";

export default function DashboardLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const user = getAuthUser();
    if (!user) {
      window.location.href = "/auth";
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) return null;

  return (
    <div className="dashboard-layout">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="dashboard-main">
        <header className="topbar">
          <button className="menu-btn" onClick={() => setSidebarOpen(true)}>
            ☰
          </button>

          <div className="topbar-right">
            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          </div>
        </header>

        <main className="dashboard-content">{children}</main>
      </div>
    </div>
  );
}
