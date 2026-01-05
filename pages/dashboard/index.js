import withAdminAuth from "@/components/auth/withAdminAuth";
import DashboardLayout from "@/components/layout/DashboardLayout";

function Dashboard() {
  return (
    <DashboardLayout>
      <h1>Dashboard</h1>
      <p>Welcome to admin panel</p>
    </DashboardLayout>
  );
}

export default withAdminAuth(Dashboard);