"use client";
import Button from "@/components/ui/Button";
import Error from "@/components/ui/Error";
import Input from "@/components/ui/Input";
import { useRegisterMutation } from "@/features/auth/authApi";
import {
  useGetSubscriptionsQuery,
  useSubscribePackageMutation,
} from "@/features/subscription/subscriptionApi";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const stripePromise = loadStripe(
  "pk_test_51LRnDyH3L9RCLevZkESpMP0g8QpUthUItH3qH51rFNDUM5Gx8dBUHBOTsnlGbp5lP63sHsjWljJD4HiGQVWfroAC00Vjoh8CNG"
);

const Register = ({ setTab }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedPlan, setSelectedPlan] = useState({});
  const [errors, setErrors] = useState({});

  // subscribe package
  const [subscribePackage, { data }] = useSubscribePackageMutation();

  // get subscription plans
  const { data: subscriptions } = useGetSubscriptionsQuery();

  // create new user
  const [register, { data: newUser, isLoading, isError, error }] =
    useRegisterMutation();

  useEffect(() => {
    if (!isLoading && isError) {
      const { data } = error || {};
      setErrors(data.error);
    }

    if (!isLoading && !isError && newUser?.id) {
      if (!isError && !isLoading && newUser?.id) {
        subscribePackage({
          productId: selectedPlan?.productId,
          packageId: selectedPlan?.id,
          userId: newUser?.id,
        });
      }
    }
  }, [newUser, isLoading, isError, subscribePackage, error, selectedPlan]);

  // redirect to stripe payment page
  useEffect(() => {
    if (data?.sessionId) {
      (async () => {
        const stripe = await stripePromise;

        // Redirect the user to the Stripe Checkout page
        const result = await stripe.redirectToCheckout({
          sessionId: data?.sessionId,
        });

        if (result.error) {
          toast.error(result.error.message);
          console.error(result.error.message);
        }
      })();
    }
  }, [data]);

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    // validation
    const validationErrors = {};

    if (!name) {
      validationErrors.name = "Name is required!!";
    }

    if (!email) {
      validationErrors.email = "Email is required!!";
    }

    if (!password) {
      validationErrors.password = "Password is required!!";
    }

    if (!selectedPlan?.id) {
      validationErrors.plan = "Please Select a Plan!!";
    }

    if (Object.keys(validationErrors)?.length > 0) {
      return setErrors(validationErrors);
    }

    register({
      name,
      email,
      password,
    });
  };
  return (
    <div>
      <h2 className="text-2xl leading-[31px] mb-1">Create an account today</h2>
      <p className="text-base">
        Register an account to enjoy all the benefits of our platform.
      </p>
      <form onSubmit={submitHandler} className="mt-8 flex flex-col gap-6">
        <div>
          <Input
            placeholder="Your Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Error>{errors?.name}</Error>
        </div>
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
        <div className="flex items-center flex-wrap gap-5 justify-between">
          <h3 className="text-base font-semibold">Select a plan</h3>
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold">Monthly</span>
            <div class="toggle-switch">
              <input
                // onChange={(e) =>
                //   // setPricingType(e.target.checked ? "yearly" : "monthly")
                // }
                type="checkbox"
                id="switch"
                class="hidden"
              />
              <label for="switch" class="toggle-switch-label">
                <div class="toggle-switch-dot"></div>
              </label>
            </div>
            <span className="text-sm font-semibold">Yearly</span>
          </div>
        </div>
        <div className="flex items-center gap-3 justify-between flex-wrap">
          {subscriptions?.map((item) => (
            <Button
              key={item?.id}
              onClick={() => setSelectedPlan(item)}
              className={`px-7 ${
                selectedPlan?.id === item?.id && "bg-primary text-white"
              }`}
              type="secondary"
            >
              {item?.name} Pass
            </Button>
          ))}
          <Error>{errors?.plan}</Error>
        </div>
        <Button loading={isLoading} className="py-2" htmlType="submit">
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
