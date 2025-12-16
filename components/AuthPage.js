import React, { useState, useCallback, memo } from "react";
import { useRouter } from "next/router";

/* ---------- Icons ---------- */

const LogInIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
    <polyline points="10 17 15 12 10 7" />
    <line x1="15" y1="12" x2="3" y2="12" />
  </svg>
);

const UserPlusIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <line x1="19" y1="8" x2="19" y2="14" />
    <line x1="16" y1="11" x2="22" y2="11" />
  </svg>
);

const LoaderIcon = () => (
  <svg className="spinner" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

/* ---------- Forms ---------- */

const LoginForm = memo(({ data, onChange, onSubmit, loading }) => (
  <form onSubmit={onSubmit} className="auth-form">
    <input
      type="email"
      name="loginEmail"
      value={data.loginEmail}
      onChange={onChange}
      placeholder="Email"
      required
    />
    <input
      type="password"
      name="loginPassword"
      value={data.loginPassword}
      onChange={onChange}
      placeholder="Password"
      required
    />
    <button disabled={loading}>
      {loading ? <LoaderIcon /> : <LogInIcon />}
      Login
    </button>
  </form>
));

const RegisterForm = memo(({ data, onChange, onSubmit, loading }) => (
  <form onSubmit={onSubmit} className="auth-form">
    <input
      type="text"
      name="registerName"
      value={data.registerName}
      onChange={onChange}
      placeholder="Full Name"
      required
    />
    <input
      type="email"
      name="registerEmail"
      value={data.registerEmail}
      onChange={onChange}
      placeholder="Email"
      required
    />
    <input
      type="password"
      name="registerPassword"
      value={data.registerPassword}
      onChange={onChange}
      placeholder="Password (min 8 chars)"
      minLength={8}
      required
    />
    <button disabled={loading}>
      {loading ? <LoaderIcon /> : <UserPlusIcon />}
      Register
    </button>
  </form>
));

/* ---------- Main Page ---------- */

export default function AuthPage() {
  const router = useRouter();
  const [tab, setTab] = useState("login");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const [formData, setFormData] = useState({
    loginEmail: "",
    loginPassword: "",
    registerName: "",
    registerEmail: "",
    registerPassword: "",
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  /* ---------- LOGIN ---------- */

  const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);
  setMessage(null);

  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_email: formData.loginEmail,
        password: formData.loginPassword,
      }),
    });

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.message || "Login failed");
    }

    /* ✅ SAVE USER DATA CORRECTLY */
    localStorage.setItem("auth_user", JSON.stringify(result.data));

    /* (TEMP) FAKE TOKEN – until JWT added */
    localStorage.setItem("auth_token", result.token);

    router.push("/dashboard");

  } catch (err) {
    setMessage({ type: "error", text: err.message });
  } finally {
    setLoading(false);
  }
};


  /* ---------- REGISTER ---------- */

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch("/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_name: formData.registerName,
          user_email: formData.registerEmail,
          password: formData.registerPassword,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Registration failed");
      }

      setMessage({
        type: "success",
        text: "Registration successful. Please login.",
      });
      setTab("login");
    } catch (err) {
      setMessage({ type: "error", text: err.message });
    } finally {
      setLoading(false);
    }
  };

  /* ---------- UI ---------- */

  return (
    <div className="auth-page">
      <div className="auth-wrapper">
        <div className="auth-card">
          <img
            src="/assets/images/logo-default.png"
            alt="Logo"
            className="auth-logo"
          />

          <div className="auth-tabs">
            <button
              className={tab === "login" ? "active" : ""}
              onClick={() => setTab("login")}
            >
              Login
            </button>
            <button
              className={tab === "register" ? "active" : ""}
              onClick={() => setTab("register")}
            >
              Register
            </button>
          </div>

          {message && (
            <div className={`auth-alert ${message.type}`}>
              {message.text}
            </div>
          )}

          {tab === "login" ? (
            <LoginForm
              data={formData}
              onChange={handleChange}
              onSubmit={handleLogin}
              loading={loading}
            />
          ) : (
            <RegisterForm
              data={formData}
              onChange={handleChange}
              onSubmit={handleRegister}
              loading={loading}
            />
          )}
        </div>
      </div>
    </div>
  );
}
