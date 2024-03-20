import Button from "@/components/ui/Button";

const PricingItem = ({ data, active, pricingType }) => {
  const { name, monthlyPrice, yearlyPrice, offers, description, popular } =
    data || {};
  return (
    <div
      className={`p-6 rounded-2xl bg-[#F7F7F9] pricing-item transition-all h-fit ${
        active && "active"
      }`}
    >
      <div className="bg-white p-4 rounded-2xl flex items-center justify-between gap-3 flex-col-reverse lg:flex-row">
        <div>
          <h3 className="text-xl leading-[30px] mb-2 text-body-secondary">
            {name} Pass
          </h3>
          <span className="font-semibold text-xs !text-[#707070]">
            Billed {pricingType === "monthly" ? "monthly" : "yearly"}
          </span>
        </div>
        {popular && (
          <div className="bg-[#0E4C2E] px-[14px] rounded-full !text-white">
            <span className="text-xs font-semibold py-[6px] block">
              Popular
            </span>
          </div>
        )}
      </div>
      <div className="my-6 flex items-end gap-1">
        <h2 className="text-[38px] text-body-secondary">
          ${pricingType === "monthly" ? monthlyPrice : yearlyPrice}
        </h2>
        <span className="text-xs leading-[18px] text-[#707070] mb-3">
          /month
        </span>
      </div>
      <Button className="w-full" type="border">
        Get Started
      </Button>
      <p className="mt-6 mb-4 text-sm">{description}</p>
      <ul className="flex flex-col gap-4">
        {offers?.offerIncludes?.map((offer, idx) => (
          <li key={idx} className="flex items-center gap-3">
            <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
              >
                <g clip-path="url(#clip0_35_2375)">
                  <path
                    d="M1.37504 5.5L9.39587 5.5"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.41667 8.70841L9.625 5.50008L6.41667 2.29175"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_35_2375">
                    <rect
                      width="11"
                      height="11"
                      fill="white"
                      transform="translate(11) rotate(90)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span className="text-[#707070] text-sm font-semibold">
              {offer}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingItem;
