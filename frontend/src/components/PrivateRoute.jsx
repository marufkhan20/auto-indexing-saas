"use client";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const { accessToken, user } = useSelector((state) => state.auth || {});

  const router = useRouter();

  return user?.id ? children : router.push("/");
};

export default PrivateRoute;
