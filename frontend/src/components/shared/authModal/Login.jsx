"use client";
import Button from "@/components/ui/Button";
import Error from "@/components/ui/Error";
import Input from "@/components/ui/Input";
import { useLoginMutation } from "@/features/auth/authApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const router = useRouter();

  // login user
  const [login, { data, isLoading, isError, error }] = useLoginMutation();

  useEffect(() => {
    if (!isLoading && isError) {
      const { data } = error || {};
      setErrors(data.error);
    }

    if (!isLoading && !isError && data?.user?.id) {
      toast.success("User Login Successfully.");
      router.push("/dashboard");
    }
  }, [data, isLoading, isError, error, router]);

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    // validation
    const validationErrors = {};

    if (!email) {
      validationErrors.email = "Email is required!!";
    }

    if (!password) {
      validationErrors.password = "Password is required!!";
    }

    if (Object.keys(validationErrors)?.length > 0) {
      return setErrors(validationErrors);
    }

    login({
      email,
      password,
    });
  };
  return (
    <div>
      <h2 className="text-2xl leading-[31px] mb-1">Welcome back!</h2>
      <p className="text-base">Sign in to your account to continue.</p>
      <form onSubmit={submitHandler} className="mt-8 flex flex-col gap-6">
        <div>
          <Input
            placeholder="Email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Error>{errors?.email}</Error>
        </div>
        <div>
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Error>{errors?.password}</Error>
        </div>
        <Button htmlType="submit" loading={isLoading} className="py-2">
          Login
        </Button>
        <Link
          href="#"
          className="text-base font-semibold text-center transition-all hover:text-primary"
        >
          Forgot Password
        </Link>
      </form>
    </div>
  );
};

export default Login;
