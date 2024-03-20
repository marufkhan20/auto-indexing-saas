"use client";
import { useGetSubscriptionsQuery } from "@/features/subscription/subscriptionApi";
import { useState } from "react";
import Heading from "../../shared/Heading";
import PricingItem from "./PricingItem";

const Pricing = () => {
  const [pricingType, setPricingType] = useState("monthly");

  // get subscriptions plan
  const { data: subscriptions } = useGetSubscriptionsQuery();
  return (
    <section id="pricing" className="py-[100px] bg-white px-5 sm:px-0">
      <div className="container-custom">
        <Heading title="Simple and Blunt Pricing." center />

        <div className="mt-6">
          <div className="flex items-center justify-center gap-[18px]">
            <span
              className={`text-sm font-semibold  ${
                pricingType === "monthly" ? "text-[#0E4C2E]" : "text-[#707070]"
              }`}
            >
              Monthly
            </span>
            <div class="toggle-switch">
              <input
                onChange={(e) =>
                  setPricingType(e.target.checked ? "yearly" : "monthly")
                }
                type="checkbox"
                id="switch"
                class="hidden"
              />
              <label for="switch" class="toggle-switch-label">
                <div class="toggle-switch-dot"></div>
              </label>
            </div>
            <span
              className={`text-sm font-semibold  ${
                pricingType === "yearly" ? "text-[#0E4C2E]" : "text-[#707070]"
              }`}
            >
              Yearly
            </span>
          </div>

          <div className="mt-[50px] grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {subscriptions?.map((item, idx) => (
              <PricingItem
                key={item?.id}
                data={item}
                active={idx === 1}
                pricingType={pricingType}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
