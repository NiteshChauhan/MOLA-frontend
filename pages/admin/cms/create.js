import { useState } from "react";
import { useRouter } from "next/router";
import withAuth from "@/utils/withAuth";
import AdminLayout from "@/components/admin/AdminLayout";

export default function CreatePage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const token = localStorage.getItem("auth_token");

    const res = await fetch("/api/cms/admin/pages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, slug }),
    });

    const data = await res.json();

    if (data.success) {
      router.push("/admin/cms");
    } else {
      alert("Failed to create page");
    }

    setLoading(false);
  };

  return (
    <AdminLayout title="Create Page">
      <h1>Create CMS Page</h1>

      <form onSubmit={handleSubmit} className="form">
        <label>Page Title</label>
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setSlug(
              e.target.value
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
            );
          }}
          required
        />

        <label>Slug</label>
        <input value={slug} onChange={(e) => setSlug(e.target.value)} required />

        <button disabled={loading}>
          {loading ? "Saving..." : "Create Page"}
        </button>
      </form>
    </AdminLayout>
  );
}

export const getServerSideProps = withAuth();
