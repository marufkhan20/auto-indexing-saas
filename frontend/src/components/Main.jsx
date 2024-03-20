"use client";
import { useSelfQuery } from "@/features/auth/authApi";
import { userLoggedIn } from "@/features/auth/authSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Main = ({ children }) => {
  const { data: user, isLoading } = useSelfQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user?.id) {
      dispatch(
        userLoggedIn({
          accessToken: undefined,
          user,
        })
      );
    }
  }, [user, dispatch]);
  return isLoading ? (
    <div className="fixed inset-0 w-full h-full bg-white flex items-center justify-center animate-pulse duration-300 text-3xl font-semibold">
      Loading...
    </div>
  ) : (
    children
  );
};

export default Main;
