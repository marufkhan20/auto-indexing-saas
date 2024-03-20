import Main from "@/components/Main";
import Account from "@/components/dashboard/account";
import DashboardLayout from "@/components/shared/DashboardLayout";

const AccountPage = () => {
  return (
    <Main>
      <DashboardLayout>
        <Account />
      </DashboardLayout>
    </Main>
  );
};

export default AccountPage;
