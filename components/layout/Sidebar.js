import Link from "next/link";
import { useRouter } from "next/router";

export default function Sidebar({ open, onClose }) {
  const router = useRouter();
  const currentPath = router.asPath;

  // Exact match only
  const isExactActive = (path) => currentPath === path;

  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>

      {/* ===== HEADER ===== */}
      <div className="sidebar-header">
        <Link href="/dashboard" onClick={onClose}>
          <img
            src="/assets/images/logo-default.png"
            className="sidebar-logo"
            alt="Logo"
          />
        </Link>

        {/* Mobile close button */}
        <button
          className="close-btn d-mobile"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          ×
        </button>
      </div>

      {/* ===== MENU ===== */}
      <nav className="sidebar-menu">

        {/* Dashboard */}
        <Link
          href="/dashboard"
          className={isExactActive("/dashboard") ? "active" : ""}
          onClick={onClose}
        >
          Dashboard
        </Link>

        {/* Profile */}
        <Link
          href="/dashboard/profile"
          className={isExactActive("/dashboard/profile") ? "active" : ""}
          onClick={onClose}
        >
          Profile
        </Link>

        {/* CMS Pages */}
        <Link
          href="/admin/cms"
          className={isExactActive("/admin/cms") ? "active" : ""}
          onClick={onClose}
        >
          Pages
        </Link>

        {/* CMS Downloads */}
        <Link
          href="/admin/cms/downloads"
          className={isExactActive("/admin/cms/downloads") ? "active" : ""}
          onClick={onClose}
        >
          Downloads
        </Link>

      </nav>
    </aside>
  );
}
