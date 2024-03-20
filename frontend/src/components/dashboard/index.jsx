"use client";
import { useUpdateUserMutation } from "@/features/auth/authApi";
import { parse } from "cookie";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { GoogleLogin } from "react-google-login";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import Loading from "../shared/Loading";
import Button from "../ui/Button";
import SiteItem from "./SiteItem";

const Dashboard = () => {
  // get user data
  const { user } = useSelector((state) => state?.auth || {});
  const [sites, setSites] = useState([]);
  const [siteLoading, setSiteLoading] = useState(false);

  // update user
  const [updateUser, { isLoading }] = useUpdateUserMutation();

  useEffect(() => {
    if (user?.googleAccessToken) {
      setSiteLoading(true);
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user?.googleAccessToken}`,
        },
      };

      fetch("https://www.googleapis.com/webmasters/v3/sites", options)
        .then((response) => response.json())
        .then((response) => {
          setSites(response?.siteEntry);
          setSiteLoading(false);
        })
        .catch((err) => {
          toast.error(err);
        });
    }
  }, [user]);

  const onSuccess = (res) => {
    console.log("token", res);
    updateUser({ googleAccessToken: res?.accessToken });
  };

  const onFailure = (res) => {
    toast.error("Login Failed, Please try again!!");
  };

  const userCookie = Cookies.get("auth");

  if (userCookie) {
    // Parse the JSON string to obtain the original object
    const userObject = JSON.parse(userCookie);

    console.log("User Object:", userObject);
  }

  return (
    <div className="container px-5 sm:px-0">
      <div className="bg-white rounded-2xl p-6 min-h-[75vh]">
        <div className="flex items-center gap-5 justify-between flex-wrap">
          <div>
            <h3 className="text-2xl">Your Site</h3>
            <span className="font-semibold text-[#9AA2B0] text-xs">
              View and manage your site
            </span>
          </div>
          <div className="flex items-center gap-6 flex-wrap">
            <Button
              type="secondary"
              className="flex items-center gap-[10px]"
              href="/dashboard/manage-sites"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10.0096 7.62891C9.42561 7.62891 8.87873 7.85547 8.46467 8.26953C8.05256 8.68359 7.82405 9.23047 7.82405 9.81445C7.82405 10.3984 8.05256 10.9453 8.46467 11.3594C8.87873 11.7715 9.42561 12 10.0096 12C10.5936 12 11.1405 11.7715 11.5545 11.3594C11.9666 10.9453 12.1951 10.3984 12.1951 9.81445C12.1951 9.23047 11.9666 8.68359 11.5545 8.26953C11.3523 8.06574 11.1116 7.90416 10.8463 7.79418C10.5811 7.68421 10.2967 7.62803 10.0096 7.62891ZM18.0623 12.2285L16.785 11.1367C16.8455 10.7656 16.8768 10.3867 16.8768 10.0098C16.8768 9.63281 16.8455 9.25195 16.785 8.88281L18.0623 7.79102C18.1588 7.70841 18.2279 7.59839 18.2603 7.47558C18.2928 7.35278 18.2871 7.223 18.244 7.10352L18.2264 7.05273C17.8749 6.06971 17.3481 5.15851 16.6717 4.36328L16.6365 4.32227C16.5544 4.22569 16.4449 4.15626 16.3226 4.12314C16.2002 4.09002 16.0706 4.09475 15.951 4.13672L14.3651 4.70117C13.7791 4.2207 13.1268 3.8418 12.4197 3.57812L12.1131 1.91992C12.09 1.795 12.0294 1.68008 11.9394 1.59043C11.8494 1.50077 11.7342 1.44062 11.6092 1.41797L11.5565 1.4082C10.5408 1.22461 9.47053 1.22461 8.4549 1.4082L8.40217 1.41797C8.27716 1.44062 8.16201 1.50077 8.072 1.59043C7.98199 1.68008 7.9214 1.795 7.89826 1.91992L7.58967 3.58594C6.88933 3.85171 6.23693 4.2297 5.65803 4.70508L4.06037 4.13672C3.94077 4.09442 3.81114 4.08951 3.68868 4.12266C3.56623 4.1558 3.45676 4.22542 3.37483 4.32227L3.33967 4.36328C2.66446 5.15936 2.13786 6.07033 1.78498 7.05273L1.7674 7.10352C1.67951 7.34766 1.75178 7.62109 1.94905 7.79102L3.24201 8.89453C3.18147 9.26172 3.15217 9.63672 3.15217 10.0078C3.15217 10.3828 3.18147 10.7578 3.24201 11.1211L1.95295 12.2246C1.85646 12.3072 1.7874 12.4172 1.75495 12.54C1.72251 12.6628 1.72821 12.7926 1.77131 12.9121L1.78889 12.9629C2.1424 13.9453 2.66389 14.8535 3.34358 15.6523L3.37873 15.6934C3.46087 15.7899 3.57034 15.8594 3.69272 15.8925C3.8151 15.9256 3.94464 15.9209 4.06428 15.8789L5.66194 15.3105C6.24397 15.7891 6.8924 16.168 7.59358 16.4297L7.90217 18.0957C7.92531 18.2206 7.9859 18.3355 8.07591 18.4252C8.16591 18.5149 8.28107 18.575 8.40608 18.5977L8.45881 18.6074C9.48443 18.792 10.5348 18.792 11.5604 18.6074L11.6131 18.5977C11.7381 18.575 11.8533 18.5149 11.9433 18.4252C12.0333 18.3355 12.0939 18.2206 12.117 18.0957L12.4237 16.4375C13.1307 16.1719 13.783 15.7949 14.369 15.3145L15.9549 15.8789C16.0745 15.9212 16.2041 15.9261 16.3266 15.893C16.449 15.8598 16.5585 15.7902 16.6405 15.6934L16.6756 15.6523C17.3553 14.8496 17.8768 13.9453 18.2303 12.9629L18.2479 12.9121C18.3319 12.6699 18.2596 12.3984 18.0623 12.2285ZM10.0096 13.248C8.11311 13.248 6.576 11.7109 6.576 9.81445C6.576 7.91797 8.11311 6.38086 10.0096 6.38086C11.9061 6.38086 13.4432 7.91797 13.4432 9.81445C13.4432 11.7109 11.9061 13.248 10.0096 13.248Z"
                  fill="#1DA664"
                />
              </svg>
              <span>Manage Sites</span>
            </Button>
            <Button>Add new site</Button>
          </div>
        </div>

        {user?.googleAccessToken && (
          <div className="mt-[30px] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {siteLoading && <Loading type="secondary" />}
            {sites?.map((site) => (
              <SiteItem key={site?.siteUrl} site={site} />
            ))}
          </div>
        )}

        {/* {!user?.googleAccessToken && ( */}
        <div className="mt-[30px] w-full min-h-[50vh] flex items-center justify-center">
          {!isLoading ? (
            <GoogleLogin
              clientId="807142679541-fp9sh1rbe514fiqlo932usqoj0lfif9n.apps.googleusercontent.com"
              buttonText="Connect to Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
              isSignedIn={false}
            />
          ) : (
            <Loading type="secondary" />
          )}
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  // Parse the cookies from the request headers
  console.log("context", context);
  const cookies = parse(context.req.headers.cookie || "");

  // Access the value of a specific cookie
  const userCookie = cookies.user || "";

  return {
    props: { userCookie: cookies },
  };
}

export default Dashboard;
