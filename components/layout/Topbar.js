import { useRouter } from "next/router";

export default function Topbar({ onMenuClick }) {
  const router = useRouter();

  const logout = () => {
    localStorage.clear();
    router.push("/auth");
  };

  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="menu-btn d-mobile" onClick={onMenuClick}>
          ☰
        </button>
        <img
          src="/assets/images/logo-default.png"
          className="topbar-logo"
          alt="Logo"
        />
      </div>

      <div className="topbar-right">
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>
    </header>
  );
}
