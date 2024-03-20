"use client";
import { userLoggedOut } from "@/features/auth/authSlice";
import { cn } from "@/lib/utills";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Button from "../ui/Button";
import AuthModal from "./authModal";

const Header = ({ className, dashboard }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openProfileMenu, setOpenProfileMenu] = useState(false);

  const { user } = useSelector((state) => state.auth || {});

  // logout handler
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(userLoggedOut());
    toast.success("Logged out successfully");
  };
  return (
    <>
      <header
        className={cn(
          `py-[15px] transition-all bg-light-primary/80 border-b border-[#CCE5E0] fixed top-0 left-0 right-0 z-50 px-5 sm:px-0 overflow-hidden w-screen`,
          className
        )}
      >
        <div className="container flex items-center justify-between gap-5">
          <Link href="/" className="flex items-center gap-4">
            <Image src="/images/logo.png" alt="Logo" width={34} height={40} />
            <h2 className="text-2xl text-body-secondary">GetIndexedFast</h2>
          </Link>
          {dashboard ? (
            <div
              onClick={() => setOpenProfileMenu(!openProfileMenu)}
              className="flex items-center gap-4 cursor-pointer"
            >
              <img
                src="/images/blog/author-1.svg"
                alt="avatar"
                className="w-[35px] h-[35px] rounded-full"
              />
              <span className="hidden sm:block text-[#9AA2B0] text-sm font-semibold">
                {user?.name}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                className="cursor-pointer hidden sm:block"
              >
                <path
                  d="M2.91875 5.76523C2.84317 5.69381 2.75426 5.63797 2.6571 5.60091C2.55994 5.56385 2.45643 5.54628 2.35248 5.54923C2.24853 5.55217 2.14618 5.57555 2.05127 5.61805C1.95636 5.66054 1.87075 5.72132 1.79933 5.7969C1.72791 5.87248 1.67207 5.96139 1.63501 6.05855C1.59795 6.15571 1.58038 6.25922 1.58332 6.36316C1.58626 6.46711 1.60965 6.56946 1.65215 6.66437C1.69464 6.75928 1.75542 6.84489 1.831 6.91631L8.956 13.6455C9.10298 13.7844 9.29759 13.8619 9.49987 13.8619C9.70215 13.8619 9.89676 13.7844 10.0437 13.6455L17.1695 6.91631C17.2468 6.84536 17.3091 6.75977 17.353 6.66451C17.3969 6.56925 17.4214 6.46623 17.4251 6.36141C17.4289 6.2566 17.4117 6.15209 17.3747 6.05396C17.3377 5.95583 17.2816 5.86603 17.2096 5.78977C17.1376 5.71352 17.0511 5.65233 16.9553 5.60977C16.8594 5.5672 16.7561 5.54411 16.6512 5.54183C16.5464 5.53954 16.4421 5.55812 16.3445 5.59647C16.2469 5.63482 16.1578 5.69218 16.0826 5.76523L9.49987 11.9814L2.91875 5.76523Z"
                  fill="#0E4C2E"
                />
              </svg>

              <div
                className={`fixed transition-all duration-300 top-[80px] ${
                  openProfileMenu
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                } left-0 right-0 z-50 container px-5 sm:px-0 w-full flex justify-end`}
              >
                <div className="bg-white p-5 rounded-xl w-[200px] shadow-md">
                  <ul className="flex flex-col gap-5">
                    <li className="text-sm font-semibold text-body-secondary transition-all hover:text-primary">
                      <Link href="/dashboard">Dashboard</Link>
                    </li>
                    <li className="text-sm font-semibold text-body-secondary transition-all hover:text-primary">
                      <Link href="/dashboard/manage-sites">Manage Sites</Link>
                    </li>
                    <li className="text-sm font-semibold text-body-secondary transition-all hover:text-primary">
                      <Link href="/dashboard/account">Account</Link>
                    </li>
                    <li
                      className="text-sm font-semibold text-body-secondary transition-all hover:text-primary cursor-pointer"
                      onClick={logoutHandler}
                    >
                      <span>Logout</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <>
              <>
                <nav className="hidden lg:block">
                  <ul className="flex items-center gap-10">
                    <li className="text-base font-semibold text-body-secondary transition-all hover:text-primary">
                      <a href="#features">Features</a>
                    </li>
                    <li className="text-base font-semibold text-body-secondary transition-all hover:text-primary">
                      <a href="#work">How it works</a>
                    </li>
                    <li className="text-base font-semibold text-body-secondary transition-all hover:text-primary">
                      <a href="#pricing">Pricing</a>
                    </li>
                    <li className="text-base font-semibold text-body-secondary transition-all hover:text-primary">
                      <a href="#faq">FAQ</a>
                    </li>
                  </ul>
                </nav>
                {user?.id ? (
                  <div
                    onClick={() => setOpenProfileMenu(!openProfileMenu)}
                    className="hidden lg:flex items-center gap-4 cursor-pointer"
                  >
                    <img
                      src="/images/blog/author-1.svg"
                      alt="avatar"
                      className="w-[35px] h-[35px] rounded-full"
                    />
                    <span className="hidden sm:block text-[#9AA2B0] text-sm font-semibold">
                      {user?.name}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      className="cursor-pointer hidden sm:block"
                    >
                      <path
                        d="M2.91875 5.76523C2.84317 5.69381 2.75426 5.63797 2.6571 5.60091C2.55994 5.56385 2.45643 5.54628 2.35248 5.54923C2.24853 5.55217 2.14618 5.57555 2.05127 5.61805C1.95636 5.66054 1.87075 5.72132 1.79933 5.7969C1.72791 5.87248 1.67207 5.96139 1.63501 6.05855C1.59795 6.15571 1.58038 6.25922 1.58332 6.36316C1.58626 6.46711 1.60965 6.56946 1.65215 6.66437C1.69464 6.75928 1.75542 6.84489 1.831 6.91631L8.956 13.6455C9.10298 13.7844 9.29759 13.8619 9.49987 13.8619C9.70215 13.8619 9.89676 13.7844 10.0437 13.6455L17.1695 6.91631C17.2468 6.84536 17.3091 6.75977 17.353 6.66451C17.3969 6.56925 17.4214 6.46623 17.4251 6.36141C17.4289 6.2566 17.4117 6.15209 17.3747 6.05396C17.3377 5.95583 17.2816 5.86603 17.2096 5.78977C17.1376 5.71352 17.0511 5.65233 16.9553 5.60977C16.8594 5.5672 16.7561 5.54411 16.6512 5.54183C16.5464 5.53954 16.4421 5.55812 16.3445 5.59647C16.2469 5.63482 16.1578 5.69218 16.0826 5.76523L9.49987 11.9814L2.91875 5.76523Z"
                        fill="#0E4C2E"
                      />
                    </svg>

                    <div
                      className={`fixed transition-all duration-300 top-[80px] ${
                        openProfileMenu
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      } left-0 right-0 z-50 px-5 sm:px-0 container w-full flex justify-end`}
                    >
                      <div className="bg-white p-5 rounded-xl w-[200px] shadow-md">
                        <ul className="flex flex-col gap-5">
                          <li className="text-sm font-semibold text-body-secondary transition-all hover:text-primary">
                            <Link href="/dashboard">Dashboard</Link>
                          </li>
                          <li className="text-sm font-semibold text-body-secondary transition-all hover:text-primary">
                            <Link href="/dashboard/manage-sites">
                              Manage Sites
                            </Link>
                          </li>
                          <li className="text-sm font-semibold text-body-secondary transition-all hover:text-primary">
                            <Link href="/dashboard/account">Account</Link>
                          </li>
                          <li
                            className="text-sm font-semibold text-body-secondary transition-all hover:text-primary cursor-pointer"
                            onClick={logoutHandler}
                          >
                            <span>Logout</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  <nav className="hidden lg:block">
                    <ul className="flex items-center gap-10">
                      <li
                        className="text-base font-semibold text-body-secondary transition-all hover:text-primary cursor-pointer"
                        onClick={() => setOpenModal(true)}
                      >
                        <span>Signup</span>
                      </li>
                      <Button
                        className="py-[10px] text-sm font-semibold"
                        onClick={() => setOpenModal(true)}
                      >
                        Login
                      </Button>
                    </ul>
                  </nav>
                )}
              </>

              {!openMenu ? (
                <img
                  src="/images/icons/menu.png"
                  alt="menu"
                  className="cursor-pointer block lg:hidden w-6"
                  onClick={() => setOpenMenu(true)}
                />
              ) : (
                <img
                  src="/images/icons/close.png"
                  alt="close"
                  className="cursor-pointer block lg:hidden w-5"
                  onClick={() => setOpenMenu(false)}
                />
              )}

              {/* mobile menu */}
              <div
                className={`block lg:hidden fixed h-full py-10 transition-all duration-500 ${
                  openMenu ? "top-[70px]" : "-top-[200%]"
                } left-0 right-0 w-screen bg-white overflow-auto`}
              >
                <ul className="flex px-10 flex-col gap-10">
                  <li
                    className="text-base font-semibold text-body-secondary transition-all hover:text-primary border-b pb-2"
                    onClick={() => setOpenMenu(false)}
                  >
                    <a className="block" href="#features">
                      Features
                    </a>
                  </li>
                  <li
                    className="text-base font-semibold text-body-secondary transition-all hover:text-primary border-b pb-2"
                    onClick={() => setOpenMenu(false)}
                  >
                    <a className="block" href="#works">
                      How it works
                    </a>
                  </li>
                  <li
                    className="text-base font-semibold text-body-secondary transition-all hover:text-primary border-b pb-2"
                    onClick={() => setOpenMenu(false)}
                  >
                    <a className="block" href="#pricing">
                      Pricing
                    </a>
                  </li>
                  <li
                    className="text-base font-semibold text-body-secondary transition-all hover:text-primary border-b pb-2"
                    onClick={() => setOpenMenu(false)}
                  >
                    <a className="block" href="#faq">
                      FAQ
                    </a>
                  </li>
                  {user?.id ? (
                    <>
                      <li
                        className="text-base font-semibold text-body-secondary transition-all hover:text-primary border-b pb-2 cursor-pointer"
                        onClick={() => {
                          logoutHandler();
                          setOpenMenu(false);
                        }}
                      >
                        <span className="block">Logout</span>
                      </li>
                      <Link
                        href="/dashboard"
                        className="flex items-center gap-4"
                      >
                        <img
                          src="/images/blog/author-1.svg"
                          alt="avatar"
                          className="w-[35px] h-[35px] rounded-full"
                        />
                        <span className="text-sm font-semibold">
                          {user?.name}
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="19"
                          viewBox="0 0 19 19"
                          fill="none"
                          className="cursor-pointer hidden sm:block"
                        >
                          <path
                            d="M2.91875 5.76523C2.84317 5.69381 2.75426 5.63797 2.6571 5.60091C2.55994 5.56385 2.45643 5.54628 2.35248 5.54923C2.24853 5.55217 2.14618 5.57555 2.05127 5.61805C1.95636 5.66054 1.87075 5.72132 1.79933 5.7969C1.72791 5.87248 1.67207 5.96139 1.63501 6.05855C1.59795 6.15571 1.58038 6.25922 1.58332 6.36316C1.58626 6.46711 1.60965 6.56946 1.65215 6.66437C1.69464 6.75928 1.75542 6.84489 1.831 6.91631L8.956 13.6455C9.10298 13.7844 9.29759 13.8619 9.49987 13.8619C9.70215 13.8619 9.89676 13.7844 10.0437 13.6455L17.1695 6.91631C17.2468 6.84536 17.3091 6.75977 17.353 6.66451C17.3969 6.56925 17.4214 6.46623 17.4251 6.36141C17.4289 6.2566 17.4117 6.15209 17.3747 6.05396C17.3377 5.95583 17.2816 5.86603 17.2096 5.78977C17.1376 5.71352 17.0511 5.65233 16.9553 5.60977C16.8594 5.5672 16.7561 5.54411 16.6512 5.54183C16.5464 5.53954 16.4421 5.55812 16.3445 5.59647C16.2469 5.63482 16.1578 5.69218 16.0826 5.76523L9.49987 11.9814L2.91875 5.76523Z"
                            fill="#0E4C2E"
                          />
                        </svg>
                      </Link>
                    </>
                  ) : (
                    <>
                      <li
                        className="text-base font-semibold text-body-secondary transition-all hover:text-primary border-b pb-2 cursor-pointer"
                        onClick={() => {
                          setOpenMenu(false);
                          setOpenModal(true);
                        }}
                      >
                        <span className="block">Signup</span>
                      </li>
                      <li className="">
                        <Button
                          className="py-[10px] text-sm font-semibold"
                          onClick={() => {
                            setOpenMenu(false);
                            setOpenModal(true);
                          }}
                        >
                          Login
                        </Button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </>
          )}
        </div>
      </header>

      <AuthModal open={openModal} setOpen={setOpenModal} />
    </>
  );
};

export default Header;
