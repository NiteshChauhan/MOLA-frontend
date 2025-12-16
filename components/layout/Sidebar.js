import Link from "next/link";
import { useRouter } from "next/router";

export default function Sidebar({ open, onClose }) {
  const router = useRouter();

  const isActive = (path) =>
    router.pathname === path || router.pathname.startsWith(path);

  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      
      {/* ---------- HEADER ---------- */}
      <div className="sidebar-header">
        <Link href="/dashboard">
          <img
            src="/assets/images/logo-default.png"
            className="sidebar-logo"
            alt="Logo"
          />
        </Link>

        {/* Close icon → Mobile only */}
        <button
          className="close-btn d-mobile"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          ×
        </button>
      </div>

      {/* ---------- MENU ---------- */}
      <nav className="sidebar-menu">

        <Link
          href="/dashboard"
          className={isActive("/dashboard") ? "active" : ""}
          onClick={onClose}
        >
          Dashboard
        </Link>

        <Link
          href="/dashboard/profile"
          className={isActive("/dashboard/profile") ? "active" : ""}
          onClick={onClose}
        >
          Profile
        </Link>

        {/* CMS Section */}
        <div className="sidebar-section">
          <span className="sidebar-section-title">CMS</span>

          <Link
            href="/admin/cms"
            className={isActive("/admin/cms") ? "active" : ""}
            onClick={onClose}
          >
            Pages
          </Link>
        </div>

      </nav>
    </aside>
  );
}
