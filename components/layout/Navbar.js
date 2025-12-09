"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [currentPath, setCurrentPath] = useState("/");
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  useEffect(() => {
    const path = window.location.pathname || "/";
    setCurrentPath(path);
  }, []);

  const isActive = (path) =>
    currentPath === path || currentPath.startsWith(path + "/");

  const NavLinkItem = ({ href, children, isDropdownItem = false }) => {
    const active = isActive(href);
    return (
      <li
        className={`menu-item ${active ? "active" : ""}`}
        style={{
          listStyle: "none",
          position: "relative",
        }}
      >
        <Link
          href={href}
          className={`nav-link ${isDropdownItem ? "dropdown-item" : ""}`}
          style={{
            display: "inline-block",
            padding: isDropdownItem ? "6px 12px" : "12px 18px",
            whiteSpace: "nowrap",
            textDecoration: "none",
            fontWeight: active ? "600" : "500",
            color: active ? "#0d6efd" : "#333",
            backgroundColor: active ? "rgba(13, 110, 253, 0.1)" : "transparent",
            borderRadius: "6px",
            transition: "all 0.2s ease",
          }}
        >
          {children}
        </Link>
      </li>
    );
  };

  const column1Links = [
    { href: "/estate-admin/apply", label: "Who can apply?" },
    { href: "/estate-admin/terms", label: "Common Terms" },
    { href: "/estate-admin/intestate", label: "Intestate Estate" },
    { href: "/estate-admin/partial", label: "Partially Intestate" },
    { href: "/estate-admin/testate", label: "Testate Estates" },
    { href: "/estate-admin/know-the-law", label: "Know the Law" },
  ];

  const column2Links = [
    { href: "/estate-admin/minors-and-estates", label: "Minors and Estates" },
    { href: "/estate-admin/small-estates", label: "Small Estates" },
    { href: "/estate-admin/special-classes", label: "Special Classes Of Person" },
    { href: "/estate-admin/initiate-process", label: "Initiate Process" },
    { href: "/estate-admin/faq", label: "FAQ" },
  ];

  return (
    <nav
      style={{
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        position: "relative",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 20px",
        }}
      >
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            listStyle: "none",
            padding: 0,
            margin: 0,
            gap: "6px",
            flexWrap: "nowrap",
          }}
        >
          {/* Funeral Payment */}
          <NavLinkItem href="/funeral-payment">Funeral Payment</NavLinkItem>

          {/* Estate Administration (Mega Menu) */}
          <li
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
            className={`menu-item ${
              isActive("/estate-administration") ? "active" : ""
            }`}
            style={{ position: "relative" }}
          >
            <Link
              href="/estate-administration"
              className="nav-link"
              style={{
                display: "inline-block",
                padding: "12px 18px",
                whiteSpace: "nowrap",
                textDecoration: "none",
                fontWeight: isActive("/estate-administration") ? "600" : "500",
                color: isActive("/estate-administration") ? "#0d6efd" : "#333",
                backgroundColor: isActive("/estate-administration")
                  ? "rgba(13, 110, 253, 0.1)"
                  : "transparent",
                borderRadius: "6px",
                transition: "all 0.2s ease",
              }}
            >
              Estate Administration <span style={{ fontSize: "11px" }}>▼</span>
            </Link>

            {/* Mega Menu */}
            <div
              style={{
                display: isMegaMenuOpen ? "flex" : "none",
                position: "absolute",
                top: "100%",
                left: "0",
                background: "#fff",
                borderRadius: "10px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                minWidth: "550px",
                padding: "20px 30px",
                justifyContent: "space-between",
                animation: "fadeIn 0.3s ease forwards",
              }}
            >
              <div style={{ flex: 1, paddingRight: "25px" }}>
                <h5
                  style={{
                    fontSize: "15px",
                    fontWeight: "600",
                    marginBottom: "10px",
                    color: "#0d6efd",
                  }}
                >
                  Overview
                </h5>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {column1Links.map((link) => (
                    <NavLinkItem
                      key={link.href}
                      href={link.href}
                      isDropdownItem={true}
                    >
                      {link.label}
                    </NavLinkItem>
                  ))}
                </ul>
              </div>
              <div
                style={{
                  flex: 1,
                  paddingLeft: "25px",
                  borderLeft: "1px solid #eee",
                }}
              >
                <h5
                  style={{
                    fontSize: "15px",
                    fontWeight: "600",
                    marginBottom: "10px",
                    color: "#0d6efd",
                  }}
                >
                  Estate Process
                </h5>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {column2Links.map((link) => (
                    <NavLinkItem
                      key={link.href}
                      href={link.href}
                      isDropdownItem={true}
                    >
                      {link.label}
                    </NavLinkItem>
                  ))}
                </ul>
              </div>
            </div>
          </li>

          {/* Other Pages */}
          <NavLinkItem href="/legislation">Legislation</NavLinkItem>
          <NavLinkItem href="/media">Media</NavLinkItem>
          {/* <NavLinkItem href="/blog">Blog</NavLinkItem> */}
          <NavLinkItem href="/services">Services</NavLinkItem>
          <NavLinkItem href="/downloads">Downloads</NavLinkItem>
        </ul>
      </div>

      <style jsx>{`
        .menu-item .nav-link:hover {
          color: #0d6efd !important;
          background-color: rgba(13, 110, 253, 0.08);
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}
