"use client";
import Main from "@/components/Main";
import Dashboard from "@/components/dashboard";
import DashboardLayout from "@/components/shared/DashboardLayout";
import { gapi } from "gapi-script";
import { useEffect } from "react";

const DashboardPage = () => {
  useEffect(() => {
    function start() {
      gapi?.client?.init({
        clientId:
          "807142679541-fp9sh1rbe514fiqlo932usqoj0lfif9n.apps.googleusercontent.com",
        access_type: "offline",
        // scope: [
        //   "https://www.googleapis.com/auth/webmasters.readonly",
        //   "https://www.googleapis.com/auth/webmasters",
        // ],
        scope: "https://www.googleapis.com/auth/indexing",
      });
    }

    gapi?.load("client:auth2", start);
  }, []);
  return (
    <Main>
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    </Main>
  );
};

export default DashboardPage;
