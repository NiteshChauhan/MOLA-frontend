import { useState } from "react";

export default function CmsPageForm({ initialData = {}, onSubmit }) {
  const [title, setTitle] = useState(initialData.page_title || "");
  const [slug, setSlug] = useState(initialData.page_slug || "");
  const [status, setStatus] = useState(initialData.page_status || "active");

  return (
    <div className="space-y-16">
      <form onSubmit={e => {
        e.preventDefault();
        onSubmit({ title, slug, status });
      }}>
        <label>Page Title</label>
        <input value={title} onChange={e => setTitle(e.target.value)} required />

        <label>Page Slug</label>
        <input value={slug} onChange={e => setSlug(e.target.value)} required />

        <label>Status</label>
        <select value={status} onChange={e => setStatus(e.target.value)}>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>

        <button className="btn-primary">Save Page</button>
      </form>
    </div>
  );
}
