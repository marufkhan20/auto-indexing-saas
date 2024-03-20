"use client";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const tabs = {
  1: Login,
  2: Register,
};

const AuthModal = ({ open, setOpen }) => {
  const [tab, setTab] = useState(1);

  const Tab = tabs[tab];
  return (
    <div
      className={`transition-all duration-300 ${
        open ? "opacity-100 visible" : "opacity-0 invisible"
      } fixed top-0 left-0 right-0 bottom-0 w-full h-full z-50 auth-modal flex items-center justify-center px-5`}
      onClick={() => setOpen(false)}
    >
      <div
        className="w-[1140px] bg-white h-fit rounded-2xl grid md:grid-cols-2 gap-12 p-[30px]"
        onClick={(event) => event.stopPropagation()}
      >
        <div>
          {/* tabs */}
          <div className="w-full sm:w-[60%] mx-auto bg-light-primary p-2 rounded-full flex items-center">
            <button
              className={`text-sm font-semibold py-[10px] w-full rounded-full ${
                tab === 1
                  ? "bg-primary text-white"
                  : "bg-transparent text-[#0E4C2E]"
              }`}
              onClick={() => setTab(1)}
            >
              Login
            </button>
            <button
              className={`text-sm font-semibold py-[10px] w-full rounded-full ${
                tab === 2
                  ? "bg-primary text-white"
                  : "bg-transparent text-[#0E4C2E]"
              }`}
              onClick={() => setTab(2)}
            >
              Register
            </button>
          </div>

          <div className="mt-8">
            <Tab setTab={setTab} />
          </div>
        </div>

        <div className="hidden bg-light-primary rounded-2xl md:flex items-center justify-center py-[90px]">
          <div className="flex gap-6 flex-col w-[75%]">
            <h2 className="text-2xl text-center">What our customers say</h2>
            <div className="flex flex-col gap-5 bg-white p-5 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="24"
                viewBox="0 0 33 24"
                fill="none"
              >
                <path
                  d="M28.0133 11.7608C26.9247 13.1837 25.2017 13.818 23.2302 13.818C19.5871 13.818 16.9555 11.3579 16.9555 7.20901C16.9555 3.30875 19.4156 -5.07174e-05 24.5845 -5.02655e-05C29.3334 -4.98504e-05 32.2993 3.39447 32.2993 8.90627C32.2993 16.2782 27.8676 22.0643 19.8528 23.9759C19.3813 24.0873 18.8584 23.7959 18.6956 23.333L18.5327 22.8701C18.3698 22.4072 18.6184 21.9529 19.0899 21.8157C24.3788 20.3328 27.5847 17.1097 28.3819 11.8893C28.4505 11.4093 28.3134 11.3664 28.0133 11.7608ZM11.0579 11.7607C9.96926 13.1837 8.24629 13.818 6.27472 13.818C2.63162 13.818 1.25493e-05 11.3579 1.2912e-05 7.20901C1.32529e-05 3.30875 2.46018 -5.21997e-05 7.6291 -5.17478e-05C12.378 -5.13326e-05 15.3439 3.39447 15.3439 8.90627C15.3439 16.2782 10.9122 22.0643 2.88878 23.9759C2.41732 24.0873 1.89443 23.7958 1.73156 23.333L1.56869 22.8701C1.40582 22.4072 1.65441 21.9529 2.12587 21.8157C7.4148 20.3328 10.6207 17.1097 11.4179 11.8893C11.4951 11.4093 11.3494 11.3664 11.0579 11.7607Z"
                  fill="#1DA664"
                />
              </svg>
              <p className="text-sm font-medium leading-[21px]">
                At first I {`didn't`} realize just how many of my blog pages
                were languishing unindexed. GetIndexedFast opened my eyes by
                automatically submitting over 1,800 urls still unseen by Google.
                The speed was mind-blowing - barely a day passed before all
                those forgotten pages finally reached indexed status!{` We've`}{" "}
                expanded from 285 thousand visits per month to over a half a
                million in just 12 weeks after optimizing indexing speed.
              </p>
              <div className="flex items-center gap-2">
                <img
                  className="w-10 h-10 rounded-full"
                  src="/images/blog/author-1.svg"
                  alt="avatar"
                />
                <div>
                  <h3 className="text-sm font-semibold">Jacob M.</h3>
                  <span className="text-[#707070] text-[13px] font-semibold">
                    WordPress Site Owner
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
