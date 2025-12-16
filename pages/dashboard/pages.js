import DashboardLayout from "@/components/layout/DashboardLayout";

export default function Pages() {
  const user =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("auth_user") || "{}")
      : {};

  return (
    <DashboardLayout>
      <h2>My Profile</h2>
      <p><b>Name:</b> {user.user_name}</p>
      <p><b>Email:</b> {user.user_email}</p>
    </DashboardLayout>
  );
}
