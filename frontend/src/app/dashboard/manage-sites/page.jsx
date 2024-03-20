import Main from "@/components/Main";
import ManageSites from "@/components/dashboard/manage-sites";
import DashboardLayout from "@/components/shared/DashboardLayout";

const ManageSitesPage = () => {
  return (
    <Main>
      <DashboardLayout>
        <ManageSites />
      </DashboardLayout>
    </Main>
  );
};

export default ManageSitesPage;
