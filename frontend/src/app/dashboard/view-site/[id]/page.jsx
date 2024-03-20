import Main from "@/components/Main";
import ViewSite from "@/components/dashboard/view-site";
import DashboardLayout from "@/components/shared/DashboardLayout";

const ViewSitePage = () => {
  return (
    <Main>
      <DashboardLayout>
        <ViewSite />
      </DashboardLayout>
    </Main>
  );
};

export default ViewSitePage;
