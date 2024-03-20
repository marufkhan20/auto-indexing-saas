import PrivateRoute from "../PrivateRoute";
import Footer from "./Footer";
import Header from "./Header";

const DashboardLayout = ({ children }) => {
  return (
    <PrivateRoute>
      <main className="bg-[#f7f7f9]">
        <Header className="bg-[#F7F7F9]" dashboard />
        <div className="pt-[100px] min-h-[85.5vh] mb-[50px]">{children}</div>
        <Footer className="bg-transparent" />
      </main>
    </PrivateRoute>
  );
};

export default DashboardLayout;
