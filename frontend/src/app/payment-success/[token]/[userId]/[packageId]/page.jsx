"use client";
import Loading from "@/components/shared/Loading";
import { useUpdateSubscriptionPlanMutation } from "@/features/subscription/subscriptionApi";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

const Success = () => {
  const router = useRouter();

  const { packageId, userId } = useParams();

  // send request to api
  const [updateSubscriptionPlan, { data, isLoading }] =
    useUpdateSubscriptionPlanMutation();

  useEffect(() => {
    if (!isLoading && data?.id) {
      toast.success(
        "Account Create and Subscription Plan Successfully. Please Login your account."
      );
      router.push("/");
    }
  }, [data, isLoading, router]);

  useEffect(() => {
    if (userId && packageId) {
      updateSubscriptionPlan({
        userId,
        packageId,
      });
    }
  }, [userId, packageId, updateSubscriptionPlan]);
  return (
    <div className="min-h-[100vh] w-full flex justify-center items-center">
      <div>
        <Loading type="secondary" />
        <p className="text-center text-xl font-medium">Please wait</p>
      </div>
    </div>
  );
};

export default Success;
